'use client';
import { memo, useEffect, useState } from 'react';
import iconUser from '../../../assets/userIcon.png';
import useLogout from '@/app/hook/useLogout';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { username } from '@/app/store';
import { useTranslation } from '@/app/i18n';

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
