import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LangEnum } from "../enums";

// 利用可能な言語とデフォルト言語を設定
export const routing = defineRouting({
  locales: [LangEnum.EN, LangEnum.JA],
  defaultLocale: LangEnum.JA,
});

// ナビゲーション用のユーティリティを作成
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
