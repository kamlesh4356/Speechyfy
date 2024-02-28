import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import SPEECHIFY from './images/SPEECHIFY.png'
import SpeechInput from './components/SpeechInput';
import SpeechSettings from './components/SpeechSettings';

function App() {
  const [accents, setAccents] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [speechText, setSpeechText] = useState('');
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    setAccents(synth.getVoices());

    const updateAccents = () => {
      setAccents(synth.getVoices());
    };

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = updateAccents;
    }
  }, []);

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handlePitchChange = (e) => {
    setPitch(e.target.value);
  };

  const handleTextChange = (e) => {
    setSpeechText(e.target.value);
  };

  const handleAccentChange = (e) => {
    setSelectedVoice(e.target.value);
  };

  const synthesizeSpeech = () => {
    const synth = window.speechSynthesis;

    if (synth.speaking) {
      console.error('Already speaking..');
      return;
    }

    if (speechText.trim() !== '') {
      const speak = new SpeechSynthesisUtterance(speechText);
      speak.onend = () => {
        console.log('End of speech');
      };
      speak.onerror = () => {
        console.log('Something went wrong');
      };

      const selectedVoiceObj = accents.find((a) => a.name === selectedVoice);
      if (selectedVoiceObj) {
        speak.voice = selectedVoiceObj;
      }

      speak.rate = rate;
      speak.pitch = pitch;

      synth.speak(speak);
    }
  };

  return (
    <div className="container text-center">
      <img src={SPEECHIFY} alt="Speechify-Logo" />
      <div className="row">
        <div className="col-md-4 mx-auto">
          <SpeechInput
            speechText={speechText}
            handleTextChange={handleTextChange}
            synthesizeSpeech={synthesizeSpeech}
          />
          <SpeechSettings
            rate={rate}
            pitch={pitch}
            handleRateChange={handleRateChange}
            handlePitchChange={handlePitchChange}
            accents={accents}
            selectedVoice={selectedVoice}
            handleAccentChange={handleAccentChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
