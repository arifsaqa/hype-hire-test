import Image from 'next/image';
import React from 'react';

const Logo = ({ white = true }) => {
  return (
    <Image src={white ? '/images/logo-white.png' : '/images/logo.png'} alt="hyipe-hire-logo" width={31} height={21} />
  );
};

export default Logo;
