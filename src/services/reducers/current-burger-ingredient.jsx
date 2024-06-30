import {
    GET_CURRENT_BURGER_INGREDIENT,
    REMOVE_CURRENT_BURGER_INGREDIENT,
} from "../actions/current-burger-ingredient";

const initialState = {
    currentBurgerIngredient: null
}

export const currentBurgerIngredientReducer = (state = initialState, action) => {
    const { type, ...current } = action;
    switch (action.type) {
        case GET_CURRENT_BURGER_INGREDIENT:
            return {
                ...state,
                currentBurgerIngredient: current.current
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