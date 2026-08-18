import RevealOnScroll from "./RevealOnScrollWork";
import Link from "next/link";
import Image from "next/image";


export type FeatureIcon = "experience" | "systems" | "automation" | "integrations";
export interface Feature {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: FeatureIcon;
  bgImage: string;
  imageDescription: string
}

export const features: Feature[] = [
  {
    id: "business_applications",
    title: "Business Applications",
    description:
      "Fast, secure websites and apps that turn visitors into loyal customers.",
    href: "/services/digital-experiences",
    icon: "experience",
    bgImage: "/card1.png",
    imageDescription: "Example of business application i-e website, mobile app"
  },
  {
    id: "business-systems",
    title: "Business Systems",
    description:
      "Custom systems that automate workflows and help you operate efficiently.",
    href: "/services/business-systems",
    icon: "systems",
    bgImage: "/card2.png",
    imageDescription: "Example of business application i-e website, mobile app"
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "AI-powered solutions and automation that save time and reduce errors.",
    href: "/services/ai-automation",
    icon: "automation",
    bgImage: "/card3.png",
    imageDescription: "Example of business application i-e website, mobile app"
  },
  {
    id: "integrations",
    title: "Integrations",
    description:
      "Connect your tools and data to create a unified and smarter business.",
    href: "/services/integrations",
    icon: "integrations",
    bgImage: "/card4.png",
    imageDescription: "Example of business application i-e website, mobile app"
  },
];


const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FeatureGlyph({ icon }: { icon: FeatureIcon }) {
  switch (icon) {
    case "experience":
      return (
        <svg {...common} className="h-6 w-6" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "systems":
      return (
        <svg {...common} className="h-6 w-6" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      );
    case "automation":
      return (
        <svg {...common} className="h-6 w-6" aria-hidden="true">
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M12 8V4M9 4h6M9 14h.01M15 14h.01" />
        </svg>
      );
    case "integrations":
      return (
        <svg {...common} className="h-6 w-6" aria-hidden="true">
          <path d="M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z" />
        </svg>
      );
  }
}

function ArrowRightIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#fde8ee" />
      <circle cx="12" cy="12" r="6.5" fill="#fff" />
      <circle cx="12" cy="12" r="3.5" fill="#fde8ee" />
      <circle cx="12" cy="12" r="1.4" fill="#ec1f5e" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg {...common} className="h-5 w-5 text-pink-600" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function PersonIcon() {
  return (
    <svg {...common} className="h-5 w-5 text-pink-600" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg {...common} className="h-5 w-5 text-pink-600" aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg {...common} className="h-5 w-5 text-pink-600" aria-hidden="true">
      <path d="M4 20V10M10 20V4M16 20v-7M20 20v-3" />
    </svg>
  );
}


function FeatureCard({ feature }: { feature: Feature }) {
  console.log("bgimage: ",feature.bgImage)
  return (
    <article
      className="group flex h-full flex-col md:flex-row-reverse gap-3 md:gap-0 items-center rounded-2xl border border-slate-200 
       px-6 pb-7 pt-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl
      hover:shadow-slate-900/10"
    >
      <div className="relative flex min-h-[120px] w-full items-center justify-center rounded-xl ">
       <Image src={feature.bgImage} alt={feature.imageDescription} width={250} height={0} />
        <span className="hidden sm:flex absolute -bottom-7 flex h-14 w-14 items-center justify-center rounded-full bg-pink-600 text-white shadow-lg shadow-pink-600/30">
          <FeatureGlyph icon={feature.icon} />
        </span>
      </div>

      <div className="">
        <h3 className="text-lg text-start font-bold text-slate-900 after:mx-auto after:mt-2 after:block after:h-[3px]\
          after:w-6 after:rounded-full after:bg-pink-600">
        {feature.title}
      </h3>

      <p className="mt-3 min-h-[66px] text-[14.5px] leading-relaxed text-slate-500 text-start">
        {feature.description}
      </p>

      <Link
        href={feature.href}
        className="mt-2 inline-flex items-center justify-start gap-1.5 text-sm font-bold text-pink-600 text-start w-full"
      >
        Learn more
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
      </div>
    </article>
  );
}


export default function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <RevealOnScroll>
        <p className="text-center text-[13px] font-bold tracking-[0.14em] text-pink-600 after:mx-auto after:mt-2.5 after:block after:h-[3px] after:w-9 after:rounded-full after:bg-pink-600">
          WHAT WE DO
        </p>

        <h2
          id="what-we-do-heading"
          className="mt-3 text-center text-[clamp(30px,4.6vw,48px)] font-bold leading-tight tracking-tight text-slate-900"
        >
          We Build Technology Solutions That Help{" "}
          <span className="text-pink-600">Businesses Grow</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-[17px] leading-relaxed text-slate-500">
          We partner with businesses to design, build, and optimize digital
          solutions that improve customer experience, streamline operations,
          and drive growth.
        </p>
      </RevealOnScroll>

      <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, i) => (
          <RevealOnScroll
            key={feature.id}
            as="li"
            delay={i * 0.08}
            className="list-none"
          >
            <FeatureCard feature={feature} />
          </RevealOnScroll>
        ))}
      </ul>

    </section>
  );
}