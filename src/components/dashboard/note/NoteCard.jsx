import React from "react";
import ArrowIcon from '../../../assets/welcome/calendar/box-arrow.png'


const NoteCard = ({ title, content, attachments, date }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm max-w-[200px] min-w-[240px] bg-white">
      <h3 className="font-jakarta text-header-3 font-semibold text-[#56555C] mb-2">{title}</h3>
      <p className="font-jakarta text-body text-[#888793] mb-3 line-clamp-4">
        {content}
      </p>

      {attachments && attachments.length > 0 && (
        <div className="mb-3">
          <h4 className="text-sm font-jakarta font-semibold text-[#56555C] mb-1">Attachments</h4>
          <div className="flex flex-col gap-1">
            {attachments.map((attachment, index) => (
              <p key={index} className="text-sm font-jakarta text-blue-500">{attachment}</p>
            ))}
          </div>
        </div>
      )}
  
      <div className="flex justify-between font-jakarta items-center text-[#BBBABE] text-small mt-auto">
        <span>{date}</span>
        <img
          loading="lazy"
          src={ArrowIcon}
          alt=""
          className="w-[32px]"
        />
      </div>
    </div>
  );
}

export default NoteCard;