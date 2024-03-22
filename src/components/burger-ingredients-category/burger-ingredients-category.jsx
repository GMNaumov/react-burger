import PropTypes from "prop-types";

import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";

import burgerIngredientCardStyles from "./burger-ingredients-category.module.css"

import {burgerIngredientsType} from "../../utils/data";

const BurgerIngredientsCategory = ({title, burgerIngredientsCategory}) => {
    return (
        <section className="pt-10">
            <h1 className={burgerIngredientCardStyles.title}>{title}</h1>
            <div className={burgerIngredientCardStyles.ingredientCard}>
                {burgerIngredientsCategory.map((burgerIngredient) => (
                    <BurgerIngredientCard burgerIngredient={burgerIngredient} key={burgerIngredient._id}/>
                ))}
            </div>
        </section>
    );
};

BurgerIngredientsCategory.propTypes = {
    title: PropTypes.string.isRequired,
    burgerIngredientsCategory: PropTypes.arrayOf(burgerIngredientsType).isRequired
};

export default BurgerIngredientsCategory;