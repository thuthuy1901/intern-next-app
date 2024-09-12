import { useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useToast from './useToast';
import { BASE_API } from '../service/resquest';
import { useAtom } from 'jotai';
import { username } from '../store';
import Cookies from 'js-cookie';

const useLogin = () => {
    const router = useRouter();
    const [_, setUser] = useAtom(username);
    const { notifySuccess, notifyError } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onLogin = useCallback(async (username: string, lng: string) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_API}/auth/login`, {
                username,
            });

            if (response.data.accessToken) {
                const { accessToken, refreshToken } = response.data;

                router.push(`${lng}/post`);
                Cookies.set('accessToken', accessToken);
                Cookies.set('refreshToken', refreshToken);
                Cookies.set('username', username);

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
