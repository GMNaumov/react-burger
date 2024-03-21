import PropTypes from "prop-types";

export const burgerIngredientsType = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
}).isRequired

export const temporaryUrl = "https://practicum.yandex.ru/profile/react/"
export const burgerIngredientsBackendAPI = "https://norma.nomoreparties.space/api/ingredients";
