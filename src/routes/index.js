import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Home from "../pages/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "../store/reducer/reducer";
import HotelDetails from "../pages/hotel";

const router = express.Router();

router.get('/', async (req, res) => {
    const store = createStore(Reducer)
    const reactComp = renderToString(
    <Provider store={store}>
        <Home />
    </Provider>);
    res.status(200).render('pages/index', { reactApp: reactComp });
})

router.get('/hotel/:slug', async (req, res) => {
    console.log("req", req)
    const reactComp = renderToString(<HotelDetails slug={req.params.slug}/>);
    res.status(200).render('pages/hotel', { reactApp: reactComp });
});

export default router;