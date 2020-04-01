import React from "react";
import CountryTable from "./CountryTable";


const CountryContainer = ({CountryData, setCountryData}) =>{
    return(
        <section className="section-container">
            <header className="section-header">
                <h1>Affected Countries</h1>
            </header>
            <section>
                <CountryTable CountryData={CountryData} 
                              setCountryData={setCountryData}>
                </CountryTable>
            </section>
        </section>
    )
} 

export default CountryContainer;