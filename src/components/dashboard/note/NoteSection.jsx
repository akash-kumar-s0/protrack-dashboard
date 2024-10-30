import React from "react";
import NoteCard from "./NoteCard";
import AddIcon from "../../../assets/welcome/note/add.png";
import ArrowIcon from "../../../assets/welcome/calendar/box-arrow.png";

const NotesSection = () => {
  const notes = [
    {
      title: "Follow Up with Mr. Ashton",
      content:
        "Following up on our meeting with Mr. Ashton, I wanted to recap the key points discussed and outline the action items moving forward. During the meeting, we touched upon the project timeline, budget considerations, and specific deliverables. Mr. Ashton expressed ...",
      attachments: ["Screenshot Information.png", "Important Information.pdf"],
      date: "21 May, 2024",
    },
    {
      title: "Setlist for hackathon",
      content:
        "- Project Timeline\n- Budget Considerations\n- Specific Deliverables\n- Additional Features for Software Solution\n- Detailed Proposal for Review\n- Prepare the PPT\n- Review by Ravi\n- GD\n- The Grand Finale",
      attachments: [],
      date: "21 May, 2024",
    },
    {
      title: "Auroras and Sad Prose",
      content:
        "Tears fall like rain on a lonely street\nHeart heavy with sorrow, no solace to meet\nMemories of joy now turned to dust\nIn the shadows of sadness, I place my trust\n\nEach note a reminder of what used to be\nA melody of pain, a symphony for me\nLost in the darkness, searching for light",
      attachments: [],
      date: "21 May, 2024",
    },
  ];

  return (
    <section className="rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-jakarta text-header-2 font-semibold text-[#56555C] mb-2">Notes</h2>

        <div className="flex gap-4">
          <img loading="lazy" src={AddIcon} alt="" className="w-[38px]" />
          <img loading="lazy" src={ArrowIcon} alt="" className="w-[38px]" />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            title={note.title}
            content={note.content}
            attachments={note.attachments}
            date={note.date}
          />
        ))}
      </div>
    </section>
  );
}

export default NotesSection;
