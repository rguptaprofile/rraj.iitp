import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const AIDepth = () => {
  const projectsWithArch = projects.filter(p => p.architecture_link && p.architecture_link.length > 4);
  const aiProjects = projects.filter((project) => {
    const text = `${project.name} ${project.description} ${project.run_output}`.toLowerCase();
    return /ai|llm|agent|ml|intelligence|document|chat|gpt/.test(text);
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>AI Depth Signal</p>
        <h2 className={`${styles.sectionHeadText}`}>Architectures, Prompts & Metrics</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[15px] max-w-4xl leading-[26px]'>
        Recruiters look for concrete engineering depth in AI work. Below are explicit signals that show
        system-level thinking, prompt strategy, and measurable evaluation where available.
      </motion.p>

      <div className='mt-6 grid gap-6 md:grid-cols-2'>
        <div className='rounded-2xl border border-white/10 bg-[#101833] p-5'>
          <p className='text-[12px] uppercase tracking-[0.12em] text-[#9ea5d1]'>Architecture Diagrams</p>
          <div className='mt-3 text-[13px] text-[#d4d7f7]'>
            {projectsWithArch.length > 0 ? (
              <ul className='list-disc pl-5 space-y-2'>
                {projectsWithArch.map((p) => (
                  <li key={p.name}>
                    <a href={p.architecture_link} target='_blank' rel='noopener noreferrer' className='text-[#9cc3ff] underline'>
                      {p.name} — architecture
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-[#aeb4dd]'>No uploaded diagrams found — add architecture links to projects for strong depth signals.</p>
            )}
          </div>
        </div>

        <div className='rounded-2xl border border-white/10 bg-[#101833] p-5'>
          <p className='text-[12px] uppercase tracking-[0.12em] text-[#9ea5d1]'>Prompt Engineering Strategy</p>
          <div className='mt-3 text-[13px] text-[#d4d7f7] space-y-2'>
            <p>Consistent approach used across AI builds:</p>
            <ul className='list-disc pl-5'>
              <li>Template-driven prompts with explicit system + user roles and few-shot examples.</li>
              <li>Input conditioning, constraint prompts and safety filters to avoid hallucination.</li>
              <li>Testing harness with edge-case prompts and replayable evaluation cases.</li>
            </ul>
          </div>
        </div>

        <div className='rounded-2xl border border-white/10 bg-[#101833] p-5'>
          <p className='text-[12px] uppercase tracking-[0.12em] text-[#9ea5d1]'>Evaluation Metrics</p>
          <div className='mt-3 text-[13px] text-[#d4d7f7] space-y-2'>
            <p className='text-[#aeb4dd]'>Where available, projects include measurable signals:</p>
            <ul className='list-disc pl-5'>
              <li>Task accuracy / precision on labeled benchmarks (where applicable)</li>
              <li>Latency and throughput for real-time flows</li>
              <li>User success and retention proxies for deployed demos</li>
            </ul>
            <p className='text-[#aeb4dd]'>Tip: add benchmark numbers or short notes in project metadata to make these metrics visible to recruiters.</p>
          </div>
        </div>

        <div className='rounded-2xl border border-white/10 bg-[#101833] p-5'>
          <p className='text-[12px] uppercase tracking-[0.12em] text-[#9ea5d1]'>AI Work Snapshot</p>
          <div className='mt-3 text-[13px] text-[#d4d7f7]'>
            <p className='mb-2'>{aiProjects.length}+ AI-focused builds across this portfolio.</p>
            <ul className='list-disc pl-5'>
              {aiProjects.slice(0,6).map(p => (
                <li key={p.name} className='mb-1'>
                  <a href={p.source_code_link || '#'} target='_blank' rel='noopener noreferrer' className='text-[#9cc3ff] underline'>
                    {p.name}
                  </a>
                  {p.live_demo_link ? (<span className='text-[#aeb4dd] ml-2'> — live demo</span>) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(AIDepth, "ai-depth");
