'use client';
import 'antd/dist/reset.css';
import LayoutLogin from './layout/login';

interface PageProps {
    params: {
        lng: string;
    };
}

const LoginPage = async ({ params: { lng } }: PageProps) => {
    return (
        <section className="min-w-screen min-h-screen bg-background flex flex-col justify-center items-center">
            <LayoutLogin lng={lng} />
        </section>
    );
};

export default LoginPage;
