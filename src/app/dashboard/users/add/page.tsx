import React from "react";

const Page = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-4 rounded-lg my-4">
      <div className="grid grid-cols-2 gap-14 my-5">
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] placeholderGray text-[var(--textSoft)]"
          type="text"
          placeholder="Username"
        />
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="grid grid-cols-2 gap-14 my-5">
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] placeholderGray text-[var(--textSoft)]"
          type="password"
          placeholder="Password"
        />
        <input
          className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]"
          type="number"
          placeholder="Number"
        />
      </div>

      <div className="grid grid-cols-2 gap-14 my-5">
        <select className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]">
          <option value="" disabled selected>
            is Admin ?
          </option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <select className="border-none outline-none h-14 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]">
          <option value="" disabled selected>
            is Active ?
          </option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <textarea className="w-full border-none outline-none h-36 p-2 rounded-md bg-[var(--bgLight)] text-[var(--textSoft)]" placeholder="Address"></textarea>
    </div>
  );
};

export default Page;
