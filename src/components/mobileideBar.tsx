"use client";

import Link from "next/link";
import { useState } from "react";

export default function ResponsiveSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" h-full items-center flex ">
      {/* siidebar*/}
      <aside
        className={`
          fixed inset-y-0 Left-0 z-50 w-54 
          transform transition-transform duration-300
          md:static md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* <div className="bg-black w-full h-40">
          <div>
            <img src="" alt="" />
          </div>
        </div> */}
        <nav className="p-4 space-y-2 md:hidden bg-white h-full">
          <Link href="#home" className="block px-3 py-2  rounded-md ">
            Home
          </Link>
          <Link href="#skils" className="block px-3 py-2  rounded-md ">
            Projects
          </Link>
          <Link href="./services" className="block px-3 py-2 rounded">
            Services
          </Link>
          <Link href="./skils" className="block px-3 py-2 rounded">
            Skils
          </Link>
        </nav>
      </aside>

      {/* Backdrop just showen in the mobile*/}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* main data */}
      <div className=" w-max mr-auto ml-7  ">
        <header className="h-max flex w-max items-center m-auto">

          {/* Hamburger icon just showen in the mobile*/}

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white h-max w-max items-center"
          >
            <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
          </button>
        </header>
      </div>
    </div>
  );
}
