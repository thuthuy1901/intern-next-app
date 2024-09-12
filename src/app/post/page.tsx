'use client';

import HeaderPostPage from './component/HeaderPostPage';
import BodyPostPage from './component/BodyPostPage';

const PostPage = () => {
    return (
        <section className="min-w-screen min-h-screen h-fit bg-background">
            <HeaderPostPage />
            <BodyPostPage />
        </section>
    );
};

export default PostPage;
