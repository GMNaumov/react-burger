import {getIngredientsRequest} from '../../utils/burger-api';

export const REQUEST_GET_BURGER_INGREDIENTS = 'REQUEST_GET_BURGER_INGREDIENTS';
export const SUCCESS_GET_BURGER_INGREDIENTS = 'SUCCESS_GET_BURGER_INGREDIENTS';
export const ERROR_GET_BURGER_INGREDIENTS = 'ERROR_GET_BURGER_INGREDIENTS';

export const getIngredients = () => {
    return function (dispatch) {
        dispatch({
            type: REQUEST_GET_BURGER_INGREDIENTS,
        })
        getIngredientsRequest().then(res => {
            if (res && res.success) {
                dispatch({
                    type: SUCCESS_GET_BURGER_INGREDIENTS,
                    ingredients: res.data,
                })
            } else {
                dispatch({
                    type: ERROR_GET_BURGER_INGREDIENTS,
                })
            }
        }).catch(err => {
            dispatch({
                type: ERROR_GET_BURGER_INGREDIENTS,
            })
        })
    }
}