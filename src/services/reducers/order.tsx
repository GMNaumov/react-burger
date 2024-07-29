import { REQUEST_ORDER, SUCCESS_ORDER, ERROR_ORDER } from "../constants";
import { TOrderActions } from "../actions/order"

interface IOrderState {
    isLoading: boolean,
    name: null | string,
    order: {
        number: null | number
    }
    success: boolean,
}

const initialState: IOrderState = {
    isLoading: false,
    name: null,
    order: {
        number: null,
    },
    success: false,
}

export const orderReducer = (state = initialState, action: TOrderActions) => {

    switch (action.type) {
        case REQUEST_ORDER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case SUCCESS_ORDER: {
            return {
                ...state,
                isLoading: false,
                name: action.name,
                order: {
                    number: action.order.number,
                },
                success: true,
            };
        }
        case ERROR_ORDER: {
            return {
                ...state,
                name: null,
                order: {
                    number: null,
                },
                success: false,
            };
        }
        default: {
            return state;
        }
    }
};


