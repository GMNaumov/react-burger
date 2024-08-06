import {
    GET_CURRENT_BURGER_INGREDIENT,
    REMOVE_CURRENT_BURGER_INGREDIENT,
    TCurrentIngridient
} from "../actions/current-burger-ingredient";
import { ICardTypes } from "../../utils/propsType";

interface ICurrentIngridients {
    currentBurgerIngredient: null | ICardTypes;
}

export const initialState: ICurrentIngridients = {
    currentBurgerIngredient: null
}

export const currentIngridientReducer = (state = initialState, action: TCurrentIngridient) => {
    switch (action.type) {
        case GET_CURRENT_BURGER_INGREDIENT:
            return {
                ...state,
                currentBurgerIngredient: action.current
            }
        case REMOVE_CURRENT_BURGER_INGREDIENT:
            return {
                ...state,
                currentBurgerIngredient: null
            }
        default:
            return state
    }
}