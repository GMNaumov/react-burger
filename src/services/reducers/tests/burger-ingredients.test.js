import {
    REQUEST_GET_BURGER_INGREDIENTS,
    SUCCESS_GET_BURGER_INGREDIENTS,
    ERROR_GET_BURGER_INGREDIENTS
} from "../../constants";

import {ingridientsReducer} from "../burger-ingredients";

describe("TEST_BURGER_INGREDIENTS_REDUCER", () => {
    const initialState = {
        isLoading: false,
        success: false,
        burgerIngredients: [],
    }

    it("TEST_INIT_STATE", () => {
        expect(ingridientsReducer(undefined, {})).toEqual({
            ...initialState
        })
    })

    it("TEST_REQUEST_GET_BURGER_INGREDIENTS", () => {
        const action = {type: REQUEST_GET_BURGER_INGREDIENTS}
        expect(ingridientsReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })

    it("TEST_SUCCESS_GET_BURGER_INGREDIENTS", () => {
        const burgerIngredients = [{ingridient: 1}, {ingridient: 2}, {ingridient: 3}]
        const action = {type: SUCCESS_GET_BURGER_INGREDIENTS, burgerIngredients: burgerIngredients}
        expect(ingridientsReducer(initialState, action)).toEqual({
            ...initialState,
            success: true,
            burgerIngredients: burgerIngredients
        })
    })

    it("TEST_ERROR_GET_BURGER_INGREDIENTS", () => {
        const action = {type: ERROR_GET_BURGER_INGREDIENTS}
        expect(ingridientsReducer(initialState, action)).toEqual({
            ...initialState,
            success: false,
        })
    })
})