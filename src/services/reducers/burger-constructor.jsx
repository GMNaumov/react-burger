import {
    ADD_BURGER_COMPONENT,
    ADD_BUN,
    REMOVE_BURGER_COMPONENT,
    COUNT_TOTAL_AMOUNT,
    SORT_BURGER_INGREDIENTS
} from '../actions/burger-constructor';

import uniqid from 'uniqid';

const initialState = {
    bun: null,
    burgerComponents: [],
    totalPrice: 0,
}

export const burgerConstructorReducer = (state = initialState, action) => {
    const { type, ...rest } = action;

    switch (action.type) {
        case ADD_BUN:
            return {
                ...state,
                bun: rest.burgerIngredient
            }
        case ADD_BURGER_COMPONENT: {
            return {
                ...state,
                burgerComponents: [
                    ...state.burgerComponents,
                    { ...rest.burgerIngredient, uniqid: uniqid() }
                ]
            }
        }
        case REMOVE_BURGER_COMPONENT: {
            return {
                ...state,
                burgerComponents: [...state.burgerComponents]
                    .filter(burgerIngredient => burgerIngredient.uniqid !== rest.burgerIngredient.uniqid)
            }
        }
        case COUNT_TOTAL_AMOUNT: {
            const bunPrice = state.bun === null ? 0 : (state.bun.price * 2);
            return {
                ...state,
                totalPrice: [...state.burgerComponents]
                    .reduce((acc, burgerIngredient) => acc + burgerIngredient.price, 0) + bunPrice
            }
        }
        case SORT_BURGER_INGREDIENTS: {
            const prevState = [...state.burgerComponents];
            const item = prevState[rest.rest.from]

            prevState.splice(rest.rest.from, 1)
            prevState.splice(rest.rest.to, 0, item)

            return {
                ...state,
                burgerComponents: prevState,
            }
        }
        default:
            return state
    }

} 