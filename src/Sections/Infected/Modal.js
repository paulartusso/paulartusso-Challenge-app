import React from "react";
import "./Modal.css";

const Modal = () =>{
    return(
        <div>
        <section  className="modal-container">
            <header className="modal-header">
                <h1>Add</h1>
                <button className="x-button">x</button>
            </header>
            <div className="modal-body">
                <label>First Name</label>
                <input className="modal-inputs" type="text" maxlength="50"/>
                <label>Last Name</label>
                <input className="modal-inputs" type="text" maxlength="50"/>
                <label>Country</label>
                <textarea className="modal-inputs address" type="text"  maxlength="60"></textarea>
                <label>Status</label>
                <select  className="modal-inputs select" type="text">
                    <option value="alive">Alive</option>
                    <option value="deceased">Deceased</option>
                </select>
                <label>Age</label>
                <input className="modal-inputs" type="number"/>
                <label>Infect Date</label>
                <input className="modal-inputs" type="date"/>
                <label>Gender</label>
                <select className="modal-inputs select" type="text">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>
            <footer className="modal-footer">
                <button className="modal-button">Cancel</button>
                <button className="modal-button modal-right-button">Add</button>
            </footer>
        </section>
        </div>
    )
}

export default Modal;