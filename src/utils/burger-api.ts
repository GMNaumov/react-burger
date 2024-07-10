import {ICardTypes} from './propsType';
import {getCookie, setCookie} from 'typescript-cookie'

const NORMA_API = `https://norma.nomoreparties.space/api`;

export const checkResponse = <T>(res: Response): Promise<T> => {
    return !res.ok ? res.json().then((err) => {
        return Promise.reject(err);
    }) : res.json();
};

type TServerResponse<T> = {
    success: boolean;
} & T

type TIngredientsResponse = TServerResponse<{
    ingredients: Array<ICardTypes>
}>

export async function getIngredientsRequest() {
    const res = await fetch(`${NORMA_API}/ingredients`);
    return await checkResponse<TIngredientsResponse>(res);
}

type TOrderResponse = TServerResponse<{
    name: string;
    order: {
        number: number;
    }
}>

export async function postOrder(ingredients: Array<ICardTypes>) {
    const res = await fetch(`${NORMA_API}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({
            ingredients,
        }),
    });
    return await checkResponse<TOrderResponse>(res);
}

type TUserResponse = TServerResponse<{
    user: {
        email: string,
        name: string,
    },
}>

type TRegistrationOrAuthorizationResponse = TUserResponse & {
    accessToken: string;
    refreshToken: string;
};

export async function registrationRequest(email: string, password: string, name: string) {
    const res = await fetch(`${NORMA_API}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password
        }),
    });
    return await checkResponse<TRegistrationOrAuthorizationResponse>(res);
}

export async function getUser() {
    const res = await fetch(`${NORMA_API}/auth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
    });
    return await checkResponse<TUserResponse>(res);
}

export async function updateUser(name: string, email: string, password: string) {
    const res = await fetch(`${NORMA_API}/auth/user`, {
        method: 'PATCH',
        body: JSON.stringify({
            name,
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
    });
    return await checkResponse<TUserResponse>(res);
}

export async function loginRequest(email: string, password: string) {
    const res = await fetch(`${NORMA_API}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        }),
    });
    return await checkResponse<TRegistrationOrAuthorizationResponse>(res);
}


type TLogoutAndPasswordResponse = TServerResponse<{
    message: string;
}>

export async function logoutRequest() {
    const token = localStorage.getItem('refreshToken');

    const res = await fetch(`${NORMA_API}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token
        }),
    });
    return await checkResponse<TLogoutAndPasswordResponse>(res);
}

export async function passwordReset(email: string) {
    const res = await fetch(`${NORMA_API}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
        }),
    });
    return await checkResponse<TLogoutAndPasswordResponse>(res);
}


export async function passwordRecovery(password: string, token: string) {
    const res = await fetch(`${NORMA_API}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password,
            token
        }),
    });
    return await checkResponse<TLogoutAndPasswordResponse>(res);
}


export async function refreshTokens() {
    const token = localStorage.getItem('refreshToken');

    try {
        const res = await fetch(`${NORMA_API}/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token
            }),
        });
        const res_2 = await checkResponse<TRegistrationOrAuthorizationResponse>(res);
        let accessToken = res_2.accessToken.split('Bearer ')[1];
        let refreshToken = res_2.refreshToken;

        setCookie('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return res_2;
    } catch (err) {
        return console.log(err);
    }
}


