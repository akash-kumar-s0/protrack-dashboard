import React from 'react';
import BookIcon from '../../../assets/dashboard/weeklyoverview/TaskMetrics/book.png'
import TickIcon from '../../../assets/dashboard/weeklyoverview/TaskMetrics/tick.png'
import UpIcon from '../../../assets/dashboard/weeklyoverview/TaskMetrics/up.png'

const TaskMetrics = () => {
  return (
    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full font-bold max-md:mt-10">
        <div className="flex gap-1 self-start whitespace-nowrap max-md:ml-1">
          <p className="text-4xl tracking-tighter leading-none text-[#888793]">20</p>
          <img loading="lazy" src={UpIcon} alt="" className="object-contain shrink-0 my-auto w-5 aspect-[1.11]" />
          <span className="self-start text-xs tracking-tight leading-loose text-center text-teal-500">+2.45%</span>
        </div>
        <p className="self-start font-jakarta text-body font-normal tracking-tight leading-loose text-zinc-500 max-md:ml-1">Tasks Completed</p>
        <div className="flex gap-1.5 self-center mt-2 font-jakarta text-base tracking-tight leading-loose text-teal-500 w-[86px]">
          <img loading="lazy" src={TickIcon} alt="" className="object-contain shrink-0 w-4 aspect-square rounded-[46px]" />
          <span>On track</span>
        </div>
        <button className="flex overflow-hidden flex-wrap gap-1 justify-center items-center py-3 mt-2 w-full text-xs font-semibold text-violet-500 bg-white rounded-xl border border-violet-500 border-solid">
          <span className="flex overflow-hidden gap-1 font-jakarta justify-center items-center self-stretch my-auto">
            <img loading="lazy" src={BookIcon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
            <span>OPEN TASKS</span>
          </span>
        </button>
      </div>
    </div>
  );
}
export default TaskMetrics;