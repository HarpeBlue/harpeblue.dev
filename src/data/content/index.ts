import { enContent } from "./en";
import { esContent } from "./es";

export const content = {
  en: enContent,
  es: esContent,
} as const;

export type Locale = keyof typeof content;
export type PageContent = (typeof content)[Locale];
