import { TOGGLE_BLACK, TOGGLE_WHITE } from "../../redux/app-const"

const initialState = {
  theme: {
    background: "black",
    color: "white"
  }
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_WHITE:
      return Object.assign({}, state, {
        theme: {
          name: "white",
          background: "white",
          color: "black"
        }
      })
    case TOGGLE_BLACK:
      return Object.assign({}, state, {
        theme: {
          name: "black",
          background: "black",
          color: "white"
        }
      })
    default:
      return state
  }
}

export default AppReducer
