/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "@/utils/styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Link from "next/link";

export default function FindUs() {
  return (
    <section className={`${styles.xPaddings} py-8`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={fadeIn("down", "spring", 1, 1)}
          className="flex-1 text-center mt-[100px]"
        >
        <div className="glitch-wrapper">
            <div className="uppercase text-[24px] md:text-[32px] font-glitch glitch" data-text="Find Us">
            Find Us
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row mb-[50px]`}
      >
        <div className="md:mt-[25px] mt-[20px] mx-auto flex flex-row gap-5 justify-between items-center">
          <Link href="https://atlas3.io/project/disaster-dao">
            <motion.div
              className="sm:p-6 p-3 relative"
              variants={fadeIn("up", "spring", 1 * 0.5, 1)}
            >
              <img
                src="/images/atlas.ico"
                alt="ogeekz"
                className="w-[35px] rounded absolute bottom-[1px] left-0"
              />
            </motion.div>
          </Link>
          <Link href="https://subber.xyz/disaster-dao/">
            <motion.div
              className="sm:p-6 p-3 relative"
              variants={fadeIn("up", "spring", 1 * 0.5, 1)}
            >
              <img
                src="/images/subber.svg"
                alt="ogeekz"
                className="w-[40px] absolute bottom-[1px] left-0"
              />
            </motion.div>
          </Link>
          <Link href="https://x.com/disasterzdao">
            <motion.div
              className="sm:p-6 p-3 relative"
              variants={fadeIn("up", "spring", 1 * 0.5, 1)}
            >
              <img
                src="/images/x.png"
                alt="ogeekz"
                className="w-[40px] absolute bottom-[1px] left-0"
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
