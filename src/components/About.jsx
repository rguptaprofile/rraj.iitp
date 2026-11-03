import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGraduationCap, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ServiceCard = ({ index, title, icon, desc }) => (
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
        className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        {desc && (
          <p className="text-[#aeb4dd] text-[12px] text-center mt-2 leading-relaxed">
            {desc}
          </p>
        )}
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
        I am a Software Developer and AI/ML builder pursuing a{" "}
        <span className="text-white font-semibold">
          B.Sc. (Hons.) in Computer Science and Data Analytics
        </span>{" "}
        at <span className="text-[#915EFF] font-semibold">Indian Institute of Technology, Patna</span> (CPI:{" "}
        <span className="text-[#67e8f9] font-bold">9.74</span>, Roll: UA2503CDH466).
        I combine computer science fundamentals with rapid product engineering—building, deploying,
        and scaling full-stack applications and AI systems that solve real-world problems.
      </motion.p>

      {/* Quick Bio Info Pills */}
      <motion.div
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-6 flex flex-wrap items-center gap-3"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11182d] border border-white/10 text-[13px] text-[#d4d7f7]">
          <FaGraduationCap className="text-[#915EFF]" />
          <span>IIT Patna (2025 - 2028) • CPI 9.74</span>
        </div>
        <a
          href="mailto:rahulgupt1231@gmail.com"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11182d] border border-white/10 text-[13px] text-[#d4d7f7] hover:border-[#915EFF]/50"
        >
          <FaEnvelope className="text-[#38bdf8]" />
          <span>rahulgupt1231@gmail.com</span>
        </a>
        <a
          href="tel:+916209980667"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11182d] border border-white/10 text-[13px] text-[#d4d7f7] hover:border-[#915EFF]/50"
        >
          <FaPhoneAlt className="text-[#4ade80]" />
          <span>+91-6209980667</span>
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-raj-33a6a225b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11182d] border border-white/10 text-[13px] text-[#d4d7f7] hover:border-[#915EFF]/50"
        >
          <FaLinkedin className="text-[#0a66c2]" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/rguptaprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11182d] border border-white/10 text-[13px] text-[#d4d7f7] hover:border-[#915EFF]/50"
        >
          <FaGithub className="text-white" />
          <span>GitHub</span>
        </a>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-[#11182d] p-5"
      >
        <p className="text-white font-semibold text-[16px]">What I&apos;m Building Now</p>
        <p className="mt-2 text-secondary text-[14px] leading-[26px]">
          LLM-guided document intelligence, fraud prevention intelligence platforms, and mobile-to-hardware
          control systems. From <span className="text-white font-medium">SentinelAI</span> (public safety &amp; fraud graph) to{" "}
          <span className="text-white font-medium">PocketTerminal</span> (99%+ LSTM intent recognition) and{" "}
          <span className="text-white font-medium">NomadBihari</span> (40% faster media workflows with OpenAI),
          I focus on building production-grade software with measurable outcomes.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.23, 1)}
        className="mt-6 max-w-4xl rounded-2xl border border-white/10 bg-[#11182d] p-5"
      >
        <p className="text-white font-semibold text-[16px]">Positions &amp; Achievements</p>
        <ul className="mt-3 list-disc ml-5 space-y-2 text-secondary text-[14px] leading-[24px]">
          <li>
            <strong className="text-white">Tech Coordinator</strong>, Vaani - The Oratory Society (The Debating Club), IIT Patna (2025 - Present).
          </li>
          <li>
            <strong className="text-white">SSM (Campus Ambassador)</strong>, Mood Indigo &amp; Techfest, IIT Bombay and SSM, E-Cell, IIT Guwahati.
          </li>
          <li>
            <strong className="text-white">Common Internship Test (CIP) 2025:</strong> Ranked 1495 among 18,000 national participants.
          </li>
          <li>
            <strong className="text-white">Google Certified:</strong> Gen AI Academy certified for mastering generative AI foundations.
          </li>
          <li>
            <strong className="text-white">Bajaj Finserv HackRx 6.0:</strong> Engineered Documents Intelligence System with NLP &amp; LLMs.
          </li>
          <li>
            <strong className="text-white">Salesforce Credentials:</strong> Earned Apex Specialist, Process Automation Specialist, and Developer Super Set badges.
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.28, 1)}
        className="mt-6 max-w-4xl rounded-2xl border border-white/10 bg-[#11182d] p-5"
      >
        <p className="text-white font-semibold text-[16px]">Why Hire Me</p>
        <ul className="mt-3 list-disc ml-5 space-y-2 text-secondary text-[14px] leading-[24px]">
          <li>
            <strong className="text-white">Strong IIT Patna Foundation:</strong> 9.74 CPI in Computer Science &amp; Data Analytics.
          </li>
          <li>
            <strong className="text-white">Production Web &amp; Backend Delivery:</strong> Full-stack experience across internships (Zaalima Development, SmartBridge) and hackathons.
          </li>
          <li>
            <strong className="text-white">AI/ML Depth:</strong> Practical experience with LSTM neural networks, FastAPI, MongoDB, RAG, and LLM APIs.
          </li>
          <li>
            <strong className="text-white">Fast Execution &amp; Ownership:</strong> Rapid idea-to-deployment turnarounds with clean git workflows and documentation.
          </li>
          <li>
            <strong className="text-white">Public Proof Trail:</strong> Verified codebases on GitHub, live demo deployments on Vercel, and active credentials.
          </li>
        </ul>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-7 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
