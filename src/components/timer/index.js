/** @format */

import React, { Component } from 'react';
import './index.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { paused: false, seconds: 100 };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { paused } = this.state;
      const { seconds } = this.state;
      if (paused === true) {
        return;
      }
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        clearInterval(this.myInterval);
      }
    }, 1000);
  }

  handleClick() {
    this.setState({ paused: true });
  }

  render() {
    const { seconds } = this.state;
    return (
      <div className='mt-100 layout-column align-items-center justify-content-center'>
        <div className='timer-value' data-testid='timer-value'>
          {seconds}
        </div>
        <button
          className='large'
          data-testid='stop-button'
          onClick={this.handleClick}>
          Stop Timer
        </button>
      </div>
    );
  }
}
