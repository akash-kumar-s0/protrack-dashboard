import * as React from "react";

const CalendarCard = ({ day, dayName, isActive }) => {
  return (
    <article
      className={`flex flex-col text-center rounded-md whitespace-nowrap ${
        isActive ? "max-w-[80px] px-2 scale-105" : "max-w-[76px]"
      } text-zinc-600 transition-transform duration-200`}
    >
      <section
        className={`flex flex-col items-center w-full rounded-xl border border-solid border-slate-200 shadow-[0px_22px_22px_rgba(0,0,0,0.05)] ${
          isActive ? "bg-white pb-3" : "bg-transparent pb-2"
        }`}
      >
        <div
          className={`flex self-stretch w-full ${
            isActive ? "bg-[#FD71AF] min-h-[18px] rounded-t-lg" : "bg-[#FEC6DF]"
          } rounded-t-md min-h-[15px]`}
        />
        <time className={`text-md font-jakarta font-semibold text-[#56555C] ${isActive ? "px-4" : " px-2"}`}>
          {day}
        </time>
        <p className="px-2 font-jakarta  text-[#56555C] font-normal text-body">
          {dayName}
        </p>
      </section>
    </article>
  );
}

export default CalendarCard;