import { useState, useEffect, ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import { getCoordinates, getWeather } from './API/api';

// Definisi struktur data untuk data cuaca yang diterima dari API
interface WeatherData {
  name?: string;
  main?: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather?: {
    main: string;
  }[];
  wind?: {
    speed: number;
  };
}

function App() {
  
  const [data, setData] = useState<WeatherData>({});
  const [location, setLocation] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk mencari lokasi berdasarkan input pengguna
  const searchLocation = async () => {
    try {
      const coordinates = await getCoordinates(location);
      if (coordinates.length > 0) {
        setLongitude(coordinates[0].lon.toString());
        setLatitude(coordinates[0].lat.toString());
        setError(null);
      } else {
        setError('Koordinat tidak ditemukan.');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat mengambil koordinat. Silakan coba lagi.');
    }
    setLocation('');
  };

  // useEffect akan dijalankan setiap kali nilai longitude atau latitude berubah
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (longitude && latitude) {
          const weather = await getWeather(latitude, longitude);
          setData(weather);
          setError(null);
        }
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data cuaca. Silakan coba lagi.');
      }
    };

    fetchWeather();
  }, [longitude, latitude]);

  // Fungsi untuk mengupdate nilai lokasi berdasarkan input pengguna
  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  // Fungsi untuk menangani pencarian ketika pengguna menekan tombol Enter
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };

  // Fungsi untuk menangani pencarian ketika pengguna menekan tombol Search
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event) {
      searchLocation();
    }
  };

  return (
    <div className="app">
      <SearchBar
        location={location}
        handleLocationChange={handleLocationChange}
        handleKeyPress={handleKeyPress}
        handleButtonClick={handleButtonClick}
      />
      {error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : (
        <WeatherInfo data={data} />
      )}
    </div>
  );
}

export default App;
