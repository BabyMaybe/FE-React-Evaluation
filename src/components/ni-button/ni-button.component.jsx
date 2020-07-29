import React from 'react';

import './ni-button.styles.scss';

const NiButton = ({ children, type, ...props }) => (
  <button className="ni-button" type="submit" {...props}>
    {children}
  </button>
);

export default NiButton;
