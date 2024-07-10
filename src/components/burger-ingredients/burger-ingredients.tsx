import styles from './burger-ingredients.module.css';
import React, { FC } from "react";

import { ICardTypes } from '../../utils/propsType';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'
import { Link } from 'react-scroll'

interface IBurgerIngredients {
  title: string;
  burgerIngredients: Array<ICardTypes>
}

const BurgerIngredients: FC<IBurgerIngredients> = ({ title, burgerIngredients }) => {
  const [current, setCurrent] = React.useState<string>('Булки');

  const bun = React.useMemo(
    () => burgerIngredients.filter((ingridient) => ingridient.type === 'bun')
    , [burgerIngredients]);
  const main = React.useMemo(
    () => burgerIngredients.filter((ingridient) => ingridient.type === 'main')
    , [burgerIngredients]);
  const sauces = React.useMemo(
    () => burgerIngredients.filter((ingridient) => ingridient.type === 'sauce')
    , [burgerIngredients]);


  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} pt-10`}>{title}</h1>
      <div className={`${styles.tabs} pt-5`}>
        <Link to="bun" spy={true} smooth={true} offset={0} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Булки')}>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>Булки</Tab>
        </Link>
        <Link to="main" spy={true} smooth={true} offset={-20} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Начинки')}>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>Начинки</Tab>
        </Link>
        <Link to="sauces" spy={true} smooth={true} offset={-100} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Соусы')}>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>Соусы</Tab>
        </Link>
      </div>
      <div className={`${styles.cardsContainer} custom-scroll`} id="containerElement">
        <BurgerIngredientsCategory name="bun" title='Булки' ingridients={bun} />
        <BurgerIngredientsCategory name="main" title='Начинки' ingridients={main} />
        <BurgerIngredientsCategory name="sauces" title='Соусы' ingridients={sauces} />
      </div>
    </div>
  );
}



export default BurgerIngredients;

