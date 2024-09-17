'use client';
import { useLogin } from '@/hook';
import { useTranslation } from '@/i18n';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';

type ValueSubmit = {
    username: string;
};

const LayoutLogin = ({ lng }: { lng: string }) => {
    const { onLogin, isLoading } = useLogin();
    const onFinish = async (values: ValueSubmit) => {
        const { username } = values;
        if (username) onLogin(username, lng);
    };

    const [t, setT] = useState<((key: string) => string) | null>(null);
    useEffect(() => {
        const loadTranslation = async () => {
            const { t } = await useTranslation(lng);
            setT(() => t);
        };

        loadTranslation();
    }, [lng]);

    return (
        <section className="min-w-screen min-h-screen bg-background flex flex-col justify-center items-center">
            <h1 className="text-[32px] leading-10">{t?.('title')}</h1>
            {isLoading && <p>Loading...</p>}
            <Form name="simple_form" onFinish={onFinish} layout="vertical">
                <Form.Item
                    label={t?.('label')}
                    name="username"
                    rules={[
                        { required: true, message: 'Please input something!' },
                    ]}
                >
                    <Input
                        placeholder={t?.('placeholder')}
                        className="rounded"
                    />
                </Form.Item>

                <Form.Item className="flex justify-center">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-button rounded text-black"
                    >
                        {t?.('button')}
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
};

export default LayoutLogin;
