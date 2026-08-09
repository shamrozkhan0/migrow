"use client";

import { motion, type Variants } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Rocket,
  Handshake,
  Heart,
  Box,
  Home as HomeIcon,
  Flag,
  Layers,
} from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Business-First Approach",
    description: "We start with your business goals, not technology.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Transparent",
    description: "Clear communication, honest advice, and no surprises.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Technology that grows with your business, not against it.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "We're with you beyond launch to support your journey.",
  },
];


const logos = [
  { icon: Heart, name: "DocuCare", font: "font-sans" },
  { icon: null, name: "Urban Bites", font: "font-serif italic" },
  { icon: Box, name: "Tradezell", font: "font-sans" },
  { icon: HomeIcon, name: "EstatePro", font: "font-sans" },
  { icon: Flag, name: "Finova", font: "font-sans" },
  { icon: Layers, name: "GigBro", font: "font-sans" },
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

export default function Positioning() {
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
            TRUSTED BY BUSINESSES. BUILT FOR GROWTH.
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
          Your Business Deserves the{" "}
          <span className="block sm:inline">
            <span className="text-pink-600">Right</span> Technology Partner
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          Migrow is a business technology partner helping organizations build
          better digital experiences, streamline operations, and achieve
          sustainable growth through technology that works.
        </motion.p>
      </motion.div>

      {/* Pillars */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {pillars.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600"
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
            </motion.div>
            <p className="text-base font-bold text-slate-900">{title}</p>
            <p className="text-sm leading-relaxed text-slate-500">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Trusted by / logo strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative mt-24 bg-pink-50/60 py-14"
      >
        <p className="text-center text-xs font-bold tracking-[0.2em] text-pink-600">
          TRUSTED BY BUSINESSES ACROSS INDUSTRIES
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6"
        >
          {logos.map(({ icon: Icon, name, font }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-2 text-xl font-bold text-slate-800 ${font}`}
            >
              {Icon && <Icon className="h-5 w-5 text-pink-600" strokeWidth={2} />}
              {name}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          Growing businesses. Real results. Lasting impact.
        </motion.p>
      </motion.div>

    </section>
  );
}