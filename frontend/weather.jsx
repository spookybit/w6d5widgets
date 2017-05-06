import React from 'react';

class Weather extends React.Component{
  constructor(props) {
    super (props);
    this.state = {

    };
  }

  success(pos) {
    console.log(pos);
  }

  getWeather(pos) {
    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    url += `lat=${latitude}&lon${longitude}`;
    url += '&APPID=73f044fe7b95f107c2f3f3a1779df639';

    console.log(latitude, longitude);
    console.log(url);

    // let xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = () => {
    //   //ready state of DONE means this is complete
    //   if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
    //     const data = JSON.parse(xmlhttp.responseText);
    //     this.setState({weather: data});
    //   }
    // };
    //
    // xmlhttp.open('GET', url, true);
    // xmlhttp.send();

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }


  render() {
    return (
      <div>
        <h1>Weather</h1>
      </div>
    );
  }
}
export default Weather;
