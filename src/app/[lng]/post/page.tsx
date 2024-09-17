import HeaderPostPage from './component/HeaderPostPage';
import BodyPostPage from './component/BodyPostPage';

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
