"use client";

import React, { useState, useRef } from "react";

interface TypewriterTextClientProps {
  label: string;
  className?: string;
  onComplete?: () => void;
}

const TypewriterTextClient: React.FC<TypewriterTextClientProps> = ({
  label,
  className,
  onComplete,
}) => {
  const [text, setText] = useState("");
  const currentCharIndex = useRef(0);
  const hasAnimated = useRef(false);

  if (!hasAnimated.current) {
    hasAnimated.current = true;

    const animateTyping = () => {
      const nextChar = label.slice(0, currentCharIndex.current + 1);
      setText(nextChar);
      currentCharIndex.current++;

      if (currentCharIndex.current < label.length) {
        setTimeout(animateTyping, 100);
      } else {
        onComplete?.();
      }
    };

    animateTyping();
  }

  return (
    <p
      className={`${className} text-highlight text-shadow-highlight min-h-[3rem] self-center text-[2.5rem] font-bold tracking-[-0.05em] duration-300 ease-in-out text-shadow-lg/25 sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem]`}
    >
      {text}
    </p>
  );
};

export default TypewriterTextClient;
