import styles from "./ingredient-details-card.module.css";
import burgerIngredientsType from "../../utils/data";

const IngredientDetailsCard = ({ingredient}) => {

    return (
        <div className={`${styles.wrapper} mt-4`}>
            <div>
                <img src={ingredient.image_large} alt={ingredient.name} />
            </div>
            <h2 className={`${styles.subtitle} mt-4`}>{ingredient.name}</h2>
            <div className={`${styles.block} mt-8`}>
                <div className={`${styles.inner} mr-5`}>
                    <p className={styles.text}>Калории, ккал</p>
                    <p className={`${styles.text} ${styles.num}`}>{ingredient.calories}</p>
                </div>
                <div className={`${styles.inner} mr-5`}>
                    <p className={styles.text}>Белки, г</p>
                    <p className={`${styles.text} ${styles.num}`}>{ingredient.proteins}</p>
                </div>
                <div className={`${styles.inner} mr-5`}>
                    <p className={styles.text}>Жиры, г</p>
                    <p className={`${styles.text} ${styles.num}`}>{ingredient.fat}</p>
                </div>
                <div className={`${styles.inner} mr-5`}>
                    <p className={styles.text}>Углеводы, г</p>
                    <p className={`${styles.text} ${styles.num}`}>{ingredient.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

IngredientDetailsCard.propTypes = {
    ingredient: burgerIngredientsType,
};

export default IngredientDetailsCard;