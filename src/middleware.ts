import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fallbackLng, languages } from './i18n/settings';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(languages);

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('accessToken')?.value;
    let lng;

    if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'));

    if (!lng) lng = fallbackLng;

    if (request.nextUrl.pathname.startsWith('/')) {
        return NextResponse.redirect(new URL(`/${lng}/login`, request.url));
    }

    if (!accessToken) {
        return NextResponse.redirect(new URL(`/${lng}/`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};
