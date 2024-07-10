import styles from './ingredient-details-card.module.css';
import React from 'react';
import { ICardTypes } from '../../utils/propsType';

import { useParams } from 'react-router-dom';
import { getIngredients } from '../../services/actions/burger-ingredients'
import { useDispatch, useSelector } from 'react-redux';
import { GET_CURRENT_BURGER_INGREDIENT } from '../../services/actions/current-burger-ingredient'

const IngredientDetailsCard = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { burgerIngredients, isLoading } = useSelector((store: any) => store.burgerIngredients);
    const { currentBurgerIngredient } = useSelector((store: any) => store.currentBurgerIngredient);


    const current = burgerIngredients.find((ingredient: ICardTypes) => ingredient._id === id)

    React.useEffect(() => {
        dispatch<any>(getIngredients())
    }, [dispatch]);

    React.useEffect(() => {
        if (current) {
            dispatch({ type: GET_CURRENT_BURGER_INGREDIENT, current })
        }
    }, [dispatch, current]);



    return (
        <>
            {isLoading && currentBurgerIngredient === null ? <h1> Подождите, идет загрузка ...</h1 > : (
                <div className={`${styles.wrapper} mt-4`}>
                    <div>
                        <img src={currentBurgerIngredient?.image_large} />
                    </div>
                    <h2 className={`${styles.subtitle} mt-4`}>{currentBurgerIngredient?.name}</h2>
                    <div className={`${styles.block} mt-8`}>
                        <div className={`${styles.inner} mr-5`}>
                            <p className={styles.text}>Калории, ккал</p>
                            <p className={`${styles.text} ${styles.num}`}>{currentBurgerIngredient?.calories}</p>
                        </div >
                        <div className={`${styles.inner} mr-5`}>
                            <p className={styles.text}>Белки, г</p>
                            <p className={`${styles.text} ${styles.num}`}>{currentBurgerIngredient?.proteins}</p>
                        </div>
                        <div className={`${styles.inner} mr-5`}>
                            <p className={styles.text}>Жиры, г</p>
                            <p className={`${styles.text} ${styles.num}`}>{currentBurgerIngredient?.fat}</p>
                        </div>
                        <div className={`${styles.inner} mr-5`}>
                            <p className={styles.text}>Углеводы, г</p>
                            <p className={`${styles.text} ${styles.num}`}>{currentBurgerIngredient?.carbohydrates}</p>
                        </div>
                    </div >
                </div >
            )
            }
        </>
    )
}

export default IngredientDetailsCard