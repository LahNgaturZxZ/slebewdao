/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
// import React from "react";
// import { useRef } from "react";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  //   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "190%"]);
  //   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", mediaQuery.matches ? "225%" : "155%"]
  );
  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", mediaQuery.matches ? "100%" : "135%"]
  );

  return (
    <div className="mx-auto">
      <div className="z-20">
        <div className="relative left-0 top-[5%] mt-[225px] md:mt-[300px] lg:mt-0 z-30">
          <img
            src="images/mountainss.png"
            className="w-full h-auto mt-[200px] md:mt-0 hidden lg:block"
            alt="mountains"
            draggable="false"
          />
        </div>
        <div className="-mt-[350px] py-12 px-12 flex flex-col tracking-[5px] justify-center items-center absolute top-[30%] right-0 left-0 text-center z-20">
          <motion.h1 style={{ y: yText }}>
            <div className="flex justify-center items-center mt-[300px] md:mt-[200px]">
              <img
                src="images/disasterdao.png"
                alt="disaster"
                className="w-[20%] md:w-[15%] mb-6"
              />
            </div>
            {/* <span className="text-[20px] md:text-[32px] font-glitch">
              WE ARE
            </span> */}
            <div className="glitch-wrapper">
              <div
                class="glitch font-glitch text-[20px] md:text-[32px]"
                data-text="WE ARE"
              >
                WE ARE
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="glitch-wrapper">
                <div
                  class="glitch font-glitch text-[30px] md:text-[50px]"
                  data-text="DISASTER DAO"
                >
                  DISASTER DAO
                </div>
              </div>
              <img
                src="/images/smile.gif"
                alt="smile"
                className="w-[25%] md:w-[8%]"
              />
            </div>
            {/* <img
            src="/images/smile.gif"
            alt="burn"
            className="w-[8%] -mb-[5px] ml-[575px]"
          /> */}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
