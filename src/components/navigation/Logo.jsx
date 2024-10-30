import React from 'react';
import LogoImg from '../../assets/navigation/Logo.png'

const Logo = () => {
  return (
    <div className="flex gap-4 mt-2 text-2xl text-white">
      <img loading="lazy" src={LogoImg} alt="" className="object-contain shrink-0 aspect-square w-[41px]" />
      <h1 className="my-auto font-jakarta text-title">Protrack</h1>
    </div>
  );
}

export default Logo;