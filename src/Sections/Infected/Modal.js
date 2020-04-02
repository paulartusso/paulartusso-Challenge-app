import React, {useState} from "react";
import Axios from "axios";
import "./Modal.css";


const Modal = ({showModal, toggleShowModal, data, setData}) =>{

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [country, setCountry] = useState("");
    const [live, setLive] = useState(true);
    const [age, setAge] = useState("");
    const [female, setFemale] = useState(true);

    const addNewInfected = () =>{
        let baseUrl = "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected";
        let newInfected = {
          first_name,
          last_name,
          country,
          live,
          age,
          female
        }
        Axios.post(baseUrl, newInfected)
        .then(res => {
            setData([...data, res.data]);
        })
        .then(()=>toggleShowModal())
        .catch(er => console.log(er));
    }

    console.log(setData);

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
                <input className="modal-inputs" type="text" onChange={e=>setFirst_name(e.target.value)}/>
                <label>Last Name</label>
                <input className="modal-inputs" type="text" onChange={e=>setLast_name(e.target.value)}/>
                <label>Country</label>
                <textarea className="modal-inputs address" type="text" onChange={e=>setCountry(e.target.value)}></textarea>
                <label>Status</label>
                <select  className="modal-inputs select" type="text" onChange={e=>setLive(e.target.value === "true" ? true : false)}>
                    <option value="true">Alive</option>
                    <option value="false">Deceased</option>
                </select>
                <label>Age</label>
                <input className="modal-inputs" type="number" onChange={e=>setAge(e.target.value)}/>
                <label>Gender</label>
                <select className="modal-inputs select" type="text" onChange={e=>setFemale(e.target.value === "true" ? true : false)}>
                    <option value="true">Female</option>
                    <option value="false">Male</option>
                </select>
            </div>
            <footer className="modal-footer">
                <button className="modal-button" onClick= {toggleShowModal}>Close</button>
                <button className="modal-button modal-right-button" onClick={addNewInfected}>Add</button>
            </footer>
        </section>
        </div>
    )
}

export default Modal;