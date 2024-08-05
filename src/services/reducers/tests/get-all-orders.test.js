import {
    REQUEST_WS_ALL_ORDERS,
    SUCCESS_WS_CONNECTION_ALL_ORDERS,
    CLOSED_WS_CONNECTION_ALL_ORDERS,
    ERROR_WS_CONNECTION_ALL_ORDERS
} from "../../constants";

import {wsReducerGetAllOrders} from "../get-all-orders";

describe("TEST_GET_ALL_ORDERS_REDUCER", () => {
    const initialState = {
        wsConnected: false,
        orders: [],
        total: 0,
        totalToday: 0,
    }

    it("TEST_INIT_STATE", () => {
        expect(wsReducerGetAllOrders(undefined, {})).toEqual({
            ...initialState
        })
    })

    it("TEST_SUCCESS_WS_CONNECTION_ALL_ORDERS", () => {
        const action = {type: SUCCESS_WS_CONNECTION_ALL_ORDERS}
        expect(wsReducerGetAllOrders(initialState, action)).toEqual({
            ...initialState,
            wsConnected: true,
        })
    })

    it("TEST_ERROR_WS_CONNECTION_ALL_ORDERS", () => {
        const action = {type: ERROR_WS_CONNECTION_ALL_ORDERS}
        expect(wsReducerGetAllOrders(initialState, action)).toEqual({
            ...initialState
        })
    })

    it("TEST_CLOSED_WS_CONNECTION_ALL_ORDERS", () => {
        const action = {type: CLOSED_WS_CONNECTION_ALL_ORDERS}
        expect(wsReducerGetAllOrders(initialState, action)).toEqual({
            ...initialState,
        })
    })

    it("TEST_REQUEST_WS_ALL_ORDERS", () => {
        const data = {
            total: "123",
            totalToday: "345",
            orders: [{order: 1}, {order: 2}, {order: 3}, {order: 4}],
        }
        const action = {type: REQUEST_WS_ALL_ORDERS, payload: data}
        expect(wsReducerGetAllOrders(initialState, action)).toEqual({
            wsConnected: false,
            ...data
        })
    })
})