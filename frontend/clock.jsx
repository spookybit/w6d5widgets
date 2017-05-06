import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render () {
    let seconds = this.state.time.getSeconds();
    let minutes = this.state.time.getMinutes();
    let hours = this.state.time.getHours();

    let day = this.state.time.getDate();
    let month = this.state.time.getMonth();
    let year = this.state.time.getFullYear();

    return (
      <div className = "clock">
        <h1>Clock</h1>
        <div>
          <p>{hours}:{minutes}:{seconds}</p>
          <p>{month}/{day}/{year}</p>
        </div>
      </div>
    );
  }

}

export default Clock;
