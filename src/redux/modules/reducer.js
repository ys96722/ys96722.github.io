import { combineReducers } from 'redux';
import loadingProgress from './loadingProgress';
import loadingStatus from "./loadingStatus"
// import { routerReducer } from 'react-router-redux';

export default combineReducers({
    // routing: routerReducer,
    // form: formReducer,
    loadingProgress,
    // menu,
    loadingStatus
    // audios: audiosReducer,
    // scroll
    // scroll: scrollReducer,
    // components/containers reducers
    // nextArrow: nextArrowReducer,
    // previousArrow: previousArrowReducer,
    // projects: projectsReducer,
    // aboutMe: aboutMeReducer,
});