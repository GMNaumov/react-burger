import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { burgerConstructorReducer } from './burger-constructor';
import { currentBurgerIngredientReducer } from './current-burger-ingredient';
import { orderReducer } from './order';



export const rootReducer = combineReducers({
    currentBurgerIngredient: currentBurgerIngredientReducer,
    burgerIngredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    orderDetails: orderReducer,
});