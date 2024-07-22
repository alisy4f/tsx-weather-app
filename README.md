### Weather App

This Weather App is a simple web application built with TypeScript and React. It allows users to search for weather information based on location and displays details such as temperature, feels like temperature, humidity, and wind speed.

#### Preview

To see the Weather App in action, [click here](https://tsx-weather-app.vercel.app/).

#### Features

- Search for weather information by entering a location.
- Displays current temperature in Celsius.
- Shows "Feels Like" temperature, humidity, and wind speed.
- Responsive design suitable for various screen sizes.

#### Technologies Used

- TypeScript
- React
- Axios (for making HTTP requests)
- CSS (for styling)

#### How to Use

1. **Search for Weather Information**
   - Enter a location in the input field and press Enter or click the "Search" button.

2. **View Weather Details**
   - Once the location is found, the app displays the current weather details including temperature, "Feels Like" temperature, humidity, and wind speed.

3. **Interact with Weather Data**
   - Toggle between different locations to see their respective weather details.

#### Setup Instructions

To set up the Weather App locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/alisy4f/tsx-weather-app.git
   ```

2. Navigate into the project directory:
   ```
   cd tsx-weather-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_API_KEY=your_openweathermap_api_key
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` to view the Weather App.

#### Acknowledgments

- This Weather App utilizes data from OpenWeatherMap API.
