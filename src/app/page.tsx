'use client';

import 'antd/dist/reset.css';
import { Form, Input, Button } from 'antd';
import { useLogin } from './hook';

type ValueSubmit = {
    username: string;
};

const LoginPage = () => {
    const { onLogin, isLoading } = useLogin();
    const onFinish = async (values: ValueSubmit) => {
        const { username } = values;
        if (username) onLogin(username);
    };

    return (
        <section className="min-w-screen min-h-screen bg-background flex flex-col justify-center items-center">
            <h1 className="text-[32px] leading-10">Login</h1>
            {isLoading && <p>Loading...</p>}
            <Form name="simple_form" onFinish={onFinish} layout="vertical">
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: 'Please input something!' },
                    ]}
                >
                    <Input placeholder="Enter username" className="rounded" />
                </Form.Item>

                <Form.Item className="flex justify-center">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-button rounded text-black"
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
};

export default LoginPage;
