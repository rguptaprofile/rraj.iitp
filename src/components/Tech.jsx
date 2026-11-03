import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const categories = [
  "All",
  "Languages",
  "Frameworks",
  "Databases & Cloud",
  "Developer Tools",
  "Core CS",
  "Soft Skills",
];

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Technical Stack &amp; Fundamentals
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[16px] max-w-3xl mx-auto text-center leading-[28px]'
      >
        Verified technical competencies from coursework at IIT Patna, software internships,
        hackathons, and production deployments.
      </motion.p>

      {/* Category Filter Pills */}
      <div className='mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto'>
        {categories.map((cat) => (
          <button
            key={cat}
            type='button'
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#915EFF] text-white shadow-lg shadow-[#915EFF]/30 scale-105"
                : "bg-[#11182d] text-[#c5c9ef] hover:bg-[#1a2342] border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Cards Grid */}
      <div className='mt-12 flex flex-row flex-wrap justify-center gap-6'>
        {filteredTechnologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", (index % 12) * 0.05, 0.5)}
            className='flex flex-col items-center justify-between p-4 w-32 min-h-[140px] rounded-2xl bg-[#101833] border border-white/10 hover:border-[#915EFF]/50 hover:shadow-card transition-all duration-300 transform hover:-translate-y-1'
          >
            <div className='w-16 h-16 rounded-xl bg-[#192244] flex items-center justify-center p-3 shadow-inner'>
              <img
                src={technology.icon}
                alt={technology.name}
                loading='lazy'
                className='w-full h-full object-contain'
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <p className='mt-2 text-[12px] font-medium text-white text-center leading-tight line-clamp-2'>
              {technology.name}
            </p>
            <span className='mt-1 text-[10px] text-[#8e98cf] px-2 py-0.5 rounded-full bg-[#1b2347]'>
              {technology.category}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
