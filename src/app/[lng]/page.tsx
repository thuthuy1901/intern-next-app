import 'antd/dist/reset.css';
import LayoutLogin from './login/page';

interface PageProps {
    params: {
        lng: string;
    };
}

const LoginPage = async ({ params: { lng } }: PageProps) => {
    return <LayoutLogin lng={lng} />;
};

export default LoginPage;
