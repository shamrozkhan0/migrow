"use client";

import {
  Phone,
  ArrowRight,
  Shield,
  Rocket,
  Lock,
  Headphones,
  Sparkles,
  Settings,
  LayoutDashboard,
  BarChart3,
  Workflow,
  FolderKanban,
  FileText,
  Puzzle,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Home as HomeIcon,
  Briefcase,
  Monitor,
} from "lucide-react";

const navLinks = [
  { label: "Services", hasDropdown: true },
  { label: "Case Studies", hasDropdown: false },
  { label: "Portfolio", hasDropdown: false },
  { label: "About", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
];

const trustFeatures = [
  {
    icon: Shield,
    title: "Client Focused",
    description: "Solutions tailored to your goals",
  },
  {
    icon: Rocket,
    title: "Result Driven",
    description: "We build systems that drive growth",
  },
  {
    icon: Lock,
    title: "Reliable & Secure",
    description: "Quality, security & timely delivery",
  },
  {
    icon: Headphones,
    title: "Long Term Partner",
    description: "We grow with your business",
  },
];

const stats = [
  { value: "5+", label: "Industries Served" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Commitment" },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: HomeIcon, label: "Real Estate" },
  { icon: Briefcase, label: "Services" },
  { icon: Monitor, label: "Technology" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: Workflow, label: "Automation" },
  { icon: FolderKanban, label: "Projects" },
  { icon: FileText, label: "Reports" },
  { icon: Puzzle, label: "Integrations" },
  { icon: Settings, label: "Settings" },
];

const overviewCards = [
  { label: "Total Projects", value: "24", change: "+20% this month" },
  { label: "Automations", value: "38", change: "+32% this month" },
  { label: "Time Saved", value: "120+ hrs", change: "+40% this month" },
  { label: "Growth", value: "75%", change: "+25% this month" },
];

const recentAutomations = [
  { label: "Lead Management", status: "Active" },
  { label: "Customer Support Flow", status: "Active" },
  { label: "Invoice & Billing", status: "Active" },
];

const chartPoints = "0,60 40,52 80,58 120,45 160,48 200,30 240,35 260,15";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top nav */}
  
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[600px] w-[600px] rounded-full bg-pink-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-[520px] w-[520px] rounded-full bg-pink-100/60"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-40 lg:grid-cols-2 lg:gap-8 lg:px-12">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700 ring-1 ring-inset ring-pink-100">
            <Sparkles className="h-4 w-4" />
            Business Technology Partner in Hyderabad, Pakistan
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl xl:text-[3.4rem]">
            We Build Digital Solutions That Drive{" "}
            <span className="text-pink-700">Real Business Growth</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Migrow helps startups, SMEs and growing businesses in{" "}
            <span className="font-semibold text-slate-800">Hyderabad</span>{" "}
            and across{" "}
            <span className="font-semibold text-slate-800">Pakistan</span>{" "}
            automate operations, build modern systems and scale with
            technology.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-200 transition-transform hover:scale-[1.02]">
              <Phone className="h-4 w-4" />
              Book a Free Consultation
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3.5 text-sm font-semibold text-pink-700 transition-colors hover:bg-pink-50">
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Trust features */}
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
            {trustFeatures.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-50 text-pink-700">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {title}
                </p>
                <p className="text-xs leading-snug text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - dashboard mockup */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {/* Main dashboard card */}
            <div className="relative flex overflow-hidden rounded-2xl bg-white shadow-2xl shadow-pink-200/60 ring-1 ring-slate-100">
              {/* Sidebar */}
              <div className="w-36 shrink-0 bg-gradient-to-b from-pink-600 to-pink-700 p-4 text-white">
                <div className="mb-6 flex items-center gap-2 text-sm font-bold">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20">
                    M
                  </div>
                  Migrow
                </div>
                <div className="flex flex-col gap-1">
                  {sidebarItems.map(({ icon: Icon, label, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                        active
                          ? "bg-white/15 text-white"
                          : "text-pink-100/80"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main panel */}
              <div className="flex-1 p-4">
                <p className="mb-3 text-sm font-bold text-slate-900">
                  Business Overview
                </p>

                <div className="mb-4 grid grid-cols-4 gap-2">
                  {overviewCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-lg border border-slate-100 bg-slate-50/60 p-2"
                    >
                      <p className="text-[9px] text-slate-500">
                        {card.label}
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {card.value}
                      </p>
                      <p className="text-[8px] font-medium text-emerald-600">
                        {card.change}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mb-4 rounded-lg border border-slate-100 p-3">
                  <p className="mb-2 text-[10px] font-semibold text-slate-700">
                    Performance Overview
                  </p>
                  <svg viewBox="0 0 260 70" className="h-16 w-full">
                    <polyline
                      points={chartPoints}
                      fill="none"
                      stroke="#be185d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex justify-between text-[8px] text-slate-400">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-100 p-3">
                  <p className="mb-2 text-[10px] font-semibold text-slate-700">
                    Recent Automations
                  </p>
                  <div className="flex flex-col gap-2">
                    {recentAutomations.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between"
                      >
                        <span className="text-[9px] text-slate-600">
                          {item.label}
                        </span>
                        <span className="text-[8px] font-semibold text-emerald-600">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating phone mockup */}
            <div className="absolute -bottom-8 -right-6 w-40 rounded-2xl border-4 border-slate-900 bg-white p-3 shadow-xl sm:w-44">
              <p className="mb-2 text-[10px] font-bold text-slate-900">
                Automation
              </p>
              <p className="mb-1 text-[8px] text-slate-500">
                Workflow Status
              </p>
              <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-pink-600">
                <span className="text-sm font-bold text-slate-900">75%</span>
              </div>
              <p className="mb-1 text-[8px] font-semibold text-slate-700">
                Tasks
              </p>
              <div className="mb-2 flex flex-col gap-1 text-[8px] text-slate-500">
                <span>Data Sync</span>
                <span>Email Automation</span>
                <span>Report Generation</span>
              </div>
              <button className="w-full rounded-md bg-pink-700 py-1.5 text-[9px] font-semibold text-white">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:px-12">
        <p className="mb-6 text-center text-sm text-slate-500 lg:text-left">
          Trusted by businesses in Hyderabad and across Pakistan
        </p>
        <div className="flex flex-col gap-8 rounded-2xl border border-slate-100 p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-50 text-pink-700">
                <Settings className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Local Expertise
                </p>
                <p className="text-xs text-slate-500">Hyderabad, Sindh</p>
              </div>
            </div>

            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-pink-700">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-3 text-sm font-bold text-slate-900">
              Industries We Serve
            </p>
            <div className="flex flex-wrap gap-6">
              {industries.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5"
                >
                  <Icon className="h-5 w-5 text-pink-700" />
                  <span className="text-[11px] text-slate-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}