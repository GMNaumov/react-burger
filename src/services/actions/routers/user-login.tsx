import { loginRequest } from "../../../utils/burger-api";
import { setCookie } from "typescript-cookie"
import { REQUEST_USER_LOGIN, SUCCESS_USER_LOGIN, ERROR_USER_LOGIN } from "../../constants"
import { AppDispatch, AppThunk } from "../../typesOfStoreAndThunk";

interface IRequestUserLogin {
    type: typeof REQUEST_USER_LOGIN;
}

interface ISuccessUserLogin {
    type: typeof SUCCESS_USER_LOGIN;
    user: {
        email: string;
        name: string;
    }
}

interface IErrorUserLogin {
    type: typeof ERROR_USER_LOGIN;
}

export type TUserLogin =
    | IRequestUserLogin
    | ISuccessUserLogin
    | IErrorUserLogin

const userLoginRequest = (): IRequestUserLogin => ({
    type: REQUEST_USER_LOGIN
})

const userLoginSuccessRequest = (
    user: {
        email: string;
        name: string;
    }
): ISuccessUserLogin => ({
    type: SUCCESS_USER_LOGIN,
    user
})

const userLoginErrorRequest = (): IErrorUserLogin => ({
    type: ERROR_USER_LOGIN
})


export const userLogin = (email: string, password: string): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(userLoginRequest())
        loginRequest(email, password).then(res => {
            const accessToken = res.accessToken.split("Bearer ")[1];
            const refreshToken = res.refreshToken;

            setCookie("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken);
            dispatch(userLoginSuccessRequest(res.user))
        }).catch(err => {
            dispatch(userLoginErrorRequest())
        })
    }
}