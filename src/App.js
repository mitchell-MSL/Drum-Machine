import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[disText, setDisText] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playAudio(event.key.toUpperCase()); 
    });
  }, []);

  const buttonInfo = [
    {
      keyCode: 81,
      text: 'Q',
      desc: 'Heater-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      text: 'W',
      desc: 'Heater-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      text: 'E',
      desc: 'Heater-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      text: 'A',
      desc: 'Heater-4',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      text: 'S',
      desc: 'Clap',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      text: 'D',
      desc: 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      text: 'Z',
      desc: 'Kick-n\'-Hat',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      text: 'X',
      desc: 'Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      text: 'C',
      desc: 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ];

  function playAudio(selector) {
    const audio = document.getElementById(selector);
    if (audio) {
      audio.play();
      setDisText(selector);
    }
  }

  return (
    <div id="outter-div">
      <div id="drum-machine">
        <div className="drum-pads">
          {buttonInfo.map((buttonInfo) => (
            <div
              key={buttonInfo.src}
              onClick={() => {
                playAudio(buttonInfo.text);
              }} 
              className="drum-pad"
              id={buttonInfo.desc}
            >
              {buttonInfo.text}
              <audio className='clip' id={buttonInfo.text} src={buttonInfo.src}></audio>
            </div>))}
        </div>
        <div id="display">
          {disText} 
        </div>
      </div>
    </div>
  );
}

export default App;
