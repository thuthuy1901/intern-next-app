'use client';
import { memo, useEffect, useState } from 'react';
import iconUser from '../../../../../public/img/userIcon.png';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { useTranslation } from '@/i18n';
import useLogout from '@/hook/useLogout';
import { username } from '@/store/jotai';

const HeaderPostPage = memo(({ lng }: { lng: string }) => {
    const { onLogout } = useLogout();
    const [name] = useAtom(username);

    const [t, setT] = useState<((key: string) => string) | null>(null);
    useEffect(() => {
        const loadTranslation = async () => {
            const { t } = await useTranslation(lng, 'post');
            setT(() => t);
        };

        loadTranslation();
    }, [lng]);

    return (
        <header className="h-20 bg-white flex justify-end items-center gap-x-5 px-20">
            <div className="flex items-center gap-x-2">
                <Image src={iconUser} alt="iconUser" />
                <p className="mb-0">{name}</p>
            </div>
            <button onClick={() => onLogout(lng)}>{t?.('button')}</button>
        </header>
    );
});

export default HeaderPostPage;
