import PageTransition from "@/components/pagetransition";
import Link from "next/link";
import SkillCircle from "@/components/skillCircle";
import MobileSkills from "@/components/mobileskills";

export default function Skills() {
    return (
        <div>
            <div className="con bg-image lg:h-dvh lg:w-full lg:relative lg:flex lg:items-center lg:justify-center lg:ml-0  ---------- ml-7">
                <div className="lg:h-[86vh] lg:w-3/4 lg:z-10 lg:border-2 box-color lg:rounded-2xl">
                    <PageTransition>
                        <header className=" lg:w-full lg:h-max lg:pt-5 lg:flex  ---------- flex-row pt-2 hidden">
                            <div className="lg:h-full lg:flex lg:items-center lg:pl-20 lg:order-1  ---------- w-1/2 pl-7 order-2">
                                <h1 className=" font-color lg:text-4xl lg:font-bold lg:m-0 ---------- text-2xl font-bold ml-auto mr-7 w-max">Farzad</h1>
                            </div>
                            <div className="lg:h-full justify-center lg:order-2 ---------- w-1/2 order-1">
                                <ul className="lg:flex  lg:p-2 lg:w-2/3 ml-auto ---------- hidden">
                                    <li className="font-color lg:flex-1 ----------"><Link href="/" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Home</Link></li>
                                    <li className="font-color lg:flex-1 ----------"><Link href="./skills" className="lg:font-bold lg:text-[14px] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[2px] lg:relative lg:inline-block lg:pb-1 lg:after:bg-black lg:after:w-full ----------">Skils</Link></li>
                                    <li className="font-color lg:flex-1 ----------"><Link href="./projects" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Projects</Link></li>
                                    <li className="font-color lg:flex-1 ----------"><Link href="./services" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Services</Link></li>
                                </ul>
                            </div>
                        </header>



                        <main className="lg:flex-row lg:h-[78vh]  ---------- flex flex-col">

                            {/* Left box div---the skils percent I import them from components/skillCircle.tsx   */}

                            <div className="lg:w-1/2 lg:h-full lg:items-center lg:flex lg:order-1  ---------- order-2 ">
                                <div className=" lg:w-10/11 lg:ml-auto  lg:h-3/4 lg:flex lg:flex-row lg:gap-6 lg:items-center lg:justify-center ---------- flex flex-wrap">
                                    <div className="lg:flex lg:flex-col lg:w-[40%] lg:h-[90%]  lg:gap-6 lg:mb-20  ---------- flex">
                                        <div className="lg:w-full lg:h-1/2 lg:bg-[#c0dafb]/60 lg:rounded-2xl lg:justify-center skillMiniBox ---------- ">
                                            <SkillCircle name="Front-End" percent={90} color="#f8a72b" percentColor="text-[#f8a72b]" />
                                            <MobileSkills skillname="html" />
                                        </div>
                                        <div className="lg:w-full lg:h-1/2 lg:bg-[#c0dafb]/60 lg:rounded-2xl lg:justify-center skillMiniBox">
                                            <SkillCircle name="Python" percent={65} color="#61c3b6" percentColor="text-[#61c3b6]" />
                                            <MobileSkills skillname="css" />
                                        </div>
                                    </div>
                                    <div className="lg:flex lg:flex-col lg:w-[40%] lg:h-[90%]  lg:gap-6 lg:mb-8 ---------- flex">
                                        <div className="lg:w-full lg:h-1/2 lg:bg-[#c0dafb]/60 lg:rounded-2xl lg:justify-center skillMiniBox">
                                            <SkillCircle name="UI Design" percent={95} color="#784ce5" percentColor="text-[#784ce5]" />
                                            <MobileSkills skillname="js" />
                                        </div>
                                        <div className="lg:w-full lg:h-1/2 lg:bg-[#c0dafb]/60 lg:rounded-2xl lg:justify-center skillMiniBox">
                                            <SkillCircle name="WordPress" percent={45} color="#3f3964" percentColor="text-[#3f3964]" />
                                            <MobileSkills skillname="react" />
                                        </div>
                                    </div>
                                    <div className=" lg:flex-col lg:w-[40%] lg:h-[90%]  lg:gap-6 lg:mb-8 lg:hidden ---------- flex">
                                        <div className="lg:w-full lg:h-1/2 lg:bg-[#c0dafb]/60 lg:rounded-2xl lg:justify-center skillMiniBox">
                                            <MobileSkills skillname="next js" />
                                        </div>
                                        <div className="lg:w-full lg:h-1/2 lg:bg-[#c0dafb]/60 lg:rounded-2xl lg:justify-center skillMiniBox">
                                            <MobileSkills skillname="tailwind" />
                                        </div>
                                    </div>
                                    <div className="lg:hidden lg:flex-col lg:w-[40%] lg:h-[90%]  lg:gap-6 lg:mb-8 ---------- flex">
                                        <div className="lg:w-full lg:h-1/2 lg:bg-[#c0dafb]/60 lg:rounded-2xl lg:justify-center skillMiniBox">
                                            <MobileSkills skillname="python" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right box div  */}

                            <div className="lg:w-1/2 lg:h-h-[78vh] lg:items-center lg:flex lg:order-2 ---------- order-1">
                                <div className=" lg:w-10/11 lg:h-[55vh] lg:pt-6 lg:ml-auto ">
                                    <div className="lg:w-full lg:h-max lg:mb-0 ---------- mb-4">
                                        <h2 className="lg:text-[#784ce5] lg:font-semibold lg:mb-2 ---------- font-bold text-[22px]">My <span className="lg:text-[#784ce5] ---------- inline text-[#f8a72b]">Skills</span></h2>
                                    </div>
                                    <div className="lg:w-full lg:h-max lg:mb-2 ---------- mb-1">
                                        <h1 className="lg:font-bold lg:text-[#3f3964] lg:text-4xl ---------- text-[16px] font-bold"> Beautiful & Efficient <br className="lg:block ---------- hidden" /> Web Experiences</h1>
                                    </div>
                                    <div className="lg:w-full lg:h-max lg:mb-4 ---------- mb-4">
                                        <p className="lg:text-[15px] lg:w-86 ---------- leading-6 text-justify text-[14px] w-[90%]">I’m a Front-End Developer focused on building clean, responsive, and user-friendly interfaces. I work with HTML, CSS, JavaScript (and frameworks like React and Tailwind) to turn design files into real, functional websites. I pay close attention to details and aim for pixel-perfect execution.</p>
                                    </div>
                                    <div className=" lg:mb-0 ---------- mb-4     lg:order-3 lg:w-38 lg:h-15 lg:font-semibold bg-[#f2ba64] hover:text-[#61c3b6] hover:bg-[#b7c1d8] hover:border-[#61c3b6] hover:border-2  duration-200 --------- flex items-center justify-center w-35 h-14 rounded font-bold ">
                                        <a download={"/Farzad-Sohrabi-CV.pdf"} href="/Farzad-Sohrabi-CV.pdf" className="justify-center items-center inline-flex lg:w-38 lg:h-15 lg:font-semibold hover:text-[#61c3b6] lg:text-white/95 --------- text-white">Download CV</a>
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