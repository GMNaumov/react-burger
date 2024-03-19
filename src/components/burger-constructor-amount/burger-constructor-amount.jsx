import React from "react";
import PropTypes from "prop-types";

import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

import burgerConstructorAmountStyle from "./burger-constructor-amount.module.css";

const BurgerConstructorAmount = ({text, icon}) => {
    return (
        <div className={`${burgerConstructorAmountStyle.wrapper} pt-10 mr-10`}>
            <div className={`${burgerConstructorAmountStyle.counter} mr-10`}>
                <span className={`${burgerConstructorAmountStyle.text}`}>{text}</span>
                <span className={`${burgerConstructorAmountStyle.icon}`}>{icon}</span>
            </div>
            <Button htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    )
}

BurgerConstructorAmount.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default BurgerConstructorAmount;