import { getIngredientsRequest } from "../../utils/burger-api";
import { REQUEST_GET_BURGER_INGREDIENTS, SUCCESS_GET_BURGER_INGREDIENTS, ERROR_GET_BURGER_INGREDIENTS } from "../constants";
import { ICardTypes } from "../../utils/propsType"
import { AppDispatch, AppThunk } from "../typesOfStoreAndThunk";

interface IGetIngredientsAction {
    type: typeof REQUEST_GET_BURGER_INGREDIENTS;
}

interface IGetIngredientsSuccessAction {
    type: typeof SUCCESS_GET_BURGER_INGREDIENTS;
    burgerIngredients: Array<ICardTypes>;
}

interface IGetIngredientsFailedAction {
    type: typeof ERROR_GET_BURGER_INGREDIENTS;
}

export type TIngredientsActions =
    | IGetIngredientsAction
    | IGetIngredientsSuccessAction
    | IGetIngredientsFailedAction

const getIngredientsAction = (): IGetIngredientsAction => ({
    type: REQUEST_GET_BURGER_INGREDIENTS
});

const getIngredientsSuccessAction = (
    burgerIngredients: Array<ICardTypes>
): IGetIngredientsSuccessAction => ({
    type: SUCCESS_GET_BURGER_INGREDIENTS,
    burgerIngredients
});

const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
    type: ERROR_GET_BURGER_INGREDIENTS
});


export const getIngredients = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(getIngredientsAction())
        getIngredientsRequest().then(res => {
            if (res && res.success) {
                dispatch(getIngredientsSuccessAction(res.data))
            } else {
                dispatch(getIngredientsFailedAction())
            }
        }).catch(err => {
            dispatch(getIngredientsFailedAction())
        })
    }
}