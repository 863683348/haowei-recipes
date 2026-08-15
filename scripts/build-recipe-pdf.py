# -*- coding: utf-8 -*-
"""Build a bilingual (Chinese-primary) recipe collection PDF from recipes-export.json.

内容标准（与 docs/spec.md R-03 一致）：stateNote 火候备注必须中英双语——
中文行（火候 / 参考 / 判断）+ 英文行（Heat / Time / Check）对照输出，禁止只出单语；
数据缺失一侧时降级另一侧，不抛空白。"""
import json, os, tempfile
from PIL import Image as PILImage
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                Spacer, Table, TableStyle, Image, PageBreak,
                                KeepTogether, ListFlowable, ListItem)
from reportlab.platypus.tableofcontents import TableOfContents

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "scripts", "recipes-export.json")
PUB = os.path.join(ROOT, "public")
OUT = os.path.join(os.path.dirname(ROOT), "deliverables", "好味家常菜谱合集_首发版.pdf")

BRAND = HexColor("#D6452B")     # warm red
INK = HexColor("#2B2B2B")
SUB = HexColor("#6B6B6B")
LINE = HexColor("#E2D9D4")

pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
CN = "STSong-Light"

def S(name, **kw):
    base = dict(fontName=CN, fontSize=10.5, leading=16, textColor=INK)
    base.update(kw)
    return ParagraphStyle(name, **base)

st_cover_title = S("cover_title", fontSize=40, leading=48, alignment=TA_CENTER, textColor=BRAND)
st_cover_sub   = S("cover_sub", fontSize=18, leading=26, alignment=TA_CENTER, textColor=INK)
st_cover_en    = S("cover_en", fontSize=12, leading=18, alignment=TA_CENTER, textColor=SUB)
st_cover_meta  = S("cover_meta", fontSize=11, leading=20, alignment=TA_CENTER, textColor=SUB)
st_cover_badge = S("cover_badge", fontSize=13, leading=20, alignment=TA_CENTER, textColor=BRAND)
st_toc_h       = S("toc_h", fontSize=20, leading=26, alignment=TA_CENTER, textColor=BRAND, spaceAfter=14)
st_recipe_h    = S("RecipeTitle", fontSize=22, leading=28, textColor=BRAND, spaceBefore=6, spaceAfter=4)
st_meta        = S("meta", fontSize=9.5, leading=14, textColor=SUB)
st_story       = S("story", fontSize=10.5, leading=17, textColor=INK, spaceBefore=4, spaceAfter=2)
st_story_en    = S("story_en", fontSize=9.5, leading=14.5, textColor=SUB, spaceAfter=8)
st_h2          = S("h2", fontSize=14, leading=20, textColor=BRAND, spaceBefore=10, spaceAfter=4)
st_step        = S("step", fontSize=10.5, leading=16.5, textColor=INK)
st_step_en     = S("step_en", fontSize=9.5, leading=14, textColor=SUB)
st_stepnote    = S("stepnote", fontSize=9.5, leading=14, textColor=HexColor("#8A5A2B"))
st_stepnote_en = S("stepnote_en", fontSize=9, leading=13, textColor=HexColor("#A98868"))
st_tip         = S("tip", fontSize=10.5, leading=16, textColor=INK)
st_tip_en      = S("tip_en", fontSize=9.5, leading=14, textColor=SUB)
st_th          = S("th", fontSize=9.5, leading=13, textColor=HexColor("#FFFFFF"))
st_td          = S("td", fontSize=9.8, leading=13.5, textColor=INK)
st_tdcell      = S("tdcell", fontSize=9.8, leading=13.5, textColor=INK)

DIFF = {"easy": "简单", "medium": "中等", "hard": "较难"}

# ----- prepare images (convert webp->png temp for reportlab safety) -----
_tmp = tempfile.mkdtemp(prefix="hw_img_")
img_cache = {}

def load_img(recipe):
    slug = recipe.get("slug") or ""
    cand = [
        recipe.get("image", ""),
        f"/images/recipes/{slug}.webp",
        f"/images/recipes/{slug}.png",
    ]
    for c in cand:
        if not c:
            continue
        p = c if os.path.isabs(c) else os.path.join(PUB, c.lstrip("/"))
        if os.path.exists(p):
            try:
                im = PILImage.open(p).convert("RGB")
                w, h = im.size
                tw = 360
                th = int(h * tw / w)
                im = im.resize((tw, th), PILImage.LANCZOS)
                out = os.path.join(_tmp, f"{slug}.png")
                im.save(out, "PNG")
                return out, w, h
            except Exception as e:
                print("img fail", slug, e)
    return None, 0, 0

def img_flowable(recipe, width_cm):
    path, w, h = load_img(recipe)
    if not path:
        return Spacer(1, 1)
    ratio = h / w
    width = width_cm * cm
    height = width * ratio
    return Image(path, width=width, height=height)

recipes = json.load(open(DATA, encoding="utf-8"))

# ---------- document with TOC + footer ----------
class Doc(BaseDocTemplate):
    def afterFlowable(self, flowable):
        if getattr(flowable, "style", None) and flowable.style.name == "RecipeTitle":
            self.notify("TOCEntry", (0, flowable.getPlainText(), self.page))

    @staticmethod
    def onPage(canvas, doc):
        canvas.saveState()
        canvas.setFont(CN, 8)
        canvas.setFillColor(SUB)
        canvas.drawString(2*cm, 1.1*cm, "好味 HǎoWèi · 家常菜谱合集（首发免费版）")
        canvas.drawRightString(A4[0]-2*cm, 1.1*cm, f"第 {doc.page} 页")
        canvas.setStrokeColor(LINE)
        canvas.line(2*cm, 1.5*cm, A4[0]-2*cm, 1.5*cm)
        canvas.restoreState()

frame = Frame(2*cm, 1.8*cm, A4[0]-4*cm, A4[1]-3.6*cm, id="main")
doc = Doc(OUT, pagesize=A4, title="好味家常菜谱合集（首发免费版）", author="HǎoWèi")
doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=Doc.onPage)])

story = []

# ================= COVER =================
story.append(Spacer(1, 2.2*cm))
story.append(Paragraph("好味 · HǎoWèi", st_cover_title))
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph("家常菜谱合集", st_cover_sub))
story.append(Paragraph("HǎoWèi Homestyle Chinese Recipe Collection", st_cover_en))
story.append(Spacer(1, 0.8*cm))
# hero image (first recipe)
hero = img_flowable(recipes[0], 9)
if hasattr(hero, "draw"):
    story.append(hero)
    story.append(Spacer(1, 0.6*cm))
story.append(Paragraph("[ 首发 ] 第一本免费", st_cover_badge))
story.append(Spacer(1, 0.5*cm))
story.append(Paragraph("10 道家常菜　·　中英双语　·　公制 + 美制对照　·　附火候判断图解", st_cover_meta))
story.append(Paragraph("2026 年 8 月 · 第 1 版", st_cover_meta))
story.append(PageBreak())

# ================= TOC =================
toc = TableOfContents()
toc.levelStyles = [S("toc_lv", fontSize=12, leading=22, textColor=INK)]
story.append(Paragraph("目录", st_toc_h))
story.append(toc)
story.append(PageBreak())

# ================= RECIPES =================
for i, r in enumerate(recipes, 1):
    block = []
    title = f"{i:02d}　{r.get('titleZh','')}　{r.get('titleEn','')}"
    block.append(Paragraph(title, st_recipe_h))

    # meta line
    meta_bits = []
    meta_bits.append(f"菜系：{r.get('cuisine','')}（{r.get('cuisineEn','') or ''}）")
    meta_bits.append(f"地区：{r.get('regionZh','') or r.get('region','')}")
    meta_bits.append(f"难度：{DIFF.get(r.get('difficulty',''), r.get('difficulty',''))}")
    meta_bits.append(f"时长：约 {r.get('timeMin','')} 分钟")
    meta_bits.append(f"份量：{r.get('servings','')} 人份")
    meta_line = "　|　".join(meta_bits)
    block.append(Paragraph(meta_line, st_meta))
    tags = r.get("tags") or []
    diet = r.get("dietary") or []
    if tags or diet:
        extra = "标签：" + "、".join(tags)
        if diet and diet != ["none"]:
            extra += "　|　饮食：" + "、".join(diet)
        block.append(Paragraph(extra, st_meta))
    block.append(Spacer(1, 0.2*cm))

    # image + story side by side
    img = img_flowable(r, 6.2)
    story_zh = r.get("storyZh") or r.get("story") or ""
    story_en = r.get("story") or ""
    story_p = Paragraph(story_zh, st_story)
    if hasattr(img, "draw"):
        row = Table([[img, story_p]], colWidths=[6.6*cm, A4[0]-4*cm-6.6*cm-0.4*cm])
        row.setStyle(TableStyle([
            ("VALIGN", (0,0), (-1,-1), "TOP"),
            ("LEFTPADDING", (0,0), (0,0), 0),
            ("RIGHTPADDING", (0,0), (0,0), 6),
            ("LEFTPADDING", (1,0), (1,0), 0),
        ]))
        block.append(row)
    else:
        block.append(story_p)
    if story_en and story_en != story_zh:
        block.append(Paragraph(story_en, st_story_en))
    block.append(Spacer(1, 0.2*cm))

    # ingredients table
    block.append(Paragraph("食材明细", st_h2))
    ing_rows = [[Paragraph("食材 Ingredient", st_th), Paragraph("用量（公制）Metric", st_th),
                 Paragraph("用量（美制）US", st_th), Paragraph("备注 / 替代 Note", st_th)]]
    for ing in r.get("ingredients", []):
        name = ing.get("nameZh") or ing.get("nameEn") or ""
        if ing.get("nameEn") and ing.get("nameEn") != name:
            name = f"{name}<br/><font size=8 color='#999999'>{ing.get('nameEn')}</font>"
        note = ing.get("noteZh") or ing.get("note") or ""
        ing_rows.append([
            Paragraph(name, st_td),
            Paragraph(ing.get("amountMetric","") or "", st_td),
            Paragraph(ing.get("amountUS","") or "", st_td),
            Paragraph(note, st_td),
        ])
    ing_tbl = Table(ing_rows, colWidths=[4.6*cm, 3.0*cm, 3.0*cm, A4[0]-4*cm-10.6*cm])
    ing_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), BRAND),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [HexColor("#FFFFFF"), HexColor("#FBF5F2")]),
        ("GRID", (0,0), (-1,-1), 0.5, LINE),
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 5),
        ("RIGHTPADDING", (0,0), (-1,-1), 5),
        ("TOPPADDING", (0,0), (-1,-1), 4),
        ("BOTTOMPADDING", (0,0), (-1,-1), 4),
    ]))
    block.append(ing_tbl)
    block.append(Spacer(1, 0.2*cm))

    # steps
    block.append(Paragraph("做法步骤  Steps", st_h2))
    for j, step in enumerate(r.get("steps", []), 1):
        zh = step.get("textZh") or step.get("text") or ""
        en = step.get("text") or ""
        block.append(Paragraph(f"<font color='#D6452B'><b>{j}.</b></font>　{zh}", st_step))
        if en and en != zh:
            block.append(Paragraph(f"　　{en}", st_step_en))
        sn = step.get("stateNote")
        if sn:
            # R-03 标准：备注必须中英双语两行（中文行 + 英文行），缺一侧降级
            bits_zh, bits_en = [], []
            if sn.get("heat"):
                bits_zh.append(f"火候：{sn['heat']}")
                bits_en.append(f"Heat: {sn['heat']}")
            if sn.get("timeRefZh") or sn.get("timeRef"):
                bits_zh.append(f"参考：{sn.get('timeRefZh') or sn.get('timeRef')}")
                bits_en.append(f"Time: {sn.get('timeRef') or sn.get('timeRefZh')}")
            if sn.get("signalZh") or sn.get("signal"):
                bits_zh.append(f"判断：{sn.get('signalZh') or sn.get('signal')}")
                bits_en.append(f"Check: {sn.get('signal') or sn.get('signalZh')}")
            if bits_zh:
                block.append(Paragraph("　　" + "　".join(bits_zh), st_stepnote))
            if bits_en:
                block.append(Paragraph("　　" + "　".join(bits_en), st_stepnote_en))
        tip_zh = step.get("tipZh") or step.get("tip")
        tip_en = step.get("tip")
        if tip_zh:
            block.append(Paragraph(f"　　小贴士：{tip_zh}", st_stepnote))
            if tip_en and tip_en != tip_zh:
                block.append(Paragraph(f"　　Tip: {tip_en}", st_stepnote_en))
        block.append(Spacer(1, 0.12*cm))

    # tips
    tips_zh = r.get("tipsZh") or []
    tips_en = r.get("tips") or []
    if tips_zh or tips_en:
        block.append(Paragraph("厨师小贴士  Chef's Tips", st_h2))
        for k in range(max(len(tips_zh), len(tips_en))):
            t = tips_zh[k] if k < len(tips_zh) else ""
            e = tips_en[k] if k < len(tips_en) else ""
            if t:
                block.append(Paragraph(f"•　{t}", st_tip))
            if e and e != t:
                block.append(Paragraph(f"•　{e}", st_tip_en))
            block.append(Spacer(1, 0.06*cm))

    block.append(Spacer(1, 0.4*cm))
    if i < len(recipes):
        block.append(PageBreak())
    story.extend(block)

doc.multiBuild(story)
print("PDF written:", OUT, "size", os.path.getsize(OUT), "bytes")
