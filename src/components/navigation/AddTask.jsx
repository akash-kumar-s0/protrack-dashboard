import React from 'react';
import AddIcon from '../../assets/navigation/add.png'


const AddTaskButton = () => {
  return (
    <button className="flex flex-row flex-wrap justify-center items-center content-center px-0 py-[13px] gap-[10px] w-[138px] h-[41.2px] bg-[#49CCF9] rounded-[10px]">
      <div className="flex overflow-hidden gap-4 justify-center items-center self-stretch my-auto">
        <img loading="lazy" src={AddIcon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]" />
        <span className="self-stretch my-auto text-xs font-semibold text-white">ADD TASKS</span>
      </div>
    </button>
  );
}

export default AddTaskButton;