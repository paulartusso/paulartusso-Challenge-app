import React from "react";
import "../../TableTr.css";

const CountryTr = props => {
    return(
        <tr>
            <td className="country-th-td">{props.id}</td>
            <td className="country-th-td">{props.name}</td>
            <td className="country-th-td">{props.infected}</td>
        </tr>
    )
}

export default CountryTr;
