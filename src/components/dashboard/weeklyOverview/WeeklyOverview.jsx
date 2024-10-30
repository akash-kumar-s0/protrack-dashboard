import React from 'react';
import TaskMetrics from './TaskMetrics';
import WeeklyChart from './WeeklyChart';
import GraphIcon from '../../../assets/dashboard/weeklyoverview/WeeklyOverview/graph.png'

const WeeklyOverview = () => {
  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  return (
    <section className="flex overflow-hidden flex-col pt-4 pr-10 pb-6 pl-4 bg-white rounded-xl border border-solid shadow border-slate-200 max-w-[800px] max-md:pr-5">
      <header className="flex flex-wrap gap-5 justify-between items-start font-jakarta text-header-2 font-medium text-[#56555C] max-md:max-w-full">
        <h1>Weekly Overview</h1>
        <img loading="lazy" src={GraphIcon} alt="" className="object-contain shrink-0 mt-3 aspect-square w-[33px]" />
      </header>
      <div className="mt-2.5 max-md:max-w-full">
        <div className="flex gap-2 max-md:flex-col">
          <TaskMetrics />
          <WeeklyChart weekDays={weekDays} />
        </div>
      </div>
    </section>
  );
}

export default WeeklyOverview;