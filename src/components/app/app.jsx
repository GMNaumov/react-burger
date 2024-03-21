import React, {useEffect, useState} from 'react';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import appStyles from './app.module.css';

import {burgerIngredientsBackendAPI} from "../../utils/data";

const App = () => {
    const [state, setState] = useState({
        burgerIngredientsData: [],
        isLoaded: false,
    });

    useEffect(() => {
        fetch(burgerIngredientsBackendAPI)
            .then((response) => response.ok ? response.json() : response.json().then((error) => Promise.reject(error)))
            .then((json) => setState({burgerIngredientsData: json.data, isLoaded: json.success}))
            .catch(error => console.log("Data loading error: ", error));
    }, []);

    return (
        <div className={appStyles.App}>
            <AppHeader/>
            <main className={appStyles.Body}>
                <BurgerIngredients burgerIngredients={state.burgerIngredientsData}/>
                <BurgerConstructor burgerComponents={state.burgerIngredientsData}/>
            </main>
        </div>
    );
}

export default App;
