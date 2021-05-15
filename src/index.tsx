import React from "react";
import { render } from "react-dom";

import Routers from './view/Routers';
import Provider from './contexts/context';

render(
  <Provider>
    <Routers />
  </Provider> , 
  document.getElementById("app")
);