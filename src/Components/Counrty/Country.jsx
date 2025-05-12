import { useState } from 'react';
import './country.css'
const Country = ({country,handlevisitedcountry}) => {

    const {name ,flags,population, area,capital, cca3,region} = country;
    

    const [visited, setvisited] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleVisited = () => {
        setvisited(!visited);
        setShowMessage(true);
    }

    const passwithparams = () => handlevisitedcountry(country);

    return (
        <div className='country'>
            <h3 className='county-name'>Name : {name?.common}</h3>
            <img className='img-style' src={flags.png} alt="" />
            <div className='under-name'>
                <p>Capital: {capital}</p>

                <p>Region: {region}</p>
            </div>
            <p className='para-details'>Population : {population}</p>
            <p className='para-details'>Area : {area}</p>
            
            <p className='para-details'><small>code: {cca3}</small></p>
            <div className='button-div'>
                <button className='details-button'>Details</button>
                <button className='button2' onClick={handleVisited}>Visit</button>
                    {showMessage && (
                    <p>{visited ? "I Have Visited This Country" : "I want visit this country!"}</p>
                    )}
                <button className='button1' onClick={passwithparams}>Mark visited </button>

            </div>
        </div>
    );
};

export default Country;