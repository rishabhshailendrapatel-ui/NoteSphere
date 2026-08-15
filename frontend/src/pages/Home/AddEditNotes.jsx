import React from "react";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-600">TITLE </label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go To Gym At 5"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label>CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
        />
      </div>

      <div className="mt-3">
        <label className="text-xs text-slate-600">TAGS</label>
      </div>

      <button
        className="w-full items-center justify-center font-medium text-white rounded bg-blue-500 mt-5 p-3 hover:bg-blue-600"
        onClick={() => {}}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
