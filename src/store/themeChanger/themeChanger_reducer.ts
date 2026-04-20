import {
    IThemeChangerState,
    SET_THEME_BLACK,
    SET_THEME_WHITE,
    ThemeChangerActionTypes
  } from "./themeChanger_types"
import * as C from 'constants/ColorConstants'

  const initialState: IThemeChangerState = {
    currentTheme: C.blackTheme,
  }
  
  const themeChangerReducer = (
    state = initialState,
    action: ThemeChangerActionTypes
  ): IThemeChangerState => {
    switch (action.type) {
      case SET_THEME_BLACK:
        return {
          ...state,
          currentTheme: C.blackTheme,
        }
      case SET_THEME_WHITE:
        return {
          ...state,
          currentTheme: C.whiteTheme,
        }
      default:
        return {
          ...state,
        }
    }
  }
  
  export default themeChangerReducer