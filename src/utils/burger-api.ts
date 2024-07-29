import {ICardTypes, IOrderTypes} from "./propsType";
import {getCookie, removeCookie, setCookie} from "typescript-cookie"

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
    data: Array<ICardTypes>
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

export async function postOrder(ingredients: string[]) {
    const res = await fetch(`${NORMA_API}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("accessToken")
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
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("accessToken")
        },
    });
    return await checkResponse<TUserResponse>(res);
}

type TOrdersResponse = TServerResponse<{
    orders: Array<IOrderTypes>
}>

export async function getCurrentOrderRequest(orderNumber: string) {
    const res = await fetch(`${NORMA_API}/orders/${orderNumber}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await checkResponse<TOrdersResponse>(res);
}

export async function updateUser(name: string, email: string, password: string) {
    const res = await fetch(`${NORMA_API}/auth/user`, {
        method: "PATCH",
        body: JSON.stringify({
            name,
            email,
            password
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("accessToken")
        },
    });
    return await checkResponse<TUserResponse>(res);
}

export async function loginRequest(email: string, password: string) {
    const res = await fetch(`${NORMA_API}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
    const token = localStorage.getItem("refreshToken");

    const res = await fetch(`${NORMA_API}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token
        }),
    });
    return await checkResponse<TLogoutAndPasswordResponse>(res);
}

export async function forgotPassword(email: string) {
    try {
        const res = await fetch(`${NORMA_API}/password-reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
            }),
        });
        return await checkResponse<TLogoutAndPasswordResponse>(res);
    } catch (err) {
        return console.log(err);
    }

}

export async function passwordRecovery(password: string, token: string) {
    const res = await fetch(`${NORMA_API}/password-reset/reset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password,
            token
        }),
    });
    return await checkResponse<TLogoutAndPasswordResponse>(res);
}

export function refreshTokens() {
    const token = localStorage.getItem("refreshToken");

    return fetch(`${NORMA_API}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token
        }),
    }).then(res => checkResponse<TRegistrationOrAuthorizationResponse>(res))
        .then(res => {
            let accessToken = res.accessToken.split("Bearer ")[1];
            let refreshToken = res.refreshToken;

            setCookie("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken);
            return res;
        }).catch((err) => {
            if (err.message === "Token is invalid") {
                removeCookie("accessToken")
                localStorage.removeItem("refreshToken")
            } else {
                console.log(err)
            }
        })
}


