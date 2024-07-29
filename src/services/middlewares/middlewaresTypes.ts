import {
    getAllOrders,
    getAllOrdersDisconnect,
    getAllOrdersError,
    getAllOrdersSuccess
} from "../actions/ws-get-all-orders";

import {
    getUserOrders,
    getUserOrdersDisconnect,
    getUserOrdersError,
    getUserOrdersSuccess
} from "../actions/ws-get-user-orders";

import {
    OPEN_WS_CONNECTION_ALL_ORDERS,
    CLOSE_WS_CONNECTION_ALL_ORDERS,
    OPEN_WS_CONNECTION_USER_ORDERS,
    CLOSE_WS_CONNECTION_USER_ORDERS
} from "../constants";

export const allOrdersTypes = {
    wsStart: OPEN_WS_CONNECTION_ALL_ORDERS,
    wsStop: CLOSE_WS_CONNECTION_ALL_ORDERS,

    onOpen: getAllOrdersSuccess,
    onMessage: getAllOrders,
    onError: getAllOrdersError,
    onClose: getAllOrdersDisconnect,
}

export const userOrdersTypes = {
    wsStart: OPEN_WS_CONNECTION_USER_ORDERS,
    wsStop: CLOSE_WS_CONNECTION_USER_ORDERS,

    onOpen: getUserOrdersSuccess,
    onMessage: getUserOrders,
    onError: getUserOrdersError,
    onClose: getUserOrdersDisconnect,
}
