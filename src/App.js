import React from 'react';
import './App.css';
import DrumPad from './DrumPad.js';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
      playing: 'Play with keyboard or mouse'
    }
    this.handleKey = this.handleKey.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.handleUp = this.handleUp.bind(this)
  }

  // handle keyboard presses
  handleKey(e) {
    // ensure keypress is valid
    const validKeys = [81, 87, 69, 65, 83, 68, 90, 88, 67]
    if (!validKeys.includes(e.keyCode)) return

    const target = document.querySelector(`.drum-pad[data-keycode="${e.keyCode}"]`)
    if (e.type === 'keyup') {
      this.deactivate(target)
    } else {
      this.playDrum(target)
    }
  }

  // handle button clicks
  handleButton(e) {
    this.playDrum(e.target)
  }

  handleUp(e) {
    this.deactivate(e.target)
  }

  playDrum(target) {
    const audio = target.querySelector('audio')
    audio.currentTime = 0
    audio.play()
    this.setState({playing: target.id})
    target.classList.add('playing')
  }

  deactivate(target) {
    target.classList.remove('playing')
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey)
    document.addEventListener('keyup', this.handleKey)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey)
    document.removeEventListener('keyup', this.handleKey)
  }

  render() {
    const buttons = this.props.drums.map(drum => <DrumPad onClick={this.handleButton} onUp={this.handleUp} name={drum.name} key={drum.key} keyCode={drum.keyCode} letter={drum.key} path={drum.path}/>)
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="display">{this.state.playing}</div>
        <div className="pad-container">
          {buttons}
        </div>
      </div>
    );
  }
}


export default App;
