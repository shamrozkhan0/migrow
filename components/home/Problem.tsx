"use client";

import { motion, type Variants } from "framer-motion";
import {
  MonitorX,
  Copy,
  Puzzle,
  User,
  CheckCircle2,
  MessageCircle,
  Target,
  Search,
  ArrowRight,
} from "lucide-react";

const challenges = [
  {
    icon: MonitorX,
    title: "Outdated Digital Presence",
    description:
      "Your website is slow, outdated, or not mobile-friendly. It doesn't reflect the quality of your business and costs you trust and customers.",
    points: ["Low credibility", "Poor user experience", "Lost leads and inquiries"],
  },
  {
    icon: Copy,
    title: "Manual & Repetitive Work",
    description:
      "Repetitive tasks, spreadsheets, and manual follow-ups consume hours of your day and lead to mistakes your customers can feel.",
    points: ["Wasted time", "Human errors", "Higher operational costs"],
  },
  {
    icon: Puzzle,
    title: "Disconnected Systems",
    description:
      "Your tools don't talk to each other. Data is scattered, communication is messy, and reporting is a constant struggle.",
    points: ["Data silos", "Poor visibility", "Inefficient workflows"],
  },
  {
    icon: User,
    title: "Poor Customer Experience",
    description:
      "Slow responses, unclear processes, and lack of automation frustrate your customers—and they end up choosing someone else.",
    points: ["Low customer satisfaction", "Negative reviews", "Repeat business lost"],
  },
];

const keywords = [
  "Outdated website",
  "Manual processes",
  "Automation",
  "Business systems",
  "Digital transformation",
  "Operational efficiency",
  "Customer experience",
  "Workflow automation",
  "Technology partner",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export default function Challenges() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-4 inline-flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.2em] text-pink-600">
            THE REAL CHALLENGES BUSINESSES FACE
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-2 h-[2px] w-10 origin-center bg-pink-300"
          />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl"
        >
          Technology Should Move Your Business Forward,{" "}
          <span className="block text-pink-600">Not Hold It Back.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          {
            "Every day, businesses lose time, money, and opportunities because of outdated systems, manual work, and disconnected tools. You're not alone—and we understand these challenges because "
          }
          <span className="font-semibold text-pink-600">
            {"we've seen them up close."}
          </span>
        </motion.p>
      </motion.div>

      {/* Challenge cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {challenges.map(({ icon: Icon, title, description, points }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-50 text-pink-600"
            >
              <Icon className="h-6 w-6" strokeWidth={2} />
            </motion.div>

            <p className="text-lg font-[600] text-slate-900">{title}</p>
            <span className="mt-1.5 mb-3 h-[2px] w-6 bg-pink-400" />

            <p className="text-sm leading-relaxed text-slate-600">
              {description}
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-pink-500" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-16 max-w-6xl px-6"
      >
        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-pink-50/60 p-8 md:grid-cols-2 md:gap-0 md:divide-x md:divide-pink-200/70">
          {/* Left: empathy */}
          <div className="flex gap-5 md:pr-10">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600"
            >
              <User className="h-7 w-7" strokeWidth={2} />
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-pink-600 shadow-sm">
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </motion.div>
            <div>
              <p className="font-serif text-2xl italic text-pink-600">
                We&apos;ve been there.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                We know what it&apos;s like to deal with slow systems, chaos in
                operations, and tools that just don&apos;t work the way they
                should.
              </p>
              <p className="mt-3 text-sm font-bold text-pink-600">
                That&apos;s exactly why Malivate exists.
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col gap-5 md:pl-10">
            <div className="flex gap-5">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600"
              >
                <Target className="h-7 w-7" strokeWidth={2} />
              </motion.div>
              <div>
                <p className="text-lg font-bold text-slate-900">
                  It&apos;s time to fix what&apos;s holding you back.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Let&apos;s simplify your operations, improve your customer
                  experience, and help your business grow with the right
                  technology.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="ml-auto flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-200"
            >
              Let&apos;s Solve It Together
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Keyword strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-2 px-6 text-sm text-slate-500"
      >
        <Search className="mr-1 h-4 w-4 text-pink-500" />
        {keywords.map((word, i) => (
          <span key={word} className="flex items-center gap-2">
            {word}
            {i < keywords.length - 1 && (
              <span className="text-pink-300">•</span>
            )}
          </span>
        ))}
      </motion.div>
    </section>
  );
}