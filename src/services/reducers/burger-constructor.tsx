import {
  ADD_BURGER_COMPONENT,
  ADD_BUN,
  REMOVE_BURGER_COMPONENT,
  REMOVE_BURGER,
  COUNT_TOTAL_AMOUNT,
  SORT_BURGER_INGREDIENTS,
  TConstructorActions,
} from "../actions/burger-constructor";
import { ICardTypes } from "../../utils/propsType";

import uniqid from "uniqid";

interface IConsructorType {
  bun: null | ICardTypes;
  currentBurgerIngredient: [] | Array<ICardTypes>;
  totalPrice: number;
}

const initialState: IConsructorType = {
  bun: null,
  currentBurgerIngredient: [],
  totalPrice: 0,
};

export const burgerConstructorReducer = (
  state = initialState,
  action: TConstructorActions
): IConsructorType => {
  switch (action.type) {
    case ADD_BUN:
      return {
        ...state,
        bun: action.ingridient,
      };
    case ADD_BURGER_COMPONENT: {
      return {
        ...state,
        currentBurgerIngredient: [
          ...state.currentBurgerIngredient,
          { ...action.ingridient, uniqid: uniqid() },
        ],
      };
    }
    case REMOVE_BURGER_COMPONENT: {
      return {
        ...state,
        currentBurgerIngredient: [...state.currentBurgerIngredient].filter(
          (ingridient) => ingridient.uniqid !== action.ingridient.uniqid
        ),
      };
    }
    case REMOVE_BURGER: {
      return {
        ...state,
        bun: null,
        currentBurgerIngredient: [],
        totalPrice: 0,
      };
    }
    case COUNT_TOTAL_AMOUNT: {
      const bunPrice = state.bun === null ? 0 : state.bun.price * 2;
      return {
        ...state,
        totalPrice:
          [...state.currentBurgerIngredient].reduce(
            (acc, ingridient) => acc + ingridient.price,
            0
          ) + bunPrice,
      };
    }
    case SORT_BURGER_INGREDIENTS: {
      const prevState = [...state.currentBurgerIngredient];
      const item = prevState[action.rest.from];

      prevState.splice(action.rest.from, 1);
      prevState.splice(action.rest.to, 0, item);

      return {
        ...state,
        currentBurgerIngredient: prevState,
      };
    }
    default:
      return state;
  }
};
