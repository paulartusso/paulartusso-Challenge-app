import React, {useState} from "react";
import "./Modal.css";


const Modal = ({showModal, toggleShowModal, data, setData}) =>{

    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [status, setStatus] = useState("");
    const [age, setAge] = useState("");
    const [infectDate, setInfectDate] = useState("");
    const [gender, setGender] = useState("");

    const addNewInfected = () =>{
        let newInfected = {
          name,
          lastName,
          country,
          status,
          age,
          infectDate,
          gender
        }
        setData([...data, newInfected])
      }
      
    if(!showModal) return null;

    return(
        <div className={`${showModal ? "background-modal" : null}`}>
        <section className="modal-container">
            <header className="modal-header">
                <h1>Add</h1>
                <button className="x-button" onClick= {toggleShowModal}>x</button>
            </header>
            <div className="modal-body">
                <label>First Name</label>
                <input className="modal-inputs" type="text" onChange={e=>setName(e.target.value)}/>
                <label>Last Name</label>
                <input className="modal-inputs" type="text" onChange={e=>setLastName(e.target.value)}/>
                <label>Country</label>
                <textarea className="modal-inputs address" type="text" onChange={e=>setCountry(e.target.value)}></textarea>
                <label>Status</label>
                <select  className="modal-inputs select" type="text" onChange={e=>setStatus(e.target.value)}>
                    <option value="alive">Alive</option>
                    <option value="deceased">Deceased</option>
                </select>
                <label>Age</label>
                <input className="modal-inputs" type="number" onChange={e=>setAge(e.target.value)}/>
                <label>Infect Date</label>
                <input className="modal-inputs" type="date" onChange={e=>setInfectDate(e.target.value)}/>
                <label>Gender</label>
                <select className="modal-inputs select" type="text" onChange={e=>setGender(e.target.value)}>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>
            <footer className="modal-footer">
                <button className="modal-button" onClick= {toggleShowModal}>Cancel</button>
                <button className="modal-button modal-right-button" onClick={addNewInfected}>Add</button>
            </footer>
        </section>
        </div>
    )
}

export default Modal;