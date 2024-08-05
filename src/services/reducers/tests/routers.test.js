import {
    REQUEST_USER_REGISTRATION,
    REQUEST_USER_LOGIN,
    REQUEST_GET_PROFILE_DATA,
    REQUEST_USER_LOGOUT,
    SUCCESS_USER_LOGIN,
    SUCCESS_USER_LOGOUT,
    SUCCESS_GET_PROFILE_DATA,
    ERROR_USER_LOGIN,
    ERROR_USER_LOGOUT,
    ERROR_USER_REGISTRATION
} from "../../constants";

import {routerReducer} from "../routers";

describe("TEST_ROUTER_REDUCER", () => {

    const initialState = {
        user: {
            email: "",
            name: "",
        },
        isLogedIn: false,
        isUserDataLoaded: false,
        isLoading: false,
        hasError: false,
    }

    it("TEST_INIT_STATE", () => {
        expect(routerReducer(undefined, {})).toEqual({
            ...initialState
        })
    })


    it("TEST_REQUEST_USER_REGISTRATION", () => {
        const action = {type: REQUEST_USER_REGISTRATION}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })


    it("TEST_ERROR_USER_REGISTRATION", () => {
        const action = {type: ERROR_USER_REGISTRATION}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            hasError: true
        })
    })

    it("TEST_REQUEST_USER_LOGIN", () => {
        const action = {type: REQUEST_USER_LOGIN}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })


    it("TEST_SUCCESS_USER_LOGIN", () => {
        const data = {email: "u@mail.ru", name: "u"}
        const action = {type: SUCCESS_USER_LOGIN, user: data}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isUserDataLoaded: true,
            isLogedIn: true,
            user: {...data}
        })
    })


    it("TEST_ERROR_USER_LOGIN", () => {
        const action = {type: ERROR_USER_LOGIN}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isUserDataLoaded: true,
            hasError: true,
        })
    })


    it("TEST_REQUEST_USER_LOGOUT", () => {
        const action = {type: REQUEST_USER_LOGOUT}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })

    it("TEST_SUCCESS_USER_LOGOUT", () => {
        const action = {type: SUCCESS_USER_LOGOUT}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isUserDataLoaded: true,
        })
    })

    it("TEST_ERROR_USER_LOGOUT", () => {
        const action = {type: ERROR_USER_LOGOUT}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            isUserDataLoaded: true,
            hasError: true,
        })
    })

    it("TEST_REQUEST_GET_PROFILE_DATA", () => {
        const action = {type: REQUEST_GET_PROFILE_DATA}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })

    it("TEST_SUCCESS_GET_PROFILE_DATA", () => {
        const data = {email: "u@mail.ru", name: "u"}
        const action = {type: SUCCESS_GET_PROFILE_DATA, user: data}
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isUserDataLoaded: true,
            isLogedIn: true,
            user: {...data}
        })
    })
})