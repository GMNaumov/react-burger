import {
    REQUEST_ORDER,
    SUCCESS_ORDER,
    ERROR_ORDER
} from "../../constants";

import {orderReducer} from "../order";

import {initialState} from "../order";

describe("TEST_ORDER_REDUCER", () => {
    it("TEST_INIT_STATE", () => {
        expect(orderReducer(undefined, {})).toEqual({
            ...initialState
        })
    })

    it("TEST_REQUEST_ORDER", () => {
        const action = {type: REQUEST_ORDER}
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
        })
    })


    it("TEST_SUCCESS_ORDER", () => {
        const order = {name: "name", order: {number: "23234"}}
        const action = {type: SUCCESS_ORDER, ...order}
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
            success: true,
            ...order
        })
    })


    it("TEST_ERROR_ORDER", () => {
        const action = {type: ERROR_ORDER}
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
        })
    })
})