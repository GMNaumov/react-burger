import React, {useEffect, useState} from 'react';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import appStyles from './app.module.css';

import {burgerMockIngredients} from "../../utils/data";

const App = () => {
    const [state, setState] = useState({
        burgerMockIngredients: burgerMockIngredients
    });

    useEffect(() => {
        setState({burgerMockIngredients: burgerMockIngredients})
    }, []);

    return (
        <div className={appStyles.App}>
            <AppHeader/>
            <main className={appStyles.Body}>
                <BurgerIngredients burgerIngredients={state.burgerMockIngredients}/>
                <BurgerConstructor burgerComponents={state.burgerMockIngredients}/>
            </main>
        </div>
    );
}

export default App;
