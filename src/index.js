import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { toast } from "react-toastify";

import * as serviceWorker from "./serviceWorker";
import store from "./store";
import AppContainer from "./components/containers/AppContainer";

import "react-toastify/dist/ReactToastify.css";
import "./sass/App.scss";

const hashHistory = createHashHistory();

toast.configure({
  autoClose: 3000,
  draggable: false,
  hideProgressBar: true
});

const Root = ({ store }) => (
  <div className="lojinha-de-brindes-app">
    <Provider store={store}>
      <Router history={hashHistory}>
        <AppContainer />
      </Router>
    </Provider>
  </div>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
