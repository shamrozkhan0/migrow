import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title:
    "Migrow | AI & Software Development Company | Business Technology Partner",

  description:
    "Migrow is a business technology partner helping startups and businesses build AI applications, AI agents, SaaS products, custom software, websites, workflow automation, and digital solutions that drive business growth.",

  keywords: [
    "AI Development Company",
    "Software Development Company",
    "Business Technology Partner",
    "AI Agent Development",
    "Custom Software Development",
    "SaaS Development",
    "Web Development",
    "Business Automation",
    "Workflow Automation",
    "Digital Transformation",
    "MVP Development",
    "React Development",
    "Next.js Development",
    "FastAPI Development",
    "AI Automation",
    "Custom AI Solutions",
    "Pakistan Software Company",
    "Hyderabad Pakistan Software Company",
    "AI Company Pakistan",
    "Migrow",
  ],

  authors: [{ name: "Migrow" }],
  creator: "Migrow",
  publisher: "Migrow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
