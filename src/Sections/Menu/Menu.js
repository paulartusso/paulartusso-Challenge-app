import React from "react";
import "./Menu.css";

const Menu = () =>{
    return(
        <section className="menu-container">
            <header className="menu-header">
                MENU   
            </header>
            <section className="menu-button-container">
                <button className="menu-button">Acá va un link</button>
                <button className="menu-button">Acá va un link</button>
            </section>
        </section>
    )
}

export default Menu;