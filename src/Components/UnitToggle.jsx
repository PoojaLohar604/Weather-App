// src/components/UnitToggle.js
import React from 'react';

// UnitToggle component allows users to switch between metric and imperial units
const UnitToggle = ({ units, onToggle }) => {
  return (
    <div className="toggle-button">
      {/* Button toggles between Celsius and Fahrenheit depending on the current units */}
      <button onClick={onToggle}>
        {/* Display the appropriate label based on the current unit */}
        {units === 'metric' ? 'Show in Fahrenheit' : 'Show in Celsius'}
      </button>
    </div>
  );
};

export default UnitToggle;
