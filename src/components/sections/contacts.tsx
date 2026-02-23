"use client";

import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useEffect, useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  EmailIcon,
  PhoneIcon,
} from "@/components/icons";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import dynamic from "next/dynamic";
import { StaticTitle } from "@/components/static-title";

const FuzzyText = dynamic(() => import("@/components/fuzzy-text"), {
  ssr: false,
  loading: () => (
    <StaticTitle
      text="Contacts"
      translate="translate-x-[54px] -translate-y-[3px]"
      fontSize={31}
      color="var(--primary)"
    />
  ),
});

export default function Contacts() {
  const primaryColor = useGetCSSVariable("--primary");
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="space-y-8">
      <header className="relative flex items-center">
        <h1
          className={`leading-7 text-primary transition-opacity -translate-y-[2.5px] tracking-[-0.55px] translate-x-[0.5px] duration-300 ${
            isMounted && !isMobile ? "opacity-0" : "opacity-100"
          }`}
          style={{
            fontSize: 31,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          Contacts
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
              Contacts
            </FuzzyText>
          </div>
        )}
      </header>
      <section className="grid lg:grid-cols-2 border border-border border-dashed">
        <article
          className="space-y-6 px-8 py-4 border-b lg:border-b-0 lg:border-r border-dashed border-border"
          aria-labelledby="contact-heading"
        >
          <h1 className="text-xl tracking-wider text-primary font-semibold">
            Let's Connect !
          </h1>
          <p id="contact-heading" className="text-primary/75 text-sm">
            For professional inquiries, project collaborations, or career
            opportunities, feel free to reach out or connect with me on any of
            the following:
          </p>
          <address className="space-y-3 not-italic">
            <p className="flex gap-4">
              <EmailIcon className="size-5" aria-hidden="true" />
              <a
                href="mailto:deguzmancyriljames.dev@gmail.com"
                className="font-semibold text-sm hover:underline underline-offset-4"
              >
                deguzmancyriljames.dev@gmail.com
              </a>
            </p>
            <p className="flex gap-4">
              <PhoneIcon className="size-5" aria-hidden="true" />
              <a
                href="tel:+639696028487"
                className="font-semibold text-sm hover:underline underline-offset-4"
              >
                +63 969 602 8487
              </a>
            </p>
            <Link
              href="https://github.com/quinchy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4"
              aria-label="Cyril James on GitHub"
            >
              <GithubIcon className="size-5" aria-hidden="true" />
              <span className="font-semibold text-sm hover:underline underline-offset-4">
                quinchy
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/quinchy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4"
              aria-label="Cyril James on LinkedIn"
            >
              <LinkedinIcon className="size-5" aria-hidden="true" />
              <span className="font-semibold text-sm hover:underline underline-offset-4">
                Cyril James De Guzman
              </span>
            </Link>
          </address>
        </article>
        <ContactForm />
      </section>
    </section>
  );
}
