const NORMA_API = `https://norma.nomoreparties.space/api`;


export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};


export async function getBurgerIngredientsRequest() {
    const res = await fetch(`${NORMA_API}/ingredients`);
    return checkResponse(res);
}


export async function postOrder(ingredients) {
    const res = await fetch(`${NORMA_API}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ingredients,
        }),
    });
    return checkResponse(res);
}
