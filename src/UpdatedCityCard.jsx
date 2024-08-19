import React from 'react';
import {useEffect, useState} from 'react';
import PropTypes from "prop-types";

const UpdatedCityCard = ({city, onBack}) => {

    const [bgColor, setBgColor] = useState('');

    useEffect(() => {
        // Ustaw kolor tła w zależności od temperatury
        if (city.main?.temp) {
            const temp = city.main.temp;
            let color;

            if (temp <= 5) {
                color = '#7ab3f8'; // Niebieski dla temperatur poniżej 0°C
            } else if (temp > 5 && temp <= 15) {
                color = '#0ff'; // Jasnoniebieski dla temperatur od 0°C do 15°C
            } else if (temp > 15 && temp <= 25) {
                color = '#91fa91'; // Zielony dla temperatur od 15°C do 25°C
            } else if (temp > 25 && temp <= 35) {
                color = '#fafa83'; // Żółty dla temperatur od 25°C do 35°C
            } else {
                color = '#ff7777'; // Czerwony dla temperatur powyżej 35°C
            }

            setBgColor(color);
        }
    }, [city.main?.temp]);
    return (
        <div className='updated-city-card' style={{backgroundColor: bgColor}}>
            <h2 className='new-city'>{city.name}</h2>
            <p className="coord">{city.coord.lat}°, {city.coord.lon}°</p>
            <p className="temp">{city.main?.temp}°C</p>
            <p className="weather">{city.weather?.[0]?.description}</p>
            <div className="info-box-container">
                <div className="info-box">
                    <p className="temp-min-max"><span className="main-text">Min/Max Temp:</span>
                        <br/>
                        <span className="text-card">{city.main?.temp_min}°C/{city.main?.temp_max}°C</span></p>
                </div>
                <div className="info-box">
                    <p> <span className="main-text">Wind:</span>
                        <br/>
                        <span className="text-card"> {city.wind?.speed} , {city.wind.deg}°</span></p>
                </div>
                <div className="info-box">
                    <p> <span className="main-text">Feels like:</span>
                        <br/>
                        <span className="text-card">{city.main?.feels_like}°C</span></p>
                </div>
                <div className="info-box">
                    <p> <span className="main-text">Atmospheric pressure:</span>
                        <br/>
                        <span className="text-card">{city.main?.pressure}hPa</span></p>
                </div>
                <div className="info-box">
                    <p> <span className="main-text">Humidity level:</span>
                        <br/>
                        <span className="text-card">{city.main?.humidity}%</span></p>
                </div>
                <div className="info-box">
                    <p><span className="main-text">Cloud cover:</span>
                        <br/>
                        <span className="text-card">{city.clouds.all}%</span></p>
                </div>
            </div>
            <button onClick={onBack} className="back-button">Back to City Card</button>
        </div>

    )
}

UpdatedCityCard.propTypes = {
    city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        coord: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lon: PropTypes.number.isRequired
        }),
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            temp_min: PropTypes.number.isRequired,
            temp_max: PropTypes.number.isRequired,
            feels_like: PropTypes.number.isRequired,
            pressure: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired
        }),
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired
            })
        ).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
            deg: PropTypes.number.isRequired
        }),
        clouds: PropTypes.shape({
            all: PropTypes.number.isRequired
        })
    }).isRequired,
    onBack: PropTypes.func.isRequired
};

UpdatedCityCard.defaultProps = {
    city: {
        name: 'Unknown City',
        coord: { lat: 0, lon: 0 },
        main: {
            temp: 0,
            temp_min: 0,
            temp_max: 0,
            feels_like: 0,
            pressure: 0,
            humidity: 0
        },
        weather: [{ description: 'No description' }],
        wind: { speed: 0, deg: 0 },
        clouds: { all: 0 }
    },
    onBack: () => {}
};
export default UpdatedCityCard;