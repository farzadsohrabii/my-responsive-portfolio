



interface servicesCardProps {
    bordercolor: string;
    name: string;
    description: string;

}


export default function ServicesCard({
    bordercolor,
    name,
    description,

}: servicesCardProps) {
    return (
        // main div  
        <div className={`lg:w-85 lg:h-95 lg:mb-0 lg:pl-4 lg:pr-4 ---------- mb-5 w-[345.6px] h-89 bg-white/20 border-black/5 shadow flex flex-col items-center justify-center gap-2 rounded-[10px] border-3 ${bordercolor ?? ""}`}>
            <div className="bg-amber-400 w-full h-20">
                <div className="w-20 h-20 bg-amber-600 rounded-full">

                </div>
            </div>
            <div className="bg-amber-400 w-full h-10">
                <p className=" lg:text-[19px]---------- font-bold w-max ">{name}</p>
            </div>
            <div className="bg-amber-400 w-full h-12">
                <p className="lg:text-[16px] lg:leading-4 ---------- text-[13px]">{description}</p>
            </div>
            <div className="bg-amber-400 w-full h-25">

            </div>
            <div className="bg-amber-400 w-full h-10">
                <a target="blank" href="tel:+989992466" className="w-full h-full inline-flex items-center justify-center hover:text-white duration-200 text-[12px]">Lets work together →</a>
            </div>
        </div>
    )
}