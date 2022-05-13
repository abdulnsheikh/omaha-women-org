import React, { memo } from 'react'
import backgroundImg from "../Images/Background.jpg";

import RegistrationForm from '../Components/RegistrationForm';

function RegistrationContainer() {
  return (
    <div style={{ background: `url(${backgroundImg})`}}>
      <RegistrationForm /> 
    </div> 
  )
}

export default memo(RegistrationContainer);
