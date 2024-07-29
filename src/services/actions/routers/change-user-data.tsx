import {updateUser, refreshTokens} from "../../../utils/burger-api";
import {REQUEST_UPDATE_USER_DATA, SUCCESS_UPDATE_USER_DATA, ERROR_UPDATE_USER_DATA} from "../../constants"
import {AppDispatch, AppThunk} from "../../typesOfStoreAndThunk";

interface IRequestUpdateUserData {
    type: typeof REQUEST_UPDATE_USER_DATA;
}

interface ISuccessUpdateUserData {
    type: typeof SUCCESS_UPDATE_USER_DATA;
    user: {
        email: string;
        name: string;
    }
}

interface IErrorUpdateUserData {
    type: typeof ERROR_UPDATE_USER_DATA;
}

export type TChangeUserData =
    | IRequestUpdateUserData
    | ISuccessUpdateUserData
    | IErrorUpdateUserData

const updateUserData = (): IRequestUpdateUserData => ({
    type: REQUEST_UPDATE_USER_DATA
})

const updateUserDataSuccess = (
    user: {
        email: string;
        name: string;
    }
): ISuccessUpdateUserData => ({
    type: SUCCESS_UPDATE_USER_DATA,
    user
})

const updateUserDataError = (): IErrorUpdateUserData => ({
    type: ERROR_UPDATE_USER_DATA
})

export const changeUserData = (name: string, email: string, password: string): AppThunk => {
    return (dispatch: AppDispatch) => {
        dispatch(updateUserData())
        updateUser(name, email, password).then(res => {
            dispatch(updateUserDataSuccess(res.user))
        }).catch(err => {
            if (err.message === "jwt expired") {
                refreshTokens().then(() => dispatch(changeUserData(name, email, password)))
            } else {
                dispatch(updateUserDataError())
            }
        })
    }
}

