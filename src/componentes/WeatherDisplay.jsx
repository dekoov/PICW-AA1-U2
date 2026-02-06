import React from 'react';

function WeatherDisplay({ weather, loading, error }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      {loading && <p>Cargando clima...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && !loading && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {Math.round(weather.main.temp)}°C
          </div>
          <p style={{ textTransform: 'capitalize' }}>
            {weather.weather[0].description}
          </p>
          <p>Humedad: {weather.main.humidity}%</p>
          <p>Viento: {weather.wind.speed} m/s</p>
        </div>
      )}

      {!weather && !loading && !error && (
        <p>Haz clic en una ciudad para ver el reporte.</p>
      )}
    </div>
  );
}

export default WeatherDisplay;