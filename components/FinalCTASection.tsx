"use client";

import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";


export default function FinalCTASection() {
  const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-500/15 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-green-600/15 blur-3xl"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-green-700 via-indigo-700 to-green-600 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:p-16">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Free Growth Audit
            </span>

            {/* Heading */}
            <h2 className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Your Platform Is Ready to Scale.
              <span className="block text-green-200">
                Is Your Marketing?
              </span>
            </h2>

            {/* Subheading */}
            <p className="mt-8 max-w-3xl text-lg leading-8 text-green-100 md:text-xl">
              Get a clear, founder-level view of your growth opportunity —
              completely free, with no obligation and no generic sales pitch.
            </p>

            {/* Benefits */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              {[
                "Growth Audit",
                "AI Search Review",
                "Marketing Roadmap",
                "No Obligation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-white"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button  onClick={() => setIsPopupOpen(true)}  className="group mt-12 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Get My Free Growth Audit
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Microcopy */}
            <p className="mt-5 text-sm text-green-100">
              ✓ Free consultation &nbsp; • &nbsp; ✓ No contracts &nbsp; •
              &nbsp; ✓ Personalized growth recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}