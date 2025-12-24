import PageTransition from "@/components/pagetransition";
import Link from "next/link";
import { Lexend } from 'next/font/google'
import { Geist  } from 'next/font/google' 
import ProjectCard from "@/components/projectCard";




export default function Projects() {;
  return (
    
      <div >
        <div className="con bg-image lg:h-dvh lg:w-full lg:relative lg:flex lg:items-center lg:justify-center ">
          <div className="lg:h-[86vh] lg:w-3/4 lg:z-10 lg:border-2 box-color lg:rounded-2xl">
            <PageTransition>
            <header className=" lg:w-full lg:h-max lg:pt-5 lg:flex lg:flex-row  ----------  pt-2 hidden">
              <div className="lg:h-full lg:flex lg:items-center lg:pl-20 lg:order-1  ---------- w-1/2 pl-7 order-2">
                <h1 className=" font-color lg:text-4xl lg:font-bold lg:m-0 ---------- text-2xl font-bold ml-auto mr-7 w-max">Farzad</h1>
              </div>
              <div className="lg:h-full justify-center lg:order-2 ---------- w-1/2 order-1">
                <ul className="lg:flex  lg:p-2 lg:w-2/3 ml-auto ---------- ">
                  <li className="font-color lg:flex-1 ----------"><Link href="/" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Home</Link></li>
                  <li className="font-color lg:flex-1 ----------"><Link href="./skills" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Skils</Link></li>
                  <li className="font-color lg:flex-1 ----------"><Link href="./projects" className="lg:font-bold lg:text-[14px] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[2px] lg:relative lg:inline-block lg:pb-1 lg:after:bg-black lg:after:w-full ----------">Projects</Link></li>
                  <li className="font-color lg:flex-1 ----------"><Link href="./services" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Services</Link></li>
                </ul>
              </div>
            </header>
            <main className="lg:ml-0 ----------flex ml-7">
              
            <div className="lg:pt-10 ">
                {/* this box is hidden in the desktop */}
                <div className="lg:hidden  ---------- flex mb-6">
                    <h2 className="lg:text-[#784ce5] lg:font-semibold lg:mb-2 ---------- font-bold text-[22px]">My <span className="lg:text-[#784ce5] ---------- inline text-[#61c3b6]">Projects</span></h2>
                </div>
                {/* the projects box */}
                <div className="lg:flex lg:flex-row gap-6  justify-center w-[345.6px]">
                    <div>
                        <ProjectCard buttonColor="hover:bg-[#61c3b6]" bordercolor="border-b-[#61c3b6]/30" image="/PortfolioProje.png" name="Portfolio Website" description="My personal portfolio website with a responsive layout and modern UI" tag1="Next.js" tag2="TypeScript"tag3="Tailwind CSS" link="https://farzadsohrabi.me"/>
                    </div>
                    <div>
                        <ProjectCard buttonColor="hover:bg-[#f8a72b]"  bordercolor="border-b-[#f8a72b]/30" image="/LoginPageProje.png" name="Login Page" description="A clean and responsive authentication UI Built with next.js and tailwind CSS" tag1="Next.js" tag2="TypeScript"tag3="Tailwind CSS" link="https://github.com/farzadsohrabii/Login-Page"/>
                    </div>
                    <div>
                        <ProjectCard buttonColor="hover:bg-[#784ce5]"  bordercolor="border-b-[#784ce5]/30" image="/DashboardProje.png" name="Portfolio Website" description="Admin dashboard UI with charts, cards, and a responsive grid layout" tag1="Next.js" tag2="TypeScript"tag3="Tailwind CSS" link="#"/>
                    </div>
                </div>
                {/* contact me box */}
                <div className="lg:h-38 lg:mt-5 lg:w-full lg:flex ---------- hidden items-center justify-center w-[345.6px] rounded-[10px] ">
                    <div className="lg:w-[60%] lg:h-32 gap-2 ---------- flex flex-col bg-white/20 rounded-[10px]  backdrop-blur-md border-black/5 shadow items-center justify-center ">
                        <p className="lg:text-[17px] lg:font-bold ">Want to see more?</p>
                        <p className="lg:text-[14px] lg:w-max  ---------- text-[13px] flex">Feel free to reach out for additional examples of my work</p>
                    <div className="lg:order-3 lg:w-38 lg:h-12 lg:font-semibold bg-[#582acd]/70 hover:text-[#582acd] hover:bg-[#b7c1d8] hover:border-[#582acd] hover:border-2  duration-200 --------- flex items-center justify-center w-35 h-14 rounded font-bold">
                    <a href="tel:+989909992466" className="justify-center items-center inline-flex lg:w-38 lg:h-15 lg:font-semibold hover:text-[#582acd] --------- text-white">
                      Contact Me
                    </a>
                  </div>
                    </div>
                </div>
            </div>

            </main>
              </PageTransition>
          </div>
        </div>
      </div>
  );
}


