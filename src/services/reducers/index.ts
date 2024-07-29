import { combineReducers } from "redux";
import { ingridientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { currentIngridientReducer } from "./current-ingridient";
import { currentOrderReducer } from "./current-order";

import { orderReducer } from "./order";
import { routerReducer } from "./routers"
import { wsReducerGetAllOrders } from "./get-all-orders"
import { wsReducerGetUserOrders } from "./get-user-orders";

export const rootReducer = combineReducers({
    currentBurgerIngredient: currentIngridientReducer,
    burgerIngredients: ingridientsReducer,
    burgerConstructor: burgerConstructorReducer,
    orderDetails: orderReducer,
    auth: routerReducer,
    allOrders: wsReducerGetAllOrders,
    userOrders: wsReducerGetUserOrders,
    currentOrder: currentOrderReducer,
});

