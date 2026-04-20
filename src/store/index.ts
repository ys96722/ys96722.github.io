import { combineReducers, configureStore } from "@reduxjs/toolkit"
import  themeChangerReducer from "./themeChanger/themeChanger_reducer"
import  {IThemeChangerState } from "./themeChanger/themeChanger_types" 
// import languageChangerReducer from "./languageChanger/languageChanger_reducer"
// import { ILanguageChangerState } from "./languageChanger/languageChanger_types"

const rootReducer = combineReducers<IStoreState>({
    themeChangerReducer
//   languageChangerReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export interface IStoreState {
    themeChangerReducer: IThemeChangerState
}

export default store