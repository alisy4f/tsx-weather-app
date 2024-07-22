import axios from 'axios';

// API key untuk OpenWeatherMap
const apiKey = import.meta.env.VITE_API_KEY
// const apiKey = '28aceebdd01225c587a2383f8b34dbfd';

// Fungsi untuk mendapatkan koordinat (longitude dan latitude) berdasarkan lokasi yang dimasukkan
export const getCoordinates = async (location: string) => {
  const urlCity = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;
  const response = await axios.get(urlCity);
  return response.data;
};

// Fungsi untuk mendapatkan data cuaca berdasarkan koordinat yang diberikan
export const getWeather = async (latitude: string, longitude: string) => {
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  const response = await axios.get(urlWeather);
  return response.data;
};
