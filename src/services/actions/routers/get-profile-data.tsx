import { getUser, refreshTokens } from "../../../utils/burger-api";
import { REQUEST_GET_PROFILE_DATA, SUCCESS_GET_PROFILE_DATA, ERROR_GET_PROFILE_DATA } from "../../constants";
import { AppDispatch, AppThunk } from "../../typesOfStoreAndThunk";

interface IRequestGetProfileData {
    type: typeof REQUEST_GET_PROFILE_DATA;
}

interface ISuccessGetProfileData {
    type: typeof SUCCESS_GET_PROFILE_DATA;
    user: {
        email: string;
        name: string;
    }
}

interface IErrorGetProfileData {
    type: typeof ERROR_GET_PROFILE_DATA;
}

export type TGetProfileData =
    | IRequestGetProfileData
    | ISuccessGetProfileData
    | IErrorGetProfileData

const getProfileDataRequest = (): IRequestGetProfileData => ({
    type: REQUEST_GET_PROFILE_DATA
})

const getProfileDataSuccessRequest = (
    user: {
        email: string;
        name: string;
    }
): ISuccessGetProfileData => ({
    type: SUCCESS_GET_PROFILE_DATA,
    user
})

const getProfileDataErrorRequest = (): IErrorGetProfileData => ({
    type: ERROR_GET_PROFILE_DATA
})


export const getUserData = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(getProfileDataRequest())
        getUser().then(res => {
            dispatch(getProfileDataSuccessRequest(res.user))
        }).catch(err => {
            if (err.message === "jwt expired") {
                refreshTokens().then(() => dispatch(getUserData()))
            } else {
                dispatch(getProfileDataErrorRequest())
            }
        })
    }
}