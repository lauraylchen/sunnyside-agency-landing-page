import React from 'react';

import headerImgDesktop from '../img/desktop/image-header.jpg'
import headerImgMobile from '../img/mobile/image-header.jpg'

const Hero = () => {
  return (
    <div>
      <img src={ headerImgMobile } className="block sm:hidden" alt="blue banner with half an orange" />
      <img src={ headerImgDesktop } className="hidden sm:block" alt="blue banner with half an orange" />
    </div>
  )
}

export default Hero;
