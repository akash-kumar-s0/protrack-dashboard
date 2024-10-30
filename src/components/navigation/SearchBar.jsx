import React from 'react';
import SearchIcon from '../../assets/navigation/search.png'


const SearchBar = () => {
  return (
    <div className="flex flex-col min-w-[404px] justify-center items-start px-3.5 py-3 pr-10 text-base bg-white rounded-[100px] text-zinc-400 max-md:pr-12">
      <div className="flex gap-5 justify-center items-center">
        <img loading="lazy" src={SearchIcon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]" />
        <input type="search" placeholder="Search" aria-label="Search" className="self-stretch my-auto bg-transparent border-none outline-none" />
      </div>
    </div>
  );
}
export default SearchBar;