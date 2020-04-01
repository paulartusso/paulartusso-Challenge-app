import React from "react";
import {Link} from 'react-router-dom';
import "./Menu.css";

const Menu = () =>{
    return(
        <section className="menu-container">
            <header className="menu-header"></header>
            <section className="menu-button-container">
                <button className="link-button">
                <Link to="/InfectedMain" className="link">Infected</Link>
                </button>
                <button className="link-button">
                <Link to="/CountryContainer" className="link">Countries</Link>
                </button>
            </section>
        </section>
    )
}

export default Menu;