import PropTypes from "prop-types";

import {
    ConstructorElement,
    DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerConstructorComponentCard from "../burger-constructor-component-card/burger-constructor-component-card";

import burgerConstructorComponentsStyles from "./burger-constructor-components.module.css";

import {burgerIngredientsType} from "../../utils/data";

const BurgerConstructorComponents = ({burgerComponents}) => {
    return (
        <div className={`${burgerConstructorComponentsStyles.cardsContainer} custom-scroll`}>
            {burgerComponents.map((burgerComponent) => (
                    <BurgerConstructorComponentCard key={burgerComponent._id}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            key={burgerComponent._id}
                            thumbnail={burgerComponent.image}
                            text={burgerComponent.name}
                            price={burgerComponent.price}
                        />
                    </BurgerConstructorComponentCard>
                ))}
        </div>
    );
};

BurgerConstructorComponents.propTypes = {
    burgerComponents: PropTypes.arrayOf(burgerIngredientsType).isRequired
};

export default BurgerConstructorComponents;