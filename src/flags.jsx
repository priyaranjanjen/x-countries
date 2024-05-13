// import React from "react"
import { useState, useEffect } from "react"

import './flags.css';

export default function Flags(){
    const [countries, setCountries] = useState([]);
    const [searchedState, setSearchedState] = useState("");
    const url = "https://restcountries.com/v3.1/all";

    const fetchCountries = async(url) => {

        try {
            const response = await fetch(url);
            const finalData = await response.json();
    
            console.log(finalData); 
            setCountries(finalData); 
        } catch (error) {
            console.log("can't fetch data");
        }

    }

    useEffect(() => {
        fetchCountries(url);
    }, [])

    return (
        <div className="countries">
            <h1> COUNTRIES FLAGS</h1>

            <input 
                type="text" 
                name="search" 
                placeholder="Search for countries..."
                value={searchedState}
                className="search"
                onChange={(e) => {
                    console.log(e.target.value)
                    setSearchedState(e.target.value);
                }}
            />

            <div className="countryCard">
                {countries.filter((country) => {
                    if (!searchedState) {
                        return true; // Show all countries if search is empty
                    }
                    return country.name.common.toLowerCase().includes(searchedState.toLowerCase());
                }).map((country, index) => (
                    <div className="flags" key={index}> 
                        <img src={country.flags.png} alt={country.flags.alt}></img>
                        <span>{country.name.common}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}