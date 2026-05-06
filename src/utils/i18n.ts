import fr from '../i18n/fr.json';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

const translations = { fr, en, ar } as const;

export type Lang = 'fr' | 'en' | 'ar';
export const LANGS: Lang[] = ['fr', 'en', 'ar'];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr' || lang === 'en' || lang === 'ar') return lang;
  return 'fr';
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function switchLangPath(pathname: string, from: Lang, to: Lang): string {
  if (pathname === '/') return `/${to}/`;
  return pathname.replace(`/${from}/`, `/${to}/`);
}
