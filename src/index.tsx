import React from "react";
import { render } from "react-dom";

import Index from "./view/Index";
import Provider from "./contexts/context";
import "./view/css/normalize.css";

render(
  <Provider>
    <Index />
  </Provider>,
  document.getElementById("app")
);
