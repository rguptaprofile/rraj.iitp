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
        I build decision-focused software, not just demo apps. At IIT Patna
        (CSDA, CPI 9.74), I specialize in AI/ML + full-stack execution where
        each build starts from a real problem, ships to a usable product, and
        is measured by clarity, reliability, and speed. My internship work
        includes production-style authentication flows, checkout systems,
        profile history modules, and automation-ready Python tooling. I enjoy
        operating like a builder: frame the problem, design the system, ship
        fast, and improve based on feedback.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-[#11182d] p-5"
      >
        <p className="text-white font-semibold text-[16px]">What I&apos;m Building Now</p>
        <p className="mt-2 text-secondary text-[14px] leading-[26px]">
          Agentic AI decision engine for unstructured documents.
          Problem: policy and operational docs are hard to query at speed.
          Solution: LLM-guided extraction + retrieval + rule checks to generate
          structured outputs that teams can directly act on.
        </p>
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
