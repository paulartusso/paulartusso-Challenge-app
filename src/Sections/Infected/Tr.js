import React from "react";
import "./Table.css";
import "./Tr.css";

const Tr = props => {
    
    return(
        <tr>
            <td className={`th td ${props.live ? "alive" : "deceased"}`}>{props.id}</td>
            <td className={`th td ${props.live ? "alive" : "deceased"}`}>{props.first_name}</td>
            <td className={`th td ${props.live ? "alive" : "deceased"}`}>{props.last_name}</td>
            <td className={`th td ${props.live ? "alive" : "deceased"}`}>{props.country}</td>
            <td className={`th td ${props.live ? "alive" : "deceased"}`}>{props.live ? "Alive" : "Deceased"}</td>
            <td className={`th td ${props.live ? "alive" : "deceased"}`}>{props.age}</td>
            <td className={`th td ${props.live ? "alive" : "deceased"}`}>{props.infect_date}</td>
            <td className={`th td ${props.live ? "alive" : "deceased"}`}>{props.female ? "Female" : "Male"}</td>
        </tr>
    )
}

export default Tr;
