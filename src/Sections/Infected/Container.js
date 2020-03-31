import React, {useState} from "react";
import Modal from "./Modal";
import Table from "./Table";
import "./Container.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

const Container = ({toggleShowModal, showModal, data, setData, addNewInfected}) =>{
    
    return(
        <section className="section-container">
            <header className="section-header">
                <h1>Infected</h1>
                <button className="add-button" onClick={e=>toggleShowModal()}>
                    <FontAwesomeIcon icon={faPlus} className="header-icon"/>
                </button>
            </header>
            <section>
                <Modal showModal={showModal} 
                       toggleShowModal={toggleShowModal} 
                       data={data} 
                       setData={setData} 
                       addNewInfected={addNewInfected}>
                </Modal>
                <Table data={data}></Table>
            </section>
        </section>
    )
}

export default Container;


