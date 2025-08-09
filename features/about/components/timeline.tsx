"use client";

import React, { useRef, useState, useEffect } from "react";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  // Animate image translateY from 0% to -90% based on scroll progress
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], [0, -1900]);
  const imageTranslateYMobile = useTransform(scrollYProgress, [0, 1], [0, -2200]);

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

  // Mobile UI
  if (isMobile) {
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
              translateY: imageTranslateYMobile,
              minHeight: "1000vh",
            }}
          >
            {/* First Section: Senior High School (Left Side)*/}
            <section className="grid">
              {/* ProgressLine */}
              <div className="drop-shadow-highlight h-96 w-1 -translate-x-4.5 place-self-end rounded-t-full drop-shadow-lg"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, var(--color-glow) 100%)",
                }}
              />
              {/* Checkpoint */}
              <div className="relative grid">
                {/* Outline Circle */}
                <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-end rounded-full border-4 bg-transparent drop-shadow-lg" />
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
                  <div className="relative translate-x-14">
                    <div className="border-glow drop-shadow-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                    <div className="bg-glow drop-shadow-highlight absolute top-5 left-30 h-1 w-[36%] drop-shadow-lg" />
                  </div>
                  {/* Circle */}
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-0 h-6 w-6 -translate-x-2 -translate-y-1/2 place-self-end rounded-full drop-shadow-lg" />
                </motion.div>
                <motion.div
                  className="absolute -top-34 left-0 max-w-[17rem] -translate-y-1/2"
                  ref={firstSectionTextRef}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: isFirstCheckpointInView ? 1 : 0,
                    filter: isFirstCheckpointInView
                      ? "blur(0px) grayscale(0%)"
                      : "blur(10px) grayscale(100%)",
                    x: isFirstCheckpointInView ? 0 : -50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isFirstCheckpointInView ? 0 : 0.3,
                  }}
                >
                  <h1 className="text-highlight">Senior High School</h1>
                  <p className="text-sm">
                    Start of my programming career. This was during the
                    pandemic, when I had plenty of free time and got curious
                    about programming. To get ready for college, I decided to
                    give it a try. I picked C# as my first language and spent
                    that time learning the basics and figuring out how
                    programming really works.
                  </p>
                </motion.div>
              </div>
            </section>
            {/* Second Section: Freshman and Sophomore Year (Right Side)*/}
            <section className="grid">
              {/* ProgressLine */}
              <div className="bg-glow drop-shadow-highlight h-96 w-1 -translate-x-4.5 place-self-end rounded-t-full drop-shadow-lg" />
              {/* Checkpoint */}
              <div className="relative grid">
                {/* Outline Circle */}
                <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-end rounded-full border-4 bg-transparent drop-shadow-lg" />
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
                  <div className="relative translate-x-14">
                    <div className="border-glow drop-shadow-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                    <div className="bg-glow drop-shadow-highlight absolute top-5 left-30 h-1 w-[36%] drop-shadow-lg" />
                  </div>
                  {/* Circle */}
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-0 h-6 w-6 -translate-x-2 -translate-y-1/2 place-self-end rounded-full drop-shadow-lg" />
                </motion.div>
                <motion.div
                  className="absolute -top-34 left-0 max-w-[17rem] -translate-y-1/2"
                  ref={secondSectionTextRef}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: isSecondCheckpointInView ? 1 : 0,
                    filter: isSecondCheckpointInView
                      ? "blur(0px) grayscale(0%)"
                      : "blur(10px) grayscale(100%)",
                    x: isSecondCheckpointInView ? 0 : -50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isSecondCheckpointInView ? 0 : 0.3,
                  }}
                >
                  <h1 className="text-highlight">
                    Freshman and Sophomore Year
                  </h1>
                  <p className="text-sm">
                    I took up a Bachelor of Science in Computer Science majoring
                    in Software Development at Bataan Peninsula State
                    University. This is where I really dove deep into
                    programming and got to practice my skills regularly. During
                    this time, I started exploring more advanced topics like
                    Git, UI/UX Design, Software Development, and Databases.
                  </p>
                </motion.div>
              </div>
            </section>
            {/* Third Section: Junior Year (Left Side)*/}
            <section className="grid">
              {/* ProgressLine */}
              <div className="bg-glow drop-shadow-highlight h-96 w-1 -translate-x-4.5 place-self-end rounded-t-full drop-shadow-lg" />
              {/* Checkpoint */}
              <div className="relative grid">
                {/* Outline Circle */}
                <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-end rounded-full border-4 bg-transparent drop-shadow-lg" />
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
                  <div className="relative translate-x-14">
                    <div className="border-glow drop-shadow-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                    <div className="bg-glow drop-shadow-highlight absolute top-5 left-30 h-1 w-[36%] drop-shadow-lg" />
                  </div>
                  {/* Circle */}
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-0 h-6 w-6 -translate-x-2 -translate-y-1/2 place-self-end rounded-full drop-shadow-lg" />
                </motion.div>
                <motion.div
                  className="absolute -top-42 left-0 max-w-[17rem] -translate-y-1/2"
                  ref={thirdSectionTextRef}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: isThirdCheckpointInView ? 1 : 0,
                    filter: isThirdCheckpointInView
                      ? "blur(0px) grayscale(0%)"
                      : "blur(10px) grayscale(100%)",
                    x: isThirdCheckpointInView ? 0 : -50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isThirdCheckpointInView ? 0 : 0.3,
                  }}
                >
                  <h1 className="text-highlight">Junior Year</h1>
                  <p className="text-sm">
                    This is where the real fun begins. During this time, I
                    worked on multiple academic projects and finally got to put
                    my skills to the test. I built both full-stack web
                    applications and mobile apps. I also tried my first
                    framework—Laravel—which really opened my eyes to software
                    architecture and better coding practices. I got hands-on
                    experience with everything from designing to coding, all the
                    way to deploying real applications.
                  </p>
                </motion.div>
              </div>
            </section>
            {/* Fourth Section: Senior Year: Internship (Right Side)*/}
            <section className="grid">
              {/* ProgressLine */}
              <div className="bg-glow drop-shadow-highlight h-96 w-1 -translate-x-4.5 place-self-end rounded-t-full drop-shadow-lg" />
              {/* Checkpoint */}
              <div className="relative grid">
                {/* Outline Circle */}
                <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-end rounded-full border-4 bg-transparent drop-shadow-lg" />
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
                  <div className="relative translate-x-14">
                    <div className="border-glow drop-shadow-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                    <div className="bg-glow drop-shadow-highlight absolute top-5 left-30 h-1 w-[36%] drop-shadow-lg" />
                  </div>
                  {/* Circle */}
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-0 h-6 w-6 -translate-x-2 -translate-y-1/2 place-self-end rounded-full drop-shadow-lg" />
                </motion.div>
                <motion.div
                  className="absolute -top-34 left-0 max-w-[17rem] -translate-y-1/2"
                  ref={fourthSectionTextRef}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: isFourthCheckpointInView ? 1 : 0,
                    filter: isFourthCheckpointInView
                      ? "blur(0px) grayscale(0%)"
                      : "blur(10px) grayscale(100%)",
                    x: isFourthCheckpointInView ? 0 : -50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isFourthCheckpointInView ? 0 : 0.3,
                  }}
                >
                  <h1 className="text-highlight">Senior Year: Internship</h1>
                  <p className="text-sm">
                    This was the toughest yet most fun year of my college life.
                    I kicked off my final year with an internship at Kynatech,
                    where I got real-world experience working in a company
                    environment. I learned about agile methodologies and got
                    hands-on with modern technologies like Next.js and Supabase.
                  </p>
                </motion.div>
              </div>
            </section>
            {/* Fifth Section: Senior Year: Thesis (Left Side)*/}
            <section className="grid">
              {/* ProgressLine */}
              <div className="bg-glow drop-shadow-highlight h-96 w-1 -translate-x-4.5 place-self-end rounded-t-full drop-shadow-lg" />
              {/* Checkpoint */}
              <div className="relative grid">
                {/* Outline Circle */}
                <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-end rounded-full border-4 bg-transparent drop-shadow-lg" />
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
                  <div className="relative translate-x-14">
                    <div className="border-glow drop-shadow-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                    <div className="bg-glow drop-shadow-highlight absolute top-5 left-30 h-1 w-[36%] drop-shadow-lg" />
                  </div>
                  {/* Circle */}
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-0 h-6 w-6 -translate-x-2 -translate-y-1/2 place-self-end rounded-full drop-shadow-lg" />
                </motion.div>
                <motion.div
                  className="absolute -top-42 left-0 max-w-[17rem] -translate-y-1/2"
                  ref={fifthSectionTextRef}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: isFifthCheckpointInView ? 1 : 0,
                    filter: isFifthCheckpointInView
                      ? "blur(0px) grayscale(0%)"
                      : "blur(10px) grayscale(100%)",
                    x: isFifthCheckpointInView ? 0 : -50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isFifthCheckpointInView ? 0 : 0.3,
                  }}
                >
                  <h1 className="text-highlight">Senior Year: Thesis</h1>
                  <p className="text-sm">
                    Second half and finale of my last year in college. I worked
                    on my thesis, HUE-FIT: Men's Outfit Recommendation Using
                    Random Forest Algorithm with AR-Based Virtual Try-On, where
                    I was the main developer and designer. Here, I got to
                    challenge myself and build a cross-platform design system
                    for web and mobile, developed a RESTful API, and implemented
                    machine learning and a 2D virtual fitting room.
                  </p>
                </motion.div>
              </div>
            </section>
            {/* Sixth Section: Graduation and Working in a Startup (Right Side)*/}
            <section className="grid">
              {/* ProgressLine */}
              <div className="bg-glow drop-shadow-highlight h-96 w-1 -translate-x-4.5 place-self-end rounded-t-full drop-shadow-lg" />
              {/* Checkpoint */}
              <div className="relative grid">
                {/* Outline Circle */}
                <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-end rounded-full border-4 bg-transparent drop-shadow-lg" />
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
                  <div className="relative translate-x-14">
                    <div className="border-glow drop-shadow-highlight absolute top-0 left-20 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                    <div className="bg-glow drop-shadow-highlight absolute top-5 left-30 h-1 w-[36%] drop-shadow-lg" />
                  </div>
                  {/* Circle */}
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-0 h-6 w-6 -translate-x-2 -translate-y-1/2 place-self-end rounded-full drop-shadow-lg" />
                </motion.div>
                <motion.div
                  className="absolute -top-38 left-0 max-w-[17rem] -translate-y-1/2"
                  ref={sixthSectionTextRef}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: isSixthCheckpointInView ? 1 : 0,
                    filter: isSixthCheckpointInView
                      ? "blur(0px) grayscale(0%)"
                      : "blur(10px) grayscale(100%)",
                    x: isSixthCheckpointInView ? 0 : -50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isSixthCheckpointInView ? 0 : 0.3,
                  }}
                >
                  <h1 className="text-highlight">
                    Graduation and Working in a Startup
                  </h1>
                  <p className="text-sm">
                    The end of my college life. After defending my thesis, I
                    spent the months before graduation landing my first job at
                    AppQuant Technologies, a startup where I helped build their
                    dating app product. I worked with familiar technologies like
                    Next.js and Supabase, further strengthening my expertise in
                    this stack.
                  </p>
                </motion.div>
              </div>
            </section>
            {/* Last Section: Continuing my journey */}
            <section className="grid">
              {/* Dotted Progress Line signifying present time and unknown future */}
              <div
                className="drop-shadow-highlight h-56 -translate-x-4.5 place-self-end border-l-4 border-dashed drop-shadow-lg"
                style={{
                  borderColor:
                    "linear-gradient(to top, transparent 0%, var(--color-glow) 100%) 1",
                }}
              />
            </section>
          </motion.div>
        </div>
      </div>
    );
  }

  // Desktop UI
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
          <section className="grid">
            {/* ProgressLine */}
            <div
              className="drop-shadow-highlight h-96 w-1 place-self-center rounded-t-full drop-shadow-lg"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, var(--color-glow) 100%)",
              }}
            />
            {/* Checkpoint */}
            <div className="relative grid">
              {/* Outline Circle */}
              <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent drop-shadow-lg" />
              <motion.div
                className="relative -z-50 -translate-y-10"
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
                  <div className="border-glow drop-shadow-highlight absolute top-0 left-29 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                  <div className="bg-glow drop-shadow-highlight absolute top-5 left-40 h-1 w-[36%] drop-shadow-lg" />
                </div>
                {/* Circle */}
                <div className="bg-glow drop-shadow-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full drop-shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute -top-30 left-24 max-w-[26rem] -translate-y-1/2"
                ref={firstSectionTextRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isFirstCheckpointInView ? 1 : 0,
                  filter: isFirstCheckpointInView
                    ? "blur(0px) grayscale(0%)"
                    : "blur(10px) grayscale(100%)",
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
          <section className="grid">
            {/* ProgressLine */}
            <div className="bg-glow drop-shadow-highlight h-96 w-1 place-self-center drop-shadow-lg" />
            {/* Checkpoint */}
            <div className="relative grid">
              {/* Outline Circle */}
              <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent drop-shadow-lg" />
              <motion.div
                className="relative -z-50 -translate-y-10"
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
                  <div className="border-glow drop-shadow-highlight absolute top-0 right-29 box-content h-5 w-10 rounded-br-[32px] border-r-4 border-b-4 drop-shadow-lg" />
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-40 h-1 w-[36%] drop-shadow-lg" />
                </div>
                {/* Circle */}
                <div className="bg-glow drop-shadow-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full drop-shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute -top-30 right-24 max-w-[26rem] -translate-y-1/2"
                ref={secondSectionTextRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isSecondCheckpointInView ? 1 : 0,
                  filter: isSecondCheckpointInView
                    ? "blur(0px) grayscale(0%)"
                    : "blur(10px) grayscale(100%)",
                  x: isSecondCheckpointInView ? 0 : 50,
                }}
                transition={{
                  duration: 0.5,
                  delay: isSecondCheckpointInView ? 0 : 0.3,
                }}
              >
                <h1 className="text-highlight text-right">
                  Freshman and Sophomore Year
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
          <section className="grid">
            {/* ProgressLine */}
            <div className="bg-glow drop-shadow-highlight h-96 w-1 place-self-center drop-shadow-lg" />
            {/* Checkpoint */}
            <div className="relative grid">
              {/* Outline Circle */}
              <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent drop-shadow-lg" />
              <motion.div
                className="relative -z-50 -translate-y-10"
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
                  <div className="border-glow drop-shadow-highlight absolute top-0 left-29 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                  <div className="bg-glow drop-shadow-highlight absolute top-5 left-40 h-1 w-[36%] drop-shadow-lg" />
                </div>
                {/* Circle */}
                <div className="bg-glow drop-shadow-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full drop-shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute -top-40 left-24 max-w-[26rem] -translate-y-1/2"
                ref={thirdSectionTextRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isThirdCheckpointInView ? 1 : 0,
                  filter: isThirdCheckpointInView
                    ? "blur(0px) grayscale(0%)"
                    : "blur(10px) grayscale(100%)",
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
          <section className="grid">
            {/* ProgressLine */}
            <div className="bg-glow drop-shadow-highlight h-96 w-1 place-self-center drop-shadow-lg" />
            {/* Checkpoint */}
            <div className="relative grid">
              {/* Outline Circle */}
              <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent drop-shadow-lg" />
              <motion.div
                className="relative -z-50 -translate-y-10"
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
                  <div className="border-glow drop-shadow-highlight absolute top-0 right-29 box-content h-5 w-10 rounded-br-[32px] border-r-4 border-b-4 drop-shadow-lg" />
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-40 h-1 w-[36%] drop-shadow-lg" />
                </div>
                {/* Circle */}
                <div className="bg-glow drop-shadow-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full drop-shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute -top-30 right-24 max-w-[26rem] -translate-y-1/2"
                ref={fourthSectionTextRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isFourthCheckpointInView ? 1 : 0,
                  filter: isFourthCheckpointInView
                    ? "blur(0px) grayscale(0%)"
                    : "blur(10px) grayscale(100%)",
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
          <section className="grid">
            {/* ProgressLine */}
            <div className="bg-glow drop-shadow-highlight h-96 w-1 place-self-center drop-shadow-lg" />
            {/* Checkpoint */}
            <div className="relative grid">
              {/* Outline Circle */}
              <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent drop-shadow-lg" />
              <motion.div
                className="relative -z-50 -translate-y-10"
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
                  <div className="border-glow drop-shadow-highlight absolute top-0 left-29 box-content h-5 w-10 rounded-bl-[32px] border-b-4 border-l-4 drop-shadow-lg" />
                  <div className="bg-glow drop-shadow-highlight absolute top-5 left-40 h-1 w-[36%] drop-shadow-lg" />
                </div>
                {/* Circle */}
                <div className="bg-glow drop-shadow-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full drop-shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute -top-36 left-24 max-w-[26rem] -translate-y-1/2"
                ref={fifthSectionTextRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isFifthCheckpointInView ? 1 : 0,
                  filter: isFifthCheckpointInView
                    ? "blur(0px) grayscale(0%)"
                    : "blur(10px) grayscale(100%)",
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
          <section className="grid">
            {/* ProgressLine */}
            <div className="bg-glow drop-shadow-highlight h-96 w-1 place-self-center drop-shadow-lg" />
            {/* Checkpoint */}
            <div className="relative grid">
              {/* Outline Circle */}
              <div className="border-glow drop-shadow-highlight h-10 w-10 place-self-center rounded-full border-4 bg-transparent drop-shadow-lg" />
              <motion.div
                className="relative -z-50 -translate-y-10"
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
                  <div className="border-glow drop-shadow-highlight absolute top-0 right-29 box-content h-5 w-10 rounded-br-[32px] border-r-4 border-b-4 drop-shadow-lg" />
                  <div className="bg-glow drop-shadow-highlight absolute top-5 right-40 h-1 w-[36%] drop-shadow-lg" />
                </div>
                {/* Circle */}
                <div className="bg-glow drop-shadow-highlight absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-self-center rounded-full drop-shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute -top-30 right-24 max-w-[26rem] -translate-y-1/2"
                ref={sixthSectionTextRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isSixthCheckpointInView ? 1 : 0,
                  filter: isSixthCheckpointInView
                    ? "blur(0px) grayscale(0%)"
                    : "blur(10px) grayscale(100%)",
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
          <section className="grid">
            {/* Dotted Progress Line signifying present time and unknown future */}
            <div
              className="drop-shadow-highlight h-56 place-self-center border-l-4 border-dashed drop-shadow-lg"
              style={{
                borderColor:
                  "linear-gradient(to top, transparent 0%, var(--color-glow) 100%) 1",
              }}
            />
          </section>
        </motion.div>
      </div>
    </div>
  );
}
