import React from "react";

import {
    Counter,
    CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";

import burgerIngredientCardStyles from "./burger-ingredient-card.module.css";

import IngredientDetailsCard from "../ingredient-details-card/ingredient-details-card";

import {useDrag} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {
    GET_CURRENT_BURGER_INGREDIENT,
    REMOVE_CURRENT_BURGER_INGREDIENT
} from '../../services/actions/current-burger-ingredient'


const BurgerIngredientCard = (burgerIngredient) => {
    const [isModalOpen, setIsOpenModal] = React.useState(false);
    const {currentBurgerIngredient} = useSelector(state => state.currentBurgerIngredient);
    const {bun, burgerComponents} = useSelector(state => state.burgerConstructor);

    const count = React.useMemo(() => {
        const result = burgerIngredient.type === "bun"
            ? bun?._id === burgerIngredient._id ? 2 : 0
            : burgerComponents.filter((item) => item._id === burgerIngredient._id).length
        return result;
    }, [burgerIngredient, bun, burgerComponents])


    const updateBurgerConstructorIngredients = () => {
        if (currentBurgerIngredient) {
            dispatch({type: REMOVE_CURRENT_BURGER_INGREDIENT, burgerIngredient})
        } else {
            dispatch({type: GET_CURRENT_BURGER_INGREDIENT, burgerIngredient})
        }
    }

    const dispatch = useDispatch();

    const [, dragRef] = useDrag({
        type: "burgerIngredient",
        item: {burgerIngredient},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    return (
        <>
            <div className={burgerIngredientCardStyles.container}>
                <div
                    className={`${burgerIngredientCardStyles.wrapper} pt-6`}
                    onClick={() => {
                        setIsOpenModal(true);
                        updateBurgerConstructorIngredients()
                    }}

                >
                    <div ref={dragRef}>
                        <img src={burgerIngredient.image} alt={burgerIngredient.name} />
                    </div>
                    <div className={burgerIngredientCardStyles.inner}>
                        <span>{burgerIngredient.price}</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p>{burgerIngredient.name}</p>
                </div>
                <Counter count={count} style={{position: "absolute", top: "0", right: "20px"}}/>
            </div>
            {
                isModalOpen && <Modal children={burgerIngredient}
                    setIsOpenModal={() => {
                        setIsOpenModal(false);
                        updateBurgerConstructorIngredients()
                    }}
                    title={"Детали ингридиента"}>
                    <IngredientDetailsCard
                        _id={burgerIngredient._id}
                        name={burgerIngredient.name}
                        image_large={burgerIngredient.image_large}
                        proteins={burgerIngredient.proteins}
                        calories={burgerIngredient.calories}
                        fat={burgerIngredient.fat}
                        carbohydrates={burgerIngredient.carbohydrates}
                    />
                </Modal>
            }
        </>
    )
}

export default BurgerIngredientCard;