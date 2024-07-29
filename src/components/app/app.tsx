import {useEffect} from "react";
import {Router} from "../../router";
import {useDispatch, useSelector} from "../../services/typesOfStoreAndThunk";
import {getIngredients} from "../../services/actions/burger-ingredients";
import {getUserData} from "../../services/actions/routers/get-profile-data";


const App = () => {
    const dispatch = useDispatch();
    const {burgerIngredients} = useSelector(store => store.burgerIngredients);

    useEffect(() => {
        dispatch(getIngredients())
        dispatch(getUserData())
    }, [dispatch])

    return (
        <div className="App">
            {!burgerIngredients
                ? null
                : <Router/>
            }
        </div>
    );
}

export default App;
