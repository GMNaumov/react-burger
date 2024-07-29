import {
    REQUEST_GET_BURGER_INGREDIENTS,
    SUCCESS_GET_BURGER_INGREDIENTS,
    ERROR_GET_BURGER_INGREDIENTS
} from "../constants";
import { ICardTypes } from "../../utils/propsType"
import { TIngredientsActions } from "../actions/burger-ingredients"

interface IIngridientsState {
    isLoading: boolean
    success: boolean,
    burgerIngredients: Array<ICardTypes>;
}

const initialState: IIngridientsState = {
    isLoading: false,
    success: false,
    burgerIngredients: [],
}


export const ingridientsReducer = (state = initialState, action: TIngredientsActions) => {
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
                burgerIngredients: action.burgerIngredients,
            };
        }
        case ERROR_GET_BURGER_INGREDIENTS: {
            return {
                ...state,
                isLoading: false,
                success: false,
            };
        }
        default: {
            return state;
        }
    }
};


