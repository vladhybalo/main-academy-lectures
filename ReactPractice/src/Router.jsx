import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MultiView from "./pages/MultiView/MultiView";
import SingleView from "./pages/SingleView/SingleView";

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/products" component={MultiView} />
            <Route exact path="/products/:id" component={SingleView} />
            <Redirect to="/products"></Redirect>
        </Switch>
    </BrowserRouter>
};

export default Router;