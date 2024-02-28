import React from 'react';

const AccentOption = ({ name, lang }) => {
  return (
    <option value={name}>
      {name} ({lang})
    </option>
  );
};

export default AccentOption;
