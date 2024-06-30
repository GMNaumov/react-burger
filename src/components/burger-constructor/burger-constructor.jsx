import burgerConstructorStyles from "./burger-constructor.module.css";

import {
    CurrencyIcon,
    ConstructorElement
} from "@ya.praktikum/react-developer-burger-ui-components";

import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";

import BurgerConstructorPlug from "../burger-constructor-plug/burger-constructor-plug"
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list"
import BurgerConstructorAmount from "../burger-constructor-amount/burger-constructor-amount"

import {
    ADD_BURGER_COMPONENT,
    ADD_BUN,
    COUNT_TOTAL_AMOUNT
} from "../../services/actions/burger-constructor"


const BurgerConstructor = () => {
    const {bun, burgerComponents, totalPrice} = useSelector(state => state.burgerConstructor);
    const dispatch = useDispatch();


    const [, dropTarget] = useDrop({
        accept: "ingridient",
        drop: ({ingridient}) => {
            if (ingridient.type === "bun") {
                dispatch({type: ADD_BUN, ingridient})
            } else {
                dispatch({type: ADD_BURGER_COMPONENT, ingridient})
            }
            dispatch({type: COUNT_TOTAL_AMOUNT, ingridient})
        }
    });

    return (
        <div className={`${burgerConstructorStyles.wrapper} mt-25`} ref={dropTarget}>
            <div className={`${burgerConstructorStyles.cardsContainer} custom-scroll`}>

                {!bun ? (
                    <BurgerConstructorPlug text="Верхняя булка" position="top"/>
                ) : (
                    < ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={`${bun.image}`}
                    />
                )}
                {burgerComponents.length === 0 ? (
                    <BurgerConstructorPlug text="Начинки" position="middle"/>
                ) : (
                    <BurgerConstructorList ingridients={burgerComponents}/>
                )}

                {!bun ? (
                    <BurgerConstructorPlug text="Нижняя булка" position="bottom"/>
                ) : (
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={`${bun.image}`}
                    />
                )}
            </div>
            <BurgerConstructorAmount
                text={`${totalPrice}`}
                icon={<CurrencyIcon type="primary"/>}
            />
        </div>
    )
}

export default BurgerConstructor;