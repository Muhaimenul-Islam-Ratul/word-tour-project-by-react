import { useEffect, useState } from "react";
import Country from "../Counrty/Country";
import './countries.css'


const Countries = () => {
    const[countries,setcountries] = useState([]);

    const[visitedCountry, setvisitedCountry]= useState([]);

    const handlevisitedcountry = country => {
        const newVisitedCountry = [...visitedCountry, country]

        setvisitedCountry(newVisitedCountry)
    }

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountries(data))
    },[])
    return (
        <div>
            <h3>Total Countries Here : {countries.length}</h3>
            <div>
                <h5>Visted Countries Name : </h5>
                <ol>
                    {
                        visitedCountry.map(country => <li key={country.cca3}> {country.name.common}</li>)
                    }
                </ol>
            </div>

            <div className="country-container">
            
            {
                countries.map(country => <Country
                handlevisitedcountry= {handlevisitedcountry}
                key={country.cca3} country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;