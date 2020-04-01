import React from "react";
import "../../TableTr.css";

const Tr = props => {
    
    return(
        <tr className={`${props.live ? "alive" : "deceased"}`}>
            <td>{props.id}</td>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.country}</td>
            <td>{props.live ? "Alive" : "Deceased"}</td>
            <td>{props.age}</td>
            <td>{props.infect_date}</td>
            <td>{props.female ? "Female" : "Male"}</td>
        </tr>
    )
}

export default Tr;
