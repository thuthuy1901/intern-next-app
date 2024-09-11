import TokenManager, { injectBearer } from 'brainless-token-manager';
import axios from 'axios';

export const BASE_API = 'https://api-test-web.agiletech.vn';

const tokenManager = new TokenManager({
    getAccessToken: async () => {
        const token = localStorage.getItem('accessToken');
        return `${token}`;
    },
    getRefreshToken: async () => {
        const refreshToken = localStorage.getItem('refreshToken');

        return `${refreshToken}`;
    },
    onInvalidRefreshToken: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    },

    executeRefreshToken: async () => {
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            return {
                token: '',
                refresh_token: '',
            };
        }

        const response = await axiosInstant.post('/auth/refresh-token', {
            refreshToken,
        });
        const { accessToken: accessTokenNew, refreshToken: refreshTokenNew } =
            response.data;

        return {
            token: accessTokenNew,
            refresh_token: refreshTokenNew,
        };
    },
    onRefreshTokenSuccess: ({ token, refresh_token }) => {
        if (token && refresh_token) {
            localStorage.setItem('accessToken', token);
            localStorage.setItem('refreshToken', refresh_token);
        }
    },
});

export const axiosInstant = axios.create({
    baseURL: BASE_API,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const tokenManagerInstance = async (
    request: any,
    suffixUrl: string,
    configs?: any
) => {
    const token: string = configs?.token
        ? configs?.token
        : ((await tokenManager.getToken()) as string);

    return request(suffixUrl, injectBearer(token, configs));
};
