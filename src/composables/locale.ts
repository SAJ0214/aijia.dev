import { computed, ref } from 'vue'
import type { Locale, Localized } from '../data/types'

const saved = typeof window !== 'undefined' ? window.localStorage.getItem('portfolio-locale') : null
const locale = ref<Locale>(saved === 'en' ? 'en' : 'zh')
if (typeof document !== 'undefined') document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en'
export function useLocale() {
  const setLocale = (value: Locale) => {
    locale.value = value
    document.documentElement.lang = value === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem('portfolio-locale', value)
  }
  const t = (value: Localized) => value[locale.value]
  return { locale: computed(() => locale.value), setLocale, t }
}
