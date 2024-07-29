import { logoutRequest } from "../../../utils/burger-api";
import { getCookie, removeCookie } from "typescript-cookie"
import { REQUEST_USER_LOGOUT, SUCCESS_USER_LOGOUT, ERROR_USER_LOGOUT } from "../../constants"
import { AppDispatch, AppThunk } from "../../typesOfStoreAndThunk";

interface IRequestUserLogout {
    type: typeof REQUEST_USER_LOGOUT;
}

interface ISuccessUserLogout {
    type: typeof SUCCESS_USER_LOGOUT;
}

interface IErrorUserLogout {
    type: typeof ERROR_USER_LOGOUT;
}

export type TUserLogout =
    | IRequestUserLogout
    | ISuccessUserLogout
    | IErrorUserLogout

const userLogoutRequest = (): IRequestUserLogout => ({
    type: REQUEST_USER_LOGOUT
})

const userLoginSuccessRequest = (): ISuccessUserLogout => ({
    type: SUCCESS_USER_LOGOUT
})

const userLogoutErrorRequest = (): IErrorUserLogout => ({
    type: ERROR_USER_LOGOUT
})


export const userLogout = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(userLogoutRequest())
        logoutRequest().then(res => {
            dispatch(userLoginSuccessRequest())
        }).catch(err => {
            dispatch(userLogoutErrorRequest())
        })
        removeCookie("accessToken")
        localStorage.removeItem("refreshToken")
        console.log(getCookie("accessToken"))
    }
}