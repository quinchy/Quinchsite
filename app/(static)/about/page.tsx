import { Metadata } from "next";
import ProfilePicture from "@/components/ui/profile-picture";
import SocialMediaList from "@/components/ui/social-media-list";
import TypewriterText from "@/components/ui/typewriter-text";
import Timeline from "@/components/ui/timeline";

export const metadata: Metadata = {
  title: "About - Cyril James De Guzman | Quinch",
  description:
    "Learn more about Cyril James De Guzman, a Full-stack Software Developer from the Philippines specializing in Web and Mobile Development.",
  keywords: [
    "about",
    "Cyril James De Guzman",
    "software developer",
    "Philippines",
    "web development",
  ],
  openGraph: {
    title: "About - Cyril James De Guzman | Quinch",
    description:
      "Learn more about Cyril James De Guzman, a Full-stack Software Developer from the Philippines specializing in Web and Mobile Development.",
    type: "website",
    url: "https://quinchy.dev/about",
  },
};

export default function About() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="flex items-center gap-5 md:items-start">
        <div className="flex flex-col items-center gap-10 lg:items-start">
          <figure className="flex flex-col items-center gap-4 md:flex-row md:items-start lg:gap-8 xl:gap-8">
            <ProfilePicture />
            <figcaption>
              <div className="flex min-w-[10.75rem] flex-col items-start gap-1 select-none md:items-start lg:min-w-[20rem] lg:gap-4">
                <h1
                  lang="en"
                  aria-label="kwinch"
                  className="text-highlight text-shadow-highlight flex text-[3rem] leading-none font-semibold tracking-[-0.08em] text-shadow-lg/25 md:text-[4.5rem]"
                >
                  qu<p className="tracking-[-0.55rem]">i</p>nch
                </h1>
                <p className="ml-1 text-[1rem] tracking-tighter opacity-90 md:text-[1.40rem] lg:ml-2">
                  Software Developer
                </p>
                <SocialMediaList />
              </div>
            </figcaption>
          </figure>
          <article>
            <p className="max-w-[20rem] text-center text-base sm:max-w-[25rem] md:max-w-[32rem] lg:max-w-[40rem] xl:text-start">
              Hello! I'm{" "}
              <span className="text-highlight">Cyril James De Guzman</span> and
              I'm a Full-stack Software Developer that specialize in Web and
              Mobile Development based in the Philippines.
              <br />
              <br />
              I'm a Developer with a passion for creating stunning visuals and
              solving problems. From a very young age, I showed joy and interest
              towards technology. This early fascination led me to pursue a
              computer-related course. Which later before college, I tried to
              pick up programming and found liking on it, leading to me choosing
              a degree in computer science and pursue this career.
              <br />
              <br />
              Outside of tech, I'm an introverted and chill person to hang with.
              I enjoy things such as art, photography, and animation, with
              hobbies involving playing games, drawing, reading manga, and
              watching anime, shows or movies.
            </p>
          </article>
        </div>
      </section>

      {/* 2. History Section */}
      <section className="flex flex-col items-center justify-center gap-20">
        <TypewriterText label="code:journey" animated={false} />
        <div className="w-full min-w-xs lg:min-w-4xl">
          <Timeline />
        </div>
      </section>
    </>
  );
}
