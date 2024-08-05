import {
    REQUEST_GET_CURRENT_ORDER,
    SUCCESS_GET_CURRENT_ORDER,
    ERROR_GET_CURRENT_ORDER
} from "../../constants";

import {currentOrderReducer} from "../current-order";

describe("TEST_CURRENT_ORDER_REDUCER", () => {
    const initialState = {
        isLoading: false,
        order: null,
    }

    it("TEST_INIT_STATE", () => {
        expect(currentOrderReducer(undefined, {})).toEqual({
            ...initialState,
            order: null,
        })
    })

    it("TEST_REQUEST_GET_CURRENT_ORDER", () => {
        const action = {type: REQUEST_GET_CURRENT_ORDER}
        expect(currentOrderReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
        })
    })

    it("TEST_SUCCESS_GET_CURRENT_ORDER", () => {
        const action = {type: SUCCESS_GET_CURRENT_ORDER, order: {number: "1"}}
        expect(currentOrderReducer(initialState, action)).toEqual({
            ...initialState,
            order: {number: "1"}
        })
    })

    it("TEST_ERROR_GET_CURRENT_ORDER", () => {
        const action = {type: ERROR_GET_CURRENT_ORDER}
        expect(currentOrderReducer(initialState, action)).toEqual({
            ...initialState,
        })
    })
})