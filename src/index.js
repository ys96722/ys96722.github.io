// import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes";
// import { createStore, compose, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
import ReallySmoothScroll from "really-smooth-scroll";
import { hashHistory } from "react-router";
// import reducer from "redux/modules/reducer";
// import createRoutes from "./routes";
// import createHistory from "history/createHashHistory";

hashHistory.listen(() => {
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
