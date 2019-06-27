import { CHANGE_COLOR } from "../../redux/app-const";



const initialState = {
    toggleWhite: false
}


function AppReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return {...state,
                toggleWhite: !state.toggleWhite}
        default:
            return state
    }
}

// return Object.assign({}, state, {
//     cartOpen: !state.cartOpen
// });


export default AppReducer;