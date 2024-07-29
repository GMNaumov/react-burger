import {registrationRequest} from "../../../utils/burger-api";
import {setCookie} from "typescript-cookie"
import {REQUEST_USER_REGISTRATION, SUCCESS_USER_REGISTRATION, ERROR_USER_REGISTRATION} from "../../constants"
import {AppDispatch, AppThunk} from "../../typesOfStoreAndThunk";


interface IRequestUserRegistration {
    type: typeof REQUEST_USER_REGISTRATION;
}

interface ISuccessUserRegistration {
    type: typeof SUCCESS_USER_REGISTRATION;
    success: boolean;
    accessToken: string;
    refreshToken: string
    user: {
        email: string
        name: string
    },
}

interface IErrorUserRegistration {
    type: typeof ERROR_USER_REGISTRATION;
}

export type TUserRegistration =
    | IRequestUserRegistration
    | ISuccessUserRegistration
    | IErrorUserRegistration

const userRegistrationRequest = (): IRequestUserRegistration => ({
    type: REQUEST_USER_REGISTRATION
})

const userRegistrationSuccessRequest = (
    success: boolean,
    accessToken: string,
    refreshToken: string,
    user: {
        name: string,
        email: string
    }
): ISuccessUserRegistration => ({
    type: SUCCESS_USER_REGISTRATION,
    success,
    accessToken,
    refreshToken,
    user
})

const userRegistrationErrorRequest = (): IErrorUserRegistration => ({
    type: ERROR_USER_REGISTRATION
})

export const userRegistration = (email: string, password: string, name: string): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(userRegistrationRequest())
        registrationRequest(email, password, name).then(res => {
            if (res && res.success) {
                let accessToken = res.accessToken.split("Bearer ")[1];
                let refreshToken = res.refreshToken;

                setCookie("accessToken", accessToken)
                localStorage.setItem("refreshToken", refreshToken);

                dispatch(userRegistrationSuccessRequest(res.success, res.accessToken, res.refreshToken, res.user))
            }
        }).catch(err => {
            dispatch(userRegistrationErrorRequest())
        })
    }
}