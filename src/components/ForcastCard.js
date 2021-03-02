import React from 'react';
import '../Forcast.css';
import 'bootstrap/dist/css/bootstrap.css';

class ForcastCard extends React.Component {
  constructor(props) { // Allows objects to be created from this class
    super(props);      // Allows constructor from parent class to be called
    this.state = {     // Sets the properties of this object
      temp: props.name,
      wind_speed: props.wind_speed,
      humidity: props.humidity,
      location: props.location
    }
  }

  render(){
    return(
      <div class="row">
        <div class="card" style={{width : "auto"}}>
              <div class="card-body">
                <h5 class="card-title">{this.state.location}</h5>
                <h6 class="card-subtitle">{this.state.location}</h6>
                <p class="card-text">{this.state.wind_speed}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
        </div>
      </div>
    )
  }
}

export default ForcastCard;
