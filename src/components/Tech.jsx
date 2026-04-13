import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-8'>
      {technologies.map((technology) => (
        <div key={technology.name} title={technology.name} className='flex flex-col items-center gap-2 w-24'>
          <div className='w-20 h-20 rounded-full bg-[#cfcfcf] border-[6px] border-[#bcbcbc] flex items-center justify-center shadow-md'>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-11 h-11 object-contain'
            />
          </div>
          <p className='text-[11px] text-secondary text-center leading-tight'>{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
