import { postOrder, refreshTokens } from "../../utils/burger-api";
import { REQUEST_ORDER, SUCCESS_ORDER, ERROR_ORDER } from "../constants";
import { AppDispatch, AppThunk } from "../typesOfStoreAndThunk";

interface IGetOrderRequestAction {
    type: typeof REQUEST_ORDER;
}

interface IGetOrderSuccessAction {
    type: typeof SUCCESS_ORDER;
    name: string;
    order: {
        number: number
    }
}

interface IGetOrderErrorAction {
    type: typeof ERROR_ORDER;
}

export type TOrderActions =
    | IGetOrderRequestAction
    | IGetOrderSuccessAction
    | IGetOrderErrorAction

const getOrderAction = (): IGetOrderRequestAction => ({
    type: REQUEST_ORDER
});

const getIngredientsSuccessAction = (
    name: string,
    order: {
        number: number;
    }
): IGetOrderSuccessAction => ({
    type: SUCCESS_ORDER,
    name,
    order
});

const getOrderErrorAction = (): IGetOrderErrorAction => ({
    type: ERROR_ORDER
});


export const getOrderDetails = (ingredients: string[]): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(getOrderAction())
        postOrder(ingredients).then(res => {
            if (res && res.success) {
                dispatch(getIngredientsSuccessAction(res.name, res.order))
            } else {
                dispatch(getOrderErrorAction())
            }
        }).catch(err => {
            if (err.message === "jwt expired") {
                refreshTokens().then(() => dispatch(getOrderDetails(ingredients)))
            } else {
                dispatch(getOrderErrorAction())
            }
        })
    }
}
