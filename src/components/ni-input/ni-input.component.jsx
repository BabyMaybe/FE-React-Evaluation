import React from 'react';
import './ni-input.styles.scss';

// This is a custom input component. It adds validation messages and
// is prestyled. It accepts ass valid html attributes in props and can take in
// a function to register changes to input
const NiInput = ({ handleChange, validationMsg, ...otherProps }) => (
  <div className="input-group ni-input">
    <div className="validation-msg">
      {validationMsg || null}
    </div>
    <input className="ni-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default NiInput;
