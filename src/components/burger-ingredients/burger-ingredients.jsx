import React from "react";
import PropTypes from "prop-types";

import BurgerIngredientsCategory from "../burger-ingredients-category/burger-ingredients-category";
import BurgerIngredientsTabs from "../burger-ingredients-tabs/burger-ingredients-tabs";

import styles from "./burger-ingredients.module.css";

import {burgerIngredientsType} from "../../utils/data";

const BurgerIngredients = ({burgerIngredients}) => {
    const buns = burgerIngredients.filter((ingredient) => ingredient.type = "bun");
    const mains = burgerIngredients.filter((ingredient) => ingredient.type = "main");
    const sauces = burgerIngredients.filter((ingredient) => ingredient.type = "sauce");

    return (
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} pt-10`}>Соберите бургер</h1>
            <BurgerIngredientsTabs/>
            <div className={`${styles.ingredientCard} custom-scroll`}>
                <BurgerIngredientsCategory title={"Булки"} burgerIngredientsCategory={buns}/>
                <BurgerIngredientsCategory title={"Соусы"} burgerIngredientsCategory={sauces}/>
                <BurgerIngredientsCategory title={"Начинки"} burgerIngredientsCategory={mains}/>
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
    burgerIngredients: PropTypes.arrayOf(burgerIngredientsType).isRequired
};

export default BurgerIngredients;
