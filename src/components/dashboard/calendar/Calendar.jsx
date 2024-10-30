import React from "react";
import CalendarCard from "./CalendarCard";
import ArrowIcon from '../../../assets/welcome/calendar/box-arrow.png'

const Calendar = () => {
  const calendarDaysData = [
    { day: "19", label: "Sun" },
    { day: "20", label: "Mon" },
    { day: "21", label: "Tue", active: true },
    { day: "22", label: "Wed" },
    { day: "23", label: "Thu" },
    { day: "24", label: "Sat" },
    { day: "25", label: "Sun" },
  ];

  return (
    <div className="px-3 pt-5 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-jakarta text-header-2 font-semibold text-[#56555C]">Calendar</h2>
        <img
          loading="lazy"
          src={ArrowIcon}
          alt=""
          className="w-[38px]"
        />
      </div>

      <div className="flex flex-wrap justify-between items-center mt-2 w-full max-md:max-w-full">
        {calendarDaysData.map((day, index) => (
          <CalendarCard
            key={index}
            day={day.day}
            dayName={day.label}
            isActive={day.active}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 font-jakarta gap-4 my-10">
        <div className="flex flex-col bg-[#E2F0FF] text-blue-500 border border-blue-500 rounded-lg p-3">
          <span className="font-semibold text-header-3">To-Do</span>
          <span className="text-header-2  font-bold">20</span>
        </div>
        <div className="flex flex-col bg-[#EDE9FF] text-purple-500 border border-purple-500 rounded-lg p-3">
          <span className="font-semibold text-header-3">In-Progress</span>
          <span className="text-header-2  font-bold flex items-start">15</span>
        </div>
        <div className="flex flex-col font-jakarta bg-[#E3FCEC] text-green-500 border border-green-500 rounded-lg p-3">
          <span className="font-semibold text-header-3">Complete</span>
          <span className="text-header-2 font-bold">03</span>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
