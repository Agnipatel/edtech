"use client";

import {
  GraduationCap,
  Users,
  Sparkles,
  Workflow,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const differentiators = [
  {
    icon: GraduationCap,
    title: "Education-Specialized, Not Generalist",
    description:
      "We understand the education industry—from enrollment cycles and admissions funnels to student activation, parent decision-making, and learner engagement. Our strategies are built specifically for Education & Learning Platforms.",
  },
  {
    icon: Users,
    title: "One Accountable Team",
    description:
      "No juggling multiple agencies or freelancers. Strategy, creative, paid media, SEO, CRM, automation, analytics, and reporting all work together under one experienced team.",
  },
  {
    icon: Sparkles,
    title: "Future-Proof Visibility",
    description:
      "Search is changing. We optimize beyond Google by helping your platform appear in ChatGPT, Gemini, Perplexity, AI Overviews, and the next generation of AI-powered search experiences.",
  },
  {
    icon: Workflow,
    title: "Systems, Not One-Off Campaigns",
    description:
      "Growth doesn't come from isolated campaigns. We build automated marketing systems, CRM workflows, and lifecycle journeys that continue generating enrollments month after month.",
  },
  {
    icon: MessageSquare,
    title: "Founder-Level Communication",
    description:
      "Work directly with senior strategists focused on revenue, enrollments, CAC, LTV, and sustainable business growth—not vanity marketing metrics.",
  },
];

export default function WhyPandaeceSection() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-green-500/10 blur-[160px]" />

        <div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-green-600/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-300">
            Why Pandaece
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Why Learning Platforms
            <span className="block bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Choose Pandaece
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg md:leading-8">
            We combine education industry expertise, AI-powered growth,
            performance marketing, automation, CRM, and measurable systems to
            help learning platforms scale predictably.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500 hover:bg-slate-900 hover:shadow-2xl hover:shadow-green-500/20 sm:p-7 lg:p-8"
              >
                {/* Glow */}
                <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-green-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="relative inline-flex rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-4 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}

                <h3 className="relative mt-6 text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="relative mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {item.description}
                </p>

                {/* Bottom */}

                {/* <div className="relative mt-8 flex items-center gap-2 font-semibold text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  Trusted Growth Partner
                </div> */}
                <button  onClick={() => setIsPopupOpen(true)}   className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
               Trusted Growth Partner
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
                Build a Smarter Growth Engine for Your Learning Platform
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-400">
                From AI Search Visibility and SEO to CRM, Email Automation,
                WhatsApp Automation, Performance Marketing, and Conversion
                Optimization, Pandaece helps education businesses build
                predictable and scalable enrollment growth.
              </p>
            </div>

            <div className="flex w-full justify-center lg:w-auto">
              <button  onClick={() => setIsPopupOpen(true)}   className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
                Talk to Our Team

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}