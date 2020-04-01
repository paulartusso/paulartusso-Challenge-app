import React from "react";

const CountryTr = props => {
    
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.infected}</td>
        </tr>
    )
}

export default CountryTr;
