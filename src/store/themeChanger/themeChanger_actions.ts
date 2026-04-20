import { action } from "typesafe-actions"
import { SET_THEME_BLACK, SET_THEME_WHITE } from "./themeChanger_types"

export const setThemeWhite = () => action(SET_THEME_WHITE)

export const setThemeBlack = () => action(SET_THEME_BLACK)