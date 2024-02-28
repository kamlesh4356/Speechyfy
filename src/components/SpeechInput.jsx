import React from 'react';
import '../styles/styles.css';

const SpeechInput = ({ speechText, handleTextChange, synthesizeSpeech }) => {
  return (
    <div className="form-group">
      <textarea
        id="text-input"
        className="form-control form-control-lg mb-3"
        placeholder="Type something here..."
        value={speechText}
        onChange={handleTextChange}
      ></textarea>
      <button
        type="button"
        id="synthesize"
        className="btn btn-light btn-block"
        onClick={synthesizeSpeech}
      >
        SYNTHESIZE SPEECH
      </button>
    </div>
  );
};

export default SpeechInput;
