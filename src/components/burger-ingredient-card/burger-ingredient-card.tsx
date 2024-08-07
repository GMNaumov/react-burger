import React, { FC } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-card.module.css";

import { ICardTypes } from "../../utils/propsType";

import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../services/typesOfStoreAndThunk";

const BurgerIngredientCard: FC<ICardTypes> = (ingridient) => {
  const location = useLocation();

  const { bun, currentBurgerIngredient } = useSelector(
    (state) => state.burgerConstructor
  );

  const count = React.useMemo(() => {
    const result: number =
      ingridient.type === "bun"
        ? bun?._id === ingridient._id
          ? 2
          : 0
        : currentBurgerIngredient.filter(
            (item: ICardTypes) => item._id === ingridient._id
          ).length;
    return result;
  }, [ingridient, bun, currentBurgerIngredient]);

  const [, dragRef] = useDrag({
    type: "ingridient",
    item: { ingridient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <Link
      ref={dragRef}
      to={`/ingridients/${ingridient._id}`}
      state={{ background: location }}
      className={styles.container}
    >
      <div>
        <img src={ingridient.image} alt={ingridient.name} />
      </div>
      <div className={styles.price}>
        <span>{ingridient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p>{ingridient.name}</p>
      <Counter count={count} />
    </Link>
  );
};

export default BurgerIngredientCard;
