import {
    GET_CURRENT_BURGER_INGREDIENT,
    REMOVE_CURRENT_BURGER_INGREDIENT
} from "../../actions/current-burger-ingredient";

import {currentIngridientReducer} from "../current-ingridient";

import {initialState} from "../current-ingridient";


describe("TEST_CURRENT_INGREDIENT_REDUCER", () => {

    it("TEST_INIT_STATE", () => {
        expect(currentIngridientReducer(undefined, {})).toEqual({
            currentBurgerIngredient: null,
        })
    })

    it("TEST_GET_CURRENT_BURGER_INGREDIENT", () => {
        const main = {type: "main"}
        const action = {type: GET_CURRENT_BURGER_INGREDIENT, current: main}
        expect(currentIngridientReducer(initialState, action)).toEqual({
            currentBurgerIngredient: main,
        })
    })

    it("TEST_REMOVE_CURRENT_BURGER_INGREDIENT", () => {
        const action = {type: REMOVE_CURRENT_BURGER_INGREDIENT}
        expect(currentIngridientReducer(initialState, action)).toEqual({
            currentBurgerIngredient: null,
        })
    })
})