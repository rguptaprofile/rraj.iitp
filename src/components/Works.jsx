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

  return "/sentinelai-preview.svg";
};

const PreviewImage = ({ src, alt }) => {
  const [currentSrc, setCurrentSrc] = useState(src || "/sentinelai-preview.svg");

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading='lazy'
      referrerPolicy='no-referrer'
      onError={() => setCurrentSrc("/sentinelai-preview.svg")}
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
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between border border-white/5 hover:border-white/20 transition-all'
      >
        <div>
          <h3 className='text-white font-bold text-[22px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
          <p className='mt-2 text-[#b8b9d2] text-[12px] leading-snug'>{run_output}</p>

          {(problem || solution || tech_stack || impact) ? (
            <div className='mt-4 rounded-xl border border-white/10 bg-[#101833] p-3'>
              <p className='text-[11px] uppercase tracking-[0.16em] text-[#9ea5d1]'>Case Study Snapshot</p>
              {problem ? <p className='mt-2 text-[12px] text-[#d4d7f7]'><span className='font-semibold text-white'>Problem:</span> {problem}</p> : null}
              {solution ? <p className='mt-1 text-[12px] text-[#d4d7f7]'><span className='font-semibold text-white'>Solution:</span> {solution}</p> : null}
              {tech_stack ? <p className='mt-1 text-[12px] text-[#d4d7f7]'><span className='font-semibold text-white'>Tech:</span> {tech_stack}</p> : null}
              {impact ? <p className='mt-1 text-[12px] text-[#d4d7f7]'><span className='font-semibold text-white'>Impact:</span> {impact}</p> : null}
              {impact_note ? <p className='mt-1 text-[11px] text-[#aeb4dd]'>{impact_note}</p> : null}
            </div>
          ) : null}

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[13px] font-medium ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
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
                  className='black-gradient px-3 h-9 rounded-full flex justify-center items-center cursor-pointer mr-2 text-white text-[12px] font-semibold'
                >
                  Demo
                </button>
              ) : null}
              {live_demo_link ? (
                <button
                  type='button'
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className='black-gradient px-3 h-9 rounded-full flex justify-center items-center cursor-pointer mr-2 text-white text-[12px] font-semibold'
                >
                  Live Demo
                </button>
              ) : null}
              {source_code_link ? (
                <button
                  type='button'
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer'
                  title='View Source Code'
                >
                  <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
                </button>
              ) : null}
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
    return /ai|llm|agent|ml|intelligence|document|fraud|terminal|blog|lstm/.test(text);
  }).length;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Proof of work</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Each project represents an end-to-end software delivery solving concrete problems.
          Framed as compact case studies with architecture, tech stack, and quantitative
          performance benchmarks from the updated resume.
        </motion.p>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className='mt-3 text-[#c5c9ef] text-[14px] max-w-4xl leading-[26px]'
      >
        Recruiter hook: I build software end-to-end across internships, hackathons, and
        public repositories—combining IIT Patna computer science rigor with production velocity.
      </motion.p>

      <div className='mt-6 flex flex-wrap gap-3'>
        <span className='px-3 py-1 rounded-full border border-white/10 bg-[#11182d] text-[#d4d7f7] text-[12px]'>
          Real-world problem framing
        </span>
        <span className='px-3 py-1 rounded-full border border-white/10 bg-[#11182d] text-[#d4d7f7] text-[12px]'>
          Production-grade builds
        </span>
        <span className='px-3 py-1 rounded-full border border-white/10 bg-[#11182d] text-[#d4d7f7] text-[12px]'>
          99%+ LSTM intent accuracy
        </span>
        <span className='px-3 py-1 rounded-full border border-white/10 bg-[#11182d] text-[#d4d7f7] text-[12px]'>
          -40% processing latency
        </span>
      </div>

      <div className='mt-6 rounded-2xl border border-white/10 bg-[#101833] p-5'>
        <p className='text-[12px] uppercase tracking-[0.16em] text-[#9ea5d1]'>Proof of Impact</p>
        <div className='mt-3 flex flex-wrap gap-3'>
          <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>
            {liveProjectsCount}+ Live Hosted Systems
          </span>
          <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>
            {publicReposCount}+ Open Source Repositories
          </span>
          <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>
            {aiFocusedCount} AI / ML Product Builds
          </span>
          <span className='px-3 py-1 rounded-full border border-white/10 bg-[#141e3f] text-[#d4d7f7] text-[12px]'>
            IIT Patna Academic Rigor (CPI 9.74)
          </span>
        </div>
      </div>

      {featuredProject ? (
        <div className='mt-10 rounded-2xl border border-white/10 bg-[#0d1328] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-start'>
          <div className='flex-1'>
            <div className='flex items-center gap-3'>
              <span className='px-3 py-1 rounded-full bg-[#38bdf8]/20 border border-[#38bdf8]/40 text-[#38bdf8] text-[11px] font-bold uppercase tracking-wider'>
                ⭐ Flagship Project
              </span>
              <span className='text-[12px] text-[#9ea5d1]'>Resume-Featured Build</span>
            </div>

            <h3 className='text-white font-bold text-[28px] mt-3'>{featuredProject.name}</h3>
            <p className='mt-3 text-secondary text-[15px] leading-relaxed'>{featuredProject.description}</p>
            <p className='mt-2 text-[#c5c9ef] text-[13px]'>{featuredProject.run_output}</p>

            {featuredProject.problem ? (
              <div className='mt-4 rounded-xl border border-white/10 bg-[#101833] p-4 text-[13px] text-[#d4d7f7] space-y-1.5'>
                <p><strong className='text-white'>Problem:</strong> {featuredProject.problem}</p>
                <p><strong className='text-white'>Solution:</strong> {featuredProject.solution}</p>
                <p><strong className='text-white'>Tech Stack:</strong> {featuredProject.tech_stack}</p>
                <p><strong className='text-white'>Impact:</strong> {featuredProject.impact}</p>
                {featuredProject.impact_note && (
                  <p className='text-[12px] text-[#aeb4dd] italic pt-1'>{featuredProject.impact_note}</p>
                )}
              </div>
            ) : null}

            <div className='mt-5 flex flex-wrap gap-3'>
              {featuredProject.live_demo_link ? (
                <button
                  type='button'
                  onClick={() => window.open(featuredProject.live_demo_link, "_blank")}
                  className='black-gradient px-5 py-2.5 rounded-lg text-white text-[13px] font-semibold hover:opacity-90 transition'
                >
                  🚀 Open Live Platform
                </button>
              ) : null}
              {featuredProject.source_code_link ? (
                <button
                  type='button'
                  onClick={() => window.open(featuredProject.source_code_link, "_blank")}
                  className='px-5 py-2.5 rounded-lg border border-white/20 text-white text-[13px] font-semibold hover:bg-white/5 transition flex items-center gap-2'
                >
                  <img src={github} alt='github' className='w-4 h-4 object-contain' />
                  View GitHub Source
                </button>
              ) : null}
              <a
                href='#contact'
                className='px-5 py-2.5 rounded-lg border border-white/20 text-white text-[13px] font-semibold hover:bg-white/5 transition'
              >
                Discuss This Build
              </a>
            </div>
          </div>

          <div className='w-full lg:w-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#11182d]'>
            <img
              src={featuredProject.image || "/sentinelai-preview.svg"}
              alt={featuredProject.name}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      ) : null}

      <div className='mt-16 flex flex-wrap gap-7 justify-center'>
        {otherProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
