import styles from "./home-page.module.css";

import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients"
import BurgerConstructor from "../../components/burger-constructor/burger-constructor"

import { useSelector } from "react-redux";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const HomePage = () => {
    const { burgerIngredients, succes, isLoading } = useSelector(store => store.burgerIngredients);

    return (
        <div>
            {isLoading ? (
                <h1>Пожайлуста, подождите ...</h1>
            ) : burgerIngredients && burgerIngredients.length ? (
                <div className={styles.wrapper}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </DndProvider>
                </div >
            ) : !succes && (
                <h1>Извините, произошла ошибка...</h1>
            )}
        </div>
    );
}


