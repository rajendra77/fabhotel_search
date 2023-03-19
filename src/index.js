import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Reducer from "./store/reducer/reducer";

const store = createStore(Reducer);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);