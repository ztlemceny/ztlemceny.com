import fr from '../i18n/fr.json';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

const translations = { fr, en, ar } as const;

export type Lang = 'fr' | 'en' | 'ar';
export const LANGS: Lang[] = ['fr', 'en', 'ar'];

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL;
  let relativePath = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  relativePath = relativePath.replace(/^\//, '');
  const [lang] = relativePath.split('/');
  if (lang === 'fr' || lang === 'ar') return lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.replace(/^\//, ''); // Remove leading slash
  if (lang === 'en') {
    return `${base}${cleanPath}`.replace(/\/+/g, '/');
  }
  return `${base}${lang}/${cleanPath}`.replace(/\/+/g, '/');
}

export function switchLangPath(pathname: string, from: Lang, to: Lang): string {
  const base = import.meta.env.BASE_URL;
  let relativePath = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  relativePath = relativePath.replace(/^\//, '');

  const parts = relativePath.split('/');
  const firstPart = parts[0];
  const hasLocale = firstPart === 'fr' || firstPart === 'ar' || firstPart === 'en';

  let actualPath = relativePath;
  if (hasLocale) {
    actualPath = parts.slice(1).join('/');
  }

  return getLocalizedPath(actualPath, to);
}
