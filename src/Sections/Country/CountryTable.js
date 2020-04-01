import React from "react";
import CountryTr from "./CountryTr";

const CountryTable = ({Countrydata}) => {

    return(
        <table className="table">
            <thead>
                    <th className="th">Id</th>
                    <th className="th">First Name</th>
                    <th className="th">Last Name</th>
            </thead>
            <tbody>
                {Countrydata.map(item=>{
                    return(
                        <CountryTr id={item.id}  
                                    name={item.name}
                                    infected={item.infected} >
                        </CountryTr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CountryTable;
