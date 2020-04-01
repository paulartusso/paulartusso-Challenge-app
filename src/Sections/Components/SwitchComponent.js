import React from "react";
import {Switch, Route} from 'react-router-dom';
import InfectedMain from "../Infected/InfectedMain";
import CountryMain from "../Country/CountryMain";

const SwicthComponent = () =>{
    return(
        <Switch>
            <Route path="/InfectedMain">
                <InfectedMain></InfectedMain>
            </Route>
            <Route path="/CountryMain">
                <CountryMain></CountryMain>
            </Route>
        </Switch>
    )
}

export default SwicthComponent;

