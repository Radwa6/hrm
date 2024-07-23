// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome',
    hello: 'Hello',
  },
  ar: {
    welcome: 'مرحبا',
    hello: 'أهلاً',
  },
}

const i18n = createI18n({
  locale: 'ar', // لغة افتراضية
  messages,
})

export default i18n
