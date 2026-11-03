import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educationData, achievementsData, positionsData } from "../constants";
import { FaGraduationCap, FaTrophy, FaUserTie } from "react-icons/fa";

const Feedbacks = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="rounded-[24px] bg-[#0c1224] border border-white/10 p-6 sm:p-10 shadow-2xl">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Verified Academic &amp; Extra-Curricular Credentials</p>
        <h2 className={styles.sectionHeadText}>Education &amp; Achievements.</h2>
      </motion.div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all ${
            activeTab === "education"
              ? "bg-[#915EFF] text-white shadow-lg shadow-[#915EFF]/30"
              : "bg-[#141b33] text-[#c5c9ef] hover:bg-[#1a2342] border border-white/10"
          }`}
        >
          <FaGraduationCap size={18} />
          Education
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("achievements")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all ${
            activeTab === "achievements"
              ? "bg-[#915EFF] text-white shadow-lg shadow-[#915EFF]/30"
              : "bg-[#141b33] text-[#c5c9ef] hover:bg-[#1a2342] border border-white/10"
          }`}
        >
          <FaTrophy size={16} />
          Achievements &amp; Honors
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("positions")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all ${
            activeTab === "positions"
              ? "bg-[#915EFF] text-white shadow-lg shadow-[#915EFF]/30"
              : "bg-[#141b33] text-[#c5c9ef] hover:bg-[#1a2342] border border-white/10"
          }`}
        >
          <FaUserTie size={16} />
          Positions of Responsibility
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === "education" && (
          <div className="grid gap-6 md:grid-cols-3">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
                className="relative rounded-2xl bg-[#11182d] border border-white/10 p-6 flex flex-col justify-between hover:border-[#915EFF]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#1e274a] text-[#8BE9FD] text-[11px] font-semibold uppercase tracking-wider">
                      {edu.highlight}
                    </span>
                    <span className="text-[#a5b4fc] text-[12px] font-medium">{edu.period}</span>
                  </div>

                  <h3 className="mt-4 text-white font-bold text-[18px] leading-snug">
                    {edu.institution}
                  </h3>

                  <p className="mt-2 text-[#93c5fd] font-medium text-[14px]">
                    {edu.degree}
                  </p>

                  <div className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-[#1a2752] border border-[#3b82f6]/40 text-[#67e8f9] font-bold text-[14px]">
                    {edu.score}
                  </div>

                  {edu.roll ? (
                    <p className="mt-2 text-[12px] text-[#94a3b8]">
                      Roll No: <span className="text-white font-mono">{edu.roll}</span>
                    </p>
                  ) : null}

                  <p className="mt-3 text-[#cbd5e1] text-[13px] leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievementsData.map((ach, idx) => (
              <motion.div
                key={ach.title}
                variants={fadeIn("up", "spring", idx * 0.15, 0.75)}
                className="rounded-2xl bg-[#11182d] border border-white/10 p-6 flex flex-col justify-between hover:border-[#915EFF]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-[#312e81] text-[#c7d2fe] text-[11px] font-bold uppercase tracking-wider">
                      {ach.badge}
                    </span>
                    <span className="text-[#94a3b8] text-[12px]">{ach.year}</span>
                  </div>

                  <h3 className="mt-4 text-white font-bold text-[17px] leading-snug">
                    {ach.title}
                  </h3>

                  <p className="mt-1 text-[#facc15] font-semibold text-[13px]">
                    {ach.rank}
                  </p>

                  <p className="mt-1 text-[12px] text-[#93c5fd]">
                    Issuer: {ach.issuer}
                  </p>

                  <p className="mt-3 text-[#cbd5e1] text-[13px] leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "positions" && (
          <div className="grid gap-6 md:grid-cols-3">
            {positionsData.map((pos, idx) => (
              <motion.div
                key={pos.role + pos.org}
                variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
                className="rounded-2xl bg-[#11182d] border border-white/10 p-6 flex flex-col justify-between hover:border-[#915EFF]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-[#14532d] text-[#86efac] text-[11px] font-bold uppercase tracking-wider">
                      Leadership
                    </span>
                    <span className="text-[#a5b4fc] text-[12px] font-medium">{pos.period}</span>
                  </div>

                  <h3 className="mt-4 text-white font-bold text-[18px]">
                    {pos.role}
                  </h3>

                  <p className="mt-1 text-[#60a5fa] font-medium text-[14px]">
                    {pos.org}
                  </p>

                  <p className="mt-3 text-[#cbd5e1] text-[13px] leading-relaxed">
                    {pos.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "education");
