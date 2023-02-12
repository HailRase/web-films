import {authAPI} from "../m3-dal/auth";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./store";


const SET_USER_DATA = "SET-USER-DATA";
const SET_DISABLED = "SET_DISABLED";
const SET_AUTH_STATUS = "SET_AUTH_STATUS"
const SET_AUTH_ERROR = "SET_AUTH_ERROR"


type AuthThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionAuthType>;


type ActionAuthType =
    ReturnType<typeof setUserData>
    | ReturnType<typeof setDisabledButton>
    | ReturnType<typeof setAuthStatus>
    | ReturnType<typeof setAuthError>


export type AuthStatusType =
    | 'init'
    | 'loading'
    | "success"
    | "error"
export type userDataType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
};
export type AuthType = typeof initialState;
export type InitialStateType = {
    userData: userDataType | null
    isAuth: boolean
    isDisabled: boolean
    status: AuthStatusType
    error: string
}

export const initialState: InitialStateType = {
    userData: {
        _id: '',
        name: "",
        email: "",
        avatar: '',
        publicCardPacksCount: 0
    },
    isAuth: false,
    isDisabled: false,
    status: 'init',
    error: '',
};


export const authReducer = (state: AuthType = initialState, action: ActionAuthType): typeof initialState => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userData: action.userData,
                isAuth: action.isAuth
            }
        }
        case SET_DISABLED: {
            return {
                ...state,
                isDisabled: action.isDisabled
            }
        }
        case SET_AUTH_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
export const setUserData = (userData: userDataType | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        userData,
        isAuth
    } as const;
};
export const setDisabledButton = (isDisabled: boolean) => {
    return {
        type: SET_DISABLED,
        isDisabled
    } as const;
};
export const setAuthStatus = (status: AuthStatusType) => {
    return {
        type: SET_AUTH_STATUS,
        status
    } as const
}
export const setAuthError = (error: string) => {
    return {
        type: SET_AUTH_ERROR,
        error
    } as const
}


/*export const register = (email: string, password: string, repeatPassword: string) => () => {
    authAPI.register(email, password, repeatPassword)
        .then(response => {
        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message + 'more details in the console')
            alert(error)
        })
}*/

export const login = (email: string, password: string): AuthThunkAction => async (dispatch) => {
    dispatch(setAuthStatus("loading"))
    try {
        await authAPI.login(email, password)
        //dispatch(getAuthUserData());
        dispatch(setAuthStatus("success"))

    } catch (e:any) {
        dispatch(setAuthStatus("error"))
        dispatch(setAuthError(e.response.data.error))
    }
}
/*export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            dispatch(setUserData(null, false));
        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message + 'more details in the console')
            alert(error)
        })
}*/


/*export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then(response => {
            dispatch(setUserData(response.data, true))
        })
}*/

/*export const editAuthUserData = (name: string, avatar: string) => (dispatch: Dispatch) => {
    setDisabledButton(true)
    return authAPI.edit(name, avatar)
        .then(response => {
            dispatch(setUserData(response.data.updatedUser, true));
            setDisabledButton(false)
        })
}*/



