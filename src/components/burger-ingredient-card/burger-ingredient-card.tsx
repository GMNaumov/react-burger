import React, { FC } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredient-card.module.css';

import { ICardTypes } from '../../utils/propsType';

import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


const BurgerIngredientCard: FC<ICardTypes> = (ingridient) => {
    const location = useLocation();

    const { bun, burgerComponents } = useSelector((state: any) => state.burgerConstructor);

    const count = React.useMemo(() => {
        const result: number = ingridient.type === 'bun'
            ? ingridient._id !== bun?._id ? 0 : 2
            : burgerComponents.filter((item: ICardTypes) => item._id === ingridient._id).length
        return result;
    }, [ingridient, bun, burgerComponents])


    const [, dragRef] = useDrag({
        type: 'ingridient',
        item: { ingridient },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    return (
        <Link
            to={`/ingridients/${ingridient._id}`}
            state={{ background: location }}
            className={styles.container}
        >
            <div ref={dragRef}>
                <img src={ingridient.image}  alt={ingridient.name}/>
            </div>
            <div className={styles.price}>
                <span>{ingridient.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p>{ingridient.name}</p>
            <Counter count={count} />
        </Link>
    )
}



export default BurgerIngredientCard;