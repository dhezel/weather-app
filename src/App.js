import logo from './logo.svg';
import './App.css';
import Forcast from './components/ForcastCard';
import TopNavBar from './components/TopNavBar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const forcasts = [
  {temp: 10, wind_speed: "8", humidity: .1, location: "Omaha", day: "Monday"},
  {temp: 20, wind_speed: "16", humidity: .2, location: "Omaha", day: "Tuesday"},
  {temp: 30, wind_speed: "32", humidity: .3, location: "Omaha", day: "Wednesday"},
  {temp: 40, wind_speed: "64", humidity: .4, location: "Omaha", day: "Thursday"},
  {temp: 50, wind_speed: "128", humidity: .5, location: "Omaha", day: "Friday"}
]

function App() {
  return (
    <div className="App">
    <TopNavBar/>
      <div class="container">
        <div class="row">
          <div class="col">
          </div>
          { 
          forcasts.map(
            (forcast) => 
              <div class="col-2">
                <Forcast 
                temp={forcast.temp} 
                wind_speed={forcast.wind_speed} 
                humidity={forcast.humidity} 
                location={forcast.location}/>
              </div>
          ) 
          }
          <div class="col">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;