import Image from "next/image";
import React from "react";
import './sidebar.css'
import SidebarList from "./sidebar-list";

const Sidebar = () => {

  return (
    <div className="col-span-2">
      <div className="flex gap-3 items-center bg-[var(--bgSoft)] p-4 rounded-lg h-24">
        <Image
          className="rounded-full"
          src="/noavatar.png"
          alt="avatar"
          width="50"
          height="50"
        ></Image>
        <div>
          <h3>Mohit</h3>
          <h5 className="text-sm">Developer</h5>
        </div>
      </div>

<SidebarList/>
     
    </div>
  );
};

export default Sidebar;
