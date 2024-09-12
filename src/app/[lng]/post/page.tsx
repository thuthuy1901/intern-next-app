import HeaderPostPage from './component/HeaderPostPage';
import BodyPostPage from './component/BodyPostPage';
import { useTranslation } from '@/app/i18n';
import { useAtom } from 'jotai';
import { getLang } from '@/app/store';

interface PageProps {
    params: {
        lng: string;
    };
}
const PostPage = async ({ params: { lng } }: PageProps) => {
    return (
        <section className="min-w-screen min-h-screen h-fit bg-background">
            <HeaderPostPage lng={lng} />
            <BodyPostPage lng={lng} />
        </section>
    );
};

export default PostPage;
