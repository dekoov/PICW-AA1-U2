import React from 'react';

function CitySelector({ cities, onCitySelect, loading }) {
  return (
    <div>
      <h3>Selecciona una Sede:</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {cities.map((city) => (
          <button
            key={city.name}
            onClick={() => onCitySelect(city.query)}
            disabled={loading}
            style={{
              padding: '10px 15px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CitySelector;