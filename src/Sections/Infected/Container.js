import React, {useState} from "react";
import Table from "./Table";
import "./Container.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

const Container = () =>{
    const [ShowModal, setShowModal] = useState(true);
    
    return(
        <section className="section-container">
            <header className="section-header">
                <h1>Infected</h1>
                <button className="add-button" onClick={e=>setShowModal(!ShowModal)}>
                <FontAwesomeIcon icon={faPlus} className="header-icon"/>
                </button>
            </header>
            <section>
            <Table></Table>
            </section>
        </section>
    )
}

export default Container;

