"use client";

import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";
import Badge from "@/components/badge";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { StaticTitle } from "@/components/static-title";

const FuzzyText = dynamic(() => import("@/components/fuzzy-text"), {
  ssr: false,
  loading: () => (
    <StaticTitle
      text="Skills"
      translate="translate-x-[54px] -translate-y-[3px]"
      fontSize={31}
      color="var(--primary)"
    />
  ),
});

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function Skills() {
  const primaryColor = useGetCSSVariable("--primary");
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "Motion", "GSAP", "React JS"],
    },
    {
      title: "Backend",
      skills: [
        "REST APIs",
        "Redis",
        "Node JS",
        "Express JS",
        "Typescript",
        "Javascript",
        "Python",
        "PHP",
        "C#",
        "Java",
      ],
    },
    {
      title: "API and Service",
      skills: [
        "OpenAI",
        "Elevenlabs",
        "Stripe",
        "Resend",
        "Twilio",
        "Currencylayer",
        "Promotekit",
      ],
    },
    {
      title: "Framework",
      skills: ["Next.js", "Laravel", "FastAPI", "React Native Expo"],
    },
    {
      title: "Database",
      skills: ["Supabase", "PostgreSQL", "MySQL", "Firebase", "NoSQL"],
    },
    {
      title: "Tools",
      skills: [
        "Cursor",
        "VS Code",
        "Android Studio",
        "GPT",
        "Gemini",
        "Claude",
        "v0",
        "Docker",
        "Postman",
        "NPM",
        "Bun",
        "Yarn",
        "Vercel",
        "Render",
        "Heroku",
        "Figma",
      ],
    },
  ];

  const SkillCategoryItem = ({ category }: { category: SkillCategory }) => (
    <div className="border-dashed border-border border-x border-t">
      <h2 className="border-dashed border-border border-b px-4 py-2 font-semibold">
        {category.title}
      </h2>
      <div className="flex gap-4 flex-wrap px-4 py-5">
        {category.skills.map((skill, index) => (
          <Badge key={index} name={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="space-y-8">
      <header className="relative flex items-center">
        <h1
          className={`leading-6 text-primary transition-opacity duration-300 ${
            isMounted && !isMobile ? "opacity-0" : "opacity-100"
          }`}
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          Skills
        </h1>

        {isMounted && !isMobile && (
          <div className="absolute left-0 -ml-13.5">
            <FuzzyText
              baseIntensity={0.01}
              hoverIntensity={0.2}
              fuzzRange={30}
              color={primaryColor}
              fontSize={30}
              fontFamily="inherit"
              enableHover
            >
              Skills
            </FuzzyText>
          </div>
        )}
      </header>

      <div className="border-dashed border-b border-border">
        {skillCategories.map((category, index) => (
          <SkillCategoryItem key={index} category={category} />
        ))}
      </div>
    </section>
  );
}
