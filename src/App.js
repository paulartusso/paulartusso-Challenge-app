import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import Menu from "./Sections/Menu/Menu";
import SwitchComponent from './Sections/Components/SwitchComponent';
import "./App.css";

function App() {

  return (
    <div>
      <BrowserRouter>
        <SwitchComponent></SwitchComponent>
        <Menu></Menu>
      </BrowserRouter>
    </div>
  );
}

export default App;
