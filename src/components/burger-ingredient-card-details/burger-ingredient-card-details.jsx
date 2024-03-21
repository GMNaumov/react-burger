import burgerIngredientCardDetailsStyle from "./burger-ingredient-card-details.module.css";
import {burgerIngredientsType} from "../../utils/data";

const BurgerIngredientCardDetails = ({burgerIngredient}) => {
    return (
        <div className={`${burgerIngredientCardDetailsStyle.wrapper} mt-4`}>
            <div>
                <img src={burgerIngredient.image_large} alt={burgerIngredient.name}/>
            </div>
            <h2 className={`${burgerIngredientCardDetailsStyle.subtitle} mt-4`}>{burgerIngredient.name}</h2>
            <div className={`${burgerIngredientCardDetailsStyle.block} mt-8`}>
                <div className={`${burgerIngredientCardDetailsStyle.inner} mr-5`}>
                    <p className={"text text_type_main-default text_color_inactive"}>Калории, ккал</p>
                    <p className={"text text_type_main-default text_color_inactive"}>
                        {burgerIngredient.calories}
                    </p>
                </div>
                <div className={`${burgerIngredientCardDetailsStyle.inner} mr-5`}>
                    <p className={"text text_type_main-default text_color_inactive"}>Белки, г</p>
                    <p className={"text text_type_main-default text_color_inactive"}>
                        {burgerIngredient.proteins}
                    </p>
                </div>
                <div className={`${burgerIngredientCardDetailsStyle.inner} mr-5`}>
                    <p className={"text text_type_main-default text_color_inactive"}>Жиры, г</p>
                    <p className={"text text_type_main-default text_color_inactive"}>
                        {burgerIngredient.fat}
                    </p>
                </div>
                <div className={`${burgerIngredientCardDetailsStyle.inner} mr-5`}>
                    <p className={"text text_type_main-default text_color_inactive"}>Углеводы, г</p>
                    <p className={"text text_type_main-default text_color_inactive"}>
                        {burgerIngredient.carbohydrates}
                    </p>
                </div>
            </div>
        </div>
    )
}

BurgerIngredientCardDetails.propTypes = {
    burgerIngredient: burgerIngredientsType
}

export default BurgerIngredientCardDetails;