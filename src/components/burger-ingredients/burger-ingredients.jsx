import React from "react";
import PropTypes from "prop-types";

import BurgerIngredientsCategory from "../burger-ingredients-category/burger-ingredients-category";

import styles from "./burger-ingredients.module.css";

import burgerIngredientsType from "../../utils/data";
import {Link} from "react-scroll";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = ({ingredients}) => {
    const [current, setCurrent] = React.useState("Булки");

    const bun = React.useMemo(
        () => ingredients.filter((burgerIngredient) => burgerIngredient.type === "bun")
        , [ingredients]);
    const main = React.useMemo(
        () => ingredients.filter((burgerIngredient) => burgerIngredient.type === "main")
        , [ingredients]);
    const sauces = React.useMemo(
        () => ingredients.filter((burgerIngredient) => burgerIngredient.type === "sauce")
        , [ingredients]);


    return (
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} pt-10`}>Соберите бургер</h1>
            <div className={`${styles.tabs} pt-5`}>
                <Link to="bun" spy={true} smooth={true} offset={0} duration={800} containerId="containerElement"
                      onSetActive={() => setCurrent("Булки")}>
                    <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>Булки</Tab>
                </Link>
                <Link to="main" spy={true} smooth={true} offset={30} duration={800} containerId="containerElement"
                      onSetActive={() => setCurrent("Начинки")}>
                    <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>Начинки</Tab>
                </Link>
                <Link to="sauces" spy={true} smooth={true} offset={28} duration={800} containerId="containerElement"
                      onSetActive={() => setCurrent("Соусы")}>
                    <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>Соусы</Tab>
                </Link>
            </div>
            <div className={`${styles.cardsContainer} custom-scroll`} id="containerElement">
                <BurgerIngredientsCategory name="bun" title="Булки" ingredients={bun}/>
                <BurgerIngredientsCategory name="main" title="Начинки" ingredients={main}/>
                <BurgerIngredientsCategory name="sauces" title="Соусы" ingredients={sauces}/>
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(burgerIngredientsType).isRequired
};

export default BurgerIngredients;

