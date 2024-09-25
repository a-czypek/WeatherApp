import React from 'react';
import PropTypes from "prop-types";
import {useEffect, useState} from 'react';

const CityCard = ({ city, onClick }) => {

    return(
            <div className="city-card" onClick={() => onClick(city)}>
                <h2>{city.name}, {city.sys?.country} </h2>
                <p>Temperature: {city.main?.temp}°C</p>
                <p>Weather: {city.weather?.[0]?.description}</p>
            </div>
    )
}

CityCard.propTypes = {
    city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        sys: PropTypes.shape({
            country: PropTypes.string.isRequired
        }),
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired
        }),
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default CityCard;
