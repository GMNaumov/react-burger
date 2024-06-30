import React from "react";
import styles from "./burger-constructor-list.module.css";
import PropTypes from "prop-types";
import cardTypes from "../../utils/data";

import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import { ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import { REMOVE_BURGER_COMPONENT, COUNT_TOTAL_AMOUNT } from "../../services/actions/burger-constructor"
import { useDispatch } from "react-redux";


const BurgerConstructorlist = ({ ingridients }) => {
    const filteredIngridients = React.useMemo(
        () => ingridients.filter((ingridient) => ingridient.type !== "bun")
        , [ingridients]);


    const dispatch = useDispatch();

    const removeIngridient = (ingridient) => {
        dispatch({ type: REMOVE_BURGER_COMPONENT, ingridient })
        dispatch({ type: COUNT_TOTAL_AMOUNT, ingridient })
    }

    return (
        <div className={`${styles.cardsContainer} custom-scroll`}>
            {filteredIngridients
                .map((ingridient, index) => (
                    <BurgerConstructorItem
                        key={ingridient.uniqid}
                        index={index}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            handleClose={() => removeIngridient(ingridient)}
                            type={ingridient.type}
                            thumbnail={ingridient.image}
                            text={ingridient.name}
                            price={ingridient.price}
                        />
                    </BurgerConstructorItem>
                ))}
        </div>
    )
}

BurgerConstructorlist.propTypes = {
    ingridients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
}

BurgerConstructorlist.defaultProps = {
    ingridients: null
}

export default BurgerConstructorlist;