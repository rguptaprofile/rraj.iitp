import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Most student portfolios stop at project showcase. Mine is built as an
        impact showcase focused on practical software delivery. At IIT Patna
        (B.Sc. Hons. in Computer Science and Data Analytics, CPI 9.74), I
        combine strong fundamentals with startup-style execution: define the
        problem, build a practical system, deploy fast, and iterate with
        measurable outcomes.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-[#11182d] p-5"
      >
        <p className="text-white font-semibold text-[16px]">What I&apos;m Building Now</p>
        <p className="mt-2 text-secondary text-[14px] leading-[26px]">
          LLM-guided document intelligence and full-stack workflows.
          Problem: policy, business, and case documents are hard to query at speed.
          Solution: structured upload, retrieval, and analysis workflows that turn
          unstructured text into usable outputs.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.23, 1)}
        className="mt-6 max-w-4xl rounded-2xl border border-white/10 bg-[#11182d] p-5"
      >
        <p className="text-white font-semibold text-[16px]">Positions &amp; Achievements</p>
        <ul className="mt-3 list-disc ml-5 space-y-2 text-secondary text-[14px] leading-[24px]">
          <li>Tech Coordinator, Vaani - The Oratory Society, IIT Patna (2025 - Present).</li>
          <li>SSM, Mood Indigo &amp; Techfest, IIT Bombay and SSM, E-Cell, IIT Guwahati.</li>
          <li>Common Internship Test (CIP): Rank 1495 among 18,000 participants in 2025.</li>
          <li>Google Gen AI Academy certified and Bajaj Finserv HackRx 6.0 project contributor.</li>
        </ul>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.28, 1)}
        className="mt-6 max-w-4xl rounded-2xl border border-white/10 bg-[#11182d] p-5"
      >
        <p className="text-white font-semibold text-[16px]">Why Hire Me</p>
        <ul className="mt-3 list-disc ml-5 space-y-2 text-secondary text-[14px] leading-[24px]">
          <li>IIT Patna background with strong CS and analytics fundamentals.</li>
          <li>Web, backend, and product delivery across internships, hackathons, and public repositories.</li>
          <li>Fast builder mindset: idea to working prototype in short cycles.</li>
          <li>Product thinking: problem-first decisions, not just feature-first coding.</li>
          <li>Public proof trail across GitHub, LinkedIn, and live deployments.</li>
        </ul>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
