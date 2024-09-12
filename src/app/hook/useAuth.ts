import { useCallback } from 'react';
import Cookies from 'js-cookie';

const useAuth = () => {
    const isLoggedIn = useCallback((): boolean => {
        const accessToken = Cookies.get('accessToken');
        return !!accessToken;
    }, []);

    return { isLoggedIn };
};

export default useAuth;
