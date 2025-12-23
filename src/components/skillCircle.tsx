"use client";
import React, { useEffect, useState } from "react";



interface SkillCircleProps {
  name: string;
  percent: number;
  color: string;
  percentColor: string;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ name, percent , color , percentColor }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= percent) {
        setProgress(start);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [percent]);

  const offset = circumference - (progress / 100) * circumference;

  return (
        <div className="lg:block  ---------- hidden">
                <div className="flex flex-col items-center justify-center ">
      <div className="relative w-[150px] h-[150px] ">
        <svg
          className="rotate-[-90deg] w-full h-full"
          viewBox="0 0 140 140"
        >

          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#aaaaaa"
            strokeWidth="3"
            fill="none"
          />

          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-100 ease-linear"
          />
        </svg>


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className={` text-3xl font-semibold ${percentColor}`}>{Math.round(progress)}%</p> 
        </div>
        <div className="lg:w-full mt-[-10px]">
            <p className=" lg:w-max lg:m-auto lg:font-extralight lg:text-[19px] ">{name}</p>
        </div>
      </div>
    </div>
        </div>
  );
};

export default SkillCircle;