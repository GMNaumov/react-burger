import { getCurrentOrderRequest, refreshTokens } from "../../utils/burger-api";
import { REQUEST_GET_CURRENT_ORDER, SUCCESS_GET_CURRENT_ORDER, ERROR_GET_CURRENT_ORDER } from "../constants";
import { IOrderTypes } from "../../utils/propsType"
import { AppDispatch, AppThunk } from "../typesOfStoreAndThunk";

interface IGetCurrentOrderAction {
    type: typeof REQUEST_GET_CURRENT_ORDER;
}

interface IGetCurrentOrderSuccessAction {
    type: typeof SUCCESS_GET_CURRENT_ORDER;
    order: IOrderTypes;
}

interface IGetCurrentOrderFailedAction {
    type: typeof ERROR_GET_CURRENT_ORDER;
}

export type TCurrentOrderActions =
    | IGetCurrentOrderAction
    | IGetCurrentOrderSuccessAction
    | IGetCurrentOrderFailedAction

const getCurrentOrderAction = (): IGetCurrentOrderAction => ({
    type: REQUEST_GET_CURRENT_ORDER
});

const getCurrentOrderSuccessAction = (
    order: IOrderTypes,
): IGetCurrentOrderSuccessAction => ({
    type: SUCCESS_GET_CURRENT_ORDER,
    order
});

const getCurrentOrderErrorAction = (): IGetCurrentOrderFailedAction => ({
    type: ERROR_GET_CURRENT_ORDER
});


interface IAuthorization {
    [key: string]: string,
}


export const getCurrentOrder = (pathname: string): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(getCurrentOrderAction())
        getCurrentOrderRequest(pathname).then(res => {
            if (res && res.success) {
                dispatch(getCurrentOrderSuccessAction(res.orders[0]))
            }
        }).catch(err => {
            console.log(err)
            if (err.message === "jwt expired") {
                refreshTokens().then(() => dispatch(getCurrentOrder(pathname)))
            }
            dispatch(getCurrentOrderErrorAction())
        })
    }
}