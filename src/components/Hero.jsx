import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen sm:h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Rahul Raj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Building AI systems that turn messy real-world data into
            structured decisions.
            <br className="sm:block hidden" />
            IIT Patna (B.Sc. CSDA, CPI 9.74) | Frontend + Full-Stack +
            AI/ML engineering with product-first execution.
          </p>

          <p className="mt-3 text-[#c5c9ef] text-[13px] max-w-3xl leading-[22px]">
            Why hire me over others: I combine AI depth, full-stack shipping,
            and rapid execution to turn ambiguous ideas into deployable
            products.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#1f2142] text-[#d4d7f7] text-[12px] border border-white/10">
              Proof-driven builder
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1f2142] text-[#d4d7f7] text-[12px] border border-white/10">
              Idea to deploy in days
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1f2142] text-[#d4d7f7] text-[12px] border border-white/10">
              AI + Product + Engineering
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="black-gradient px-5 py-2 rounded-lg text-white text-[14px] font-semibold"
            >
              Hire me for AI Internship
            </a>
            <a
              href="mailto:rahulgupt1231@gmail.com"
              className="px-5 py-2 rounded-lg border border-white/20 text-white text-[14px] font-semibold"
            >
              Book a Call
            </a>
            <a
              href="/Rahul_updated_2026_IIT_Patna_Resume.pdf"
              download
              className="px-5 py-2 rounded-lg border border-white/20 text-white text-[14px] font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[20px] h-[44px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
