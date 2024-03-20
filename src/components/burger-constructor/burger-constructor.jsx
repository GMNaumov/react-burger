import PropTypes from 'prop-types';

import burgerConstructorStyles from './burger-constructor.module.css';

import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

import {burgerIngredientsType} from "../../utils/data";
import BurgerConstructorAmount from "../burger-constructor-amount/burger-constructor-amount";
import BurgerConstructorComponents from "../burger-constructor-components/burger-constructor-components";
import BurgerConstructorComponentElement
    from "../burger-constructor-component-element/burger-constructor-component-element";

const BurgerConstructor = ({burgerComponents}) => {
    const bun = burgerComponents.find(ingredient => ingredient.type === "bun");
    const notBuns = burgerComponents.filter(ingredient => ingredient.type !== "bun");

    return (
        <article className={`${burgerConstructorStyles.wrapper} mt-25`}>
            <section className={`${burgerConstructorStyles.ingredientCard} custom-scroll`}>
                {bun && (<BurgerConstructorComponentElement burgerComponent={bun} type={"top"} isLocked={true}/>)}
                {notBuns && (<BurgerConstructorComponents burgerComponents={notBuns}/>)}
                {bun && (<BurgerConstructorComponentElement burgerComponent={bun} type={"bottom"} isLocked={true}/>)}
            </section>
            <BurgerConstructorAmount
                text="100500"
                icon={<CurrencyIcon type="primary"/>}
            />
        </article>
    )
}

BurgerConstructor.propTypes = {
    burgerComponents: PropTypes.arrayOf(burgerIngredientsType).isRequired
};

export default BurgerConstructor;