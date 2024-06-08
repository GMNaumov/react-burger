import {
    ADD_BURGER_COMPONENT,
    ADD_BUN,
    REMOVE_BURGER_COMPONENT,
    COUNT_TOTAL_AMOUNT,
    SORT_BURGER_INGREDIENTS
} from '../actions/burger-constructor';


const initialState = {
    bun: null,
    burgerComponents: [],
    totalPrice: 0,
}

export const burgerConstructorReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case ADD_BUN:
            return {
                ...state,
                bun: payload.burgerIngredient
            }
        case ADD_BURGER_COMPONENT: {
            return {
                ...state,
                burgerComponents: [
                    ...state.burgerComponents,
                    { ...payload.burgerIngredient, uniqid: payload.uniqid }
                ]
            }
        }
        case REMOVE_BURGER_COMPONENT: {
            return {
                ...state,
                burgerComponents: [...state.burgerComponents]
                    .filter(burgerIngredient => burgerIngredient.uniqid !== payload.uniqid)
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
            const item = prevState[payload.from]

            prevState.splice(payload.from, 1)
            prevState.splice(payload.to, 0, item)

            return {
                ...state,
                burgerComponents: prevState,
            }
        }
        default:
            return state
    }

} 