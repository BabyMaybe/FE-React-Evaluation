import React from 'react';
import './ni-input.styles.scss';

const NiInput = ({ handleChange, validationMsg, ...otherProps }) => (
  <div className="input-group ni-input">
    <div className="validation-msg">
      {validationMsg || null}
    </div>
    <input className="ni-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default NiInput;
