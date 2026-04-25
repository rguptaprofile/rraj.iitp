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
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);
  const liveProjectsCount = projects.filter((project) => project.live_demo_link).length;
  const publicReposCount = projects.filter((project) => project.source_code_link).length;
  const aiFocusedCount = projects.filter((project) => {
    const text = `${project.name} ${project.description} ${project.run_output}`.toLowerCase();
    return /ai|llm|agent|ml|intelligence|cyber/.test(text);
  }).length;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Proof of work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects are selected to show execution quality, system
          thinking, and product intent. I focus on solving practical
          high-friction problems with deployable solutions, measurable
          workflows, and clear ownership from idea to release.
        </motion.p>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className='mt-3 text-[#c5c9ef] text-[14px] max-w-4xl leading-[26px]'
      >
        Recruiter hook in one line: I do not just build projects, I build
        deployable AI-first products with clear engineering ownership and
        measurable delivery signals.
      </motion.p>

      <div className='mt-6 flex flex-wrap gap-3'>
        <span className='px-3 py-1 rounded-full border border-white/10 bg-[#11182d] text-[#d4d7f7] text-[12px]'>
          Real-world problem framing
        </span>
        <span className='px-3 py-1 rounded-full border border-white/10 bg-[#11182d] text-[#d4d7f7] text-[12px]'>
          Deployment-oriented builds
        </span>
        <span className='px-3 py-1 rounded-full border border-white/10 bg-[#11182d] text-[#d4d7f7] text-[12px]'>
          Rapid execution
        </span>
      </div>

      <div className='mt-6 rounded-2xl border border-white/10 bg-[#101833] p-5'>
        <p className='text-[12px] uppercase tracking-[0.16em] text-[#9ea5d1]'>Proof of Impact</p>
        <div className='mt-3 flex flex-wrap gap-3'>
          <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>
            {liveProjectsCount}+ live demos shipped
          </span>
          <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>
            {publicReposCount}+ public repositories
          </span>
          <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>
            {aiFocusedCount}+ AI-focused builds
          </span>
          <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>
            30+ REST APIs delivered (SpicyToday backend)
          </span>
        </div>
        <p className='mt-3 text-[#aeb4dd] text-[12px]'>
          Add your verified scale metrics for stronger shortlisting: requests handled,
          latency improvement, and active users.
        </p>
      </div>

      {featuredProject ? (
        <div className='mt-10 rounded-2xl border border-white/10 bg-[#0d1328] p-6'>
          <p className='text-[12px] uppercase tracking-[0.18em] text-[#9ea5d1]'>WOW Project | Featured Build</p>
          <h3 className='text-white font-bold text-[26px] mt-2'>{featuredProject.name}</h3>
          <p className='mt-3 text-secondary text-[15px] max-w-4xl'>{featuredProject.description}</p>
          <p className='mt-2 text-[#c5c9ef] text-[13px]'>{featuredProject.run_output}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>AI agent-ready architecture</span>
            <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>SaaS-scale backend foundation</span>
            <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>Built for real usage and iteration</span>
          </div>
          <div className='mt-5 flex flex-wrap gap-3'>
            {featuredProject.live_demo_link ? (
              <button
                type='button'
                onClick={() => window.open(featuredProject.live_demo_link, "_blank")}
                className='black-gradient px-4 py-2 rounded-lg text-white text-[13px] font-semibold'
              >
                View Live Demo
              </button>
            ) : null}
            {featuredProject.source_code_link ? (
              <button
                type='button'
                onClick={() => window.open(featuredProject.source_code_link, "_blank")}
                className='px-4 py-2 rounded-lg border border-white/20 text-white text-[13px] font-semibold'
              >
                View Source Code
              </button>
            ) : null}
            <a
              href='#contact'
              className='px-4 py-2 rounded-lg border border-white/20 text-white text-[13px] font-semibold'
            >
              Discuss This Build
            </a>
          </div>
        </div>
      ) : null}

      <div className='mt-20 flex flex-wrap gap-7'>
        {otherProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
