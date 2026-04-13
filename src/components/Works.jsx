import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const getPreviewImage = (sourceCodeLink, image) => {
  if (image) {
    return image;
  }

  if (sourceCodeLink) {
    const repoPath = sourceCodeLink.replace("https://github.com/", "");
    return `https://opengraph.githubassets.com/1/${repoPath}`;
  }

  return "/spicytoday-preview.svg";
};

const PreviewImage = ({ src, alt }) => {
  const [currentSrc, setCurrentSrc] = useState(src || "/spicytoday-preview.svg");

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading='lazy'
      referrerPolicy='no-referrer'
      onError={() => setCurrentSrc("/spicytoday-preview.svg")}
      className='w-full h-full object-cover'
    />
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  run_output,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const previewImage = getPreviewImage(source_code_link, image);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <p className='mt-2 text-[#b8b9d2] text-[12px]'>{run_output}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-5'>
          <p className='text-[#d4d7f7] text-[12px] mb-2 font-semibold tracking-wide'>
            Project Output Preview
          </p>
          <div className='relative w-full h-[190px] rounded-2xl overflow-hidden bg-[#11182d] border border-white/10'>
            <PreviewImage src={previewImage} alt={`${name} preview`} />
            <div className='absolute inset-0 bg-gradient-to-t from-[#050816]/75 via-[#050816]/10 to-transparent' />
            <div className='absolute inset-0 flex justify-end items-start m-3 card-img_hover'>
              {live_demo_link ? (
                <button
                  type='button'
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className='black-gradient px-3 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2 text-white text-[12px]'
                >
                  Output
                </button>
              ) : null}
              {source_code_link ? (
                <button
                  type='button'
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          a preview image, code repository link, and live output where
          available. It reflects my ability to solve complex problems, work
          with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
