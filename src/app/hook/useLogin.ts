import { useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useToast from './useToast';
import { BASE_API } from '../service/resquest';
import { useAtom } from 'jotai';
import { username } from '../store';

const useLogin = () => {
    const router = useRouter();
    const [_, setUser] = useAtom(username);
    const { notifySuccess, notifyError } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onLogin = useCallback(async (username: string) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_API}/auth/login`, {
                username,
            });

            if (response.data.accessToken) {
                const { accessToken, refreshToken } = response.data;

                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('username', username);
                notifySuccess('Login was successful!');
                setUser(username);
                router.push('/post');
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
