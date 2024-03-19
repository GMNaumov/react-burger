import PropTypes from "prop-types";

import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";

import burgerIngredientCardStyles from "./burger-ingredients-category.module.css"

import {burgerIngredientsType} from "../../utils/data";

const BurgerIngredientsCategory = ({title, burgerIngredientsCategory}) => {
    return (
        <div className="pt-10">
            <h1 className={burgerIngredientCardStyles.title}>{title}</h1>
            <div className={burgerIngredientCardStyles.ingredientCard}>
                {burgerIngredientsCategory.map((burgerIngredient) => (
                    <BurgerIngredientCard
                        key={burgerIngredient._id}
                        name={burgerIngredient.name}
                        image={burgerIngredient.image}
                        price={burgerIngredient.price}
                    />
                ))}
            </div>
        </div>
    );
}

BurgerIngredientsCategory.propTypes = {
    title: PropTypes.string.isRequired,
    burgerIngredientsCategory: PropTypes.arrayOf(burgerIngredientsType).isRequired
};

export default BurgerIngredientsCategory;