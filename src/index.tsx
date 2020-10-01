import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import Routers from './view/Routers';
import Provider from './contexts/context'
import 'font-awesome/css/font-awesome.min.css'; 


ReactDOM.render(
    //<App />
    <Provider>
        <Routers />
    </Provider>
    , document.getElementById('root')
);