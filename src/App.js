import {useState, useEffect} from 'react';
import CityCard from './CityCard';
import UpdatedCityCard from './UpdatedCityCard';
import './App.css';
import debounce from 'lodash.debounce';
import {api_key} from './key';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const base_url = 'https://api.openweathermap.org/data/2.5';

const App = () => {
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [showUpdatedCard, setShowUpdatedcard] = useState(false);
    const [error, setError] = useState('');

    const searchCities = async(cityName) => {
        try {
            setError('');
            const response = await fetch(`${base_url}/find?q=${cityName}&units=metric&appid=${api_key}`);
            const data = await response.json();

            if(data.cod === '200' && data.list.length > 0) {
                setCities(data.list);
            }
            else{
                setCities([]);
                setError('No city found');
            }
        }
        catch (e) {
            console.error('There is some error:',e);
            setError('There is some error message: Try again!');
        }
    }

    const debouncedSearchCities = debounce((cityName) => {
        searchCities(cityName);
    }, 500);

    useEffect(() => {
            if(search){
                debouncedSearchCities(search);
            } else {
                setCities([]);
                setError('');
            }
    },[search]);

    const handleCityClick = (city) => {
        setSelectedCity(city);
        setShowUpdatedcard(true);
    };

    const handleBack = () => {
        setShowUpdatedcard(false);
        setSelectedCity(null);
    }

    return(
        <div className="app">
            <h1>Weather in the city</h1>
            <div className="search">
                <input
                    placeholder="Search for city"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button onClick={() => searchCities(search)} className="searchBtn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            {error && <div className="error">{error}</div>}
            {showUpdatedCard ?(
                <UpdatedCityCard city={selectedCity} onBack={handleBack} />
                ) : (
                    <div className="container">
                        {cities.length > 0 ? (
                            cities.map(city => (
                                <CityCard city={city} key={city.id} onClick={handleCityClick}/>
                            ))
                        ) : (
                            <div className="empty">
                                <h2>No cities found</h2>
                            </div>
                        )}
                    </div>
                )}
        </div>
    );
};

export default App;