// src/components/UnitToggle.js
import React from 'react';

const UnitToggle = ({ units, onToggle }) => {
  return (
    <div className='toggle-button'>
      <button onClick={onToggle}>
        {units === 'metric' ? 'Show in Fahrenheit' : 'Show in Celsius'}
      </button>
    </div>
  );
};

export default UnitToggle;
