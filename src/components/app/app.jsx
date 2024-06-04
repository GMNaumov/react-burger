import {useEffect} from "react";
import {DndProvider} from "react-dnd";
import {useSelector, useDispatch} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import {getIngredients} from "../../services/actions/burger-ingredients";

import appStyles from "./app.module.css";

const App = () => {
    const dispatch = useDispatch();
    const {burgerIngredients: ingredients, isLoading} = useSelector(store => store.burgerIngredients);

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch]);


    return (
        <div className={appStyles.App}>
            <AppHeader/>
            {isLoading ? (<h1>Пожайлуста, подождите ...</h1>
            ) : (
                <main className={appStyles.Body}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients ingredients={ingredients}/>
                        <BurgerConstructor/>
                    </DndProvider>
                </main>
            )}
        </div>
    );
}

export default App;
