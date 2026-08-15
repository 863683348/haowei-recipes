import { NextResponse, type NextRequest } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { store } from "@/lib/db";
import { recipes, getRecipeBySlug } from "@/data/recipes";
import { isPremiumRecipe, hasRecipeAccess } from "@/lib/membership";

interface RouteCtx {
  params: Promise<{ slug: string }>;
}

/**
 * 菜谱完整内容（会员门禁用）
 * 渐进式：免费额度内的菜谱对所有人开放；超出额度的菜谱需菜谱会员权益。
 * 当前 FREE_RECIPE_LIMIT=10 且库内 10 道 → 全部免费，本接口等同公开；
 * 库扩充后自动生效，无需改动页面。
 */
export async function GET(request: NextRequest, ctx: RouteCtx) {
  const { slug } = await ctx.params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) {
    return NextResponse.json({ error: "not-found" }, { status: 404 });
  }

  const allSlugs = recipes.map((r) => r.slug);
  if (isPremiumRecipe(slug, allSlugs)) {
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json({ error: "no-access" }, { status: 403 });
    }
    const entitlements = await store.getEntitlements(userId);
    if (!hasRecipeAccess(entitlements)) {
      return NextResponse.json({ error: "no-access" }, { status: 403 });
    }
  }

  const locale = request.nextUrl.searchParams.get("locale") === "zh" ? "zh" : "en";
  const isZh = locale === "zh";

  return NextResponse.json({
    slug: recipe.slug,
    title: isZh ? recipe.titleZh : recipe.titleEn,
    story: isZh ? recipe.storyZh ?? recipe.story : recipe.story,
    versionNote: isZh
      ? recipe.versionNoteZh ?? recipe.versionNote
      : recipe.versionNote,
    ingredients: recipe.ingredients.map((i) => ({
      id: i.id,
      name: isZh ? i.nameZh : i.nameEn,
      amountMetric: i.amountMetric,
      amountUS: i.amountUS,
      category: i.category,
      note: isZh ? i.noteZh ?? i.note : i.note,
      termKey: i.termKey,
    })),
    steps: recipe.steps.map((s) => ({
      text: isZh ? s.textZh ?? s.text : s.text,
      tip: isZh ? s.tipZh ?? s.tip : s.tip,
      stateNote: s.stateNote
        ? {
            visual: isZh
              ? s.stateNote.visualZh ?? s.stateNote.visual
              : s.stateNote.visual,
            timeRef: isZh
              ? s.stateNote.timeRefZh ?? s.stateNote.timeRef
              : s.stateNote.timeRef,
            signal: isZh
              ? s.stateNote.signalZh ?? s.stateNote.signal
              : s.stateNote.signal,
          }
        : undefined,
    })),
    tips: isZh ? recipe.tipsZh ?? recipe.tips : recipe.tips,
  });
}
