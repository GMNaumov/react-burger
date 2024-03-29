import React from "react";
import PropTypes from "prop-types";

import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";

import burgerConstructorAmountStyle from "./burger-constructor-amount.module.css";
import OrderDetails from "../order-details/order-details";
import {UseModal} from "../../hooks/use-modal/use-modal";

const BurgerConstructorAmount = ({text, icon}) => {
    const {isModalOpen, openModal, closeModal} = UseModal();

    return (
        <div className={`${burgerConstructorAmountStyle.wrapper} pt-10 mr-10`}>
            <div className={`${burgerConstructorAmountStyle.counter} mr-10`}>
                <span className={"text text_type_digits-medium"}>{text}</span>
                <span className={`${burgerConstructorAmountStyle.icon}`}>{icon}</span>
            </div>
            <Button htmlType="button" type="primary" size="large" onClick={openModal}>
                Оформить заказ
            </Button>
            {
                isModalOpen && <Modal onClose={closeModal}>
                    <OrderDetails orderID={"123456"}/>
                </Modal>
            }
        </div>
    );
};

BurgerConstructorAmount.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default BurgerConstructorAmount;