import React from "react";

import {
    Counter,
    CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";

import burgerIngredientCardStyles from "./burger-ingredient-card.module.css";

import {burgerIngredientsType} from "../../utils/data";
import BurgerIngredientCardDetails from "../burger-ingredient-card-details/burger-ingredient-card-details";


const BurgerIngredientCard = ({burgerIngredient}) => {
    const [isModalWindowOpen, setIsModalWindowOpen] = React.useState(false);

    return (
        <>
            <div className={burgerIngredientCardStyles.container}>
                <div className={`${burgerIngredientCardStyles.wrapper} pt-6`} onClick={() => setIsModalWindowOpen(true)}>
                    <div>
                        <img src={burgerIngredient.image} alt={burgerIngredient.name}/>
                    </div>
                    <div className={burgerIngredientCardStyles.inner}>
                        <span className={"text text_type_digits-default"}>{burgerIngredient.price}</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p>{burgerIngredient.name}</p>
                </div>
                <Counter className={burgerIngredientCardStyles.counter} count={1}/>
            </div>
            {
                isModalWindowOpen && <Modal
                    setIsModalWindowOpen={() => setIsModalWindowOpen(false)}
                    title={"Детали ингридиента"}>
                    <BurgerIngredientCardDetails burgerIngredient={burgerIngredient}/>
                </Modal>
            }
        </>

    );
}

BurgerIngredientCard.propTypes = {
    burgerIngredient: burgerIngredientsType
}

export default BurgerIngredientCard;