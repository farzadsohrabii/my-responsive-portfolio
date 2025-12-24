


interface ProjectCardProps{
    image:string;
    name:string;
    description:string;
    tag1:string;
    tag2:string;
    tag3:string;
    link:string;
    bordercolor:string;
    buttonColor:string;
}






export default function ProjectCard({
image,
name,
description,
tag1,
tag2,
tag3,
link,
bordercolor,
buttonColor,
}:ProjectCardProps){
    return(
        // main div 
        <div className={`lg:w-85 lg:h-95 lg:mb-0 ---------- mb-5 w-[345.6px] h-89 bg-white/20 border-black/5 shadow flex flex-col items-center justify-center gap-2 rounded-[10px] border-3 ${bordercolor ?? ""}`}>
            {/* image div */}
            <div className=" lg:w-77 lg:h-38 lg:rounded-[10px] lg:mt-0 ---------- h-40 overflow-hidden shadow border border-black/10 w-[305.6px] rounded-[10px] mt-1">
                <img src={image} alt="project image" className="w-full h-full object-cover" />
            </div>
            {/* project name div */}
            <div className=" lg:w-77 lg:h-10 ---------- flex items-center w-[305.6px]">
                <p className=" lg:text-[19px]---------- font-bold w-max ">{name}</p>
            </div>
            {/* project description div */}
            <div className=" lg:w-77 lg:h-10 ---------- w-[305.6px]">
                <p className="lg:text-[16px] lg:leading-4 ---------- text-[13px]">{description}</p>
            </div>
            {/* project tags div */}
            <div className=" lg:w-77 lg:h-10 ---------- flex flex-row items-center gap-2 w-[305.6px]">
                <div className="pr-2 pl-2 ---------- rounded-[7px] backdrop-blur-3xl w-max h-7 bg-[#61c3b6]/40 ">
                    <p className="text-[14px] inline-flex justify-center">{tag1}</p>
                </div>
                <div className="pr-2 pl-2 ---------- rounded-[7px] backdrop-blur-3xl w-max h-7 bg-[#f8a72b]/40 ">
                    <p className="text-[14px] inline-flex justify-center">{tag2}</p>
                </div>
                <div className="pr-2 pl-2 ---------- rounded-[7px] backdrop-blur-3xl w-max h-7 bg-[#784ce5]/40 ">
                    <p className="text-[14px] inline-flex justify-center">{tag3}</p>
                </div>
            </div>
            {/* project link div */}
            <div className=" w-77 h-10 ---------- flex justify-center">
                <div className={`lg:w-40 lg:h-10 ---------- w-40 rounded-[7px] bg-white/60 backdrop-blur-md border border-black/5 shadow flex items-center justify-center duration-200 ${buttonColor ?? ""}`}>
                    <a target="blank" href={link} className="w-full h-full inline-flex items-center justify-center hover:text-white duration-200 "> View Project</a>
                </div>
            </div>
        </div>
    )
}
