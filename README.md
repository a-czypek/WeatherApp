# Weather App

WeatherApp is a dynamic and user-friendly application designed to provide accurate and up-to-date weather information for cities around the world. Users can search for a city, and the app will display detailed weather data including temperature, humidity, wind speed, and more. The app also features a visually appealing UI that changes background colors based on the current temperature, enhancing the user experience. Additionally, users can view extended weather details in an updated city card view, with an option to return to the main search. The app is built with React, utilizing real-time data from the OpenWeatherMap API.


# Weather Application
This project is an implementation of a weather application that allows users to search for cities and view their current weather conditions. The application utilizes the OpenWeatherMap API to fetch real-time weather data and displays it in a user-friendly interface built with React.

## Project Description
The goal of this project is to create a web application that enables users to search for cities and retrieve detailed weather information, including temperature, weather description, and other meteorological data. The application features a responsive design, debounced search functionality, and dynamic background color changes based on temperature.

### Key Features
- **City Search:** Users can search for any city to retrieve its current weather.
Dynamic UI Updates: The application updates the displayed weather data dynamically as the user types.
- **Detailed Weather Information:** When a city is selected, a detailed weather card displays additional information, such as minimum and maximum temperatures, humidity, and wind speed.
- **Error Handling:** The application gracefully handles errors, displaying relevant messages if no city is found or if there is an issue with the API.
  
### Development Steps
1. **API Integration:** Fetch weather data from the OpenWeatherMap API based on user search input.
2. **State Management:** Use React's useState and useEffect hooks to manage application state and side effects.
3. **Debouncing Input:** Implement debouncing using lodash.debounce to limit API calls as the user types.
4. **Conditional Rendering:** Display either a list of cities or a detailed city card based on user interaction.
5. **Styling:** Utilize CSS for styling the application, ensuring a visually appealing layout.
   
## Technologies Used
- **React:** For building the user interface and managing component states.
- **OpenWeatherMap API:** For retrieving current weather data.
- **Lodash:** For implementing debounced search functionality.
- **PropTypes:** For type-checking props in React components.
  
## How to Run
To run the application locally, follow these steps:

1.Clone the repository:
git clone https://github.com/yourusername/weather-app.git
cd weather-app

2. Install dependencies:
npm install

3.Start the application:
npm start

The application should be available on http://localhost:3000.

## Structure Overview
The project is structured into several components, each responsible for different parts of the application:

- **App.js:** The main component that manages state and renders the search input and city cards.
- **CityCard.js:** A component that displays individual city weather information.
- **UpdatedCityCard.js:** A component that shows detailed weather information when a city is selected.
- **App.css:** The main stylesheet for styling the application.
  
### Component Details
- **App Component:** Handles user input and API requests, manages error states, and conditionally renders components based on user interactions.
- **CityCard Component:** Displays basic weather information for each city, such as name, temperature, and weather description.
- **UpdatedCityCard Component:** Displays comprehensive weather details, including temperature, humidity, wind speed, and additional meteorological data, with dynamic background colors based on the temperature.
