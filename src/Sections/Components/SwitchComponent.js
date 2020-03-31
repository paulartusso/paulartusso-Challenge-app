import React from "react";
import {Switch, Route} from 'react-router-dom';
import Container from "../Infected/Container";
import Curve from "../Infected/Curve"
import CountryContainer from "../Country/CountryContainer";


const SwicthComponent = () =>{
    return(
        <Switch>
            <Route path="/Container">
                <Container></Container>
            </Route>
            <Route path="/Curve">
                <Curve></Curve>
            </Route>
            <Route path="/CountryContainer">
                <CountryContainer></CountryContainer>
            </Route>
        </Switch>
    )
}

export default SwicthComponent;

