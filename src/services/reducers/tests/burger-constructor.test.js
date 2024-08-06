import {
    ADD_BUN,
    ADD_BURGER_COMPONENT,
    REMOVE_BURGER_COMPONENT,
    COUNT_TOTAL_AMOUNT,
    SORT_BURGER_INGREDIENTS
} from "../../actions/burger-constructor";

import {burgerConstructorReducer} from "../burger-constructor";

import {initialState} from "../burger-constructor";


describe("TEST_BURGER_CONSTRUCTOR_REDUCER", () => {
    it("TEST_INIT_STATE", () => {
        expect(burgerConstructorReducer(undefined, {})).toEqual({
            bun: null,
            currentBurgerIngredient: [],
            totalPrice: 0,
        })
    })

    it("TEST_ADD_BUN", () => {
        const bun = {type: "bun"}
        const action = {type: ADD_BUN, ingridient: bun}
        expect(burgerConstructorReducer(initialState, action)).toEqual({
            ...initialState,
            bun: bun,
        })
    })

    it("TEST_ADD_BURGER_COMPONENT", () => {
        let result;
        const burgerIngredient = {type: "main"}
        const action = {type: ADD_BURGER_COMPONENT, burgerIngredient: burgerIngredient}
        result = burgerConstructorReducer(initialState, action);
        expect(result.currentBurgerIngredient.length).toBe(1)


        const ingridient2 = {type: "sauce"}
        const action2 = {type: ADD_BURGER_COMPONENT, burgerIngredient: ingridient2}
        result = burgerConstructorReducer(result, action2);
        expect(result.currentBurgerIngredient.length).toBe(2)
    })

    it("TEST_REMOVE_BURGER_COMPONENT", () => {
        const currentInitialState = {
            bun: {type: "bun"},
            currentBurgerIngredient: [
                {type: "main", uniqid: "12345"},
                {type: "sauce", uniqid: "67890"},
            ],
            totalPrice: 0,
        }
        let result;
        const action = {type: REMOVE_BURGER_COMPONENT, ingridient: {type: "main", uniqid: "12345"}}
        result = burgerConstructorReducer(currentInitialState, action);
        expect(result.currentBurgerIngredient.length).toBe(1)

        const action2 = {type: REMOVE_BURGER_COMPONENT, ingridient: {type: "sauce", uniqid: "67890"}}
        result = burgerConstructorReducer(result, action2);
        expect(result.currentBurgerIngredient.length).toBe(0)
    })


    it("TEST_COUNT_TOTAL_AMOUNT", () => {
        const currentInitialState = {
            bun: {type: "bun", price: 500},
            currentBurgerIngredient: [
                {type: "main", uniqid: "12345", price: 1000},
                {type: "sauce", uniqid: "67890", price: 500},
            ],
            totalPrice: 0,
        }
        let result;
        const action = {type: COUNT_TOTAL_AMOUNT}
        result = burgerConstructorReducer(currentInitialState, action);
        expect(result.totalPrice).toBe(2500)
    })


    it("TEST_SORT_BURGER_INGREDIENTS", () => {
        const currentInitialState = {
            bun: {type: "bun", price: 500},
            currentBurgerIngredient: [
                {type: "main", uniqid: "12345", price: 1000},
                {type: "sauce", uniqid: "67890", price: 500},
                {type: "sauce", uniqid: "34245", price: 700},
            ],
            totalPrice: 0,
        }
        const action = {type: SORT_BURGER_INGREDIENTS, rest: {from: 1, to: 2}}
        const result = burgerConstructorReducer(currentInitialState, action);
        expect(result.currentBurgerIngredient).toEqual([
            {type: "main", uniqid: "12345", price: 1000},
            {type: "sauce", uniqid: "34245", price: 700},
            {type: "sauce", uniqid: "67890", price: 500},
        ])
    })
})