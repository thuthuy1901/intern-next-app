import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { defaultLocale, localePrefix, locales, pathnames } from './config';

const nextIntl = createMiddleware({
    defaultLocale,
    locales,
    pathnames,
    localePrefix,
});

export function middleware(request: NextRequest) {
    return nextIntl(request);
}

export const config = {
    matcher: [
        '/',
        '/(en|ko|id|ja|es)/:path*',
        '/((?!_next|_vercel|.*\\..*).*)',
    ],
};
