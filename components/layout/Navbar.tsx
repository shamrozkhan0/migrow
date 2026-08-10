"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/public/logo.png"
import Link from "next/link";

import {
    ChevronDown,
    ArrowRight,
    Menu,
    X,
    Code2,
    Cloud,
    BrainCircuit,
    PenTool,
    Landmark,
    HeartPulse,
    ShoppingCart,
    Truck,
    Newspaper,
    FileText,
    BookOpen,
    CalendarDays,
    type LucideIcon,
} from "lucide-react";
import Image from "next/image";


type DropdownItem = {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
};

type NavItem =
    | { label: string; href: string; dropdown?: undefined }
    | { label: string; href: string; dropdown: DropdownItem[] };

const NAV_ITEMS: NavItem[] = [
    {
        label: "Solutions",
        href: "/solutions",
        dropdown: [
            {
                title: "Business Application",
                description: "Bespoke web & mobile apps built around your workflow",
                href: "/solutions/custom-software",
                icon: Code2,
            },
            {
                title: "Forward Deployed Engineering",
                description: "Scalable infrastructure, CI/CD, and reliability",
                href: "/solutions/cloud-devops",
                icon: Cloud,
            },
            {
                title: "AI & Data Engineering",
                description: "Pipelines, models, and automation that ship",
                href: "/solutions/ai-data",
                icon: BrainCircuit,
            },
            {
                title: "MVPs",
                description: "UX research and UI systems that convert",
                href: "/solutions/product-design",
                icon: PenTool,
            },
        ],
    },
    {
        label: "Industries",
        href: "/industries",
        dropdown: [
            {
                title: "Fintech",
                description: "Secure, compliant platforms for modern finance",
                href: "/industries/fintech",
                icon: Landmark,
            },
            {
                title: "Healthcare",
                description: "HIPAA-ready systems built for patient care",
                href: "/industries/healthcare",
                icon: HeartPulse,
            },
            {
                title: "E-commerce & Retail",
                description: "Storefronts and back-office tools that scale",
                href: "/industries/ecommerce",
                icon: ShoppingCart,
            },
            {
                title: "Logistics & Supply Chain",
                description: "Real-time visibility from warehouse to doorstep",
                href: "/industries/logistics",
                icon: Truck,
            },
        ],
    },
    { label: "Work", href: "/work" },
    {
        label: "Insights",
        href: "/insights",
        dropdown: [
            {
                title: "Blog",
                description: "Notes on engineering, product, and design",
                href: "/insights/blog",
                icon: Newspaper,
            },
            {
                title: "Case Studies",
                description: "Deep dives into projects we've shipped",
                href: "/insights/case-studies",
                icon: FileText,
            },
            {
                title: "Whitepapers",
                description: "Research on where technology is heading",
                href: "/insights/whitepapers",
                icon: BookOpen,
            },
            {
                title: "Events & Webinars",
                description: "Talks and sessions from our team",
                href: "/insights/events",
                icon: CalendarDays,
            },
        ],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];


const EASE = [0.16, 1, 0.3, 1] as const;

const panelVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.28, ease: EASE, when: "beforeChildren", staggerChildren: 0.04 },
    },
    exit: {
        opacity: 0,
        y: -6,
        scale: 0.99,
        filter: "blur(2px)",
        transition: { duration: 0.16, ease: EASE },
    },
};


const itemVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } },
};


function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Malivate — Business Technology Partner">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#E0117A] to-[#A80F5E] ">
                <Image
                    src={logo}
                    alt="Melivate"
                    priority
                />

            </span>
            <span className="flex flex-col leading-none">
                <span className="font-[650] text-[26px] tracking-tight text-[#17131A]">
                    Malivate
                </span>
                <span className="mt-1 text-[10px] font-medium tracking-[0.16em] text-neutral-400">
                    BUSINESS TECHNOLOGY PARTNER
                </span>
            </span>
        </Link>
    );
}


function DesktopNavItem({
    item,
    isActive,
    onEnter,
    onLeave,
}: {
    item: NavItem;
    isActive: boolean;
    onEnter: () => void;
    onLeave: () => void;
}) {
    const hasDropdown = !!item.dropdown;

    return (
        <div
            className="relative"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <Link
                href={item.href}
                className="relative flex items-center gap-1 px-1 py-2 text-[15px] font-semibold text-neutral-800 transition-colors hover:text-[#C4116E]"
                aria-expanded={hasDropdown ? isActive : undefined}
            >
                {item.label}
                {hasDropdown && (
                    <ChevronDown
                        className={`h-4 w-4 text-neutral-500 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? "rotate-180 text-[#C4116E]" : ""
                            }`}
                    />
                )}
                {isActive && (
                    <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-[13px] left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#E0117A] to-[#A80F5E]"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                )}
            </Link>

            <AnimatePresence>
                {hasDropdown && isActive && (
                    <motion.div
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-1/2 top-full z-40 mt-4 w-[560px] -translate-x-1/2 origin-top"
                    >
                        <div className="h-4 w-full" />
                        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)]">
                            {item.dropdown!.map((d) => {
                                const Icon = d.icon;
                                return (
                                    <motion.div key={d.title} variants={itemVariants}>
                                        <Link
                                            href={d.href}
                                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#FBE9F2]"
                                        >
                                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-white group-hover:text-[#C4116E]">
                                                <Icon className="h-[18px] w-[18px]" />
                                            </span>
                                            <span className="flex flex-col">
                                                <span className="text-[14px] font-semibold text-neutral-900 group-hover:text-[#C4116E]">
                                                    {d.title}
                                                </span>
                                                <span className="mt-0.5 text-[12.5px] leading-snug text-neutral-500">
                                                    {d.description}
                                                </span>
                                            </span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}



function MobileNavItem({ item }: { item: NavItem }) {
    const [open, setOpen] = useState(false);
    const hasDropdown = !!item.dropdown;

    if (!hasDropdown) {
        return (
            <Link
                href={item.href}
                className="block border-b border-neutral-100 py-4 text-[16px] font-semibold text-neutral-800"
            >
                {item.label}
            </Link>
        );
    }

    return (
        <div className="border-b border-neutral-100">
            <button
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between py-4 text-[16px] font-semibold text-neutral-800"
                aria-expanded={open}
            >
                {item.label}
                <ChevronDown
                    className={`h-4 w-4 text-neutral-500 transition-transform duration-300 ${open ? "rotate-180 text-[#C4116E]" : ""
                        }`}
                />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-1 pb-3">
                            {item.dropdown!.map((d) => {
                                const Icon = d.icon;
                                return (
                                    <Link
                                        key={d.title}
                                        href={d.href}
                                        className="flex items-center gap-3 rounded-xl px-2 py-2.5 active:bg-neutral-50"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
                                            <Icon className="h-4 w-4" />
                                        </span>
                                        <span className="text-[14px] font-medium text-neutral-700">
                                            {d.title}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


export default function Navbar() {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleEnter = (label: string) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setActiveItem(label);
    };

    const handleLeave = () => {
        closeTimeout.current = setTimeout(() => setActiveItem(null), 120);
    };

    // lock body scroll while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1400px]">
                <div className="flex items-center justify-between gap-4 rounded-[20px] border border-black/2
                         bg-white/90 px-4 py-3 backdrop-blur-md sm:px-5 lg:px-7">
                    <Logo />
                    <nav className="hidden items-center gap-8 lg:flex">
                        {NAV_ITEMS.map((item) => (
                            <DesktopNavItem
                                key={item.label}
                                item={item}
                                isActive={activeItem === item.label}
                                onEnter={() => handleEnter(item.label)}
                                onLeave={handleLeave}
                            />
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <div className="h-8 w-px bg-neutral-200" />
                        <Link
                            href="https://calendly.com/shamrozkhan/30min"
                            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E0117A] to-[#A80F5E] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(196,17,110,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                        >
                            Book a Strategy Call
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen((o) => !o)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                        className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-800 lg:hidden"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {mobileOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: EASE }}
                                >
                                    <X className="h-6 w-6" />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: EASE }}
                                >
                                    <Menu className="h-6 w-6" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                {/* Mobile menu panel */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: EASE }}
                            className="mt-3 max-h-[75vh] overflow-y-auto rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] lg:hidden"
                        >
                            <nav className="flex flex-col">
                                {NAV_ITEMS.map((item) => (
                                    <MobileNavItem key={item.label} item={item} />
                                ))}
                            </nav>
                            <div className="mt-5 flex items-center gap-3">
                             
                                <Link
                                    href="/contact"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E0117A] to-[#A80F5E] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(196,17,110,0.6)]"
                                >
                                    Book a Strategy Call
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}