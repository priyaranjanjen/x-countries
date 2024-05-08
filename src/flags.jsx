// import React from "react"
import { useState, useEffect } from "react"

import './flags.css';

export default function Flags(){
    const [countries, setCountries] = useState([]);
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
        <>
            <h1> COUNTRIES FLAGS</h1>

            <div className="container">
                { countries && countries.map((country, index) => (

                    <div className="flags" key={index}> 
                        <img src={country.flags.png} alt={country.flags.alt}></img>
                        <p>{country.region}</p>
                    </div>

                ))
                }
            </div>
        </>
    )
}