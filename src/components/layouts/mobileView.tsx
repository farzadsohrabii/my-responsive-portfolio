"use client";
import HomePage from "@/app/homePage/page";
import Projects from "@/app/projects/page";
import Services from "@/app/services/page";
import Skills from "@/app/skills/page";
import Link from "next/link";
import { useState } from "react";

export default function MobileView() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" h-full items-center flex">
      {/* siidebar*/}
        <aside className={`fixed inset-y-0 Left-0 z-50 w-54 transform transition-transform duration-300 md:static md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
            <nav className="p-4 space-y-2 md:hidden bg-white h-full">
                <Link href="#home" className="block px-3 py-2  rounded-md ">
                    About Me
                </Link>
                <Link href="#skills" className="block px-3 py-2  rounded-md ">
                    Skils
                </Link>
                <Link href="#projects" className="block px-3 py-2 rounded">
                    Projects 
                </Link>
                <Link href="#services" className="block px-3 py-2 rounded">
                    Services
                </Link>
            </nav>
        </aside>

      {/* Backdrop just showen in the mobile*/}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[5px] z-40 md:hidden "onClick={() => setOpen(false)}/>)}

      {/* main data */}
        <div className=" w-max mr-auto">
            <header className="h-max flex items-center w-full justify-between pt-2 fixed bg-white">
                {/* Hamburger icon just showen in the mobile*/}
                <button onClick={() => setOpen(true)} className="md:hidden text-white h-max w-max items-center ml-7">
                    <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                </button>
                <div className=" order-2 w-max mr-7">
                    <h1 className="text-2xl font-bold ml-auto w-max">Farzad</h1>
                </div>
            </header>
            {/* to edit the firt section of Mobile page go to ==> app/homePage/page.tsx */}
            <main className="flex flex-col mt-8 ">
                {/* Home Page Div */}
                <div id="home" className="w-full h-max mb-8">
                    <HomePage/>
                </div>
                {/* skills Page Div */}
                <div id="skills" className="w-full h-max mb-8">
                    <Skills/>
                </div>
                <div id="projects" className="w-full h-max mb-8">
                    <Projects/>
                </div>
                <div id="projects" className="w-full h-max mb-8">
                    <Services/>
                </div>
            </main>
            <footer>
                                                <div className="lg:h-38 lg:mt-5 lg:w-full lg:flex lg;:ml-0 lg:mb-0 ------  ml-7 mb-5 items-center justify-center rounded-[10px] w-[325.6px] ">
                                    <div className="lg:w-[60%] lg:h-32 gap-2 ---------- flex flex-col bg-white/20 rounded-[10px]  backdrop-blur-md border-black/5 shadow items-center justify-center ">
                                        <p className="lg:text-[17px] lg:font-bold ">Have a project in mind?</p>
                                        <p className="lg:text-[14px] lg:w-max  ---------- text-[13px] flex">Lets buildsomething great together.</p>
                                        <div className="lg:order-3 lg:w-38 lg:h-12 lg:font-semibold bg-[#582acd]/70 hover:text-[#582acd] hover:bg-[#b7c1d8] hover:border-[#582acd] hover:border-2  duration-200 lg:mb-0 --------- mb-2 flex items-center justify-center w-35 h-14 rounded font-bold">
                                            <a href="tel:+989909992466" className="justify-center items-center inline-flex lg:w-38 lg:h-15 lg:font-semibold hover:text-[#582acd] --------- text-white">
                                                Contact Me
                                            </a>
                                        </div>
                                    </div>
                                </div>
            </footer>
        </div>
    </div>
  );
}







// export default function MobileView() {
    

//     return(

//         // to edit the firt section of Mobile page go to ==> app/homePage/page.tsx

//         <div>
//             <HomePage/>
//         </div>
//     )
// }
