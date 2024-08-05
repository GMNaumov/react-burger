import {
    REQUEST_WS_USER_ORDERS,
    SUCCESS_WS_CONNECTION_USER_ORDERS,
    CLOSED_WS_CONNECTION_USER_ORDERS,
    ERROR_WS_CONNECTION_USER_ORDERS
} from "../../constants";

import {wsReducerGetUserOrders} from "../get-user-orders";

describe("TEST_USER_ORDER_REDUCER", () => {
    const initialState = {
        wsConnected: false,
        orders: null,
        total: 0,
        totalToday: 0,
    }

    it("TEST_INIT_STATE", () => {
        expect(wsReducerGetUserOrders(undefined, {})).toEqual({
            ...initialState
        })
    })

    it("TEST_SUCCESS_WS_CONNECTION_USER_ORDERS", () => {
        const action = {type: SUCCESS_WS_CONNECTION_USER_ORDERS}
        expect(wsReducerGetUserOrders(initialState, action)).toEqual({
            ...initialState,
            wsConnected: true,
        })
    })

    it("TEST_ERROR_WS_CONNECTION_USER_ORDERS", () => {
        const action = {type: ERROR_WS_CONNECTION_USER_ORDERS}
        expect(wsReducerGetUserOrders(initialState, action)).toEqual({
            ...initialState
        })
    })

    it("TEST_CLOSED_WS_CONNECTION_USER_ORDERS", () => {
        const action = {type: CLOSED_WS_CONNECTION_USER_ORDERS}
        expect(wsReducerGetUserOrders(initialState, action)).toEqual({
            ...initialState,
        })
    })

    it("TEST_REQUEST_WS_USER_ORDERS", () => {
        const data = {
            total: "10",
            totalToday: "5",
            orders: [{order: 1}, {order: 2}],
        }
        const action = {type: REQUEST_WS_USER_ORDERS, payload: data}
        expect(wsReducerGetUserOrders(initialState, action)).toEqual({
            wsConnected: false,
            ...data
        })
    })
})