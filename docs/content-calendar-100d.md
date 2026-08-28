# HǎoWèi 好味 · 100 天菜谱内容规划（种子库 v2 · 去重后 236 道 / 81 天）

> 目标：在已有 54 道菜谱基础上，再扩 236 道结构化双语菜谱（合计 290 道），建立中餐家常菜 SEO 长尾护城河。
> 原则：**正宗家常菜**（不做美式中餐）、**欧美超市可得或可替代**、每篇含 P0 功能所需结构
> （英中双语 / 双制计量 / 状态图字段 / termKey 关联 / relatedSlugs）。
> 自动机制：每日流水线脚本生成 3 道 → 自动校验 → 自动提交（详见 §5）。
> **v2 变更（2026-08-28）**：原日历 Day 1-19（60 道）已被现有 54 道菜谱覆盖，已从种子库剔除；
> 保留 236 道未覆盖菜品，Day 编号重排为 1-81 连续。原文件备份在 `content-calendar-100d.orig-20260828.md`。
> 流水线 Phase 0 去重逻辑不变：生成前仍会检查 index.ts 现有 slug，自动跳过已存在菜品。

---

## 1. 产量与节奏

| 项 | 值 |
|---|---|
| 总菜谱数 | 现有 54 道 + 待生成 236 道 = **290 道** |
| 每天新增 | 3 道（主题日：同场景/同技法/同食材变体，利于内链与 E-E-A-T 集群） |
| 每日流水线 | 生成 → 校验（slug 唯一/字段完整/内链存在）→ tsc → git commit |
| 剩余天数 | 81 天（Day 1-81，原日历 Day 20-100 重排） |
| 覆盖菜系 | 川 25% / 粤 15% / 家常 20% / 面点小吃 15% / 江浙湘鄂 10% / 汤羹凉菜 10% / 甜品 5% |
| 难度分布 | easy 45% / medium 40% / hard 15%（前 30 天 easy 为主，逐步进阶） |
| 时长分布 | ≤20min 30% / 20-40min 45% / >40min 25% |

## 2. SEO 关键词策略

- **头词（首页/分类页）**：chinese home cooking recipes、easy chinese recipes、authentic chinese food
- **主题集群（每天 3 道互链）**：每篇菜谱命中 1 个主长尾词 + 2 个次词
- **高价值菜谱词**（来自市场数据）：mapo tofu、kung pao chicken、scallion pancakes、egg fried rice、
  beef and broccoli、tomato egg、dan dan noodles、hot and sour soup、potstickers、char siu…
- **场景词**：30-minute chinese dinner、chinese comfort food、weeknight chinese meals
- **技法词**：how to velvet chicken、how to cook jasmine rice、wok hei explained…
- **每篇 Schema**：Recipe JSON-LD + HowTo（步骤级）+ FAQ 联动

## 3. 内容结构模板（每篇必含，P0 功能依赖）

1. 双语标题 / pinyin / 菜系 / 省份
2. 双版本：家庭快手版（默认）+ 餐厅正宗版
3. 食材表：英中双语 + 公制/美制 + category + pantry（local/asian）+ termKey
4. 步骤：≥5 步，关键"看状态"步骤含 stateNote（visual/signal/timeRef/heat）
5. tips / 家庭故事 story（信任要素：源自 XX 省家庭配方）
6. dietary 标签 + 饮食限制提示（隐性麸质等）
7. relatedSlugs：同主题日 3 道互链 + 跨日关联
8. 图片：`/images/recipes/{slug}.jpg`（占位可后续实拍）

## 4. 100 天日历（15 个主题阶段 × 每日 3 道）

> 每行 = 当天 3 道菜（Day N：主题 | 菜 A / 菜 B / 菜 C | 主关键词）

### 阶段 1：新手蛋与饭（Day 1-9，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|

### 阶段 2：红烧与糖醋（Day 10-18，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|

### 阶段 3：川味进阶（Day 19-27，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 1 | 水煮家族 | 水煮牛肉 / 水煮鱼 / 水煮肉片 | shui zhu beef, boiled fish |
| 2 | 干锅香锅 | 干锅花菜 / 干锅土豆片 / 香锅虾 | dry pot cauliflower, dry pot |
| 3 | 川味凉菜 | 夫妻肺片 / 红油耳丝 / 蒜泥白肉 | fuqi feipian, red oil |
| 4 | 川味热菜 | 盐煎肉 / 蚂蚁上树 | ant climbing tree, twiced-cooked |
| 5 | 担担面 | 担担面 / 宜宾燃面 / 重庆小面 | dan dan noodles, chongqing noodles |
| 6 | 酸辣开胃 | 酸菜鱼 / 酸萝卜老鸭汤 / 酸辣粉 | suan cai yu, hot and sour noodles |
| 7 | 宫保扩展 | 宫保虾球 / 宫保豆腐 / 宫保杏鲍菇 | kung pao shrimp, kung pao tofu |
| 8 | 冒菜麻辣烫 | 冒菜 / 麻辣烫 / 麻辣香锅 | malatang, maocai |

### 阶段 4：粤式与蒸菜（Day 28-36，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 9 | 蒸蛋蒸鱼 | 虾仁蒸蛋 / 肉末蒸蛋 / 清蒸鲈鱼 | steamed egg, steamed fish |
| 10 | 叉烧烤腊 | 叉烧肉 / 蜜汁烤肋排 / 玫瑰豉油鸡 | char siu, roast pork |
| 11 | 粤式煲仔 | 腊肠煲仔饭 / 滑鸡煲仔饭 / 窝蛋牛肉煲 | claypot rice, bao zai fan |
| 12 | 虾仁虾球 | 白灼虾 / 油焖大虾 / 腰果虾仁 | boiled shrimp, cashew shrimp |
| 13 | 烧腊配菜 | 白切鸡 / 姜葱鸡 / 豉油鸡 | white cut chicken, ginger scallion |
| 14 | 时蔬快炒 | 蒜蓉炒通菜 / 豆豉鲮鱼油麦菜 / 腐乳通菜 | stir fry water spinach |
| 15 | 糖水甜品 | 红豆沙 / 杨枝甘露 / 双皮奶 | red bean soup, mango pomelo |
| 16 | 粥品 | 皮蛋瘦肉粥 / 及第粥 / 艇仔粥 | congee, pork congee |
| 17 | 点心入门 | 肠粉 / 虾饺 / 烧卖 | cheung fun, har gow, siu mai |

### 阶段 5：面点主食（Day 37-45，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 18 | 手擀面 | 炸酱面 / 打卤面 / 油泼面 | zhajiang noodles, you po noodles |
| 19 | 馒头花卷 | 白馒头 / 花卷 / 红糖馒头 | steamed buns, mantou |
| 20 | 包子铺 | 鲜肉包 / 三鲜包 / 豆沙包 | baozi, pork bun |
| 21 | 馄饨抄手 | 鲜肉馄饨 / 红油抄手 / 菜肉大馄饨 | wonton, chao shou |
| 22 | 烧饼锅贴 | 锅贴 / 生煎包 / 芝麻烧饼 | guotie, shengjian, shaobing |
| 23 | 烙饼系列 | 鸡蛋灌饼 / 煎饼果子 / 葱油薄饼 | jianbing, egg pancake |
| 24 | 米饭花活 | 煲仔饭(广) / 竹筒饭 / 石锅拌饭(韩风中化) | rice dishes |
| 25 | 春卷家族 | 春卷 / 蛋卷 / 炸馄饨 | spring rolls |
| 26 | 糯米饭团 | 糯米鸡 / 珍珠丸子 / 烧麦 | sticky rice, pearl meatballs |

### 阶段 6：江浙与家常菜（Day 46-54，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 27 | 本帮浓油赤酱 | 红烧狮子头 / 酱鸭 / 响油鳝糊 | lion's head meatball |
| 28 | 清蒸河鲜 | 清蒸大闸蟹 / 葱油鲈鱼 / 清蒸鲳鱼 | steamed crab, steamed fish |
| 29 | 江南小炒 | 龙井虾仁 / 油焖笋 / 雪菜毛豆 | longjing shrimp |
| 30 | 外婆家味 | 梅干菜扣肉 / 笋干老鸭煲 / 腌笃鲜 | meicai kourou, yanduxian |
| 31 | 淮扬细点 | 扬州狮子头 / 大煮干丝 / 文思豆腐 | huaiyang cuisine |
| 32 | 家常炖菜 | 土豆炖豆角 / 白菜炖豆腐 / 酸菜白肉 | stewed dishes |
| 33 | 下饭菜 | 雪菜肉丝 / 榨菜肉丝 | pickled mustard pork |
| 34 | 茄子家族 | 鱼香茄子 / 红烧茄子 / 蒜蓉烤茄子 | yu xiang eggplant |
| 35 | 腐竹豆干 | 凉拌腐竹 / 芹菜炒香干 / 卤豆干 | dried tofu dishes |

### 阶段 7：湘鄂与香辣（Day 55-63，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 36 | 湘菜剁椒 | 剁椒鱼头 / 剁椒蒸芋头 / 剁椒金针菇 | duojiao fish head |
| 37 | 湘味小炒 | 农家一碗香 / 辣椒炒肉 / 小炒黄牛肉 | hunan stir fry, chilli pork |
| 38 | 湘味腊味 | 腊味合蒸 / 萝卜干炒腊肉 / 藜蒿炒腊肉 | cured meat, larou |
| 39 | 湖北风味 | 武昌鱼 / 排骨藕汤 / 热干面 | wuchang fish, hot dry noodles |
| 40 | 香辣干锅 | 香辣虾 / 香辣蟹 | spicy shrimp, spicy crab |
| 41 | 酸豆角 | 酸豆角炒肉末 / 酸豆角炒鸡胗 / 酸豆角拌面 | pickled beans pork |
| 42 | 血鸭与腊鸭 | 永州血鸭 / 腊鸭焖萝卜 / 酱板鸭 | blood duck, dried duck |
| 43 | 湘味汤 | 莲藕排骨汤 / 冬瓜薏米排骨汤 / 玉米排骨汤 | lotus root soup |
| 44 | 干煸家族 | 干煸肥肠 / 干煸苦瓜 / 干煸豆角(湘) | dry fried dishes |

### 阶段 8：北方家常（Day 64-72，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 45 | 炖菜锅贴 | 铁锅炖大鹅 / 小鸡炖蘑菇 / 排骨炖酸菜 | iron pot stew |
| 46 | 京味 | 涮羊肉 | beijing cuisine |
| 47 | 北方凉菜 | 老醋花生 / 老虎菜 / 大拉皮 | laohu cai, la cu peanut |
| 48 | 饼与菜 | 春饼卷菜 / 韭菜炒河虾 / 京葱爆羊肉 | spring pancake, lamb stir fry |
| 49 | 砂锅家族 | 砂锅豆腐 / 砂锅白菜粉丝 / 砂锅丸子 | clay pot stew |
| 50 | 卤味 | 卤牛肉 / 卤鸡爪 / 卤蛋 | braised beef, luwei |
| 51 | 疙瘩汤 | 西红柿疙瘩汤 / 海鲜疙瘩汤 / 蔬菜疙瘩汤 | gedat tang |
| 52 | 玉米面食 | 玉米面窝头 / 贴饼子 / 玉米糊 | cornmeal buns |
| 53 | 家常炖鱼 | 酱焖鲫鱼 / 家常炖鲤鱼 / 铁锅炖鱼 | braised fish |

### 阶段 9：火锅烧烤与聚会（Day 73-81，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 54 | 火锅底料 | 麻辣火锅 / 清汤锅底 / 番茄锅底 | hot pot, mala hot pot |
| 55 | 火锅配菜 | 手打虾滑 / 羊肉卷拼盘 / 冻豆腐 | hot pot sides, shrimp paste |
| 56 | 蘸料灵魂 | 麻酱蘸料 / 油碟 / 干碟 | hot pot dips |
| 57 | 烧烤串串 | 羊肉串 / 烤鸡翅 / 烤韭菜 | chinese bbq, lamb skewers |
| 58 | 铁板烤鱼 | 锡纸烤鱼 / 铁板鱿鱼 / 烤茄子(碳烤) | grilled fish, sizzling squid |
| 59 | 聚会硬菜 | 大盘鸡 / 东北乱炖 / 地三鲜 | da pan ji, di san xian |
| 60 | 酱骨棒骨 | 酱大骨 / 糖醋大骨 / 卤味拼盘 | braised ribs |
| 61 | 家庭烧烤 | 蜜汁烤鸡翅 / 黑椒烤牛排 / 烤棉花糖串 | family bbq |
| 62 | 暖锅围炉 | 羊蝎子火锅 / 打边炉 / 泰式酸辣锅 | lamb hot pot, da bian lu |

### 阶段 10：鸡肉全攻略（Day 82-90，27 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 63 | 鸡肉入门 | 白斩鸡 / 手撕鸡 | white cut chicken, hand torn chicken |
| 64 | 鸡翅鸡腿 | 台式三杯鸡 / 啤酒鸭 / 台式盐酥鸡 | three cup chicken, popcorn chicken |
| 65 | 鸡肉烧菜 | 栗子烧鸡 / 香菇炖鸡 / 山药鸡汤 | chestnut chicken |
| 66 | 鸡肉炒菜 | 西芹炒鸡柳 / 泡椒鸡杂 / 酸萝卜炒鸡杂 | chicken stir fry |
| 67 | 鸡肉蒸菜 | 虫草花蒸鸡 / 冬菇蒸鸡 / 荷叶蒸鸡 | steamed chicken |
| 68 | 烤鸡家族 | 蜜汁烤鸡 / 香草烤鸡腿 / 盐焗鸡 | roast chicken, salt baked |
| 69 | 鸡爪鸭脖 | 香辣鸭脖 / 泡椒凤爪 | chicken feet, duck neck |
| 70 | 鸡汤面 | 鸡汤小馄饨 / 鸡汤面 / 老鸭粉丝汤 | chicken noodle soup |
| 71 | 鸡胸健康餐 | 鸡胸肉沙拉 / 香煎鸡胸 / 凉拌鸡丝 | chicken breast recipes |

### 阶段 11：海鲜与鱼（Day 91-99 内插，随阶段 4/6/11 共 27 道 → 拆入下表）

> 海鲜与鱼分散在粤菜（D28-36）、江浙（D46-54）、以及下方 3 个主题日，避免扎堆。

### 阶段 12：甜品与饮品（Day 91-93，9 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 72 | 中式甜点 | 芝麻汤圆 / 豆沙糯米糍 / 南瓜饼 | tangyuan, glutinous rice balls |
| 73 | 经典糖水 | 银耳莲子羹 / 冰糖雪梨 / 桂花糖藕 | snow fungus soup, pear soup |
| 74 | 中式饮品 | 酸梅汤 / 豆浆油条 / 姜撞奶 | sour plum drink, ginger milk |

### 阶段 13：剩饭改造与懒人（Day 94-96，9 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 75 | 剩饭改造 | 酱油炒饭 / 泡菜炒饭 / 芝士焗饭 | leftover rice ideas |
| 76 | 一锅出 | 电饭煲焖饭 / 一锅炖菜 / 砂锅粉丝煲 | one pot chinese meals |
| 77 | 快手菜 | 蚝油牛肉 / 蒜蓉粉丝蒸虾 / 空气炸锅鸡翅 | quick chinese dinners, air fryer |

### 阶段 14：进阶技法（Day 97-98，6 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 78 | 刀工与火候 | 松鼠鱼 / 菊花豆腐 / 拔丝苹果 | squirrel fish, drawing sugar |
| 79 | 高级家宴 | 佛跳墙(家常版) / 八宝鸭 / 清炖狮子头 | family feast dishes |

### 阶段 15：补充与冗余（Day 99-100，6 道）
| Day | 主题 | 三道菜 | 关键词 |
|---|---|---|---|
| 80 | 各地代表 | 兰州拉面 / 新疆大盘鸡(复) / 云南汽锅鸡 | regional chinese |
| 81 | 收官 | 满汉家宴组合 / 全家福 / 团圆火锅 | chinese new year feast |

> ⚠️ 日历中标记"（复）"的与前面重复主题日错开；实际生成时以最终排期脚本为准，
> 若某天 3 道中与已存在 slug 冲突，自动从备选池（§6）补位。

## 5. 每日自动生产流水线

```
[每日 03:00 定时] 内容流水线脚本
  ├─ 1. 读取日历 → 当天 3 道菜（slug/关键词/难度/时长）
  ├─ 2. AI 生成内容（本对话执行）：按 §3 模板产出完整双语 Recipe 数据
  ├─ 3. 生成器脚本 scripts/recipe-gen.mjs 落盘：
  │     src/data/recipes/{slug}.ts（校验：字段完整/slug 唯一/relatedSlugs 存在）
  │     + 自动更新 src/data/recipes/index.ts（注册 + 排序）
  ├─ 4. 自动补充术语/替换数据：新菜谱引用的 termKey 若不在 terms.ts 则告警补录
  ├─ 5. 质量闸门：npx tsc --noEmit → npx eslint src → npx next build（快）
  ├─ 6. git commit + push（GIT_DIR 模式，见记忆约定）
  └─ 7. 写入当日 memory 日志 + 汇报卡片
```

**触发方式**（二选一）：
- A. 手动：对话里说「今天 3 道菜」→ 按日历当天执行
- B. 自动：创建定时自动化（automation，每日 03:00 触发，cwds=本工作区）

**成本控制**：每道菜约 0.8-1.5k token（结构化生成），每天 3 道 ≈ 3-5k token；LLM 成本低，
主要瓶颈是内容质量审核——前 30 天建议人工抽查，之后可全自动。

## 6. 备选菜池（冲突补位用）

青椒土豆丝 / 蒜蓉粉丝娃娃菜 / 海米冬瓜 / 金针菇肥牛卷 / 香菇油菜 / 虎皮青椒 /
香煎豆腐 / 荷塘小炒 / 百合炒西芹 / 丝瓜炒蛋 / 秋葵炒蛋 / 蒜蓉西兰花 /
白菜帮炒肉片 / 蒜苔炒肉 / 洋葱炒蛋 / 西葫芦炒蛋 / 虾皮炒冬瓜 / 毛豆炒肉末

## 7. 质量闸门与验收

| 闸门 | 标准 |
|---|---|
| 结构完整性 | 每篇 ≥5 步、含 ≥1 个 stateNote、≥1 个 termKey、双版本字段齐全 |
| slug 唯一性 | 全局唯一，与文件/URL/image 一致 |
| 内链有效性 | relatedSlugs 全部存在于 recipes 列表 |
| 术语覆盖 | 新 termKey 必须已在 terms.ts（否则补录） |
| 构建 | tsc + eslint + next build 全绿 |
| 去重 | 与已发布菜谱 titleEn 无近似重复 |
| 内容标准 | 正宗家常（非美式中餐）、欧美超市可执行（含替代提示） |

## 8. 里程碑

| 里程碑 | 时间 | 菜谱数 | 验收 |
|---|---|---|---|
| M0 | Day 0 | 6 | 现网运行 |
| M1 | Day 30 | 96 | 菜谱库 100 道内、自然流量开始起量 |
| M2 | Day 60 | 186 | 主题集群完整、内链闭环 |
| M3 | Day 100 | 306 | 全站菜谱 300+，长尾覆盖成型 |

---

*规划版本 v1.0 · 2026-08-15 · 数据模型对齐 src/lib/types.ts v1.1*
