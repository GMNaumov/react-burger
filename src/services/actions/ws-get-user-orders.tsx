import { IOrderTypes } from "../../utils/propsType";
import {
    OPEN_WS_CONNECTION_USER_ORDERS,
    SUCCESS_WS_CONNECTION_USER_ORDERS,
    ERROR_WS_CONNECTION_USER_ORDERS,
    CLOSED_WS_CONNECTION_USER_ORDERS,
    REQUEST_WS_USER_ORDERS,
    CLOSE_WS_CONNECTION_USER_ORDERS
} from "../constants";

export interface IGetUserOrdersConnect {
    type: typeof OPEN_WS_CONNECTION_USER_ORDERS
    payload: string
}

export interface ICloseUserOrdersConnect {
    type: typeof CLOSE_WS_CONNECTION_USER_ORDERS,
}

export interface IGetUserOrdersSuccess {
    type: typeof SUCCESS_WS_CONNECTION_USER_ORDERS
    payload: Event
}

export interface IGetUserOrdersError {
    type: typeof ERROR_WS_CONNECTION_USER_ORDERS
    payload: Event
}

export interface IGetUserOrdersDisconnect {
    type: typeof CLOSED_WS_CONNECTION_USER_ORDERS
    payload: Event
}

export interface IGetUserOrders {
    type: typeof REQUEST_WS_USER_ORDERS
    payload: {
        orders: Array<IOrderTypes>
        total: number,
        totalToday: number
    }
}

export type TGetUserOrdersActions =
    | IGetUserOrdersConnect
    | ICloseUserOrdersConnect
    | IGetUserOrdersSuccess
    | IGetUserOrdersError
    | IGetUserOrdersDisconnect
    | IGetUserOrders

export const getUserOrdersConnect = (
    url: string
): IGetUserOrdersConnect => ({
    type: OPEN_WS_CONNECTION_USER_ORDERS,
    payload: url,
})

export const getUserOrdersSuccess = (
    event: Event,
): IGetUserOrdersSuccess => ({
    type: SUCCESS_WS_CONNECTION_USER_ORDERS,
    payload: event,
})

export const getUserOrdersError = (
    event: Event,
): IGetUserOrdersError => ({
    type: ERROR_WS_CONNECTION_USER_ORDERS,
    payload: event
})

export const getUserOrdersDisconnect = (
    event: Event,
): IGetUserOrdersDisconnect => ({
    type: CLOSED_WS_CONNECTION_USER_ORDERS,
    payload: event,
})

export const closeUserOrders = () => ({
    type: CLOSE_WS_CONNECTION_USER_ORDERS,
})

export const getUserOrders = (
    event: MessageEvent,
): IGetUserOrders => {
    const data = JSON.parse(event.data);

    return {
        type: REQUEST_WS_USER_ORDERS,
        payload: {
            orders: data.orders,
            total: data.total,
            totalToday: data.totalToday,
        }
    }
}