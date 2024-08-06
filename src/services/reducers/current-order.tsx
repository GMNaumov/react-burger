import {
    REQUEST_GET_CURRENT_ORDER,
    SUCCESS_GET_CURRENT_ORDER,
    ERROR_GET_CURRENT_ORDER
} from "../constants";
import {IOrderTypes} from "../../utils/propsType";
import {TCurrentOrderActions} from "../actions/current-order";

interface ICurrentOrder {
    isLoading: boolean,
    order: null | IOrderTypes;
}

export const initialState: ICurrentOrder = {
    isLoading: false,
    order: null,
}

export const currentOrderReducer = (state = initialState, action: TCurrentOrderActions) => {
    switch (action.type) {
        case REQUEST_GET_CURRENT_ORDER:
            return {
                ...state,
                isLoading: true,
            }
        case SUCCESS_GET_CURRENT_ORDER:
            return {
                ...state,
                isLoading: false,
                order: action.order
            }
        case ERROR_GET_CURRENT_ORDER:
            return initialState

        default:
            return state
    }
}