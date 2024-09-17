import { useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useToast from './useToast';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { API_PATH, BASE_API } from '@/api/constant';
import { username } from '@/store/jotai';
import { Login } from '@/store/constant';

const useLogin = () => {
    const router = useRouter();
    const [_, setUser] = useAtom(username);
    const { notifySuccess, notifyError } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onLogin = useCallback(async (username: string) => {
        setIsLoading(true);
        try {
            const response = await axios.post(API_PATH.AUTH_LOGIN, {
                username,
            });

            if (response.data.accessToken) {
                const { accessToken, refreshToken } = response.data;

                router.push(`/post`);
                Cookies.set(Login.Access_Token, accessToken);
                Cookies.set(Login.Refresh_Token, refreshToken);
                Cookies.set(Login.Username, username);

                notifySuccess('Login was successful!');
                setUser(username);
            } else {
                throw new Error('Login fail');
            }
        } catch {
            notifyError('Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { onLogin, isLoading };
};

export default useLogin;
