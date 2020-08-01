import React from 'react';

import './ni-button.styles.scss';

//  This is a custom button that behaves like a regular button
//  and can be customized and styled for reusability
//
const NiButton = ({ children, ...props }) => (
  <button className="ni-button" type="submit" {...props}>
    {children}
  </button>
);

export default NiButton;
