'use client';

import HeaderPostPage from './component/HeaderPostPage';
import useAuth from '../hook/useAuth';
import BodyPostPage from './component/BodyPostPage';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PostPage = () => {
    const router = useRouter();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (!isLoggedIn()) {
            router.push('/');
        }
    }, [isLoggedIn]);

    return (
        <section className="min-w-screen min-h-screen h-fit bg-background">
            <HeaderPostPage />
            <BodyPostPage />
        </section>
    );
};

export default PostPage;
