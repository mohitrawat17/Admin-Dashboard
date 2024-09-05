import React from "react";

const Page = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-4 rounded-lg my-4">
      <div className="grid grid-cols-2 gap-14 my-5">
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] placeholderGray text-[var(--textSoft)]"
          type="text"
          placeholder="Title"
        />
        <select className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]">
          <option value="" disabled selected>
            Choose a category
          </option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value='computer'>Computer</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-14 my-5">
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] placeholderGray text-[var(--textSoft)]"
          type="number"
          placeholder="Price"
        />
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]"
          type="number"
          placeholder="Stock"
        />
      </div>

      <div className="grid grid-cols-2 gap-14 my-5">
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] placeholderGray text-[var(--textSoft)]"
          type="text"
          placeholder="Color"
        />
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]"
          type="text"
          placeholder="Size"
        />
      </div>
      <textarea className="w-full border-none outline-none h-36 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]" placeholder="Address"></textarea>
    </div>
  );
};

export default Page;
