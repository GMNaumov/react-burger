import React from "react";
import PropTypes from "prop-types";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";

import { getOrderDetails } from "../../services/actions/order";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";

import burgerConstructorAmountStyle from "./burger-constructor-amount.module.css";


const BurgerConstructorAmount = ({ text, icon }) => {
    const [isModalOpen, setIsOpenModal] = React.useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

    const orderDetails = useSelector(state => state.orderDetails)
    const { bun, burgerComponents } = useSelector(state => state.burgerConstructor);
    const ingridientsIds = (burgerComponents).map((ingridient) => ingridient._id);

    const dispatch = useDispatch();

    const getOrder = () => {
        if (bun === null || ingridientsIds.length === 0) {
            setIsPopUpOpen(true)
            setTimeout(() => setIsPopUpOpen(false), 3000)

        } else {
            dispatch(getOrderDetails([...ingridientsIds, bun._id]))
            setIsOpenModal(!isModalOpen)
        }
    }

    return (
        <>
            <div className={`${burgerConstructorAmountStyle.wrapper} pt-10 mr-10`}>
                {isPopUpOpen && !isModalOpen &&
                    <p className={burgerConstructorAmountStyle.popUp}>Выберите булки и хотя бы 1 ингридиент</p>
                }
                <div className={`${burgerConstructorAmountStyle.counter} mr-10`} >
                    <span className={`${burgerConstructorAmountStyle.text}`} >{text}</span>
                    <span className={`${burgerConstructorAmountStyle.icon}`}>{icon}</span>
                </div>
                <Button onClick={() => getOrder()}
                    htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div >
            {
                isModalOpen && <Modal
                    setIsOpenModal={() => setIsOpenModal(false)}
                >
                    <OrderDetails title={orderDetails.name} number={orderDetails.order.number} />
                </Modal>
            }
        </>

    )
}

BurgerConstructorAmount.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default BurgerConstructorAmount;