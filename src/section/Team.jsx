/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "@/utils/styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

export default function Team() {
  return (
    <section className={`${styles.xPaddings} py-8 mt-[100vh] md:mt-[10vh]`}>
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
            <div
              className="uppercase text-[24px] md:text-[32px] font-glitch glitch"
              data-text="T E A M"
            >
              T E A M
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row`}
      >
        <div className="md:px-[50px] mt-[150px] mx-auto flex flex-col md:flex-row gap-5 justify-between items-center">
          <motion.div
            className="sm:p-6 p-3 gradient-card md:w-[275px] md:h-[175px] w-[250px] h-[125px] md:mb-0 mb-[150px] relative"
            variants={fadeIn("left", "spring", 1 * 0.5, 1)}
          >
            <img
              src="/images/ogeeekz.png"
              alt="ogeekz"
              className="w-[100%] absolute bottom-[1px] left-0"
            />
            <h2 className="font-glitch text-[30px] md:text-[40px] mt-[90px] md:mt-[125px] ml-[5px] md:-ml-[20px] absolute uppercase italic">
              <div className="glitch-wrapper">
                <div className="font-glitch glitch" data-text="O g e e k z">
                  O g e e k z
                </div>
              </div>
            </h2>
            {/* <h2 className="font-glitch text-[20px] md:text-[40px] mt-[140px] -ml-[15px] absolute text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-700 uppercase italic">O g e e k z</h2> */}
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 gradient-card md:w-[275px] md:h-[175px] w-[250px] h-[125px] md:mb-0 mb-[150px] relative"
            variants={fadeIn("up", "spring", 2 * 0.5, 1)}
          >
            <img
              src="/images/lujet.png"
              alt="luzert"
              className="w-[100%] absolute bottom-[1px] left-0"
            />
            <h2 className="font-glitch text-[30px] md:text-[40px] mt-[90px] md:mt-[125px] ml-[15px] md:-ml-[10px] absolute uppercase italic">
              <div className="glitch-wrapper">
                <div className="font-glitch glitch" data-text="L U Z E R T">
                  L U Z E R T
                </div>
              </div>
            </h2>
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 gradient-card md:w-[275px] md:h-[175px] w-[250px] h-[125px] md:mb-0 mb-[150px] relative"
            variants={fadeIn("right", "spring", 3 * 0.5, 1)}
          >
            <img
              src="/images/ikbal.png"
              alt="rrreol"
              className="w-[100%] absolute bottom-[1px] left-0"
            />
            <h2 className="font-glitch text-[30px] md:text-[40px] mt-[90px] md:mt-[125px] ml-[15px] md:ml-[0px] absolute uppercase italic">
              <div className="glitch-wrapper">
                <div className="font-glitch glitch" data-text="r r r e o l">
                  r r r e o l
                </div>
              </div>
            </h2>
          </motion.div>
          <motion.div
            className="sm:p-6 p-3 gradient-card md:w-[275px] md:h-[175px] w-[250px] h-[125px] md:mb-0 mb-[150px] relative"
            variants={fadeIn("down", "spring", 4 * 0.5, 1)}
          >
            <img
              src="/images/jibontzy.png"
              alt="jibon"
              className="w-[100%] absolute bottom-[1px] left-0"
            />
            <h2 className="font-glitch text-[30px] md:text-[40px] mt-[90px] md:mt-[125px] ml-[40px] md:ml-[5px] absolute uppercase italic">
              <div className="glitch-wrapper">
                <div className="font-glitch glitch" data-text="J i b o n">
                  J i b o n
                </div>
              </div>
            </h2>
          </motion.div>
        </div>
      </motion.div>
      {/* <div className="card-verse">
        <p className="heading">
          <img
            src="/images/jibon.png"
            alt="ogeekz"
            className="w-[100%] absolute bottom-[1px] left-0"
          />
        </p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div> */}
    </section>
  );
}
