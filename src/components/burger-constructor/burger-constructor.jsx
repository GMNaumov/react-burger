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
    return (
        <div className={`${burgerConstructorStyles.wrapper} mt-25`}>
            <div className={`${burgerConstructorStyles.ingredientCard} custom-scroll`}>
                <BurgerConstructorComponentElement type={"top"} isLocked={true}/>
                <BurgerConstructorComponents burgerComponents={burgerComponents}/>
                <BurgerConstructorComponentElement type={"bottom"} isLocked={true}/>
            </div>
            <BurgerConstructorAmount
                text="100500"
                icon={<CurrencyIcon type="primary"/>}
            />
        </div>
    )
}

BurgerConstructor.propTypes = {
    burgerComponents: PropTypes.arrayOf(burgerIngredientsType).isRequired
};

export default BurgerConstructor;