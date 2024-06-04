import {getBurgerIngredientsRequest} from '../../utils/burger-api';

export const REQUEST_GET_BURGER_INGREDIENTS = '_REQUEST';
export const SUCCESS_GET_BURGER_INGREDIENTS = '_SUCCESS';
export const ERROR_GET_BURGER_INGREDIENTS = '_ERROR';

export const getIngredients = () => {
    return function (dispatch) {
        dispatch({
            type: REQUEST_GET_BURGER_INGREDIENTS,
        })
        getBurgerIngredientsRequest().then(res => {
            if (res.success && res) {
                dispatch({
                    type: SUCCESS_GET_BURGER_INGREDIENTS,
                    ingredients: res.data,
                })
            } else {
                dispatch({
                    type: ERROR_GET_BURGER_INGREDIENTS,
                })
            }
        }).catch(() => {
            dispatch({
                type: ERROR_GET_BURGER_INGREDIENTS,
            })
        })
    }
}