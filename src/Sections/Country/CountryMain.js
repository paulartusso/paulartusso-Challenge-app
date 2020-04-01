import React, {useState, useEffect} from 'react';
import Axios from "axios";
import CountryContainer from "./CountryContainer";


const CountryMain = () =>{
      
    const [Countrydata, setCountryData] = useState([]);
        
    useEffect(()=> {
        let baseUrl = "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries";
        Axios.get(baseUrl)
        .then(res => {
            setCountryData(res.Countrydata);
        })
        .catch(er => console.log(er));
    }, []);

    return(
        <div>
            <CountryContainer 
                    Countrydata={Countrydata} 
                    setCountryData={setCountryData}>
            </CountryContainer>     
        </div>
    );
}


export default CountryMain;