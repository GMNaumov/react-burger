import React, { FC } from "react";
import styles from "./burger-constructor-list.module.css";
import { ICardTypes } from "../../utils/propsType";

import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import { ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";


import { REMOVE_BURGER_COMPONENT, COUNT_TOTAL_AMOUNT } from "../../services/actions/burger-constructor"
import { useDispatch } from "../../services/typesOfStoreAndThunk";


interface IBurgerConstructorlist {
    burgerIngredients: Array<ICardTypes>
}

const BurgerConstructorlist: FC<IBurgerConstructorlist> = ({ burgerIngredients }) => {

    const filteredIngridients = React.useMemo(
        () => burgerIngredients.filter((ingridient) => ingridient.type !== "bun")
        , [burgerIngredients]);


    const dispatch = useDispatch();

    const removeIngridient = (ingridient: ICardTypes) => {
        dispatch({ type: REMOVE_BURGER_COMPONENT, ingridient })
        dispatch({ type: COUNT_TOTAL_AMOUNT, ingridient })
    }

    return (
        <div className={`${styles.cardsContainer} custom-scroll`}>
            {filteredIngridients
                .map((ingridient, index: number) => (
                    <BurgerConstructorItem
                        key={ingridient.uniqid}
                        index={index}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            handleClose={() => removeIngridient(ingridient)}
                            thumbnail={ingridient.image}
                            text={ingridient.name}
                            price={ingridient.price}
                        />
                    </BurgerConstructorItem>
                ))}
        </div>
    )
}


export default BurgerConstructorlist;