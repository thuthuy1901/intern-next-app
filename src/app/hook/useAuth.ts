import { useCallback } from 'react';

const useAuth = () => {
    const isLoggedIn = useCallback((): boolean => {
        const accessToken = localStorage.getItem('accessToken');
        return !!accessToken;
    }, []);

    return { isLoggedIn };
};

export default useAuth;
