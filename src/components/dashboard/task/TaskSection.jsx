import React from "react";
import AddIcon from "../../../assets/welcome/note/add.png";
import ArrowIcon from "../../../assets/welcome/calendar/box-arrow.png";
import TaskCard from "./TaskCard";

const TasksSection = () => {
  const tasks = [
    {
      title: "Donate Rs. 500 to the charity",
      subtasks: [
        { text: "Donate Rs. 500 to the charity", completed: true },
        { text: "Donate Rs. 500 to the charity", completed: true },
      ],
      tags: [
        { label: "Donations", color: "bg-[#fff9e5] text-[#FFC800]" },
        { label: "Social", color: "bg-green-100 text-green-600" },
      ],
      completed: 2,
      total: 2,
    },
    {
      title: "Do 500 pushups",
      subtasks: [
        { text: "Start with 100", completed: true },
        { text: "Complete 250", completed: false },
        { text: "Reach 400", completed: false },
      ],
      tags: [
        { label: "Sport", color: "bg-[#eef1ff] text-[#5577FF]" },
        { label: "Selfcare", color: "bg-pink-100 text-pink-600" },
      ],
      completed: 1,
      total: 3,
    },
    {
      title: "Buy new headset",
      subtasks: [],
      tags: [
        { label: "Shopping", color: "bg-[#eef1ff] text-[#5577FF]" },
        { label: "Set-up", color: "bg-green-100 text-green-600" },
      ],
    },
    {
      title: "Clean the room",
      subtasks: [],
      tags: [{ label: "Selfcare", color: "bg-[#eef1ff] text-[#5577FF]" }],
    },
  ];

  return (
    <section className="px-3 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-jakarta text-header-2 font-semibold text-[#56555C]">
          Tasks for the day
        </h2>
        <div className="flex gap-4">
          <img loading="lazy" src={AddIcon} alt="" className="w-[38px]" />
          <img loading="lazy" src={ArrowIcon} alt="" className="w-[38px]" />
        </div>
      </div>

      <div className="flex flex-col max-h-[390px] overflow-y-auto">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            subtasks={task.subtasks}
            tags={task.tags}
            completed={task.completed}
            total={task.total}
          />
        ))}
      </div>
    </section>
  );
};

export default TasksSection;
