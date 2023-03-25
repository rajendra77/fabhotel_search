import React from "react";
import { hydrate } from "react-dom";
import Home from '../../pages/index'
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "../../store/reducer/reducer";

const store = createStore(Reducer, window.__PRELOADED_STATE__)
delete window.__PRELOADED_STATE__

hydrate(<Provider store={store}>
    <Home />
</Provider>, document.getElementById("root"));
