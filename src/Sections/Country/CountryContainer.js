import React from "react";
import CountryTable from "./CountryTable";
import "./CountryContainer.css";


const CountryContainer = ({CountryData, setCountryData}) =>{
    return(
        <section className="section-country-container">
            <header className="section-country-header">
                <h1 className="country-title">
                    Affected Countries
                </h1>
            </header>
            <section>
                <CountryTable 
                    CountryData={CountryData} 
                    setCountryData={setCountryData}>
                </CountryTable>
            </section>
        </section>
    )
} 

export default CountryContainer;