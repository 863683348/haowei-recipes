import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { store, dbMode } from "@/lib/db";

/** 权益查询：返回当前登录态、双维度权益、订单（客户端组件/门禁用） */
export async function GET() {
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json({ user: null, entitlements: null, orders: [], dbMode });
  }
  const user = await store.findUserById(userId);
  const entitlements = await store.getEntitlements(userId);
  const orders = await store.listOrders(userId);
  return NextResponse.json({
    user: user ? { id: user.id, email: user.email, name: user.name } : null,
    entitlements,
    orders,
    dbMode,
  });
}
