import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useLogout = () => {
    const router = useRouter();
    const onLogout = useCallback(() => {
        router.push('/');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');
    }, []);

    return { onLogout };
};

export default useLogout;
