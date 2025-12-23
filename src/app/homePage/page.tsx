import ResponsiveSidebar from "@/components/mobileideBar";
import PageTransition from "@/components/pagetransition";
import Link from "next/link";
import Skils from "../skills/page";
import Sidebar from "@/components/mobileideBar";






export default function HomePage() {
  return (
    <div lang="en" className="lg:overflow-hidden ---------- overflow-auto">

      {/* its the full image div I set the background image in the global.css by 'con & bg-image' class */}

      <div className="con bg-image lg:h-dvh lg:w-full lg:relative lg:flex lg:items-center lg:justify-center">

        {/* the box div */}

        <div className="lg:h-[86vh] lg:w-3/4 lg:z-10 lg:border-2 box-color lg:rounded-2xl ---------- flex flex-col">

          {/* this component used for make the animation */}

          <PageTransition>

            {/* header div */}

            <header className=" lg:w-full lg:h-max lg:pt-5 lg:flex lg:flex-row ---------- hidden ">
              <div className="lg:h-full lg:flex lg:items-center lg:pl-20 lg:order-1  ---------- w-1/2 pl-7 order-2">
                <h1 className=" font-color lg:text-4xl lg:font-bold lg:m-0 ---------- text-2xl font-bold ml-auto mr-7 w-max">Farzad</h1>
              </div>
              <div className="lg:h-full justify-center lg:order-2 ---------- w-1/2 order-1">
                
                <ul className="lg:flex  lg:p-2 lg:w-2/3 ml-auto ----------">
                  <li className="font-color lg:flex-1 ----------"><Link href="/" className="lg:font-bold lg:text-[14px] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[2px] lg:relative lg:inline-block lg:pb-1 lg:after:bg-black lg:after:w-full ----------">Home</Link></li>
                  <li className="font-color lg:flex-1 ----------"><Link href="./skills" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Skils</Link></li>
                  <li className="font-color lg:flex-1 ----------"><Link href="./projects" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Projects</Link></li>
                  <li className="font-color lg:flex-1 ----------"><Link href="./services" className="lg:font-bold lg:text-[14px] lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-0 lg:after:h-[2px] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:relative lg:inline-block lg:pb-1 lg:after:bg-black ----------">Services</Link></li>
                </ul>
              </div>
            </header>

            {/* main div---iamge/about/icons*/}

            <main className="lg:gap-4 lg:flex-row lg:h-max lg:w-full ---------- flex flex-col">

              {/* icons div ---  its hidden in the desktop mode */}

              <div className="lg:h-[78vh] lg:w-[10%]  lg:flex lg:items-center lg:order-1 ---------- order-3 hidden">
                <div className=" lg:h-64 lg:w-full lg:flex lg:flex-col lg:gap-8 lg:items-center lg:justify-center ---------- w-full flex flex-row ">
                  <a href="https://www.facebook.com/farzadsohrabii" rel="noopener noreferrer" className="">
                    <svg className="lg:w-8 lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:translate-x-3 ---------- w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#7a8bcb" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" /></svg>
                  </a>
                  <a className="">
                    <svg className="lg:w-8 lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:translate-x-3 ---------- w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#7b8ccc" d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z" /></svg>
                  </a>
                  <a href="https://t.me/Feri_s79" rel="noopener noreferrer" className="">
                    <svg className="lg:w-8 lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:translate-x-3 ---------- " viewBox="0 0 512 512"><path fill="#7b8cce" d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z" /></svg>
                  </a>
                </div>
              </div>

              {/* about person */}

              <div className="lg:h-[78vh] lg:w-[45%] lg:m-0 lg:flex lg:items-center lg:order-2 ---------- order-1 ml-7">
                <div className="lg:h-[50vh] lg:w-[35rem]  lg:flex lg:justify-center lg:gap-3 lg:flex-col ">
                  <div className="lg:mb-8 ----------- mb-6">
                    <h1 className="lg:text-5xl ---------- text-4xl font-bold">Hi, I'm <span className="lg:text-black ---------- text-[#582acd]">Farzad</span></h1>
                  </div>
                  <div className="mb-1">
                    <h3 className="lg:text-2xl font-color2 lg:font-bold ----------- text-[16px] font-bold">Frontend Developer</h3>
                  </div>
                  <div className="mb-4">
                    <p className="font-color lg:font-extralight  -----------  w-[90%] text-[14px] font-light text-justify">
                      I specialize in building modern, responsive, and user-friendly web interfaces. With a growing passion for coding and design, I combine creativity with clean code to bring ideas to life.</p>
                  </div>

                  {/* its hidden in the desktop mode */}

                  <div className="lg:hidden ---------- block mb-2">
                    <div className="flex flex-row w-37 justify-center gap-6">
                      <a href="https://www.facebook.com/farzadsohrabii" rel="noopener noreferrer" className="">
                        <svg className="w-7 animate-bounce" style={{ animationDelay: '0.2s' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#582acd" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z" /></svg>
                      </a>
                      <a href="#" className="">
                        <svg className="w-7 animate-bounce" style={{ animationDelay: '0.4s' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#582acd" d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z" /></svg>
                      </a>
                      <a href="https://t.me/Feri_s79" rel="noopener noreferrer" className="">
                        <svg className="w-7 animate-bounce" style={{ animationDelay: '0.6s' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#582acd" d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z" /></svg>
                      </a>
                    </div>
                  </div>

                  {/* button div */}

                  <div className="lg:order-3 lg:w-38 lg:h-15 lg:font-semibold bg-[#582acd] hover:text-[#582acd] hover:bg-[#b7c1d8] hover:border-[#582acd] hover:border-2  duration-200 --------- flex items-center justify-center w-35 h-14 rounded font-bold order-3">
                    <a href="tel:+989909992466" className="justify-center items-center inline-flex lg:w-38 lg:h-15 lg:font-semibold hover:text-[#582acd] --------- text-white">
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              
              {/* The image div */}

              <div className="lg:w-[45%] lg:order-3 lg:h-[78vh] ---------- w-full h-78">
                <div className="lg:w-full lg:h-full lg:m-0 lg:border-0 ---------- w-64 h-64  flex items-center justify-center m-auto mt-6 border-4 border-solid border-[#582acd] rounded-[100%] overflow-hidden">
                  <img className="lg:w-[23rem] lg:block ---------- hidden" src="/HomeIMG1.png" alt="" />
                  <img className="lg:hidden ---------- visible w-68 h-68 object-fill" src="/MobileHome.jpg" alt="" />
                </div>
              </div>

            </main>
          </PageTransition>
        </div>
      </div>
    </div>
  );
}
