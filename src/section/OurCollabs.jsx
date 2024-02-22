/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "@/utils/styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

export default function OurCollabs() {
  return (
    <section className={`${styles.xPaddings} py-8 mt-0 md:mt-[15vg]`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={fadeIn("down", "spring", 1, 1)}
          className="flex flex-col items-center justify-center mt-[100px]"
        >
        
          <div className="glitch-wrapper">
            <div className="uppercase text-[24px] md:text-[32px] font-glitch glitch" data-text="Our Collabs">
            Our Collabs
            </div>
          </div>
          <img
            src="/images/ghost.gif"
            alt="burn"
            className="w-[50%] md:w-[12%] -mb-[5px]"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="md:mt-[25px] mt-[20px] mx-auto flex flex-row gap-5 justify-between items-center">
          <motion.div
            className="sm:p-6 p-3 relative"
            variants={fadeIn("up", "spring", 1 * 0.5, 1)}
          >
            <img
              src="/images/flashtrade.jpg"
              alt="ogeekz"
              className="w-[65px] absolute bottom-[1px] rounded-lg left-0"
            />
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 relative"
            variants={fadeIn("up", "spring", 1 * 0.5, 1)}
          >
            <img
              src="/images/seiyan.jpg"
              alt="ogeekz"
              className="w-[65px] absolute bottom-[1px] rounded-lg left-0"
            />
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 relative"
            variants={fadeIn("up", "spring", 1 * 0.5, 1)}
          >
            <img
              src="/images/seiyancult.jpg"
              alt="ogeekz"
              className="w-[65px] absolute bottom-[1px] rounded-lg left-0"
            />
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 relative"
            variants={fadeIn("up", "spring", 1 * 0.5, 1)}
          >
            <img
              src="/images/visionaio.jpg"
              alt="ogeekz"
              className="w-[65px] absolute bottom-[1px] rounded-lg left-0"
            />
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 relative"
            variants={fadeIn("up", "spring", 1 * 0.5, 1)}
          >
            <img
              src="/images/snb.jpg"
              alt="ogeekz"
              className="w-[65px] absolute bottom-[1px] rounded-lg left-0"
            />
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 relative"
            variants={fadeIn("up", "spring", 1 * 0.5, 1)}
          >
            <img
              src="/images/quants.png"
              alt="ogeekz"
              className="w-[65px] absolute bottom-[1px] rounded-lg left-0"
            />
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 relative"
            variants={fadeIn("up", "spring", 1 * 0.5, 1)}
          >
            {/* <img src="/images/colony.jpg" alt="ogeekz" className="w-[65px] absolute bottom-[1px] left-0" /> */}
            {/* <div className="relative"> */}
              <img
                src="/images/colony.jpg"
                alt="ogeekz"
                className="w-[65px] absolute bottom-[1px] rounded-lg left-0 filter blur-[2px]"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25px] h-[25px] flex items-center justify-center text-xs font-bold">
                99+
              </div>
            {/* </div> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
