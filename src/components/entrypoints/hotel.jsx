import React from "react";

import { hydrate } from "react-dom";

import HotelDetails from '../../pages/hotel'

hydrate(<HotelDetails />, document.getElementById("root"));
