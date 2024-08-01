import { ICardTypes } from "../../utils/propsType";

export const ADD_BURGER_COMPONENT: "ADD_BURGER_COMPONENT" =
  "ADD_BURGER_COMPONENT";
export const REMOVE_BURGER_COMPONENT: "REMOVE_BURGER_COMPONENT" =
  "REMOVE_BURGER_COMPONENT";
export const REMOVE_BURGER: "REMOVE_BURGER" = "REMOVE_BURGER";
export const ADD_BUN: "ADD_BUN" = "ADD_BUN";
export const SORT_BURGER_INGREDIENTS: "SORT_BURGER_INGREDIENTS" =
  "SORT_BURGER_INGREDIENTS";
export const COUNT_TOTAL_AMOUNT: "COUNT_TOTAL_AMOUNT" = "COUNT_TOTAL_AMOUNT";

interface IAddIngridient {
  ingridient: ICardTypes;
  type: typeof ADD_BURGER_COMPONENT;
}

interface IAddBun {
  ingridient: ICardTypes;
  type: typeof ADD_BUN;
}

interface IRemoveIngridient {
  ingridient: ICardTypes;
  type: typeof REMOVE_BURGER_COMPONENT;
}

interface IRemoveIngridients {
  type: typeof REMOVE_BURGER;
}

interface ISetTotalPrice {
  type: typeof COUNT_TOTAL_AMOUNT;
}

interface ISortIngridients {
  rest: {
    from: number;
    to: number;
  };
  type: typeof SORT_BURGER_INGREDIENTS;
}

export type TConstructorActions =
  | IAddIngridient
  | IAddBun
  | IRemoveIngridient
  | IRemoveIngridients
  | ISetTotalPrice
  | ISortIngridients
  | ISetTotalPrice;
