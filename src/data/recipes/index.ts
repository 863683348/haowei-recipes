import type { DietLabel, Recipe } from "@/lib/types";

import { beefBroccoli } from "./beef-and-broccoli";
import { braised_tofu } from "./braised-tofu";
import { cashew_chicken } from "./cashew-chicken";
import { chiveEggDumplings } from "./chive-egg-dumplings";
import { cokeChickenWings } from "./coke-chicken-wings";
import { coldWoodEar } from "./cold-wood-ear";
import { cucumber_scrambled_eggs } from "./cucumber-scrambled-eggs";
import { dryFriedGreenBeans } from "./dry-fried-green-beans";
import { eggFriedRice } from "./egg-fried-rice";
import { garlic_chives_scrambled_eggs } from "./garlic-chives-scrambled-eggs";
import { garlicRomaine } from "./garlic-romaine";
import { green_pepper_beef } from "./green-pepper-beef";
import { homeStylePork } from "./home-style-pork";
import { home_style_tofu } from "./home-style-tofu";
import { hongshaoChicken } from "./hongshao-chicken";
import { hongshaoPork } from "./hongshao-pork";
import { huangmenChicken } from "./huangmen-chicken";
import { jingJiangPork } from "./jing-jiang-pork";
import { kouShuiChicken } from "./kou-shui-chicken";
import { kungPaoChicken } from "./kung-pao-chicken";
import { lazi_diced_chicken } from "./lazi-diced-chicken";
import { mapoTofu } from "./mapo-tofu";
import { mooShuPork } from "./moo-shu-pork";
import { onion_beef_stir_fry } from "./onion-beef-stir-fry";
import { oysterSauceLettuce } from "./oyster-sauce-lettuce";
import { panFriedChicken } from "./pan-fried-chicken";
import { pepperPork } from "./pepper-pork";
import { pineapple_fried_rice } from "./pineapple-fried-rice";
import { porkCabbageDumplings } from "./pork-cabbage-dumplings";
import { potatoBeefStew } from "./potato-beef-stew";
import { scallion_noodles } from "./scallion-noodles";
import { scallionPancakes } from "./scallion-pancakes";
import { smashedCucumber } from "./smashed-cucumber";
import { sourSoupDumplings } from "./sour-soup-dumplings";
import { soyChickenWings } from "./soy-chicken-wings";
import { spicyPotatoShreds } from "./spicy-potato-shreds";
import { stirFriedBokChoy } from "./stir-fried-bok-choy";
import { sweet_sour_pork } from "./sweet-sour-pork";
import { tomato_egg_noodles } from "./tomato-egg-noodles";
import { tomatoEggs } from "./tomato-eggs";
import { twiceCookedPork } from "./twice-cooked-pork";
import { vinegar_cabbage } from "./vinegar-cabbage";
import { yangchun_noodles } from "./yangchun-noodles";
import { yangzhou_fried_rice } from "./yangzhou-fried-rice";
import { sweet_sour_ribs } from "./sweet-sour-ribs";
import { sweet_sour_fish } from "./sweet-sour-fish";
import { egg_drop_soup } from "./egg-drop-soup";
import { tomato_egg_drop_soup } from "./tomato-egg-drop-soup";
import { winter_melon_soup } from "./winter-melon-soup";
import { eggplant_green_bean_casserole } from "./eggplant-green-bean-casserole";
import { ge_le_shan_lazi_chicken } from "./ge-le-shan-lazi-chicken";
import { tengjiao_chicken } from "./tengjiao-chicken";
import { shui_zhu_beef } from "./shui-zhu-beef";
import { shui_zhu_fish } from "./shui-zhu-fish";
import { shui_zhu_pork_slices } from "./shui-zhu-pork-slices";
import { dry_pot_cauliflower } from "./dry-pot-cauliflower";
import { dry_pot_potato_slices } from "./dry-pot-potato-slices";
import { fragrant_pot_shrimp } from "./fragrant-pot-shrimp";
import { fu_qi_fei_pian } from "./fu-qi-fei-pian";
import { hong_you_er_si } from "./hong-you-er-si";
import { suan_ni_bai_rou } from "./suan-ni-bai-rou";
import { salt_fried_pork } from "./salt-fried-pork";
import { ant_climbing_tree } from "./ant-climbing-tree";
import { dan_dan_noodles_chengdu } from "./dan-dan-noodles-chengdu";
import { yibin_ran_mian } from "./yibin-ran-mian";
import { chongqing_xiao_mian } from "./chongqing-xiao-mian";
import { suan_cai_yu_hot_sour_fish_stew } from "./suan-cai-yu-hot-sour-fish-stew";
import { suan_luo_bo_lao_ya_tang_pickled_radish_duck_soup } from "./suan-luo-bo-lao-ya-tang-pickled-radish-duck-soup";
import { suan_la_fen_hot_and_sour_noodles } from "./suan-la-fen-hot-and-sour-noodles";
import { kung_pao_shrimp } from "./kung-pao-shrimp";
import { kung_pao_tofu } from "./kung-pao-tofu";
import { kung_pao_xing_bao_gu } from "./kung-pao-xing-bao-gu";
import { chengdu_maocai } from "./chengdu-maocai";
import { sichuan_malatang } from "./sichuan-malatang";
import { chongqing_mala_xiang_guo } from "./chongqing-mala-xiang-guo";
import { shrimp_steamed_egg } from "./shrimp-steamed-egg";
import { minced_pork_steamed_egg } from "./minced-pork-steamed-egg";
import { steamed_bass } from "./steamed-bass";
import { char_siu_pork } from "./char-siu-pork";
import { honey_rib_roast } from "./honey-rib-roast";
import { rose_soy_chicken } from "./rose-soy-chicken";
import { lap_cheong_claypot_rice } from "./lap-cheong-claypot-rice";
import { slippery_chicken_claypot_rice } from "./slippery-chicken-claypot-rice";
import { wok_egg_beef_claypot_rice } from "./wok-egg-beef-claypot-rice";
import { white_boiled_shrimp } from "./white-boiled-shrimp";
import { oil_braised_large_shrimp } from "./oil-braised-large-shrimp";
import { cashew_shrimp } from "./cashew-shrimp";
import { white_cut_chicken } from "./white-cut-chicken";
import { ginger_scallion_chicken } from "./ginger-scallion-chicken";
import { soy_sauce_chicken } from "./soy-sauce-chicken";
import { garlic_stir_fry_water_spinach } from "./garlic-stir-fry-water-spinach";
import { fermented_black_bean_tilapia_stir_fry_oil_mustard_greens } from "./fermented-black-bean-tilapia-stir-fry-oil-mustard-greens";
import { fermented_tofu_water_spinach } from "./fermented-tofu-water-spinach";
import { red_bean_soup_hong_dou_sha } from "./red-bean-soup-hong-dou-sha";
import { mango_pomelo_yang_zhi_gan_lu } from "./mango-pomelo-yang-zhi-gan-lu";
import { double_layer_milk_pudding_shuang_pi_nai } from "./double-layer-milk-pudding-shuang-pi-nai";
import { pidan_shourou_congee } from "./pidan-shourou-congee";
import { jidi_congee } from "./jidi-congee";
import { tingzai_congee } from "./tingzai-congee";
import { homemade_cheung_fun } from "./homemade-cheung-fun";
import { homemade_har_gow } from "./homemade-har-gow";
import { homemade_siu_mai } from "./homemade-siu-mai";
import { zhajiang_noodles } from "./zhajiang-noodles";
import { daluma_dan_rou_noodles } from "./daluma-dan-rou-noodles";
import { you_po_noodles } from "./you-po-noodles";
import { white_mantou_steamed_buns } from "./white-mantou-steamed-buns";
import { flower_rolls_steamed_buns } from "./flower-rolls-steamed-buns";
import { brown_sugar_mantou } from "./brown-sugar-mantou";
import { fresh_pork_baozi } from "./fresh-pork-baozi";
import { three_umami_baozi } from "./three-umami-baozi";
import { sweet_red_bean_baozi } from "./sweet-red-bean-baozi";
import { fresh_pork_wonton } from "./fresh-pork-wonton";
import { spicy_red_oil_chao_shou } from "./spicy-red-oil-chao-shou";
import { vegetable_pork_large_wonton } from "./vegetable-pork-large-wonton";
import { shanghai_style_guotie } from "./shanghai-style-guotie";
import { shanghai_shengjian_bao } from "./shanghai-shengjian-bao";
import { beijing_zhima_shaobing } from "./beijing-zhima-shaobing";
import { jianbing_guo_zi } from "./jianbing-guo-zi";
import { ji_dan_guan_bing } from "./ji-dan-guan-bing";
import { cong_you_bao_bing } from "./cong-you-bao-bing";
import { clay_pot_rice } from "./clay-pot-rice";
import { bamboo_tube_rice } from "./bamboo-tube-rice";
import { stone_pot_bibimbap } from "./stone-pot-bibimbap";
import { homestyle_spring_rolls } from "./homestyle-spring-rolls";
import { shanghai_egg_rolls } from "./shanghai-egg-rolls";
import { northern_style_fried_wontons } from "./northern-style-fried-wontons";
import { sticky_rice_chicken_bamboo_leaf } from "./sticky-rice-chicken-bamboo-leaf";
import { pearl_meatballs_sticky_rice } from "./pearl-meatballs-sticky-rice";
import { steamed_shao_mai_sticky_rice } from "./steamed-shao-mai-sticky-rice";
import { red_braised_lions_head_meatballs } from "./red-braised-lions-head-meatballs";
import { shanghai_style_sauce_duck } from "./shanghai-style-sauce-duck";
import { crispy_eel_with_sizzling_oil } from "./crispy-eel-with-sizzling-oil";
import { steamed_hairy_crab } from "./steamed-hairy-crab";
import { steamed_bass_with_scallion_oil } from "./steamed-bass-with-scallion-oil";
import { steamed_pomfret } from "./steamed-pomfret";
import { longjing_shrimp } from "./longjing-shrimp";
import { oil_braised_bamboo_shoots } from "./oil-braised-bamboo-shoots";
import { pickled_mustard_green_edamame } from "./pickled-mustard-green-edamame";
import { meicai_kourou } from "./meicai-kourou";
import { sun_gan_ya_bao } from "./sun-gan-ya-bao";
import { yan_du_xian } from "./yan-du-xian";
import { yangzhou_lion_head } from "./yangzhou-lion-head";
import { da_zhu_gan_si } from "./da-zhu-gan-si";
import { wen_si_tofu } from "./wen-si-tofu";
import { potato_stewed_green_beans } from "./potato-stewed-green-beans";
import { napa_cabbage_stewed_tofu } from "./napa-cabbage-stewed-tofu";
import { sour_cabbage_stewed_pork } from "./sour-cabbage-stewed-pork";
import { pickled_mustard_green_pork_shreds } from "./pickled-mustard-green-pork-shreds";
import { pickled_mustard_root_pork_shreds } from "./pickled-mustard-root-pork-shreds";
import { yu_xiang_eggplant } from "./yu-xiang-eggplant";
import { hong_shao_eggplant } from "./hong-shao-eggplant";
import { garlic_roasted_eggplant } from "./garlic-roasted-eggplant";
import { cold_dressed_dried_tofu } from "./cold-dressed-dried-tofu";
import { stir_fried_dried_tofu_with_celery } from "./stir-fried-dried-tofu-with-celery";
import { braised_dried_tofu } from "./braised-dried-tofu";
import { duojiao_fish_head } from "./duojiao-fish-head";
import { duojiao_steamed_taro } from "./duojiao-steamed-taro";
import { duojiao_golden_needle_mushrooms } from "./duojiao-golden-needle-mushrooms";
import { farmhouse_one_bowl_fragrance } from "./farmhouse-one-bowl-fragrance";
import { chilli_pork } from "./chilli-pork";
import { hunan_sliced_beef_stir_fry } from "./hunan-sliced-beef-stir-fry";
import { cured_meat_steamed_bundle } from "./cured-meat-steamed-bundle";
import { radish_pickle_stirred_cured_pork } from "./radish-pickle-stirred-cured-pork";
import { smartweed_stirred_cured_pork } from "./smartweed-stirred-cured-pork";
import { wuchang_fish_hubei_style } from "./wuchang-fish-hubei-style";
import { hubei_pork_rib_and_lotus_root_soup } from "./hubei-pork-rib-and-lotus-root-soup";
import { wuhan_hot_dry_noodles } from "./wuhan-hot-dry-noodles";
import { spicy_shrimp_dry_pot } from "./spicy-shrimp-dry-pot";
import { spicy_crab_dry_pot } from "./spicy-crab-dry-pot";
import { pickled_beans_pork } from "./pickled-beans-pork";
import { pickled_beans_chicken_gizzards } from "./pickled-beans-chicken-gizzards";
import { pickled_beans_noodles } from "./pickled-beans-noodles";
import { yong_zhou_blood_duck } from "./yong-zhou-blood-duck";
import { dried_duck_and_radish_braise } from "./dried-duck-and-radish-braise";
import { spicy_sauce_cured_duck } from "./spicy-sauce-cured-duck";
import { lotus_root_pork_bone_soup } from "./lotus-root-pork-bone-soup";
import { winter_melon_coix_pork_bone_soup } from "./winter-melon-coix-pork-bone-soup";
import { sweet_corn_pork_bone_soup } from "./sweet-corn-pork-bone-soup";
import { dry_fried_pork_intestine } from "./dry-fried-pork-intestine";
import { dry_fried_bitter_melon } from "./dry-fried-bitter-melon";
import { dry_fried_long_beans } from "./dry-fried-long-beans";
import { iron_pot_stew_goose } from "./iron-pot-stew-goose";
import { chicken_mushroom_stew } from "./chicken-mushroom-stew";
import { pork_ribs_sauerkraut_stew } from "./pork-ribs-sauerkraut-stew";
import { shuan_yang_rou } from "./shuan-yang-rou";
import { laohu_cai_lao_cu_peanut } from "./laohu-cai-lao-cu-peanut";
import { lao_hu_cai_tiger_salad } from "./lao-hu-cai-tiger-salad";
import { da_la_pi_jelly_noodle_salad } from "./da-la-pi-jelly-noodle-salad";
import { spring_pancake_vegetable_wrap } from "./spring-pancake-vegetable-wrap";
import { chinese_chives_stir_fried_river_shrimp } from "./chinese-chives-stir-fried-river-shrimp";
import { scallion_lamb_stir_fry_beijing_style } from "./scallion-lamb-stir-fry-beijing-style";
import { clay_pot_tofu } from "./clay-pot-tofu";
import { clay_pot_bok_choy_vermicelli } from "./clay-pot-bok-choy-vermicelli";
import { clay_pot_meatballs } from "./clay-pot-meatballs";
import { braised_beef_luwei } from "./braised-beef-luwei";
import { braised_chicken_feet_luwei } from "./braised-chicken-feet-luwei";
import { braised_eggs_luwei } from "./braised-eggs-luwei";
import { tomato_geda_soup } from "./tomato-geda-soup";
import { seafood_geda_soup } from "./seafood-geda-soup";
import { vegetable_geda_soup } from "./vegetable-geda-soup";
import { cornmeal_buns_homestyle } from "./cornmeal-buns-homestyle";
import { cornmeal_flatcakes_northern_style } from "./cornmeal-flatcakes-northern-style";
import { northern_cornmeal_gruel } from "./northern-cornmeal-gruel";
import { sauce_braised_crucian_carp } from "./sauce-braised-crucian-carp";
import { home_style_braised_common_carp } from "./home-style-braised-common-carp";
import { iron_pot_fish_stew } from "./iron-pot-fish-stew";
import { mala_hot_pot_base } from "./mala-hot-pot-base";
import { clear_broth_hot_pot_base } from "./clear-broth-hot-pot-base";
import { tomato_hot_pot_base } from "./tomato-hot-pot-base";
import { hand_beaten_shrimp_paste } from "./hand-beaten-shrimp-paste";
import { lamb_roll_platter } from "./lamb-roll-platter";
import { frozen_tofu_hot_pot } from "./frozen-tofu-hot-pot";
import { sesame_sauce_dipping_sauce } from "./sesame-sauce-dipping-sauce";
import { oil_dipping_bowl } from "./oil-dipping-bowl";
import { dry_chili_dipping_bowl } from "./dry-chili-dipping-bowl";
import { lamb_skewers_chinese_bbq } from "./lamb-skewers-chinese-bbq";
import { grilled_chicken_wings } from "./grilled-chicken-wings";
import { grilled_leeks } from "./grilled-leeks";
import { tin_foil_grilled_fish } from "./tin-foil-grilled-fish";
import { sizzling_iron_plate_squid } from "./sizzling-iron-plate-squid";
import { grilled_eggplant_with_garlic_sauce } from "./grilled-eggplant-with-garlic-sauce";
import { da_pan_ji } from "./da-pan-ji";
import { dong_bei_luan_dun } from "./dong-bei-luan-dun";
import { di_san_xian } from "./di-san-xian";
import { braised_pork_shank_bones } from "./braised-pork-shank-bones";
import { sweet_sour_pork_shank_bones } from "./sweet-sour-pork-shank-bones";
import { master_stock_assorted_platter } from "./master-stock-assorted-platter";
import { honey_glazed_grilled_chicken_wings } from "./honey-glazed-grilled-chicken-wings";
import { black_pepper_grilled_steak } from "./black-pepper-grilled-steak";
import { grilled_marshmallow_skewers } from "./grilled-marshmallow-skewers";
import { lamb_scorpion_hot_pot } from "./lamb-scorpion-hot-pot";
import { da_bian_lu } from "./da-bian-lu";
import { thai_sour_spicy_hot_pot } from "./thai-sour-spicy-hot-pot";
import { white_cut_chicken_2 } from "./white-cut-chicken-2";
import { hand_torn_chicken } from "./hand-torn-chicken";
import { taiwanese_three_cup_chicken } from "./taiwanese-three-cup-chicken";
import { beer_duck } from "./beer-duck";
import { taiwanese_salt_fried_chicken } from "./taiwanese-salt-fried-chicken";
import { chestnut_chicken_braise } from "./chestnut-chicken-braise";
import { shiitake_mushroom_chicken_stew } from "./shiitake-mushroom-chicken-stew";
import { huai_yang_yam_chicken_soup } from "./huai-yang-yam-chicken-soup";
import { west_china_celery_stir_fried_chicken_strip } from "./west-china-celery-stir-fried-chicken-strip";
import { spicy_pickled_pepper_stir_fried_chicken_offal } from "./spicy-pickled-pepper-stir-fried-chicken-offal";
import { sour_radish_stir_fried_chicken_offal } from "./sour-radish-stir-fried-chicken-offal";
import { cordyceps_flowers_steamed_chicken } from "./cordyceps-flowers-steamed-chicken";
import { winter_mushroom_steamed_chicken } from "./winter-mushroom-steamed-chicken";
import { lotus_leaf_steamed_chicken } from "./lotus-leaf-steamed-chicken";
import { honey_glazed_roast_chicken } from "./honey-glazed-roast-chicken";
import { herb_roasted_chicken_thighs } from "./herb-roasted-chicken-thighs";
import { salt_baked_chicken } from "./salt-baked-chicken";
import { spicy_duck_neck } from "./spicy-duck-neck";
import { pickled_chicken_feet } from "./pickled-chicken-feet";
import { chicken_broth_wonton_soup } from "./chicken-broth-wonton-soup";
import { chicken_broth_noodle_soup } from "./chicken-broth-noodle-soup";
import { old_duck_vermicelli_soup } from "./old-duck-vermicelli-soup";
import { chicken_breast_salad } from "./chicken-breast-salad";
import { pan_seared_chicken_breast } from "./pan-seared-chicken-breast";
import { cold_shredded_chicken } from "./cold-shredded-chicken";
import { sesame_tangyuan_glutinous_rice_balls } from "./sesame-tangyuan-glutinous-rice-balls";
import { red_bean_mochi_glutinous_rice_dumplings } from "./red-bean-mochi-glutinous-rice-dumplings";
import { pumpkin_cake_glutinous_rice_pancakes } from "./pumpkin-cake-glutinous-rice-pancakes";
import { silver_fungus_lotus_seed_soup } from "./silver-fungus-lotus-seed-soup";
import { rock_sugar_pear_soup } from "./rock-sugar-pear-soup";
import { osmanthus_stuffed_lotus_root } from "./osmanthus-stuffed-lotus-root";
import { sour_plum_drink } from "./sour-plum-drink";
import { ginger_milk_curd } from "./ginger-milk-curd";
import { soy_milk_and_youtiao } from "./soy-milk-and-youtiao";
import { soy_sauce_fried_rice } from "./soy-sauce-fried-rice";
import { kimchi_fried_rice } from "./kimchi-fried-rice";
import { cheese_baked_rice } from "./cheese-baked-rice";
import { electric_rice_cooker_claypot_style_rice } from "./electric-rice-cooker-claypot-style-rice";
import { one_pot_winter_vegetable_stew } from "./one-pot-winter-vegetable-stew";
import { sandpot_vermicelli_pot } from "./sandpot-vermicelli-pot";
import { oyster_sauce_beef } from "./oyster-sauce-beef";
import { garlic_shrimp_vermicelli } from "./garlic-shrimp-vermicelli";
import { air_fryer_chicken_wings } from "./air-fryer-chicken-wings";
import { squirrel_fish } from "./squirrel-fish";
import { chrysanthemum_tofu } from "./chrysanthemum-tofu";
import { caramel_apples } from "./caramel-apples";
import { fo_tiao_qiang } from "./fo-tiao-qiang";
import { ba_bao_ya } from "./ba-bao-ya";
import { qing_dun_shi_zi_tou } from "./qing-dun-shi-zi-tou";
import { lanzhou_lamian } from "./lanzhou-lamian";
import { xinjiang_da_pan_ji } from "./xinjiang-da-pan-ji";
import { yunnan_qi_guo_ji } from "./yunnan-qi-guo-ji";
import { man_han_family_feast_combo } from "./man-han-family-feast-combo";
import { whole_family_blessing_casserole } from "./whole-family-blessing-casserole";
import { reunion_hot_pot } from "./reunion-hot-pot";
import { onion_scrambled_eggs } from "./onion-scrambled-eggs";
import { green_pepper_scrambled_eggs } from "./green-pepper-scrambled-eggs";
import { okra_scrambled_eggs } from "./okra-scrambled-eggs";
import { zucchini_scrambled_eggs } from "./zucchini-scrambled-eggs";
import { shrimp_scrambled_eggs } from "./shrimp-scrambled-eggs";
import { preserved_egg_tofu } from "./preserved-egg-tofu";
import { egg_imitation_crab } from "./egg-imitation-crab";
import { sesame_flatbread } from "./sesame-flatbread";
import { red_sugar_flatbread } from "./red-sugar-flatbread";
import { flaky_layer_flatbread } from "./flaky-layer-flatbread";
import { scallion_flatbread } from "./scallion-flatbread";
import { you_su_huoshao } from "./you-su-huoshao";
import { wife_cake } from "./wife-cake";
import { egg_yolk_pastry } from "./egg-yolk-pastry";
import { peach_cake } from "./peach-cake";
import { kai_kou_xiao } from "./kai-kou-xiao";
import { ma_tuan } from "./ma-tuan";
import { chun_juan } from "./chun-juan";
import { fried_wontons } from "./fried-wontons";
import { fried_eggplant_box } from "./fried-eggplant-box";
import { fried_lotus_root_box } from "./fried-lotus-root-box";
import { fried_oyster_mushrooms } from "./fried-oyster-mushrooms";
import { fried_milk } from "./fried-milk";
import { soft_fried_pork } from "./soft-fried-pork";
import { chinese_fries } from "./chinese-fries";
import { crispy_chicken_chunks } from "./crispy-chicken-chunks";
import { fried_tangyuan } from "./fried-tangyuan";
import { yuXiangPork } from "./yu-xiang-pork";

/** 全部菜谱（P0 首批，扩展至50道） */
export const recipes: Recipe[] = [
  beefBroccoli,
  braised_tofu,
  cashew_chicken,
  chiveEggDumplings,
  cokeChickenWings,
  coldWoodEar,
  cucumber_scrambled_eggs,
  dryFriedGreenBeans,
  eggFriedRice,
  garlic_chives_scrambled_eggs,
  garlicRomaine,
  green_pepper_beef,
  homeStylePork,
  home_style_tofu,
  hongshaoChicken,
  hongshaoPork,
  huangmenChicken,
  jingJiangPork,
  kouShuiChicken,
  kungPaoChicken,
  mapoTofu,
  mooShuPork,
  onion_beef_stir_fry,
  oysterSauceLettuce,
  panFriedChicken,
  pepperPork,
  pineapple_fried_rice,
  porkCabbageDumplings,
  potatoBeefStew,
  scallion_noodles,
  scallionPancakes,
  smashedCucumber,
  sourSoupDumplings,
  soyChickenWings,
  spicyPotatoShreds,
  stirFriedBokChoy,
  sweet_sour_pork,
  tomato_egg_noodles,
  tomatoEggs,
  twiceCookedPork,
  vinegar_cabbage,
  yangchun_noodles,
  yangzhou_fried_rice,
  yuXiangPork,
  sweet_sour_ribs,
  sweet_sour_fish,
  egg_drop_soup,
  tomato_egg_drop_soup,
  winter_melon_soup,
  eggplant_green_bean_casserole,
  ge_le_shan_lazi_chicken,
  tengjiao_chicken,
  lazi_diced_chicken,
  shui_zhu_beef,
  shui_zhu_fish,
  shui_zhu_pork_slices,
  dry_pot_cauliflower,
  dry_pot_potato_slices,
  fragrant_pot_shrimp,
  fu_qi_fei_pian,
  hong_you_er_si,
  suan_ni_bai_rou,
  salt_fried_pork,
  ant_climbing_tree,
  dan_dan_noodles_chengdu,
  yibin_ran_mian,
  chongqing_xiao_mian,
  suan_cai_yu_hot_sour_fish_stew,
  suan_luo_bo_lao_ya_tang_pickled_radish_duck_soup,
  suan_la_fen_hot_and_sour_noodles,
  kung_pao_shrimp,
  kung_pao_tofu,
  kung_pao_xing_bao_gu,
  chengdu_maocai,
  sichuan_malatang,
  chongqing_mala_xiang_guo,
  shrimp_steamed_egg,
  minced_pork_steamed_egg,
  steamed_bass,
  char_siu_pork,
  honey_rib_roast,
  rose_soy_chicken,
  lap_cheong_claypot_rice,
  slippery_chicken_claypot_rice,
  wok_egg_beef_claypot_rice,
  white_boiled_shrimp,
  oil_braised_large_shrimp,
  cashew_shrimp,
  white_cut_chicken,
  ginger_scallion_chicken,
  soy_sauce_chicken,
  garlic_stir_fry_water_spinach,
  fermented_black_bean_tilapia_stir_fry_oil_mustard_greens,
  fermented_tofu_water_spinach,
  red_bean_soup_hong_dou_sha,
  mango_pomelo_yang_zhi_gan_lu,
  double_layer_milk_pudding_shuang_pi_nai,
  pidan_shourou_congee,
  jidi_congee,
  tingzai_congee,
  homemade_cheung_fun,
  homemade_har_gow,
  homemade_siu_mai,
  zhajiang_noodles,
  daluma_dan_rou_noodles,
  you_po_noodles,
  white_mantou_steamed_buns,
  flower_rolls_steamed_buns,
  brown_sugar_mantou,
  fresh_pork_baozi,
  three_umami_baozi,
  sweet_red_bean_baozi,
  fresh_pork_wonton,
  spicy_red_oil_chao_shou,
  vegetable_pork_large_wonton,
  shanghai_style_guotie,
  shanghai_shengjian_bao,
  beijing_zhima_shaobing,
  jianbing_guo_zi,
  ji_dan_guan_bing,
  cong_you_bao_bing,
  clay_pot_rice,
  bamboo_tube_rice,
  stone_pot_bibimbap,
  homestyle_spring_rolls,
  shanghai_egg_rolls,
  northern_style_fried_wontons,
  sticky_rice_chicken_bamboo_leaf,
  pearl_meatballs_sticky_rice,
  steamed_shao_mai_sticky_rice,
  red_braised_lions_head_meatballs,
  shanghai_style_sauce_duck,
  crispy_eel_with_sizzling_oil,
  steamed_hairy_crab,
  steamed_bass_with_scallion_oil,
  steamed_pomfret,
  longjing_shrimp,
  oil_braised_bamboo_shoots,
  pickled_mustard_green_edamame,
  meicai_kourou,
  sun_gan_ya_bao,
  yan_du_xian,
  yangzhou_lion_head,
  da_zhu_gan_si,
  wen_si_tofu,
  potato_stewed_green_beans,
  napa_cabbage_stewed_tofu,
  sour_cabbage_stewed_pork,
  pickled_mustard_green_pork_shreds,
  pickled_mustard_root_pork_shreds,
  yu_xiang_eggplant,
  hong_shao_eggplant,
  garlic_roasted_eggplant,
  cold_dressed_dried_tofu,
  stir_fried_dried_tofu_with_celery,
  braised_dried_tofu,
  duojiao_fish_head,
  duojiao_steamed_taro,
  duojiao_golden_needle_mushrooms,
  farmhouse_one_bowl_fragrance,
  chilli_pork,
  hunan_sliced_beef_stir_fry,
  cured_meat_steamed_bundle,
  radish_pickle_stirred_cured_pork,
  smartweed_stirred_cured_pork,
  wuchang_fish_hubei_style,
  hubei_pork_rib_and_lotus_root_soup,
  wuhan_hot_dry_noodles,
  spicy_shrimp_dry_pot,
  spicy_crab_dry_pot,
  pickled_beans_pork,
  pickled_beans_chicken_gizzards,
  pickled_beans_noodles,
  yong_zhou_blood_duck,
  dried_duck_and_radish_braise,
  spicy_sauce_cured_duck,
  lotus_root_pork_bone_soup,
  winter_melon_coix_pork_bone_soup,
  sweet_corn_pork_bone_soup,
  dry_fried_pork_intestine,
  dry_fried_bitter_melon,
  dry_fried_long_beans,
  iron_pot_stew_goose,
  chicken_mushroom_stew,
  pork_ribs_sauerkraut_stew,
  shuan_yang_rou,
  laohu_cai_lao_cu_peanut,
  lao_hu_cai_tiger_salad,
  da_la_pi_jelly_noodle_salad,
  spring_pancake_vegetable_wrap,
  chinese_chives_stir_fried_river_shrimp,
  scallion_lamb_stir_fry_beijing_style,
  clay_pot_tofu,
  clay_pot_bok_choy_vermicelli,
  clay_pot_meatballs,
  braised_beef_luwei,
  braised_chicken_feet_luwei,
  braised_eggs_luwei,
  tomato_geda_soup,
  seafood_geda_soup,
  vegetable_geda_soup,
  cornmeal_buns_homestyle,
  cornmeal_flatcakes_northern_style,
  northern_cornmeal_gruel,
  sauce_braised_crucian_carp,
  home_style_braised_common_carp,
  iron_pot_fish_stew,
  mala_hot_pot_base,
  clear_broth_hot_pot_base,
  tomato_hot_pot_base,
  hand_beaten_shrimp_paste,
  lamb_roll_platter,
  frozen_tofu_hot_pot,
  sesame_sauce_dipping_sauce,
  oil_dipping_bowl,
  dry_chili_dipping_bowl,
  lamb_skewers_chinese_bbq,
  grilled_chicken_wings,
  grilled_leeks,
  tin_foil_grilled_fish,
  sizzling_iron_plate_squid,
  grilled_eggplant_with_garlic_sauce,
  da_pan_ji,
  dong_bei_luan_dun,
  di_san_xian,
  braised_pork_shank_bones,
  sweet_sour_pork_shank_bones,
  master_stock_assorted_platter,
  honey_glazed_grilled_chicken_wings,
  black_pepper_grilled_steak,
  grilled_marshmallow_skewers,
  lamb_scorpion_hot_pot,
  da_bian_lu,
  thai_sour_spicy_hot_pot,
  white_cut_chicken_2,
  hand_torn_chicken,
  taiwanese_three_cup_chicken,
  beer_duck,
  taiwanese_salt_fried_chicken,
  chestnut_chicken_braise,
  shiitake_mushroom_chicken_stew,
  huai_yang_yam_chicken_soup,
  west_china_celery_stir_fried_chicken_strip,
  spicy_pickled_pepper_stir_fried_chicken_offal,
  sour_radish_stir_fried_chicken_offal,
  cordyceps_flowers_steamed_chicken,
  winter_mushroom_steamed_chicken,
  lotus_leaf_steamed_chicken,
  honey_glazed_roast_chicken,
  herb_roasted_chicken_thighs,
  salt_baked_chicken,
  spicy_duck_neck,
  pickled_chicken_feet,
  chicken_broth_wonton_soup,
  chicken_broth_noodle_soup,
  old_duck_vermicelli_soup,
  chicken_breast_salad,
  pan_seared_chicken_breast,
  cold_shredded_chicken,
  sesame_tangyuan_glutinous_rice_balls,
  red_bean_mochi_glutinous_rice_dumplings,
  pumpkin_cake_glutinous_rice_pancakes,
  silver_fungus_lotus_seed_soup,
  rock_sugar_pear_soup,
  osmanthus_stuffed_lotus_root,
  sour_plum_drink,
  ginger_milk_curd,
  soy_milk_and_youtiao,
  soy_sauce_fried_rice,
  kimchi_fried_rice,
  cheese_baked_rice,
  electric_rice_cooker_claypot_style_rice,
  one_pot_winter_vegetable_stew,
  sandpot_vermicelli_pot,
  oyster_sauce_beef,
  garlic_shrimp_vermicelli,
  air_fryer_chicken_wings,
  squirrel_fish,
  chrysanthemum_tofu,
  caramel_apples,
  fo_tiao_qiang,
  ba_bao_ya,
  qing_dun_shi_zi_tou,
  lanzhou_lamian,
  xinjiang_da_pan_ji,
  yunnan_qi_guo_ji,
  man_han_family_feast_combo,
  whole_family_blessing_casserole,
  reunion_hot_pot,
  onion_scrambled_eggs,
  green_pepper_scrambled_eggs,
  okra_scrambled_eggs,
  zucchini_scrambled_eggs,
  shrimp_scrambled_eggs,
  preserved_egg_tofu,
  egg_imitation_crab,
  sesame_flatbread,
  red_sugar_flatbread,
  flaky_layer_flatbread,
  scallion_flatbread,
  you_su_huoshao,
  wife_cake,
  egg_yolk_pastry,
  peach_cake,
  kai_kou_xiao,
  ma_tuan,
  chun_juan,
  fried_wontons,
  fried_eggplant_box,
  fried_lotus_root_box,
  fried_oyster_mushrooms,
  fried_milk,
  soft_fried_pork,
  chinese_fries,
  crispy_chicken_chunks,
  fried_tangyuan,
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getRelatedRecipes(recipe: Recipe): Recipe[] {
  // 1) 手动精品互链优先（豆腐/甜酸/牛肉/面条/绿叶菜组等主题强相关）
  const manual = recipe.relatedSlugs
    .map((slug) => getRecipeBySlug(slug))
    .filter((r): r is Recipe => Boolean(r));
  if (manual.length >= 3) return manual.slice(0, 4);

  // 2) 若手动项只是通用占位（如仅 [tomato-and-egg, egg-fried-rice]），改自动按相关性互链
  const GENERIC = new Set(["tomato-and-egg", "egg-fried-rice"]);
  const isGenericOnly =
    manual.length > 0 && manual.every((r) => GENERIC.has(r.slug));
  if (!isGenericOnly && manual.length > 0) return manual.slice(0, 4);

  // 3) 自动相关性：cuisine + 共享 tags + 共享食材 + 名称关键词
  const tags = new Set(recipe.tags);
  const ing = new Set(recipe.ingredients.map((i) => i.nameEn.toLowerCase()));
  const nameWords = new Set(recipe.titleEn.toLowerCase().split(/\s+/));
  const scored = recipes
    .filter((r) => r.slug !== recipe.slug)
    .map((r) => {
      let score = 0;
      if (r.cuisine === recipe.cuisine) score += 3;
      for (const t of r.tags) if (tags.has(t)) score += 2;
      for (const i of r.ingredients)
        if (ing.has(i.nameEn.toLowerCase())) score += 1;
      for (const w of r.titleEn.toLowerCase().split(/\s+/))
        if (nameWords.has(w) && w.length > 2) score += 1;
      return { r, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.r);

  if (scored.length > 0) return scored;

  // 4) fallback：同 cuisine 前 4，再不行取前 4
  const byCuisine = recipes.filter(
    (r) => r.slug !== recipe.slug && r.cuisine === recipe.cuisine
  );
  if (byCuisine.length > 0) return byCuisine.slice(0, 4);
  return recipes.filter((r) => r.slug !== recipe.slug).slice(0, 4);
}

export interface RecipeFilter {
  cuisine?: string;
  difficulty?: string;
  maxTime?: number;
  diet?: DietLabel;
  tag?: string;
  query?: string;
}

export function filterRecipes(filter: RecipeFilter): Recipe[] {
  return recipes.filter((r) => {
    if (filter.cuisine && r.cuisine !== filter.cuisine) return false;
    if (filter.difficulty && r.difficulty !== filter.difficulty) return false;
    if (filter.maxTime && r.timeMin > filter.maxTime) return false;
    if (filter.diet && filter.diet !== "none" && !r.dietary.includes(filter.diet))
      return false;
    if (filter.tag && !r.tags.includes(filter.tag)) return false;
    if (filter.query) {
      const q = filter.query.toLowerCase();
      const haystack = [
        r.titleEn,
        r.titleZh,
        r.pinyin,
        r.cuisine,
        ...r.tags,
        ...r.ingredients.map((i) => i.nameEn),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

/** 所有可用筛选值 */
export const cuisineOptions = [...new Set(recipes.map((r) => r.cuisine))];
export const difficultyOptions: Recipe["difficulty"][] = ["easy", "medium", "hard"];
