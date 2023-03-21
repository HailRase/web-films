import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./auth-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {moviesReducer} from "./movies-reducer";




const rootReducer = combineReducers({
    auth: authReducer,
    movies: moviesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

export type StoreType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector


// @ts-ignore
window.store = store