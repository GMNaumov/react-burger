import PropTypes from "prop-types";

import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorComponentElement = ({type, isLocked}) => {
    return <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={"Краторная булка N-200i"}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        price={1255}
    />
}

BurgerConstructorComponentElement.propTypes = {
    type: PropTypes.string,
    isLocked: PropTypes.bool
}

export default BurgerConstructorComponentElement;