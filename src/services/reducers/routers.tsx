import {
    REQUEST_USER_REGISTRATION,
    SUCCESS_USER_REGISTRATION,
    ERROR_USER_REGISTRATION,
    REQUEST_GET_PROFILE_DATA,
    SUCCESS_GET_PROFILE_DATA,
    ERROR_GET_PROFILE_DATA,
    REQUEST_USER_LOGIN,
    SUCCESS_USER_LOGIN,
    ERROR_USER_LOGIN,
    REQUEST_USER_LOGOUT,
    SUCCESS_USER_LOGOUT,
    ERROR_USER_LOGOUT,
    REQUEST_UPDATE_USER_DATA,
    SUCCESS_UPDATE_USER_DATA,
    ERROR_UPDATE_USER_DATA,
} from "../constants";


import { TRouteType } from "../actions/routers/router-type"

interface IRouterType {
    user: {
        email: string,
        name: string,
    },
    isLogedIn: boolean,
    isUserDataLoaded: boolean,
    isLoading: boolean,
    hasError: boolean
}

export const initialState: IRouterType = {
    user: {
        email: '',
        name: '',
    },
    isLogedIn: false,
    isUserDataLoaded: false,
    isLoading: false,
    hasError: false,
}

export const routerReducer = (state = initialState, action: TRouteType): IRouterType => {

    switch (action.type) {
        case REQUEST_USER_REGISTRATION: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case SUCCESS_USER_REGISTRATION: {
            return {
                isLoading: false,
                isUserDataLoaded: true,
                hasError: false,
                isLogedIn: true,
                user: {
                    email: action.user.email,
                    name: action.user.name,
                },
            };
        }
        case ERROR_USER_REGISTRATION: {
            return {
                ...state,
                hasError: true,
            };
        }

        case REQUEST_USER_LOGIN: {
            return {
                ...initialState,
                isLoading: true,
            };
        }
        case SUCCESS_USER_LOGIN: {
            return {
                isLoading: false,
                isUserDataLoaded: true,
                hasError: false,
                isLogedIn: true,
                user: {
                    email: action.user.email,
                    name: action.user.name,
                },
            };
        }
        case ERROR_USER_LOGIN: {
            return {
                ...state,
                isUserDataLoaded: true,
                hasError: true,
            };
        }

        case REQUEST_USER_LOGOUT: {
            return {
                ...state,
                isLoading: true,

            };
        }
        case SUCCESS_USER_LOGOUT: {
            return {
                ...initialState,
                isUserDataLoaded: true,
            };
        }
        case ERROR_USER_LOGOUT: {
            return {
                ...state,
                isLoading: false,
                isUserDataLoaded: true,
                hasError: true,
            };
        }

        case REQUEST_GET_PROFILE_DATA: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case SUCCESS_GET_PROFILE_DATA: {
            return {
                isLoading: false,
                hasError: false,
                isUserDataLoaded: true,
                isLogedIn: true,
                user: {
                    email: action.user.email,
                    name: action.user.name,
                },
            };
        }
        case ERROR_GET_PROFILE_DATA: {
            return {
                ...state,
                isUserDataLoaded: true,
                hasError: true,
            };
        }

        case REQUEST_UPDATE_USER_DATA: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case SUCCESS_UPDATE_USER_DATA: {
            return {
                isLoading: false,
                hasError: false,
                isUserDataLoaded: true,
                isLogedIn: true,
                user: {
                    email: action.user.email,
                    name: action.user.name,
                },
            };
        }
        case ERROR_UPDATE_USER_DATA: {
            return {
                ...initialState,
                isUserDataLoaded: true,
                hasError: true,
            };
        }
        default: {
            return state;
        }
    }
};

