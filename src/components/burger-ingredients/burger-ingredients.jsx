import styles from "./burger-ingredients.module.css";
import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsCategory from "../burger-ingredients-category/burger-ingredients-category"
import { Link } from "react-scroll"
import {useSelector} from "react-redux";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("Булки");
  const { burgerIngredients } = useSelector(store => store.burgerIngredients);

  const bun = React.useMemo(
    () => burgerIngredients.filter((ingridient) => ingridient.type === "bun")
    , [burgerIngredients]);
  const main = React.useMemo(
    () => burgerIngredients.filter((ingridient) => ingridient.type === "main")
    , [burgerIngredients]);
  const sauces = React.useMemo(
    () => burgerIngredients.filter((ingridient) => ingridient.type === "sauce")
    , [burgerIngredients]);


  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} pt-10`}>{"Соберите бургер"}</h1>
      <div className={`${styles.tabs} pt-5`}>
        <Link to="bun" spy={true} smooth={true} offset={0} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent("Булки")}>
          <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>Булки</Tab>
        </Link>
        <Link to="main" spy={true} smooth={true} offset={-20} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent("Начинки")}>
          <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>Начинки</Tab>
        </Link>
        <Link to="sauces" spy={true} smooth={true} offset={-100} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent("Соусы")}>
          <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>Соусы</Tab>
        </Link>
      </div>
      <div className={`${styles.cardsContainer} custom-scroll`} id="containerElement">
        <BurgerIngredientsCategory name="bun" title="Булки" burgerIngredients={bun} />
        <BurgerIngredientsCategory name="main" title="Начинки" burgerIngredients={main} />
        <BurgerIngredientsCategory name="sauces" title="Соусы" burgerIngredients={sauces} />
      </div>
    </div>
  );
}


export default BurgerIngredients;

