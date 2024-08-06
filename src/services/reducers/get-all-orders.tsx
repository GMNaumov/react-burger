import {
    REQUEST_WS_ALL_ORDERS,
    SUCCESS_WS_CONNECTION_ALL_ORDERS,
    CLOSED_WS_CONNECTION_ALL_ORDERS,
    ERROR_WS_CONNECTION_ALL_ORDERS
} from "../constants";

import {IOrderTypes} from "../../utils/propsType";
import {TGetAllOrdersActions} from "../actions/ws-get-all-orders";

interface IGetAllOrdersState {
    wsConnected: boolean;
    orders: Array<IOrderTypes>;
    total: number;
    totalToday: number;
}

export const initialState: IGetAllOrdersState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
};

export const wsReducerGetAllOrders = (
    state = initialState,
    action: TGetAllOrdersActions
): IGetAllOrdersState => {
    switch (action.type) {
        case SUCCESS_WS_CONNECTION_ALL_ORDERS:
            return {
                ...state,
                wsConnected: true,
            };

        case ERROR_WS_CONNECTION_ALL_ORDERS:
            console.log("ERROR_WS_CONNECTION_ALL_ORDERS");
            return {
                ...state,
                wsConnected: false,
            };

        case CLOSED_WS_CONNECTION_ALL_ORDERS:
            return {
                ...state,
                wsConnected: false,
            };

        case REQUEST_WS_ALL_ORDERS:
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
