import PropTypes from "prop-types";

import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";

import burgerIngredientCardStyles from "./burger-ingredients-category.module.css";

import {burgerIngredientsType} from "../../utils/data";


const BurgerIngredientsCategory = ({ title, ingredients, name }) => {

    return (
        <section className="pt-10" name={name}>
            <h1 className={burgerIngredientCardStyles.title} >{title}</h1>
            <div className={burgerIngredientCardStyles.cards}>
                {ingredients
                    .map((ingridient) => (
                        <BurgerIngredientCard
                            key={ingridient._id}
                            _id={ingridient._id}
                            type={ingridient.type}
                            name={ingridient.name}
                            image={ingridient.image}
                            image_large={ingridient.image_large}
                            image_mobile={ingridient.image_mobile}
                            calories={ingridient.calories}
                            carbohydrates={ingridient.carbohydrates}
                            fat={ingridient.fat}
                            proteins={ingridient.proteins}
                            price={ingridient.price}
                        />
                    ))}
            </div>
        </section>
    );
}

BurgerIngredientsCategory.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(burgerIngredientsType).isRequired
};

export default BurgerIngredientsCategory;