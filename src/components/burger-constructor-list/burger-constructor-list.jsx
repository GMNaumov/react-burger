import React from "react";
import styles from "./burger-constructor-list.module.css";
import PropTypes from "prop-types";
import burgerIngredientsType from "../../utils/data";

import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { REMOVE_BURGER_COMPONENT, COUNT_TOTAL_AMOUNT } from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";


const BurgerConstructorList = ({ ingridients }) => {
    const filteredIngridients = React.useMemo(
        () => ingridients.filter((burgerIngredient) => burgerIngredient.type !== "bun")
        , [ingridients]);


    const dispatch = useDispatch();

    const removeBurgerIngredient = (burgerIngredient) => {
        dispatch({ type: REMOVE_BURGER_COMPONENT, burgerIngredient })
        dispatch({ type: COUNT_TOTAL_AMOUNT, burgerIngredient })
    }

    return (
        <div className={`${styles.cardsContainer} custom-scroll`}>
            {filteredIngridients
                .map((burgerIngredient, index) => (
                    <BurgerConstructorItem
                        key={burgerIngredient.uniqid}
                        index={index}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            handleClose={() => removeBurgerIngredient(burgerIngredient)}
                            type={burgerIngredient.type}
                            thumbnail={burgerIngredient.image}
                            text={burgerIngredient.name}
                            price={burgerIngredient.price}
                        />
                    </BurgerConstructorItem>
                ))}
        </div>
    )
}

BurgerConstructorList.propTypes = {
    ingridients: PropTypes.arrayOf(burgerIngredientsType).isRequired
}

export default BurgerConstructorList;