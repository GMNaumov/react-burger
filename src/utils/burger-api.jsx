const NORMA_API = `https://norma.nomoreparties.space/api`;

export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export async function getIngredientsRequest() {
    const res = await fetch(`${NORMA_API}/ingredients`);
    return checkResponse(res);
}

export async function postOrder(ingredients) {
    console.log(ingredients)
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
    return checkResponse(res);
}

export async function registrationRequest(email, password, name) {
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
    return checkResponse(res);
}


export async function getUser() {
    //console.log("Bearer " + getCookie("accessToken"))
    const res = await fetch(`${NORMA_API}/auth/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("accessToken")
        },
    });
    return checkResponse(res);
}

export async function updateUser(name, email, password) {
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
    return checkResponse(res);
}

export async function loginRequest(email, password) {
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
    return checkResponse(res);
}

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
    return checkResponse(res);
}

export async function passwordReset(email) {
    const res = await fetch(`${NORMA_API}/password-reset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
        }),
    });
    return checkResponse(res);
}


export function passwordRecovery(password, token) {
    return fetch(`${NORMA_API}/password-reset/reset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password,
            token
        }),
    }).then(checkResponse)
}


export async function refreshTokens() {
    const token = localStorage.getItem("refreshToken");

    try {
        const res = await fetch(`${NORMA_API}/auth/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token
            }),
        });
        const res_1 = await checkResponse(res);
        let accessToken = res_1.accessToken.split("Bearer ")[1];
        let refreshToken = res_1.refreshToken;

        setCookie("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        return res_1;
    } catch (err) {
        return console.log(err);
    }
}


export function setCookie(name, value, options = {}) {

    options = {
        path: "/",
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

export function getCookie(name) {
    let matches;
    matches = RegExp(new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)")).exec(document.cookie);
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name) {
    setCookie(name, "", {
        "max-age": -1
    })
}