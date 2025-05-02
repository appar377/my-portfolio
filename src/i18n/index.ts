import { LangType } from '@/types'

const messages = {
  en: () => import('./messages/en.json').then((module) => module.default),
  ja: () => import('./messages/ja.json').then((module) => module.default),
}

console.log(messages)

export const getMessages = async (locale: LangType) => messages[locale]
