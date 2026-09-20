import React from "react";
import moment from "moment";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags = [],
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs  text-slate-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>
        <MdOutlinePushPin
          className={`text-lg cursor-pointer hover:text-blue-400 ${isPinned ? `text-blue-600` : `text-slate-300`}`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 200)}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">
          {tags.map((item, index) => (
            <span key={index}>{`#${item}`}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="text-lg cursor-pointer text-slate-400 hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="text-lg cursor-pointer text-slate-400 hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
