import { IOrderTypes } from "../../utils/propsType";
import {
    OPEN_WS_CONNECTION_ALL_ORDERS,
    CLOSE_WS_CONNECTION_ALL_ORDERS,
    SUCCESS_WS_CONNECTION_ALL_ORDERS,
    ERROR_WS_CONNECTION_ALL_ORDERS,
    CLOSED_WS_CONNECTION_ALL_ORDERS,
    REQUEST_WS_ALL_ORDERS
} from "../constants";

export interface IGetAllOrdersConnect {
    type: typeof OPEN_WS_CONNECTION_ALL_ORDERS
    payload: string
}

export interface ICloseAllOrdersConnect {
    type: typeof CLOSE_WS_CONNECTION_ALL_ORDERS,

}
export interface IGetAllOrdersSuccess {
    type: typeof SUCCESS_WS_CONNECTION_ALL_ORDERS
    payload: Event
}
export interface IGetAllOrdersError {
    type: typeof ERROR_WS_CONNECTION_ALL_ORDERS
    payload: Event
}
export interface IGetAllOrdersDisconnect {
    type: typeof CLOSED_WS_CONNECTION_ALL_ORDERS
    payload: Event
}

export interface IGetAllOrders {
    type: typeof REQUEST_WS_ALL_ORDERS,
    payload: {
        orders: Array<IOrderTypes>
        total: number,
        totalToday: number
    }
}

export type TGetAllOrdersActions =
    | IGetAllOrdersConnect
    | ICloseAllOrdersConnect
    | IGetAllOrdersSuccess
    | IGetAllOrdersError
    | IGetAllOrdersDisconnect
    | IGetAllOrders

export const getAllOrdersConnect = (
    url: string
): IGetAllOrdersConnect => ({
    type: OPEN_WS_CONNECTION_ALL_ORDERS,
    payload: url,
})

export const getAllOrdersSuccess = (
    event: Event,
): IGetAllOrdersSuccess => ({
    type: SUCCESS_WS_CONNECTION_ALL_ORDERS,
    payload: event,
})

export const getAllOrdersError = (
    event: Event,
): IGetAllOrdersError => ({
    type: ERROR_WS_CONNECTION_ALL_ORDERS,
    payload: event
})

export const getAllOrdersDisconnect = (
    event: Event,
): IGetAllOrdersDisconnect => ({
    type: CLOSED_WS_CONNECTION_ALL_ORDERS,
    payload: event,
})

export const closeAllOrders = (): ICloseAllOrdersConnect => ({
    type: CLOSE_WS_CONNECTION_ALL_ORDERS,
})

export const getAllOrders = (
    event: MessageEvent,
): IGetAllOrders => {
    const data = JSON.parse(event.data);
    return {
        type: REQUEST_WS_ALL_ORDERS,
        payload: {
            orders: data.orders,
            total: data.total,
            totalToday: data.totalToday,
        }
    }
}