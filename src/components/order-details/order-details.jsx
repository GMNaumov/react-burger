import PropTypes from "prop-types";

import done from "../../images/done.svg";

import orderDetailsStyles from "./order-details.module.css";


const OrderDetails = ({ title, number }) => {

    return (
        <div className={`${orderDetailsStyles.wrapper} mt-5 mb-10`}>
            <h1 className={`${orderDetailsStyles.title} mt-15`}>{number}</h1>
            <h2 className={`${orderDetailsStyles.subtitle} mt-8`}>{title}</h2>
            <div className='mt-15'>
                <img src={done} alt={"Заказ подтвержден."}/>
            </div>
            <p className={orderDetailsStyles.notification}>Ваш заказ начали готовить</p>
            <p className={orderDetailsStyles.announcement}>Дождитесь готовности на орбитальной станции</p>
        </div >
    )
}

OrderDetails.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number,
};

export default OrderDetails;