import {
    REQUEST_GET_BURGER_INGREDIENTS,
    SUCCESS_GET_BURGER_INGREDIENTS,
    ERROR_GET_BURGER_INGREDIENTS
} from "../actions/burger-ingredients";

const initialState = {
    isLoading: false,
    succes: false,
    burgerIngredients: [],
}


export const burgerIngredientsReducer = (state = initialState, action) => {
    const { type, ...rest } = action;
    switch (action.type) {
        case REQUEST_GET_BURGER_INGREDIENTS: {
            return {
                ...state,
                isLoading: true
            };
        }
        case SUCCESS_GET_BURGER_INGREDIENTS: {
            return {
                ...state,
                isLoading: false,
                success: true,
                burgerIngredients: rest.ingredients,
            };
        }
        case ERROR_GET_BURGER_INGREDIENTS: {
            return {
                ...state,
                burgerIngredients: [],
                isLoading: false,
                success: false,
            };
        }
        default: {
            return state;
        }
    }
};


