import { dict } from "./dictionaries/en";
import { dictZh } from "./dictionaries/zh";
import type { Dict } from "./dictionaries/en";
import type { Locale } from "./config";

export function getDictionary(locale: Locale): Dict {
  return locale === "zh" ? dictZh : dict;
}
