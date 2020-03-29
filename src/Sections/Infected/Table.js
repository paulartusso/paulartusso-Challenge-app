import React, {useState, useEffect} from "react";
import Axios from "axios";
import Tr from "./Tr";
import "./Table.css";

const Table = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=> {
        Axios.get("http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected")
        .then(res => {
            setData(res.data);
        })
        .catch(er => console.log(er));
    }, []);

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
