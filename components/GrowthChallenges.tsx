"use client";

import {
  TrendingUp,
  Search,
  Users,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const painPoints = [
  {
    icon: TrendingUp,
    title: "Rising Acquisition Costs",
    description:
      "Paid channels are becoming more expensive while conversion-to-enrollment rates continue to decline. Without an optimized growth strategy, your customer acquisition cost keeps increasing.",
  },
  {
    icon: Search,
    title: "Invisible on AI & Search",
    description:
      "Your platform isn't showing up where students and parents search for answers—Google, ChatGPT, Gemini, and other AI-powered search experiences.",
  },
  {
    icon: Users,
    title: "Leads Falling Through the Cracks",
    description:
      "Without CRM, automation, and lead nurturing, high-intent prospects lose interest long before your admissions or sales team connects with them.",
  },
  {
    icon: Workflow,
    title: "Marketing & Product Disconnect",
    description:
      "Your website, app, and marketing funnel aren't aligned, creating friction throughout the student journey and reducing conversions.",
  },
];

export default function GrowthChallengesSection() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-green-600/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-300">
            Why Growth Stalls
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Great Education &
            <span className="block bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Learning Platforms
            </span>
            <span className="block text-white">
              Still Struggle to Scale.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg md:leading-8">
            You didnt build your Education & Learning Platform to struggle
            with unpredictable growth. Many education businesses face the same
            challenge—a great product, rising competition, increasing customer
            acquisition costs, and inconsistent student enrollments.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {painPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500 hover:bg-slate-900 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="inline-flex rounded-2xl bg-green-500/10 p-4 transition-all duration-300 group-hover:bg-green-500">
                  <Icon className="h-8 w-8 text-green-400 transition group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {item.description}
                </p>
                   <button  onClick={() => setIsPopupOpen(true)}  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
                  Learn more

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-green-500/20 bg-slate-900 p-6 shadow-2xl shadow-green-500/5 sm:p-8 md:p-10 lg:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                Pandaece closes these growth gaps with one accountable team —
                not five disconnected vendors.
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Build a predictable student acquisition engine with SEO,
                Google Ads, Meta Ads, AI Search, CRM, Email Automation,
                WhatsApp Automation, and Conversion Optimization.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <button  onClick={() => setIsPopupOpen(true)}  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
                Discover Our Growth System

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}