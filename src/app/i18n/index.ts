import { createInstance, TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';
import resourcesToBackend from 'i18next-resources-to-backend';

const initI18next = async (lng: string, ns: string) => {
    const i18nInstance = createInstance();
    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (_: string, namespace: string) =>
                    import(`../../../public/locales/${lng}/${namespace}.json`)
            )
        )
        .init(getOptions(lng, ns));
    return i18nInstance;
};

interface UseTranslationOptions {
    keyPrefix?: string;
}

export async function useTranslation(
    lng: string,
    ns: string = 'login',
    options: UseTranslationOptions = {}
) {
    const i18nextInstance = await initI18next(lng, ns);
    return {
        t: i18nextInstance.getFixedT(
            lng,
            Array.isArray(ns) ? ns[0] : ns,
            options.keyPrefix
        ),
        i18n: i18nextInstance,
    };
}
