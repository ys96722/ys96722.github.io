export interface ITheme {
    name: string
    background: string
    color: string
    accent: string
    surface: string
}
export const BLACK_THEME_NAME = 'BLACK THEME'
export const WHITE_THEME_NAME = 'WHITE THEME'

export const BLACK = "#000000"
export const WHITE = "#FFFFFF"


export const blackTheme: ITheme = {
    name: BLACK_THEME_NAME,
    background: "#0a0a0a",
    color: "#e8e8e8",
    accent: "#B5C8C2",
    surface: "#161616"
}

export const whiteTheme: ITheme = {
    name: WHITE_THEME_NAME,
    background: "#fafafa",
    color: "#1a1a1a",
    accent: "#427F7B",
    surface: "#f0f0f0"
}