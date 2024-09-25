import React from 'react';
import {useEffect, useState} from 'react';
import PropTypes from "prop-types";

const UpdatedCityCard = ({city, onBack}) => {

    const [bgColor, setBgColor] = useState('');

    useEffect(() => {
        if (city.main?.temp) {
            const temp = city.main.temp;
            let color;

            if (temp <= 5) {
                color = '#7ab3f8';
            } else if (temp > 5 && temp <= 15) {
                color = '#0ff';
            } else if (temp > 15 && temp <= 25) {
                color = '#91fa91';
            } else if (temp > 25 && temp <= 35) {
                color = '#fafa83';
            } else {
                color = '#ff7777';
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
                    <p><strong>Min/Max Temp:</strong> {city.main?.temp_min}°C / {city.main?.temp_max}°C</p>
                </div>
                <div className="info-box">
                    <p><strong>Wind:</strong> {city.wind?.speed} m/s, {city.wind?.deg}°</p>
                </div>
                <div className="info-box">
                    <p><strong>Feels Like:</strong> {city.main?.feels_like}°C</p>
                </div>
                <div className="info-box">
                    <p><strong>Pressure:</strong> {city.main?.pressure} hPa</p>
                </div>
                <div className="info-box">
                    <p><strong>Humidity:</strong> {city.main?.humidity}%</p>
                </div>
                <div className="info-box">
                    <p><strong>Cloud Cover:</strong> {city.clouds?.all}%</p>
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

export default UpdatedCityCard;