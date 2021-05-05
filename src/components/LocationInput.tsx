import React, { useRef } from 'react';

type LocationInputProps = {
  onAddLocation: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = (props) => {
  const locationInputRef = useRef<HTMLInputElement>(null);

  const locationSubmitHandler = (event: React.FormEvent) => {
    // Prevent request to server serving this app
    event.preventDefault();
    const locationInput = locationInputRef.current!.value
    props.onAddLocation(locationInput)
  };

  return  (
    <form onSubmit={locationSubmitHandler}>
      <div>
        {/* TODO: Type of input may change */}
        <label>Zip Code</label>
        <input type='text' id='location' ref={locationInputRef}></input>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default LocationInput;
