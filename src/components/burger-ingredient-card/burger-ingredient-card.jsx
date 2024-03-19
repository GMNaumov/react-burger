import React from "react";

import {
    Counter,
    CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import burgerIngredientCardStyles from "./burger-ingredient-card.module.css";

const BurgerIngredientCard = (burgerIngredient) => {
    return (
        <div className={burgerIngredientCardStyles.container}>
            <div className={`${burgerIngredientCardStyles.wrapper} pt-6`}>
                <div>
                    <img src={burgerIngredient.image} alt={"На этом месте могла быть реклама. Или что-то вкусное"}/>
                </div>
                <div className={burgerIngredientCardStyles.inner}>
                    <span>{burgerIngredient.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <p>{burgerIngredient.name}</p>
            </div>
            <Counter className={burgerIngredientCardStyles.counter} count={1}/>
        </div>
    );
}

export default BurgerIngredientCard;