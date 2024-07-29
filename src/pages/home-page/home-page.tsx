import styles from "./home-page.module.css";

import BurgerIngredientsCategory from "../../components/burger-ingredients-category/burger-ingredients-category"
import BurgerConstructor from "../../components/burger-constructor/burger-constructor"

import { useSelector } from "../../services/typesOfStoreAndThunk";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const HomePage = () => {
    const { burgerIngredients, isLoading } = useSelector(store => store.burgerIngredients);

    return (
        <div>
            {isLoading ? null
                : <div className={styles.wrapper}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredientsCategory title={"Соберите бургер"} ingredients={burgerIngredients} />
                        <BurgerConstructor />
                    </DndProvider>
                </div >
            }
        </div>
    );
}


