import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import boom from './boom.wav'
import clap from './clap.wav'
import hihat from './hihat.wav'
import kick from './kick.wav'
import openhat from './openhat.wav'
import ride from './ride.wav'
import snare from './snare.wav'
import tink from './tink.wav'
import tom from './tom.wav'

// object for construction of drum pads
const drums = [
  {
    key: 'Q',
    keyCode: 81,
    name: 'Boom',
    path: boom
  },
  {
    key: 'W',
    keyCode: 87,
    name: 'Clap',
    path: clap
  },
  {
    key: 'E',
    keyCode: 69,
    name: 'Hi-hat',
    path: hihat
  },
  {
    key: 'A',
    keyCode: 65,
    name: 'Kick',
    path: kick
  },
  {
    key: 'S',
    keyCode: 83,
    name: 'Open Hi-hat',
    path: openhat
  },
  {
    key: 'D',
    keyCode: 68,
    name: 'Ride',
    path: ride
  },
  {
    key: 'Z',
    keyCode: 90,
    name: 'Snare',
    path: snare
  },
  {
    key: 'X',
    keyCode: 88,
    name: 'Tink',
    path: tink
  },
  {
    key: 'C',
    keyCode: 67,
    name: 'Tom',
    path: tom
  }
]

ReactDOM.render(<App drums={drums}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
