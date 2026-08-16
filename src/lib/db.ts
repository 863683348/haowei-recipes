/**
 * 数据访问层（v2.1）
 * - DATABASE_URL 存在 → Neon Postgres 实现（@neondatabase/serverless，动态导入）
 * - DATABASE_URL 缺失 → 内存实现（dev/mock，进程内有效；Serverless 下为实例级临时存储）
 * 环境解锁后执行 `npm i @neondatabase/serverless` 并在 .env 配置 DATABASE_URL 即切换。
 */
import { randomUUID } from "node:crypto";
import type { Entitlements } from "./membership";

export interface DbUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  createdAt: string;
}

export type OrderStatus = "pending" | "paid" | "failed";

export interface DbOrder {
  id: string;
  userId: string;
  planCode: string;
  volumeId: string | null;
  provider: string; // "pending" | "mock" | "waffo"
  providerOrderId: string;
  amountCny: number;
  status: OrderStatus;
  createdAt: string;
}

export interface DataStore {
  findUserByEmail(email: string): Promise<DbUser | null>;
  findUserById(id: string): Promise<DbUser | null>;
  createUser(input: {
    email: string;
    name: string;
    passwordHash?: string;
  }): Promise<DbUser>;
  getEntitlements(userId: string): Promise<Entitlements>;
  saveEntitlements(userId: string, e: Entitlements): Promise<void>;
  createOrder(input: {
    userId: string;
    planCode: string;
    volumeId?: string | null;
    amountCny: number;
  }): Promise<DbOrder>;
  /** 幂等更新：仅当订单处于 pending 时标记支付成功 */
  markOrderPaid(
    id: string,
    provider: string,
    providerOrderId: string
  ): Promise<boolean>;
  getOrderById(id: string): Promise<DbOrder | null>;
  findOrderByProvider(
    provider: string,
    providerOrderId: string
  ): Promise<DbOrder | null>;
  listOrders(userId: string): Promise<DbOrder[]>;
  addDownload(userId: string, volumeId: string): Promise<void>;
  hasDownload(userId: string, volumeId: string): Promise<boolean>;
  addLead(email: string, volumeId: string): Promise<void>;
  addDownloadEvent(actor: string, volumeId: string, ip: string): Promise<void>;
}

/* ================= 内存实现（dev/mock） ================= */

class MemoryStore implements DataStore {
  private users = new Map<string, DbUser>();
  private usersByEmail = new Map<string, DbUser>();
  private entitlements = new Map<string, Entitlements>();
  private orders = new Map<string, DbOrder>();
  private downloads = new Map<string, Set<string>>();
  private leads = new Set<string>();
  private events: Array<{ actor: string; volumeId: string; ip: string; at: string }> = [];

  async findUserByEmail(email: string): Promise<DbUser | null> {
    return this.usersByEmail.get(email.toLowerCase()) ?? null;
  }
  async findUserById(id: string): Promise<DbUser | null> {
    return this.users.get(id) ?? null;
  }
  async createUser(input: {
    email: string;
    name: string;
    passwordHash: string;
  }): Promise<DbUser> {
    const user: DbUser = {
      id: randomUUID(),
      email: input.email.toLowerCase(),
      name: input.name,
      passwordHash: input.passwordHash ?? "",
      createdAt: new Date().toISOString(),
    };
    this.users.set(user.id, user);
    this.usersByEmail.set(user.email, user);
    return user;
  }
  async getEntitlements(userId: string): Promise<Entitlements> {
    return this.entitlements.get(userId) ?? { recipePassUntil: null, pdfPassUntil: null, volumes: [] };
  }
  async saveEntitlements(userId: string, e: Entitlements): Promise<void> {
    this.entitlements.set(userId, { ...e, volumes: [...e.volumes] });
  }
  async createOrder(input: {
    userId: string;
    planCode: string;
    volumeId?: string | null;
    amountCny: number;
  }): Promise<DbOrder> {
    const order: DbOrder = {
      id: randomUUID(),
      userId: input.userId,
      planCode: input.planCode,
      volumeId: input.volumeId ?? null,
      provider: "pending",
      providerOrderId: "",
      amountCny: input.amountCny,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    this.orders.set(order.id, order);
    return order;
  }
  async markOrderPaid(
    id: string,
    provider: string,
    providerOrderId: string
  ): Promise<boolean> {
    const order = this.orders.get(id);
    if (!order || order.status !== "pending") return false;
    order.status = "paid";
    order.provider = provider;
    order.providerOrderId = providerOrderId;
    return true;
  }
  async getOrderById(id: string): Promise<DbOrder | null> {
    return this.orders.get(id) ?? null;
  }
  async findOrderByProvider(
    provider: string,
    providerOrderId: string
  ): Promise<DbOrder | null> {
    for (const o of this.orders.values()) {
      if (o.provider === provider && o.providerOrderId === providerOrderId)
        return o;
    }
    return null;
  }
  async listOrders(userId: string): Promise<DbOrder[]> {
    return [...this.orders.values()]
      .filter((o) => o.userId === userId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }
  async addDownload(userId: string, volumeId: string): Promise<void> {
    const set = this.downloads.get(userId) ?? new Set<string>();
    set.add(volumeId);
    this.downloads.set(userId, set);
  }
  async hasDownload(userId: string, volumeId: string): Promise<boolean> {
    return this.downloads.get(userId)?.has(volumeId) ?? false;
  }
  async addLead(email: string, volumeId: string): Promise<void> {
    this.leads.add(`${email.toLowerCase()}:${volumeId}`);
  }
  async addDownloadEvent(actor: string, volumeId: string, ip: string): Promise<void> {
    this.events.push({ actor, volumeId, ip, at: new Date().toISOString() });
  }
}

/* ================= Neon Postgres 实现 ================= */

class NeonStore implements DataStore {
  private async sql() {
    // 动态导入：未安装 @neondatabase/serverless 或未配置 DATABASE_URL 时不会执行。
    // 用非字面量 specifier，使 TS 在编译期不解析该模块（避免与已安装包的声明冲突，
    // 也无需本地类型桩），运行时由真实包解析。
    const specifier = "@neondatabase/serverless";
    const mod = await import(specifier);
    return mod.neon(process.env.DATABASE_URL as string);
  }

  async findUserByEmail(email: string) {
    const q = await this.sql();
    const rows = (await q(
      `SELECT id, email, name, password_hash AS "passwordHash", created_at AS "createdAt"
       FROM users WHERE email = $1 LIMIT 1`,
      [email.toLowerCase()]
    )) as Array<Record<string, unknown>>;
    if (rows.length === 0) return null;
    return rows[0] as unknown as DbUser;
  }

  async findUserById(id: string) {
    const q = await this.sql();
    const rows = (await q(
      `SELECT id, email, name, password_hash AS "passwordHash", created_at AS "createdAt"
       FROM users WHERE id = $1 LIMIT 1`,
      [id]
    )) as Array<Record<string, unknown>>;
    if (rows.length === 0) return null;
    return rows[0] as unknown as DbUser;
  }

  async createUser(input: { email: string; name: string; passwordHash: string }) {
    const q = await this.sql();
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const rows = (await q(
      `INSERT INTO users (id, email, name, password_hash, created_at)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (email) DO NOTHING
       RETURNING id, email, name, password_hash AS "passwordHash", created_at AS "createdAt"`,
      [id, input.email.toLowerCase(), input.name, input.passwordHash ?? "", createdAt]
    )) as Array<Record<string, unknown>>;
    if (rows.length === 0) {
      // 邮箱已存在 → 返回既有用户
      const existing = await this.findUserByEmail(input.email);
      if (existing) return existing;
      throw new Error("user-create-failed");
    }
    return rows[0] as unknown as DbUser;
  }

  async getEntitlements(userId: string): Promise<Entitlements> {
    const q = await this.sql();
    const rows = (await q(
      `SELECT recipe_pass_until AS "recipePassUntil", pdf_pass_until AS "pdfPassUntil"
       FROM entitlements WHERE user_id = $1 LIMIT 1`,
      [userId]
    )) as Array<{ recipePassUntil: string | null; pdfPassUntil: string | null }>;
    if (rows.length === 0)
      return { recipePassUntil: null, pdfPassUntil: null, volumes: [] };
    const dl = (await q(
      `SELECT volume_id AS "volumeId" FROM downloads WHERE user_id = $1`,
      [userId]
    )) as Array<{ volumeId: string }>;
    return {
      recipePassUntil: rows[0].recipePassUntil,
      pdfPassUntil: rows[0].pdfPassUntil,
      volumes: dl.map((d) => d.volumeId),
    };
  }

  async saveEntitlements(userId: string, e: Entitlements): Promise<void> {
    const q = await this.sql();
    await q(
      `INSERT INTO entitlements (user_id, recipe_pass_until, pdf_pass_until, updated_at)
       VALUES ($1, $2, $3, now())
       ON CONFLICT (user_id)
       DO UPDATE SET recipe_pass_until = EXCLUDED.recipe_pass_until,
                     pdf_pass_until = EXCLUDED.pdf_pass_until,
                     updated_at = now()`,
      [userId, e.recipePassUntil, e.pdfPassUntil]
    );
  }

  async createOrder(input: {
    userId: string;
    planCode: string;
    volumeId?: string | null;
    amountCny: number;
  }) {
    const q = await this.sql();
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const rows = (await q(
      `INSERT INTO orders (id, user_id, plan_code, volume_id, provider, provider_order_id, amount_cny, status, created_at)
       VALUES ($1, $2, $3, $4, 'pending', '', $5, 'pending', $6)
       RETURNING id, user_id AS "userId", plan_code AS "planCode", volume_id AS "volumeId",
                 provider, provider_order_id AS "providerOrderId", amount_cny AS "amountCny",
                 status, created_at AS "createdAt"`,
      [id, input.userId, input.planCode, input.volumeId ?? null, input.amountCny, createdAt]
    )) as Array<Record<string, unknown>>;
    return rows[0] as unknown as DbOrder;
  }

  async markOrderPaid(
    id: string,
    provider: string,
    providerOrderId: string
  ): Promise<boolean> {
    const q = await this.sql();
    const rows = (await q(
      `UPDATE orders SET status = 'paid', provider = $2, provider_order_id = $3
       WHERE id = $1 AND status = 'pending'
       RETURNING id`,
      [id, provider, providerOrderId]
    )) as Array<Record<string, unknown>>;
    return rows.length > 0;
  }

  async getOrderById(id: string) {
    const q = await this.sql();
    const rows = (await q(
      `SELECT id, user_id AS "userId", plan_code AS "planCode", volume_id AS "volumeId",
              provider, provider_order_id AS "providerOrderId", amount_cny AS "amountCny",
              status, created_at AS "createdAt"
       FROM orders WHERE id = $1 LIMIT 1`,
      [id]
    )) as Array<Record<string, unknown>>;
    if (rows.length === 0) return null;
    return rows[0] as unknown as DbOrder;
  }

  async findOrderByProvider(provider: string, providerOrderId: string) {
    const q = await this.sql();
    const rows = (await q(
      `SELECT id, user_id AS "userId", plan_code AS "planCode", volume_id AS "volumeId",
              provider, provider_order_id AS "providerOrderId", amount_cny AS "amountCny",
              status, created_at AS "createdAt"
       FROM orders WHERE provider = $1 AND provider_order_id = $2 LIMIT 1`,
      [provider, providerOrderId]
    )) as Array<Record<string, unknown>>;
    if (rows.length === 0) return null;
    return rows[0] as unknown as DbOrder;
  }

  async listOrders(userId: string): Promise<DbOrder[]> {
    const q = await this.sql();
    const rows = (await q(
      `SELECT id, user_id AS "userId", plan_code AS "planCode", volume_id AS "volumeId",
              provider, provider_order_id AS "providerOrderId", amount_cny AS "amountCny",
              status, created_at AS "createdAt"
       FROM orders WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    )) as Array<Record<string, unknown>>;
    return rows as unknown as DbOrder[];
  }

  async addDownload(userId: string, volumeId: string): Promise<void> {
    const q = await this.sql();
    await q(
      `INSERT INTO downloads (user_id, volume_id, purchased_at)
       VALUES ($1, $2, now())
       ON CONFLICT (user_id, volume_id) DO NOTHING`,
      [userId, volumeId]
    );
  }

  async hasDownload(userId: string, volumeId: string): Promise<boolean> {
    const q = await this.sql();
    const rows = (await q(
      `SELECT 1 FROM downloads WHERE user_id = $1 AND volume_id = $2 LIMIT 1`,
      [userId, volumeId]
    )) as unknown[];
    return rows.length > 0;
  }

  async addLead(email: string, volumeId: string): Promise<void> {
    const q = await this.sql();
    await q(
      `INSERT INTO leads (email, volume_id, downloaded_at)
       VALUES ($1, $2, now())
       ON CONFLICT (email, volume_id) DO NOTHING`,
      [email.toLowerCase(), volumeId]
    );
  }

  async addDownloadEvent(actor: string, volumeId: string, ip: string): Promise<void> {
    const q = await this.sql();
    await q(
      `INSERT INTO download_events (actor, volume_id, ip, downloaded_at)
       VALUES ($1, $2, $3, now())`,
      [actor, volumeId, ip]
    );
  }
}

/* ================= 选择实现 ================= */

export const store: DataStore = process.env.DATABASE_URL
  ? new NeonStore()
  : new MemoryStore();

/** 数据层当前模式（用于 UI/日志标注 dev/mock） */
export const dbMode: "neon" | "memory" = process.env.DATABASE_URL
  ? "neon"
  : "memory";
