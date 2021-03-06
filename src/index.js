import React from "react"
import ReactDOM from "react-dom"
import routes from "./routes"
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { Provider } from "react-redux"
// import ReallySmoothScroll from "really-smooth-scroll"
import { hashHistory, withRouter } from "react-router"
import rootReducer from "./redux/modules/reducer"

// import createRoutes from "./routes";
// import createHistory from "history/createHashHistory";

// const history = createHistory();
hashHistory.listen(() => {
  window.scrollTo(0, 0)
})

// ReactGA.initialize("UA-140535457-1")Side

// ReallySmoothScroll.shim()

const store = createStore(rootReducer, applyMiddleware(logger))

// injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    {/* {createRoutes(store, history)} */}
    {routes}
  </Provider>,
  document.getElementById("root")
)

// ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
