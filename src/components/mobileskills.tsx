import { div } from "framer-motion/client";



interface MobileSkillsprops {
  skillname: string;
}





export default function MobileSkills({
skillname,
}:MobileSkillsprops){
    return(
        <div className="lg:hidden ---------- flex w-20 h-10 skillmobilecardbg rounded mb-3 mr-3">

                <p className="w-full text-center font-bold text-black/70 m-auto">
                    {skillname}
                </p>

        </div>
    )
}