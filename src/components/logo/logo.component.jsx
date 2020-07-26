import React from 'react';
import  logoPath from '../../assets/no_inc_logo.png';

import './logo.styles.scss';

const Logo = ({width}) => (
  <div className="logo-container">
    <img src={logoPath} alt="" width={width}/>
  </div>
)

export default Logo;
