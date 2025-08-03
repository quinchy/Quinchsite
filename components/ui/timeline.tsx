"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const firstSectionTextRef = useRef(null);
  const firstCheckpointLineRef = useRef(null);
  const secondSectionTextRef = useRef(null);
  const secondCheckpointLineRef = useRef(null);
  const thirdSectionTextRef = useRef(null);
  const thirdCheckpointLineRef = useRef(null);
  const fourthSectionTextRef = useRef(null);
  const fourthCheckpointLineRef = useRef(null);
  const fifthSectionTextRef = useRef(null);
  const fifthCheckpointLineRef = useRef(null);
  const sixthSectionTextRef = useRef(null);
  const sixthCheckpointLineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  // Animate image translateY from 0% to -90% based on scroll progress
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], [0, -1900]);

  // Check if checkpoint lines are in view
  const isFirstCheckpointInView = useInView(firstCheckpointLineRef, {
    amount: 0,
  });

  const isSecondCheckpointInView = useInView(secondCheckpointLineRef, {
    amount: 0,
  });

  const isThirdCheckpointInView = useInView(thirdCheckpointLineRef, {
    amount: 0,
  });

  const isFourthCheckpointInView = useInView(fourthCheckpointLineRef, {
    amount: 0,
  });

  const isFifthCheckpointInView = useInView(fifthCheckpointLineRef, {
    amount: 0,
  });

  const isSixthCheckpointInView = useInView(sixthCheckpointLineRef, {
    amount: 0,
  });

  return (
    <div
      ref={timelineRef}
      data-timeline
      className="sticky top-0 flex min-h-[500vh] w-full flex-col items-start justify-start"
    >
      {/* Sticky Timeline Container */}
      <div className="sticky top-10 flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden">
        {/* 1000vh Container */}
        <motion.div
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            translateY: imageTranslateY,
            minHeight: "1000vh",
          }}
        >
          {/* First Section: Senior High School (Left Side)*/}
          <section>
            {/* ProgressLine */}
            <div className="bg-highlight h-96 w-1 place-self-center rounded-t-full" />
            {/* Checkpoint */}
            <div className="relative">
              {/* Outline Circle */}
              <div className="border-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent" />
              <motion.div
                className="relative -translate-y-10"
                ref={firstCheckpointLineRef}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isFirstCheckpointInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: isFirstCheckpointInView ? 0.3 : 0,
                }}
              >
                {/* Curve Horizontal Line */}
                <div className="relative -translate-x-32 md:-translate-x-26 lg:-translate-x-0">
                  <div className="border-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4" />
                  <div className="bg-highlight absolute top-5 left-30 h-1 w-[36%]" />
                </div>
                {/* Circle */}
                <div className="bg-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full" />
              </motion.div>
              <motion.div
                className="absolute -top-30 left-0 max-w-[26rem] -translate-y-1/2"
                ref={firstSectionTextRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isFirstCheckpointInView ? 1 : 0,
                  x: isFirstCheckpointInView ? 0 : -50,
                }}
                transition={{
                  duration: 0.5,
                  delay: isFirstCheckpointInView ? 0 : 0.3,
                }}
              >
                <h1 className="text-highlight">Senior High School</h1>
                <p>
                  Start of my programming career. This was during the pandemic,
                  when I had plenty of free time and got curious about
                  programming. To get ready for college, I decided to give it a
                  try. I picked C# as my first language and spent that time
                  learning the basics and figuring out how programming really
                  works.
                </p>
              </motion.div>
            </div>
          </section>
          {/* Second Section: Freshman and Sophomore Year (Right Side)*/}
          <section>
            {/* ProgressLine */}
            <div className="bg-highlight h-96 w-1 place-self-center" />
            {/* Checkpoint */}
            <div className="relative">
              {/* Outline Circle */}
              <div className="border-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent" />
              <motion.div
                className="relative -translate-y-10"
                ref={secondCheckpointLineRef}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isSecondCheckpointInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: isSecondCheckpointInView ? 0.3 : 0,
                }}
              >
                {/* Curve Horizontal Line */}
                <div className="relative -translate-x-32 md:-translate-x-26 lg:-translate-x-0">
                  <div className="border-highlight absolute top-0 right-20 box-content h-5 w-10 rounded-br-[32px] border-r-4 border-b-4" />
                  <div className="bg-highlight absolute top-5 right-30 h-1 w-[36%]" />
                </div>
                {/* Circle */}
                <div className="bg-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full" />
              </motion.div>
              <motion.div
                className="absolute -top-30 right-0 max-w-[26rem] -translate-y-1/2"
                ref={secondSectionTextRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isSecondCheckpointInView ? 1 : 0,
                  x: isSecondCheckpointInView ? 0 : 50,
                }}
                transition={{
                  duration: 0.5,
                  delay: isSecondCheckpointInView ? 0 : 0.3,
                }}
              >
                <h1 className="text-highlight text-right">
                  Freshman and Sophomore Year:
                </h1>
                <p className="text-right">
                  I took up a Bachelor of Science in Computer Science majoring
                  in Software Development at Bataan Peninsula State University.
                  This is where I really dove deep into programming and got to
                  practice my skills regularly. During this time, I started
                  exploring more advanced topics like Git, UI/UX Design,
                  Software Development, and Databases.
                </p>
              </motion.div>
            </div>
          </section>
          {/* Third Section: Junior Year (Left Side)*/}
          <section>
            {/* ProgressLine */}
            <div className="bg-highlight h-96 w-1 place-self-center" />
            {/* Checkpoint */}
            <div className="relative">
              {/* Outline Circle */}
              <div className="border-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent" />
              <motion.div
                className="relative -translate-y-10"
                ref={thirdCheckpointLineRef}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isThirdCheckpointInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: isThirdCheckpointInView ? 0.3 : 0,
                }}
              >
                {/* Curve Horizontal Line */}
                <div className="relative -translate-x-32 md:-translate-x-26 lg:-translate-x-0">
                  <div className="border-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4" />
                  <div className="bg-highlight absolute top-5 left-30 h-1 w-[36%]" />
                </div>
                {/* Circle */}
                <div className="bg-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full" />
              </motion.div>
              <motion.div
                className="absolute -top-40 left-0 max-w-[26rem] -translate-y-1/2"
                ref={thirdSectionTextRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isThirdCheckpointInView ? 1 : 0,
                  x: isThirdCheckpointInView ? 0 : -50,
                }}
                transition={{
                  duration: 0.5,
                  delay: isThirdCheckpointInView ? 0 : 0.3,
                }}
              >
                <h1 className="text-highlight">Junior Year</h1>
                <p>
                  This is where the real fun begins. During this time, I worked
                  on multiple academic projects and finally got to put my skills
                  to the test. I built both full-stack web applications and
                  mobile apps. I also tried my first framework—Laravel—which
                  really opened my eyes to software architecture and better
                  coding practices. I got hands-on experience with everything
                  from designing to coding, all the way to deploying real
                  applications.
                </p>
              </motion.div>
            </div>
          </section>
          {/* Fourth Section: Senior Year: Internship (Right Side)*/}
          <section>
            {/* ProgressLine */}
            <div className="bg-highlight h-96 w-1 place-self-center" />
            {/* Checkpoint */}
            <div className="relative">
              {/* Outline Circle */}
              <div className="border-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent" />
              <motion.div
                className="relative -translate-y-10"
                ref={fourthCheckpointLineRef}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isFourthCheckpointInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: isFourthCheckpointInView ? 0.3 : 0,
                }}
              >
                {/* Curve Horizontal Line */}
                <div className="relative -translate-x-32 md:-translate-x-26 lg:-translate-x-0">
                  <div className="border-highlight absolute top-0 right-20 box-content h-5 w-10 rounded-br-[32px] border-r-4 border-b-4" />
                  <div className="bg-highlight absolute top-5 right-30 h-1 w-[36%]" />
                </div>
                {/* Circle */}
                <div className="bg-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full" />
              </motion.div>
              <motion.div
                className="absolute -top-30 right-0 max-w-[26rem] -translate-y-1/2"
                ref={fourthSectionTextRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isFourthCheckpointInView ? 1 : 0,
                  x: isFourthCheckpointInView ? 0 : 50,
                }}
                transition={{
                  duration: 0.5,
                  delay: isFourthCheckpointInView ? 0 : 0.3,
                }}
              >
                <h1 className="text-highlight text-right">
                  Senior Year: Internship
                </h1>
                <p className="text-right">
                  This was the toughest yet most fun year of my college life. I
                  kicked off my final year with an internship at Kynatech, where
                  I got real-world experience working in a company environment.
                  I learned about agile methodologies and got hands-on with
                  modern technologies like Next.js and Supabase.
                </p>
              </motion.div>
            </div>
          </section>
          {/* Fifth Section: Senior Year: Thesis (Left Side)*/}
          <section>
            {/* ProgressLine */}
            <div className="bg-highlight h-96 w-1 place-self-center" />
            {/* Checkpoint */}
            <div className="relative">
              {/* Outline Circle */}
              <div className="border-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent" />
              <motion.div
                className="relative -translate-y-10"
                ref={fifthCheckpointLineRef}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isFifthCheckpointInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: isFifthCheckpointInView ? 0.3 : 0,
                }}
              >
                {/* Curve Horizontal Line */}
                <div className="relative -translate-x-32 md:-translate-x-26 lg:-translate-x-0">
                  <div className="border-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4" />
                  <div className="bg-highlight absolute top-5 left-30 h-1 w-[36%]" />
                </div>
                {/* Circle */}
                <div className="bg-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full" />
              </motion.div>
              <motion.div
                className="absolute -top-36 left-0 max-w-[26rem] -translate-y-1/2"
                ref={fifthSectionTextRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isFifthCheckpointInView ? 1 : 0,
                  x: isFifthCheckpointInView ? 0 : -50,
                }}
                transition={{
                  duration: 0.5,
                  delay: isFifthCheckpointInView ? 0 : 0.3,
                }}
              >
                <h1 className="text-highlight">Senior Year: Thesis</h1>
                <p>
                  Second half and finale of my last year in college. I worked on
                  my thesis, HUE-FIT: Men's Outfit Recommendation Using Random
                  Forest Algorithm with AR-Based Virtual Try-On, where I was the
                  main developer and designer. Here, I got to challenge myself
                  and build a cross-platform design system for web and mobile,
                  developed a RESTful API, and implemented machine learning and
                  a 2D virtual fitting room.
                </p>
              </motion.div>
            </div>
          </section>
          {/* Sixth Section: Graduation and Working in a Startup (Right Side)*/}
          <section>
            {/* ProgressLine */}
            <div className="bg-highlight h-96 w-1 place-self-center" />
            {/* Checkpoint */}
            <div className="relative">
              {/* Outline Circle */}
              <div className="border-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent" />
              <motion.div
                className="relative -translate-y-10"
                ref={sixthCheckpointLineRef}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isSixthCheckpointInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: isSixthCheckpointInView ? 0.3 : 0,
                }}
              >
                {/* Curve Horizontal Line */}
                <div className="relative -translate-x-32 md:-translate-x-26 lg:-translate-x-0">
                  <div className="border-highlight absolute top-0 right-20 box-content h-5 w-10 rounded-br-[32px] border-r-4 border-b-4" />
                  <div className="bg-highlight absolute top-5 right-30 h-1 w-[36%]" />
                </div>
                {/* Circle */}
                <div className="bg-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full" />
              </motion.div>
              <motion.div
                className="absolute -top-30 right-0 max-w-[26rem] -translate-y-1/2"
                ref={sixthSectionTextRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isSixthCheckpointInView ? 1 : 0,
                  x: isSixthCheckpointInView ? 0 : 50,
                }}
                transition={{
                  duration: 0.5,
                  delay: isSixthCheckpointInView ? 0 : 0.3,
                }}
              >
                <h1 className="text-highlight text-right">
                  Graduation and Working in a Startup
                </h1>
                <p className="text-right">
                  The end of my college life. After defending my thesis, I spent
                  the months before graduation landing my first job at AppQuant
                  Technologies, a startup where I helped build their dating app
                  product. I worked with familiar technologies like Next.js and
                  Supabase, further strengthening my expertise in this stack.
                </p>
              </motion.div>
            </div>
          </section>
          {/* Last Section: Continuing my journey */}
          <section>
            {/* Dotted Progress Line signifying present time and unknown future */}
            <div className="border-highlight h-56 place-self-center border-l-4 border-dashed" />
          </section>
        </motion.div>
      </div>
    </div>
  );
}
