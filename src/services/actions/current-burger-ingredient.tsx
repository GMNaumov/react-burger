import { ICardTypes } from "../../utils/propsType";
export const GET_CURRENT_BURGER_INGREDIENT: "GET_CURRENT_BURGER_INGREDIENT" = "GET_CURRENT_BURGER_INGREDIENT";
export const REMOVE_CURRENT_BURGER_INGREDIENT: "REMOVE_CURRENT_BURGER_INGREDIENT" = "REMOVE_CURRENT_BURGER_INGREDIENT";

interface IGetCurrentIngridientAction {
    current: ICardTypes;
    type: typeof GET_CURRENT_BURGER_INGREDIENT
}

interface IRemoveCurrentIngridientAction {
    type: typeof REMOVE_CURRENT_BURGER_INGREDIENT
}

export type TCurrentIngridient =
    | IGetCurrentIngridientAction
    | IRemoveCurrentIngridientAction
