import { ITheme } from "constants/ColorConstants"

// Reducer Type
export interface IThemeChangerState {
  currentTheme: ITheme
  }
  
  // Action Types
  
  export const SET_THEME_BLACK = "SET_THEME_BLACK"
  interface SetThemeBlackAction {
    type: typeof SET_THEME_BLACK
  }
  
  export const SET_THEME_WHITE = "SET_THEME_WHITE"
  interface SetThemneWhiteAction {
    type: typeof SET_THEME_WHITE
  }
  
  export type ThemeChangerActionTypes =
    | SetThemeBlackAction
    | SetThemneWhiteAction