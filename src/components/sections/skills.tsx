"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Badge from "@/components/badge";
import { StaticTitle } from "@/components/static-title";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";

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
      skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend & APIs",
      skills: ["REST APIs", "tRPC", "Redis", "Node.js", "Trigger.dev"],
    },
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "PHP", "C#", "Java"],
    },
    {
      title: "Frameworks",
      skills: [
        "Next.js",
        "Astro",
        "Express.js",
        "Laravel",
        "FastAPI",
        "React Native Expo",
      ],
    },
    {
      title: "Libraries",
      skills: [
        "TanStack",
        "Zustand",
        "Zod",
        "BetterAuth",
        "Shadcn UI",
        "Motion",
        "GSAP",
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        "Prisma",
        "Supabase",
        "Cloudflare R2",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "NoSQL",
      ],
    },
    {
      title: "AI & Integrations",
      skills: [
        "OpenAI",
        "ElevenLabs",
        "Stripe",
        "Resend",
        "Twilio",
        "Currencylayer",
        "Promotekit",
      ],
    },
    {
      title: "Cloud & Deployment",
      skills: [
        "Cloudflare Workers",
        "Vercel",
        "GitHub Actions",
        "Docker",
        "Render",
        "Heroku",
      ],
    },
    {
      title: "Observability & Security",
      skills: ["Sentry", "Langfuse", "Infisical"],
    },
    {
      title: "Tools & Testing",
      skills: [
        "Git",
        "Zed",
        "Cursor",
        "Codex",
        "Postman",
        "MCP Servers",
        "Linear",
        "Node.js Test Runner",
        "Figma",
        "v0",
        "Bun",
        "NPM",
        "PNPM",
      ],
    },
  ];

  const SkillCategoryItem = ({
    category,
    spanLastRow,
  }: {
    category: SkillCategory;
    spanLastRow: boolean;
  }) => (
    <div
      className={`border-dashed border-border border-r border-b ${
        spanLastRow ? "lg:col-span-2" : ""
      }`}
    >
      <h2 className="border-dashed border-border border-b px-4 py-2 font-semibold">
        {category.title}
      </h2>
      <div className="flex gap-2 flex-wrap px-4 py-5">
        {category.skills.map((skill) => (
          <Badge key={skill} name={skill} />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 border-dashed border-l border-t border-border">
        {skillCategories.map((category, index) => (
          <SkillCategoryItem
            key={category.title}
            category={category}
            spanLastRow={
              skillCategories.length % 2 === 1 &&
              index === skillCategories.length - 1
            }
          />
        ))}
      </div>
    </section>
  );
}
