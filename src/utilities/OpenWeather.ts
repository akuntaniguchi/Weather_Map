import axios from 'axios';

const getTemperature = (zipcode: string) => {
  // Returns promise in which value contains the temperature or error
  return axios.get('http://api.openweathermap.org/data/2.5/weather',
  {params: {
    zip: zipcode,
    units: 'imperial',
    appid: process.env.REACT_APP_OPENWEATHER_API_KEY}}
  )
  .then((response) => {
    // Returns temperature in fahrenheit as string
    return JSON.stringify(response['data']['main']['temp']);
  }) 
  .catch((error) => {
    return error
  })
  
}

export default getTemperature;
