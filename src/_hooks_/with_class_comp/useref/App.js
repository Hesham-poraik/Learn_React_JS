import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      title: 'main title'
    };

    this.btnCounter = React.createRef();

    this.countUp = this.countUp.bind(this); // or use arrow fun to run in same context :)
  }
  countUp() {
    this.setState({ counter: this.state.counter + 1});
  };
  componentDidMount() {
    console.log(this.btnCounter.current)
    this.btnCounter.current.focus();
  }
  render(){
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        padding: '20px',
        margin: '20px',
        border: '1px solid #999'}}>
        <button ref={this.btnCounter} onClick={this.countUp}>Count Up</button>
        <h1>
          {this.state.counter}
        </h1>
        <h1>
          {this.state.title}
        </h1>
      </div>
    );
  }
}