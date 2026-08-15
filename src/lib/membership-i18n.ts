/**
 * 会员体系 UI 文案（v2.1）
 * 说明：既有 i18n 字典（en.ts/zh.ts）在沙箱中被锁，本模块先以独立双语文案承载
 * 新页面文案；环境解锁后应合并进 dict 的 membership 命名空间（结构与 Dict 对齐）。
 */
import type { Locale } from "@/i18n/config";

export function membershipText(locale: Locale) {
  const zh = locale === "zh";
  return {
    // ---------- 通用 ----------
    free: zh ? "免费" : "Free",
    member: zh ? "会员" : "Member",
    perYear: zh ? "/年" : "/year",
    perVolume: zh ? "/册" : "/volume",
    upgrade: zh ? "立即开通" : "Get started",
    learnMore: zh ? "查看详情" : "Learn more",
    signIn: zh ? "登录" : "Sign in",
    signOut: zh ? "退出登录" : "Sign out",
    required: zh ? "请填写必填项" : "Please fill in the required fields",
    invalidEmail: zh ? "邮箱格式不正确" : "Please enter a valid email",
    genericError: zh ? "操作失败，请重试" : "Something went wrong, please try again",
    locked: zh ? "会员专属" : "Members only",
    comingSoon: zh ? "敬请期待" : "Coming soon",

    // ---------- 定价页 ----------
    pricingTitle: zh ? "会员与合集" : "Membership & PDF volumes",
    pricingDesc: zh
      ? "菜谱会员与 PDF 合集独立购买、互不影响——选你需要的，随时升级。"
      : "Recipe access and PDF volumes are sold separately — pick what you need, upgrade anytime.",
    recipePassName: zh ? "菜谱会员 Recipe Pass" : "Recipe Pass",
    recipePassTagline: zh
      ? "解锁网站全部菜谱与新菜即时更新，外加所有高级功能"
      : "Unlock the full recipe library, instant new recipes, and every pro feature",
    pdfVolumeName: zh ? "PDF 合集 · 单册" : "PDF Volume · Single",
    pdfVolumeTagline: zh
      ? "一本 10 道菜的合集 PDF，买断永久拥有（含买家水印）"
      : "A 10-recipe collection PDF — one-time purchase, owned forever (buyer watermarked)",
    pdfPassName: zh ? "PDF 会员 PDF Pass" : "PDF Pass",
    pdfPassTagline: zh
      ? "已出版全部合集 + 当年新增合集自动到手"
      : "All published volumes plus every new volume this year",
    allAccessName: zh ? "All-Access 全会员" : "All-Access",
    allAccessTagline: zh
      ? "菜谱会员 + PDF 会员，全部权益一次拿下"
      : "Recipe Pass + PDF Pass — everything in one plan",
    featuresTitle: zh ? "包含权益" : "What's included",
    choosePlan: zh ? "选择方案" : "Choose plan",
    needAccount: zh ? "购买前需要登录（未登录会先引导登录）" : "You'll need an account to purchase",
    freePlanTitle: zh ? "免费用户" : "Free",
    freePlanDesc: zh
      ? "V1 合集 PDF 免费下载（填邮箱）+ 全部现有菜谱 + 基础工具"
      : "Free V1 PDF download (email required) + all current recipes + basic tools",

    // ---------- 会员中心 ----------
    accountTitle: zh ? "我的会员" : "My Account",
    accountDesc: zh ? "登录后管理你的会员权益与下载" : "Sign in to manage your membership and downloads",
    signInTitle: zh ? "登录 / 注册" : "Sign in / Register",
    email: zh ? "邮箱" : "Email",
    password: zh ? "密码" : "Password",
    name: zh ? "昵称（可选）" : "Name (optional)",
    signInSubmit: zh ? "登录" : "Sign in",
    registerSubmit: zh ? "注册并登录" : "Register & sign in",
    switchToRegister: zh ? "没有账号？注册" : "No account? Register",
    switchToSignIn: zh ? "已有账号？登录" : "Have an account? Sign in",
    continueWithGoogle: zh ? "使用 Google 账号继续" : "Continue with Google",
    orWithEmail: zh ? "或用邮箱" : "or with email",
    errInvalidCredentials: zh ? "邮箱或密码错误" : "Invalid email or password",
    errEmailExists: zh ? "该邮箱已注册，请直接登录" : "This email is already registered — please sign in",
    errWeakPassword: zh ? "密码至少 8 位" : "Password must be at least 8 characters",
    errEmailMissing: zh ? "请输入邮箱" : "Please enter your email",
    entitlementsTitle: zh ? "我的权益" : "My entitlements",
    recipeAccessLabel: zh ? "菜谱会员" : "Recipe Pass",
    pdfAccessLabel: zh ? "PDF 会员" : "PDF Pass",
    activeUntil: zh ? "有效期至" : "Valid until",
    notActive: zh ? "未开通" : "Not active",
    volumesOwned: zh ? "已购 PDF 合集" : "Owned PDF volumes",
    noVolumes: zh ? "暂未购买任何合集" : "No PDF volumes purchased yet",
    ordersTitle: zh ? "订单记录" : "Order history",
    noOrders: zh ? "暂无订单" : "No orders yet",
    orderDate: zh ? "日期" : "Date",
    orderPlan: zh ? "方案" : "Plan",
    orderStatus: zh ? "状态" : "Status",
    statusPaid: zh ? "已支付" : "Paid",
    statusPending: zh ? "待支付" : "Pending",
    statusFailed: zh ? "失败" : "Failed",
    paidBanner: zh ? "🎉 支付成功，权益已到账" : "🎉 Payment successful — your benefits are live",
    welcomeBack: zh ? "欢迎回来" : "Welcome back",
    goPricing: zh ? "去开通会员" : "Browse plans",

    // ---------- PDF 下载页 ----------
    downloadsTitle: zh ? "PDF 合集库" : "PDF Volume Library",
    downloadsDesc: zh
      ? "双语家常菜谱合集。V1 首发版免费（填邮箱即可下载）；V2 起单册出售或由 PDF 会员全部解锁。"
      : "Bilingual recipe collections. V1 launch edition is free (email required); V2+ sold per volume or fully unlocked with PDF Pass.",
    volumeFreeDownload: zh ? "免费下载" : "Free download",
    emailForDownload: zh ? "输入邮箱即可下载（用于发送更新与新品通知）" : "Enter your email to download (used for updates & new-volume alerts)",
    downloadBtn: zh ? "下载 V1 合集 PDF" : "Download V1 PDF",
    emailSuccess: zh ? "✅ 已记录，开始下载…" : "✅ Got it — starting your download…",
    volumePreviewNote: zh
      ? "免费预览 3 道菜，完整 10 道请购买单册或开通 PDF 会员"
      : "Preview 3 recipes free — unlock all 10 with a single purchase or PDF Pass",
    volumePrice: zh ? "单册买断" : "One-time purchase",
    volumeIncludes: zh ? "本册包含" : "This volume includes",
    volumePdfNote: zh ? "下载 PDF 合集（10 道菜，双语，带买家水印）" : "Download the PDF collection (10 recipes, bilingual, watermarked)",
    recipesInVolume: zh ? "道菜" : "recipes",
    v2ComingSoon: zh ? "V2 川菜专场制作中，先开放 3 道预览与购买入口" : "V2 (Sichuan special) is in production — 3-recipe preview and purchase are live",

    // ---------- 门禁 ----------
    gateTitle: zh ? "这是会员内容" : "This is members-only content",
    gateDesc: zh
      ? "开通菜谱会员即可解锁全部菜谱与高级功能"
      : "Unlock all recipes and pro features with Recipe Pass",
    gateCta: zh ? "查看方案" : "See plans",

    // ---------- 菜谱详情辅助 ----------
    hdImage: zh ? "下载高清大图" : "Download HD image",
    hdImageMember: zh ? "高清大图为菜谱会员权益" : "HD images are a Recipe Pass benefit",
  };
}

export type MembershipText = ReturnType<typeof membershipText>;
