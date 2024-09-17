'use client';
import { allInfoPost } from '@/store/jotai';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import ListPost from './ListPost';
import { useTranslations } from 'next-intl';
import { axiosInstant, tokenManagerInstance } from '@/api/resquest';
import { API_PATH } from '@/api/constant';

const BodyPostPage = () => {
    const t = useTranslations();
    const [_, setAllInfoPost] = useAtom(allInfoPost);
    const fetchPosts = async () => {
        try {
            const respond = await tokenManagerInstance(
                axiosInstant.get,
                API_PATH.GET_POSTS
            );
            setAllInfoPost(respond.data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="px-[85px] py-2">
            <h1 className="text-[32px] leading-10 mb-2">
                {t('postPage.title')}
            </h1>
            <ListPost />
        </div>
    );
};

export default BodyPostPage;
