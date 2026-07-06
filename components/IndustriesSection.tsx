"use client";

import {
  School,
  GraduationCap,
  Brain,
  Languages,
  University,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const industries = [
  {
    icon: School,
    title: "K–12 Learning Platforms",
    description:
      "Scale student enrollments for online schools, tutoring platforms, and interactive learning apps serving K–12 students.",
  },
  {
    icon: GraduationCap,
    title: "Test Preparation Platforms",
    description:
      "Drive enrollments for competitive exam coaching platforms focused on JEE, NEET, UPSC, IELTS, GRE, and more.",
  },
  {
    icon: Brain,
    title: "Skill Development Platforms",
    description:
      "Acquire high-intent learners for job-focused upskilling platforms in coding, AI, design, marketing, and data science.",
  },
  {
    icon: Languages,
    title: "Language Learning Apps",
    description:
      "Grow user acquisition for language platforms helping learners master English and global languages.",
  },
  {
    icon: University,
    title: "Higher Education Platforms",
    description:
      "Scale admissions for online degree programs, certification providers, executive education, and university-led programs.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Training Platforms",
    description:
      "Generate qualified B2B leads for employee training, compliance learning, leadership development, and workforce upskilling.",
  },
];

export default function IndustriesSection() {
  const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-[150px]" />

        <div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-green-600/10 blur-[170px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-300">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Growth Solutions Built for
            <span className="block bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Modern Education &
            </span>
            <span className="block text-white">
              Learning Platforms
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg md:leading-8">
            Every education business has a unique growth journey. We create
            tailored marketing, SEO, AI visibility, CRM, and automation
            strategies designed specifically for your learning platform.
          </p>
        </div>

        {/* Industry Cards */}

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500 hover:bg-slate-900 hover:shadow-2xl hover:shadow-green-500/20 sm:p-7 lg:p-8"
              >
                <div className="inline-flex rounded-2xl bg-green-500/10 p-4 transition-all duration-300 group-hover:bg-green-500">
                  <Icon className="h-8 w-8 text-green-400 transition-all group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                  {industry.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {industry.description}
                </p>

                 <button  onClick={() => setIsPopupOpen(true)}   className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
               Learn More 

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-green-500/20 bg-slate-900 p-6 shadow-2xl shadow-green-500/5 sm:p-8 md:p-10 lg:p-14">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                One Growth Partner.
                <br />
                Every Stage of the Student Journey.
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Whether youre  building an EdTech startup, scaling an online
                university, or growing a corporate learning platform,
                Pandaece delivers measurable growth through Performance
                Marketing, SEO, AI Search Visibility, CRM, Email Automation,
                WhatsApp Automation, and Conversion Optimization.
              </p>
            </div>

            <div className="flex w-full justify-center lg:w-auto">
              <button  onClick={() => setIsPopupOpen(true)}   className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
                Book Your Growth Strategy Call

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}