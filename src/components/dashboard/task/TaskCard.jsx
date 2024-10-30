import React from "react";
import WriteIcon from "../../../assets/welcome/task/write.png";
import DeleteIcon from "../../../assets/welcome/task/delete.png";
import OptionsIcon from "../../../assets/welcome/task/options.png";
import TagIcon from "../../../assets/dashboard/task/tag.png";

const TaskCard = ({ title, subtasks, tags, completed, total }) => {
  return (
    <div className="p-3 border border-gray-200 rounded-lg bg-white shadow-sm mb-4">
      <div className="flex">
        <div className="flex-1">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col  space-y-1 mb-3">
              <div className="flex space-x-2 text-xs">
                <input type="checkbox" className="accent-[#49CCF9]" checked />
                <span className="line-through text-[#49CCF9]">{title}</span>
              </div>
              {subtasks.map((subtask, index) => (
                <div key={index} className="flex space-x-2 text-xs ml-6">
                  <input
                    type="checkbox"
                    className=" accent-[#49CCF9]"
                    checked={subtask.completed}
                  />
                  <span
                    className={`${
                      subtask.completed
                        ? "line-through text-[#49CCF9]"
                        : "text-gray-600"
                    }`}
                  >
                    {subtask.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <img src={TagIcon} alt="" className="w-[23px]" />
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`font-jakarta text-small px-2 py-1 rounded-xl ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-0 ">
          <div className="flex flex-col mt-2 h-[50%] justify-between items-end">
            {completed && (
              <span className="text-xs text-gray-500">
                {completed}/{total} Completed
              </span>
            )}
            <div className="flex space-x-2 text-sm text-gray-500">
              <img src={WriteIcon} alt="" className="w-[20px]" />
              <img src={DeleteIcon} alt="" className="w-[20px]" />
              <img src={OptionsIcon} alt="" className="w-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
