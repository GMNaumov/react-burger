import styles from "./burger-ingredients-category.module.css";
import cardTypes from "../../utils/data";
import PropTypes from "prop-types";
import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";

const BurgerIngredientsCategory = ({ title, burgerIngredients, name }) => {

    return (
        <div className="mt-10" name={name}>
            <h1 className={styles.title} >{title}</h1>

            <div className={styles.cards}>
                {burgerIngredients
                    .map((ingridient) => (
                        <BurgerIngredientCard
                            key={ingridient._id}
                            {...ingridient}
                        />
                    ))}
            </div>
        </div>
    );
}

BurgerIngredientsCategory.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    burgerIngredients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
};

export default BurgerIngredientsCategory;