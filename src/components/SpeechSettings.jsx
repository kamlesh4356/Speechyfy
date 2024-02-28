import React from 'react';

const SpeechSettings = ({ rate, pitch, handleRateChange, handlePitchChange, accents, selectedVoice, handleAccentChange }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="rate">Speech Rate</label>
        <div id="rate-value" className="float-right border border-light px-2">
          {rate}
        </div>
        <input
          type="range"
          id="rate"
          className="custom-range slider"
          min="0.5"
          max="2"
          value={rate}
          step="0.1"
          onChange={handleRateChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pitch">Speech Pitch</label>
        <div id="pitch-value" className="float-right border border-light px-2">
          {pitch}
        </div>
        <input
          type="range"
          id="pitch"
          className="custom-range slider"
          min="0"
          max="2"
          value={pitch}
          step="0.1"
          onChange={handlePitchChange}
        />
      </div>
      <div className="form-group">
        <select
          id="voice-select"
          className="form-control mb-4"
          value={selectedVoice}
          onChange={handleAccentChange}
        >
          {accents.map((accent) => (
            <option key={accent.name} value={accent.name}>
              {accent.name} ({accent.lang})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SpeechSettings;
