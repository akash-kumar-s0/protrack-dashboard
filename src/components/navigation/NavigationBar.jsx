import React from "react";;
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import AddTaskButton from "./AddTask";
import UserProfile from "./UserProfile";

const NavigationBar = () => {
  return (
    <header className="flex overflow-hidden justify-between gap-10 items-start px-9 py-6 max-md:px-5 bg-custom-gradient">
      <nav className="flex flex-wrap gap-20 items-start font-medium whitespace-nowrap max-md:max-w-full ">
        <Logo />
        <SearchBar />
      </nav>
      <div className="flex gap-5 items-center justify-center text-xs font-semibold text-white">
        <AddTaskButton />
        <UserProfile />
      </div>
    </header>
  );
};

export default NavigationBar;