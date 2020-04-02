import React from "react";
import Tr from "./Tr";
import "../../TableTr.css";

const Table = ({data}) => {

    return(
        <table className="table">
            <thead>
                <th className="th">Id</th>
                <th className="th">First Name</th>
                <th className="th">Last Name</th>
                <th className="th">Country</th>
                <th className="th">Status</th>
                <th className="th">Age</th>
                <th className="th">Infect Date</th>
                <th className="th">Gender</th>
            </thead>
            <tbody>
                {data.map(item=>{
                    return(
                        <Tr id={item.id} 
                            first_name={item.first_name} 
                            last_name={item.last_name} 
                            country={item.country}
                            live={item.live}
                            age={item.age}
                            infect_date={item.infect_date}
                            female={item.female} >
                        </Tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;
