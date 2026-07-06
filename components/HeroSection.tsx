"use client";

import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

export default function HeroSection() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-600/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-96 w-96 rounded-full bg-green-600/15 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28 xl:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 xl:gap-20">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur">
              <GraduationCap className="h-4 w-4" />
              Education Institution Founders Ready to Scale
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-green-400 sm:text-4xl md:text-4xl xl:text-4xl">
              Digital Marketing Services
              <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Built for Education &
              </span>
              <span className="block text-green-600">Learning Platforms</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-green-300 sm:text-lg md:text-xl">
              Pandaece is the digital marketing growth partner behind
              <span className="font-semibold text-green-400">
                {" "}
                Education & Learning Platform founders
              </span>{" "}
              who are scaling their websites and apps into category leaders
              through
              <span className="font-semibold text-green-300">
                {" "}
                performance marketing
              </span>
              ,
              <span className="font-semibold text-green-300">
                {" "}
                search & AI visibility
              </span>
              ,
              <span className="font-semibold text-green-300">
                {" "}
                automation
              </span>{" "}
              and
              <span className="font-semibold text-green-300"> CRM</span> built
              for how students actually discover, evaluate, and enroll today.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button  onClick={() => setIsPopupOpen(true)}  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30">
                Get Your Growth Audit

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-sm text-slate-400">
                No generic pitch decks. A real conversation about your
                platforms growth.
              </p>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Performance Marketing",
                "SEO & AI Search Visibility",
                "Marketing Automation",
                "CRM & Student Funnels",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur transition hover:border-green-500/40 hover:bg-white/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-400" />

                  <span className="text-sm font-medium text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
            </div>

            {/* Image */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <Image
                src="/d.png"
                alt="Education Marketing"
                width={700}
                height={800}
                priority
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Bottom Card */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
               
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-green-500/30 bg-slate-900/90 p-5 shadow-2xl backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Monthly Growth
              </p>

              <h3 className="mt-2 text-3xl font-bold text-green-400">
                +186%
              </h3>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-5 bottom-14 hidden rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-wider text-slate-300">
                Student Leads
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                +420%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}