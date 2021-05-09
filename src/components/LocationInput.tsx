import React, { useRef } from 'react';
import getTemperature from '../utilities/OpenWeather';

type LocationInputProps = {
  onAddTemperature: (temperature: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = (props) => {
  const locationInputRef = useRef<HTMLInputElement>(null);

  const locationSubmitHandler = (event: React.FormEvent) => {
    // Prevent request to server serving this app
    event.preventDefault();
    const locationInput = locationInputRef.current!.value

    // Retrieve and set the temperature
    getTemperature(locationInput).then(temperature => {
      props.onAddTemperature(temperature)
    })
  };

  return  (
    <div className="ui text container">
      <form className="ui form" onSubmit={locationSubmitHandler}>
        <div className="fields">
          <label className="ui header">Enter a Zip Code:</label>
        </div>
        <div className="fields">
          <input className="ui input" placeholder="Zip Code..." type='text' id='location' ref={locationInputRef}></input>
        </div>
        <div>
          <button className="ui primary button" type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LocationInput;
