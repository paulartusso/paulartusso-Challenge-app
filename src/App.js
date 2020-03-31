import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Menu from "./Sections/Menu/Menu";
import SwicthComponent from './Sections/Components/SwitchComponent';
import Main from "./Sections/Main";



function App() {

  return (
    <div>
      <BrowserRouter>
        <SwicthComponent></SwicthComponent>
        <Menu></Menu>
        <Main></Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
