"use client";

import { useState } from "react";
import Image from "next/image";
import FrontImage from "@/public/images/me.png";
import BackImage from "@/public/images/quinch.png";

export default function ProfilePicture() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <div
      className="perspective relative h-[250px] w-[250px]"
      onClick={handleClick}
    >
      <div
        className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute h-full w-full backface-hidden">
          <Image
            src={FrontImage}
            alt="Profile Picture Front"
            fill
            quality={100}
            className="rounded-full object-contain"
            placeholder="blur"
            priority={true}
          />
        </div>

        {/* Back */}
        <div className="absolute h-full w-full rotate-y-180 backface-hidden">
          <Image
            src={BackImage}
            alt="Profile Picture Back"
            fill
            placeholder="blur"
            priority={true}
            className="rounded-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
