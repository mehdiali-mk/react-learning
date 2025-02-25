function kelvinToCelsius(kelvin) {
  // Convert Kelvin to Celsius using the formula
  const celsius = kelvin - 273.15;
  return celsius.toFixed(2); // Round to 2 decimal places
}

export { kelvinToCelsius };
