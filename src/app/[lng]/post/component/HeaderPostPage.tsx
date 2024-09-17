'use client';
import { memo, useEffect, useState } from 'react';
import iconUser from '../../../../../public/img/userIcon.png';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import useLogout from '@/hook/useLogout';
import { username } from '@/store/jotai';

const HeaderPostPage = memo(() => {
    const { onLogout } = useLogout();
    const [name] = useAtom(username);
    const t = useTranslations();

    return (
        <header className="h-20 bg-white flex justify-end items-center gap-x-5 px-20">
            <div className="flex items-center gap-x-2">
                <Image src={iconUser} alt="iconUser" />
                <p className="mb-0">{name}</p>
            </div>
            <button onClick={() => onLogout()}>{t('postPage.button')}</button>
        </header>
    );
});

export default HeaderPostPage;
