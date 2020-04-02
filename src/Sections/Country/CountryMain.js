import React, {useState, useEffect} from 'react';
import Axios from "axios";
import CountryContainer from "./CountryContainer";
import Bars from "./Bars";


const CountryMain = () =>{
      
    const [CountryData, setCountryData] = useState([]);
        
    useEffect(()=> {
        let baseUrl = "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries";
        Axios.get(baseUrl)
        .then(res => {
            setCountryData(res.data);
        })
        .catch(er => console.log(er));
    }, []);

    return(
        <div>
            <CountryContainer 
                    CountryData={CountryData} 
                    setCountryData={setCountryData}>
            </CountryContainer>   
        
        </div>
    );
}


export default CountryMain;