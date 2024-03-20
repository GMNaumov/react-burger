import PropTypes from "prop-types";

import burgerConstructorComponentCardStyle from "./burger-constructor-component-card.module.css"

const BurgerConstructorComponentCard = ({children}) => {
    return (
        <div className={burgerConstructorComponentCardStyle.item}>
            {children}
        </div>
    );
}

BurgerConstructorComponentCard.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default BurgerConstructorComponentCard;