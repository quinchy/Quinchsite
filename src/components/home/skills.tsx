"use client";
import FuzzyText from "@/components/fuzzy-text";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import Badge from "@/components/badge";
import { useEffect, useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function Skills() {
  const primaryColor = useGetCSSVariable("--primary");
  const [showFuzzy, setShowFuzzy] = useState(false);

  useEffect(() => {
    setShowFuzzy(true);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "Motion", "GSAP", "React JS"],
    },
    {
      title: "Backend",
      skills: [
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
      skills: ["Next.js", "Laravel", "FastAPI"],
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

  const SkillCategory = ({ category }: { category: SkillCategory }) => (
    <div className="border-dashed border-border border-x border-t">
      <h2 className="border-dashed border-border border-b px-4 py-2">
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
      {showFuzzy ? (
        <FuzzyText
          baseIntensity={0.01}
          hoverIntensity={0.2}
          fuzzRange={30}
          color={primaryColor}
          fontSize={30}
          fontFamily="inherit"
          className="-ml-13.5"
          enableHover
        >
          Skills
        </FuzzyText>
      ) : (
        <h1
          className="leading-6"
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          Skills
        </h1>
      )}
      <div className="border-dashed border-b border-border">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} />
        ))}
      </div>
    </section>
  );
}
