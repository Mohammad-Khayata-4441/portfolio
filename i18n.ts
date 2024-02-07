import { getRequestConfig, } from 'next-intl/server';
import { createLocalizedPathnamesNavigation, createSharedPathnamesNavigation } from 'next-intl/navigation'
export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`./translations/${locale}.json`)).default,

}));
export const locales = ['ar', 'en']
export const defaultLocale = 'ar';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
    locales,
})