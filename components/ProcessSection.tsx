"use client";

import {
  SearchCheck,
  Map,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const processSteps = [
  {
    step: "01",
    icon: SearchCheck,
    title: "Discovery & Growth Audit",
    description:
      "We analyze your existing marketing funnel, website, student journey, CRM, and platform performance to identify the biggest growth opportunities and enrollment bottlenecks.",
  },
  {
    step: "02",
    icon: Map,
    title: "Strategy & Roadmap",
    description:
      "A customized growth roadmap covering paid advertising, SEO, AI visibility, automation, CRM, and conversion optimization—aligned with your enrollment and revenue goals.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Build & Launch",
    description:
      "We execute campaigns, create content, build automation workflows, implement CRM systems, and launch high-converting marketing assets tailored specifically for your platform.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Optimize & Scale",
    description:
      "Through continuous testing, reporting, experimentation, and optimization, we scale high-performing campaigns while eliminating wasted spend to maximize long-term growth.",
  },
];

export default function ProcessSection() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-300">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            A Clear Path
            <span className="block bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              From Audit to Scale
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every successful education platform follows a proven growth
            framework. Our structured process ensures measurable results at
            every stage—from strategy to sustainable scaling.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-green-500 to-green-600 lg:block"></div>

          <div className="space-y-12">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="group relative flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-green-400 hover:bg-white/10 lg:flex-row lg:items-center"
                >
                  {/* Left */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-xl font-bold text-white shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex rounded-2xl bg-white/10 p-4">
                    <Icon className="h-8 w-8 text-green-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <button  onClick={() => setIsPopupOpen(true)}   className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
                                Learn More 
                 
                                 <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                               </button>

                  {/* Hover Glow */}
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-500/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-green-600 via-green-600 to-indigo-700 p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Grow Your Education Platform?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            Let Pandaece build a scalable growth engine powered by performance
            marketing, AI visibility, CRM, and automation.
          </p>

          <button onClick={() => setIsPopupOpen(true)}  className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all duration-300 hover:scale-105">
            Start Your Growth Audit
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-4 text-sm text-green-100">
            No obligation. Just actionable growth insights for your platform.
          </p>
        </div>
      </div>
    </section>
  );
}