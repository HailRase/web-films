import {ThunkAction} from "redux-thunk";
import {StoreType} from "./store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

type ActionsTypes = ReturnType<typeof initializedSuccess>

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                initialized: action.initialized
            }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
        initialized: true
    } as const
}

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .finally(() => {
            dispatch(initializedSuccess())
        })
}

export type ThunkType = ThunkAction<void, StoreType, unknown, ActionsTypes>
