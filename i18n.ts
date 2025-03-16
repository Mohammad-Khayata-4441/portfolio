import { getRequestConfig, } from 'next-intl/server';
import { createNavigation } from 'next-intl/navigation';
export const localePrefix = 'always'; // Default
export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale
    return {
        locale,
        messages: (await import(`./translations/${locale}.json`)).default,
    }
})
export const locales = ['ar', 'en'] as const
export const defaultLocale = 'en';
export const { Link, redirect, usePathname, useRouter, } =
    createNavigation({ locales });