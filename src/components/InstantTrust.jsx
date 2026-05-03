import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const InstantTrust = () => {
  const selected = projects.slice(0, 3);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Instant Trust</p>
        <h2 className={`${styles.sectionHeadText}`}>Selected Projects & Why Hire Me</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[15px] max-w-4xl leading-[26px]'>
        A compact set of selected builds and a short recruiter-ready pitch to establish immediate credibility.
      </motion.p>

      <div className='mt-6 grid gap-6 md:grid-cols-3'>
        {selected.map((p) => (
          <div key={p.name} className='rounded-2xl border border-white/10 bg-[#0d1328] p-4'>
            <h4 className='text-white font-semibold'>{p.name}</h4>
            <p className='mt-2 text-[#c5c9ef] text-[13px]'>{p.description}</p>
            <p className='mt-2 text-[#9ea5d1] text-[12px]'>{p.run_output}</p>
            <div className='mt-3 flex flex-wrap gap-2'>
              {p.live_demo_link ? (
                <button onClick={() => window.open(p.live_demo_link, "_blank")} className='black-gradient px-3 py-1 rounded-md text-white text-[13px]'>View Demo</button>
              ) : null}
              {p.source_code_link ? (
                <button onClick={() => window.open(p.source_code_link, "_blank")} className='px-3 py-1 rounded-md border border-white/20 text-white text-[13px]'>Source</button>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-8 rounded-2xl border border-white/10 bg-[#101833] p-5'>
        <p className='text-[12px] uppercase tracking-[0.12em] text-[#9ea5d1]'>Why hire me?</p>
        <ul className='mt-3 list-disc pl-5 text-[13px] text-[#d4d7f7] space-y-2'>
          <li>End-to-end builder: from problem framing to deployed demo and monitoring.</li>
          <li>Deployment-first engineering: production-grade APIs and scalable backends.</li>
          <li>Fast iteration and ownership: small, high-impact shipping cycles.</li>
          <li>AI product experience: several LLM and ML builds with prompt strategy and safety considerations.</li>
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(InstantTrust, "instant-trust");
