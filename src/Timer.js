import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: this.props.ms,
      start: false
    }
  }
    
    componentDidMount() {
      setInterval(
        () => this.state.start ? this.setState({ timer: this.state.timer + 1000 })
         : clearInterval(this.state.timer), 1000)
    }
    startCounting = () => { this.setState({ start: !this.state.start }) }
    restart = () => {
      this.setState({timer:this.props.ms, start:false})
    }
    render() {
    var hours = Math.floor(this.state.timer / 1000 / 3600) % 24;
    var minutes = Math.floor(this.state.timer / 60000) % 60;
    var seconds = parseInt((this.state.timer / 1000) % 60);
    if(seconds <= 9) {seconds = '0' + seconds}
    if(minutes <= 9) {minutes = '0' + minutes}
    if(hours <= 9) {hours = '0' + hours}
    return (
      <div>
        <span>{hours} : {minutes} : {seconds}</span>
        <button onClick={this.startCounting}>{this.state.start ? 'Pause' : 'Start'}</button>
        <button onClick={this.restart}>restart</button>

      </div>
    );
  }
}
export default Timer;
