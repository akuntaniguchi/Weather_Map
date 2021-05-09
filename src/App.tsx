import React, {useState} from 'react';
import LocationInput from './components/LocationInput';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App: React.FC = () => {
  // Location state value (Ex. Zip Code)
  const [location, setLocation] = useState("")

  // Function to set the location state value
  const locationAddHandler = (location: string) => {
    setLocation(location)
  };

  // TODO: Function to use location value and retrieve temperature
  // TODO: Function to change background based on temperature value

  return (
    <div className="App">
      <LocationInput onAddLocation={locationAddHandler}/>
    </div>
  );
};

export default App;
