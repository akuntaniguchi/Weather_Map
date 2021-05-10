import React, {useState} from 'react';
import LocationInput from './components/LocationInput';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App: React.FC = () => {
  // State
  const [temperature, setTemperature] = useState('')

  // Function to set the temperature state value
  const temperatureAddHandler = (temperature: string) => {
    setTemperature(temperature)
  }

  // TODO: Function to change background based on temperature value

  return (
    <div className="App">
      <LocationInput onAddTemperature={temperatureAddHandler}/>
    </div>
  );
};

export default App;
