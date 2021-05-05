import axios from "axios";
import getTemperature from './OpenWeather';

jest.mock("axios");

const error = {data:
  {
    "cod": '404',
    "message": "city not found"
  }
}

const data = {data: 
  {     
    "coord": {
      "lon": -87.7603,
      "lat": 41.9699
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 55,
      "feels_like": 48.07,
      "temp_min": 48.99,
      "temp_max": 53.6,
      "pressure": 1020,
      "humidity": 43
    },
    "visibility": 10000,
    "wind": {
      "speed": 9.22,
      "deg": 90
    },
    "clouds": {
      "all": 75
    },
    "dt": 1620497789,
    "sys": {
      "type": 1,
      "id": 5228,
      "country": "US",
      "sunrise": 1620470276,
      "sunset": 1620521827
    },
    "timezone": -18000,
    "id": 0,
    "name": "Chicago",
    "cod": 200
  }}

describe('test getTemperature', () => {
  afterEach(() => jest.resetAllMocks());

  it("returns temp", async () => {
    axios.get.mockResolvedValue(data);
    const temp = await getTemperature('60630');
    expect(temp).toEqual('55')
    expect(axios.get).toBeCalledWith("http://api.openweathermap.org/data/2.5/weather", {"params": {"appid": process.env.REACT_APP_OPENWEATHER_API_KEY, "units": "imperial", "zip": "60630"}});
  });

  it("returns 404 status for invalid request", async () => {
    axios.get.mockResolvedValue(Promise.reject(error));
  const temp = await getTemperature()
  expect(axios.get).toBeCalledWith("http://api.openweathermap.org/data/2.5/weather", {"params": {"appid": process.env.REACT_APP_OPENWEATHER_API_KEY, "units": "imperial", "zip": undefined}});
  expect(temp['data'].cod).toEqual('404') 
  });  
});