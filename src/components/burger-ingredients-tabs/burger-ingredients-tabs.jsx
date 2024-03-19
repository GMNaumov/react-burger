import React from "react";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import categoryTabStyles from "./burger-ingredients-tabs.module.css";


const BurgerIngredientsTabs = () => {
    const [current, setCurrent] = React.useState("Булки");

    return (
        <div className={`${categoryTabStyles.categoryTabs} pt-5`}>
            <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>Булки</Tab>
            <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>Соусы</Tab>
            <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>Начинки</Tab>
        </div>
    );
}


export default BurgerIngredientsTabs;