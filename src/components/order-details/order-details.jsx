import PropTypes from "prop-types";

import orderDetailsStyles from "./order-details.module.css";
import done from "../../images/done.svg";


const OrderDetails = ({orderID}) => {
    return (
        <div className={`${orderDetailsStyles.wrapper} mt-5 mb-10`}>
            <h1 className={`text text_type_digits-large mt-15`}>{orderID}</h1>
            <h2 className={`text text_type_main-medium mt-8`}>идентификатор заказа</h2>
            <div className="mt-15">
                <img src={done} alt={"Заказ подтвержден."}/>
            </div>
            <p className={orderDetailsStyles.done}>Ваш заказ начали готовить</p>
            <p className={orderDetailsStyles.wait}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
};

OrderDetails.propTypes = {
    orderID: PropTypes.string.isRequired,
};
export default OrderDetails;