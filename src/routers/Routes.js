import React, {Fragment} from "react";
import HomePage from "../views/HomePage";
import {Route} from "react-router-dom";
import CountryDetail from "../components/CountryDetail"

const Routes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/:countries" exact component={HomePage} />
        </Fragment>
    )
}

export default Routes;