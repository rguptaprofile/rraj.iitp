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
  problem,
  solution,
  tech_stack,
  impact,
  impact_note,
  architecture_link,
  demo_video_link,
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

        {(problem || solution || tech_stack || impact) ? (
          <div className='mt-4 rounded-xl border border-white/10 bg-[#101833] p-3'>
            <p className='text-[11px] uppercase tracking-[0.16em] text-[#9ea5d1]'>Case Study Snapshot</p>
            {problem ? <p className='mt-2 text-[12px] text-[#d4d7f7]'><span className='font-semibold'>Problem:</span> {problem}</p> : null}
            {solution ? <p className='mt-1 text-[12px] text-[#d4d7f7]'><span className='font-semibold'>Solution:</span> {solution}</p> : null}
            {tech_stack ? <p className='mt-1 text-[12px] text-[#d4d7f7]'><span className='font-semibold'>Tech:</span> {tech_stack}</p> : null}
            {impact ? <p className='mt-1 text-[12px] text-[#d4d7f7]'><span className='font-semibold'>Impact:</span> {impact}</p> : null}
            {impact_note ? <p className='mt-1 text-[11px] text-[#aeb4dd]'>{impact_note}</p> : null}
          </div>
        ) : null}

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
              {demo_video_link ? (
                <button
                  type='button'
                  onClick={() => window.open(demo_video_link, "_blank")}
                  className='black-gradient px-3 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2 text-white text-[12px]'
                >
                  Demo
                </button>
              ) : null}
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

        {architecture_link ? (
          <a
            href={architecture_link}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-3 inline-block text-[12px] text-[#9cc3ff] underline underline-offset-2'
          >
            View Architecture Diagram
          </a>
        ) : null}
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
          This section is intentionally product-first, not a generic project
          gallery. Each build is framed as a compact case study with problem,
          solution, tech stack, and impact signal so hiring teams can quickly
          evaluate execution quality.
        </motion.p>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className='mt-3 text-[#c5c9ef] text-[14px] max-w-4xl leading-[26px]'
      >
        Recruiter hook in one line: I build AI products end-to-end with clear
        ownership, fast execution, and proof-oriented delivery.
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
          {featuredProject.problem ? <p className='mt-3 text-[13px] text-[#d4d7f7]'><span className='font-semibold'>Problem:</span> {featuredProject.problem}</p> : null}
          {featuredProject.solution ? <p className='mt-1 text-[13px] text-[#d4d7f7]'><span className='font-semibold'>Solution:</span> {featuredProject.solution}</p> : null}
          {featuredProject.tech_stack ? <p className='mt-1 text-[13px] text-[#d4d7f7]'><span className='font-semibold'>Tech:</span> {featuredProject.tech_stack}</p> : null}
          {featuredProject.impact ? <p className='mt-1 text-[13px] text-[#d4d7f7]'><span className='font-semibold'>Impact:</span> {featuredProject.impact}</p> : null}
          {featuredProject.impact_note ? <p className='mt-1 text-[11px] text-[#aeb4dd]'>{featuredProject.impact_note}</p> : null}
          <div className='mt-4 flex flex-wrap gap-2'>
            <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>AI agent-ready architecture</span>
            <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>SaaS-scale backend foundation</span>
            <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>Built for real usage and iteration</span>
          </div>
          <div className='mt-5 flex flex-wrap gap-3'>
            {featuredProject.demo_video_link ? (
              <button
                type='button'
                onClick={() => window.open(featuredProject.demo_video_link, "_blank")}
                className='black-gradient px-4 py-2 rounded-lg text-white text-[13px] font-semibold'
              >
                Watch Demo Video
              </button>
            ) : null}
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
            {featuredProject.architecture_link ? (
              <a
                href={featuredProject.architecture_link}
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 rounded-lg border border-white/20 text-white text-[13px] font-semibold'
              >
                View Architecture
              </a>
            ) : null}
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
