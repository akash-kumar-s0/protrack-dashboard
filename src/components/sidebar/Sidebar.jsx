import React from "react";
import HomeIcon from "../../assets/sidebar/NavigationItems/home.png";
import CalendarIcon from "../../assets/sidebar/NavigationItems/calendar.png";
import NoteIcon from "../../assets/sidebar/NavigationItems/note.png";
import TaskIcon from "../../assets/sidebar/NavigationItems/task.png";
import UserProfile from "./UserProfile";
import NavigationItem from "./NavigationItem";
import ProUpgrade from "./ProUpgrade";

const navigationItems = [
  { icon: HomeIcon, label: "Home" },
  {
    icon: CalendarIcon,
    label: "Calendar",
  },
  {
    icon: TaskIcon,
    label: "Tasks",
  },
  {
    icon: NoteIcon,
    label: "Notes",
  },
];

const Sidebar = () => {
  return (
    <nav
      data-layername="sidebar"
      className="flex flex-col px-5 py-6 bg-white border-r border-slate-200 min-w-[271px]"
    >
      <div className="flex px-0.5 w-full text-base font-medium  rounded-none text-zinc-600">
        <div className="flex flex-1 shrink-0 self-end mt-2 mr-0 bg-sky-400 rounded-xl h-[50px]" />
        <div className="flex flex-col items-start py-5 w-full ">
          {navigationItems.map((item, index) => (
            <NavigationItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
      <div className="border-b border-gray-200 my-4"></div>
      <ProUpgrade />
      <UserProfile />
    </nav>
  );
};

export default Sidebar;
