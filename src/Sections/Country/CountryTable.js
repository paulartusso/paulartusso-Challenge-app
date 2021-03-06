import React from "react";
import CountryTr from "./CountryTr";
import "../../TableTr.css";

const CountryTable = ({CountryData}) => {

    return(
        <table className="table country-table">
            <thead>
                <th className="th country-th-td">Id</th>
                <th className="th country-th-td">Country</th>
                <th className="th country-th-td">Infected</th>
            </thead>
            <tbody>
                {CountryData.map(item=>{
                    return(
                        <CountryTr 
                            id={item.id}  
                            name={item.name}
                            infected={item.infected}>
                        </CountryTr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CountryTable;
