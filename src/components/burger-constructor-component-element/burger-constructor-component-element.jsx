import PropTypes from "prop-types";

import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {burgerIngredientsType} from "../../utils/data";

const BurgerConstructorComponentElement = ({burgerComponent, type, isLocked}) => {
    return (
        <ConstructorElement
            text={type === "top" ? burgerComponent.name.concat("\n(верх)") : burgerComponent.name.concat("\n(низ)")}
            type={type}
            thumbnail={burgerComponent.image}
            price={burgerComponent.price}
            isLocked={isLocked}/>
    );
};

BurgerConstructorComponentElement.propTypes = {
    burgerComponent: burgerIngredientsType,
    type: PropTypes.oneOf(["top", "bottom"]),
    isLocked: PropTypes.bool
};

export default BurgerConstructorComponentElement;