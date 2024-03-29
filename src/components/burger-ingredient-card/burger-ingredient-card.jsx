import React from "react";

import {
    Counter,
    CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";

import burgerIngredientCardStyles from "./burger-ingredient-card.module.css";

import {burgerIngredientsType} from "../../utils/data";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {UseModal} from "../../hooks/use-modal/use-modal";


const BurgerIngredientCard = ({burgerIngredient}) => {
    const {isModalOpen, openModal, closeModal} = UseModal();

    return (
        <div>
            <div className={burgerIngredientCardStyles.container}>
                <div className={`${burgerIngredientCardStyles.wrapper} pt-6`} onClick={openModal}>
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
                isModalOpen && <Modal
                    onClose={closeModal}
                    title={"Детали ингридиента"}>
                    <IngredientDetails burgerIngredient={burgerIngredient}/>
                </Modal>
            }
        </div>
    );
};

BurgerIngredientCard.propTypes = {
    burgerIngredient: burgerIngredientsType
}

export default BurgerIngredientCard;