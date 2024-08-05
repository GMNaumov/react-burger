import {
    SUCCESS_WS_CONNECTION_USER_ORDERS,
    ERROR_WS_CONNECTION_USER_ORDERS,
    CLOSED_WS_CONNECTION_USER_ORDERS,
    REQUEST_WS_USER_ORDERS
} from "../constants";

import {IOrderTypes} from "../../utils/propsType";
import {TGetUserOrdersActions} from "../actions/ws-get-user-orders"

interface IGetUserOrdersState {
    wsConnected: boolean,
    orders: null | IOrderTypes[],
    total: number,
    totalToday: number,
}

const initialState: IGetUserOrdersState = {
    wsConnected: false,
    orders: null,
    total: 0,
    totalToday: 0,
};

export const wsReducerGetUserOrders = (state = initialState, action: TGetUserOrdersActions): IGetUserOrdersState => {
    switch (action.type) {
        case SUCCESS_WS_CONNECTION_USER_ORDERS:
            return {
                ...state,
                wsConnected: true
            };

        case ERROR_WS_CONNECTION_USER_ORDERS:
            return {
                ...state,
                wsConnected: false
            };

        case CLOSED_WS_CONNECTION_USER_ORDERS:
            return {
                ...state,
                wsConnected: false
            };

        case REQUEST_WS_USER_ORDERS:
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };

        default:
            return state;
    }
};