import React from 'react';

const DrumPad = function(props) {
  return (
    <button className="drum-pad" id={props.name} data-keycode={props.keyCode} onMouseDown={props.onClick} onMouseUp={props.onUp} onMouseLeave={props.onUp} >
      {props.letter}
      <audio className="clip" id={props.letter} src={props.path} preload="auto" />
    </button>
  )
}

export default DrumPad