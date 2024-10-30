import React from 'react';

const NavigationItem = ({ icon, label }) => {
  return (
    <div className={`flex items-center gap-2 p-2 mt-1 min-w-full rounded-lg ${
        label === "Home" ? 'bg-[#49CCF9] text-white' : 'hover:bg-[#49CCF9] hover:text-white'
      }`}>
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain w-[22px] h-[22px] shrink-0 "
      />
      <span className={`font-jakarta text-body ${label === "Home" ? 'text-white' : 'text-[#56555C]'}`}>{label}</span>
    </div>
  );
}

export default NavigationItem;