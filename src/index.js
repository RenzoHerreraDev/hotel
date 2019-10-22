import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux' ;
import { BrowserRouter as Router } from "react-router-dom";
import {Route , Switch} from 'react-router-dom'

import store from './redux/store';
import Home from './pages/Home';
import AllRooms from './pages/AllRooms';
import ViewRoom from './pages/ViewRoom';
import Error from './pages/Error';
import FormNew from './pages/FormNew';
import './css/style.css';

const nodes = (
    <Provider store={store}>
        <Router>
            <Switch> 
                <Route exact path="/hotel" component={Home} />
                <Route exact path="/hotel/rooms" component={AllRooms} />
                <Route exact path="/hotel/rooms/:slug" component={ViewRoom} />
                <Route exact path="/hotel/FormNew" component={FormNew} />                
                <Route component={Error} />
            </Switch> 
        </Router>
    </Provider>
);
ReactDOM.render( nodes , document.getElementById('Home'));