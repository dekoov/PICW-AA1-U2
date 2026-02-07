import { useState } from 'react'
import './App.css'
import CitySelector from './componentes/CitySelector'
import WeatherDisplay from './componentes/WeatherDisplay'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Lista de sedes del Mundial 2026
  const cities = [
    { name: 'Ciudad de México', query: 'Mexico City,MX' },
    { name: 'Monterrey', query: 'Monterrey,MX' },
    { name: 'Guadalajara', query: 'Guadalajara,MX' },
    { name: 'Nueva York', query: 'New York,US' },
    { name: 'Toronto', query: 'Toronto,CA' },
    { name: 'Vancouver', query: 'Vancouver,CA' },
    { name: 'Miami', query: 'Miami,US' }
  ];

  const fetchWeather = async (cityQuery) => {
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      // Leemos la API Key desde la variable de entorno
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY; //HACER EL .ENV Y PONER LA API KEY ALLI, REQUISITO 2.b!!!!!!!!!!!!!!!!!!!!!!!!

      // REQUISITO 2.c: Usar la ruta relativa /api/weather
      // Agregamos units=metric para grados Celsius
      const url = `/api/weather?q=${cityQuery}&appid=${apiKey}&units=metric&lang=es`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Error al obtener datos del clima');
      }

      const data = await response.json();
      setWeather(data);

    } catch (err) {
      console.error(err);
      setError('No se pudo obtener el clima. Verifica tu API Key o conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Clima Mundial 2026</h1>

      <CitySelector cities={cities} onCitySelect={fetchWeather} loading={loading} />

      <WeatherDisplay weather={weather} loading={loading} error={error} />
    </div>
  )
}

export default App
