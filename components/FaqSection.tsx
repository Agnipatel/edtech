"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const faqs = [
  {
    question:
      "We've worked with agencies before and didn't see results. What's different here?",
    answer:
      "Most agencies run channels in isolation. Pandaece builds one connected growth system that combines SEO, GEO, AEO, Performance Marketing, Marketing Automation, and CRM—aligned with your actual enrollment funnel. Instead of managing multiple vendors, you work with one accountable team focused on measurable business outcomes like enrollments, CAC, LTV, and ROI.",
  },
  {
    question: "Do you only work with large EdTech companies?",
    answer:
      "No. We partner with education founders at every stage—from early-stage learning platforms validating product-market fit to established EdTech companies looking to scale enrollments, reduce CAC, and improve retention. Every engagement starts with a Growth Audit so we can recommend the right strategy for your stage.",
  },
  {
    question: "What is GEO and AEO, and why does it matter for EdTech?",
    answer:
      "Generative Engine Optimization (GEO) helps your platform appear in AI-powered search tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews. Answer Engine Optimization (AEO) improves your chances of becoming the direct answer users see. As students and parents increasingly search through AI instead of traditional search engines, these strategies are becoming essential for long-term visibility.",
  },
  {
    question: "How quickly can we see results?",
    answer:
      "Performance marketing and automation improvements often begin generating measurable results within 30–60 days. SEO, GEO, and AEO are long-term growth assets that typically compound over 3–6 months, creating sustainable visibility and lower acquisition costs over time.",
  },
  {
    question:
      "Do you work with our existing CRM, or do we need a new one?",
    answer:
      "We evaluate your current CRM and marketing technology stack before making recommendations. In many cases we optimize your existing system, while in others we recommend migration only if it delivers better efficiency, automation, reporting, and scalability for your enrollment funnel.",
  },
];

export default function FAQSection() {
  const { setIsPopupOpen } = usePopup();
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-green-500/10 blur-[170px]" />

        <div className="absolute -right-32 bottom-0 h-[34rem] w-[34rem] rounded-full bg-green-600/10 blur-[190px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-300">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Common Questions From

            <span className="block bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Learning Platform Founders
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg md:leading-8">
            Everything you need to know before partnering with Pandaece to
            scale your Education & Learning Platform.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
              >
                <h3 className="text-base font-semibold leading-7 text-white sm:text-lg md:text-xl">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 flex-shrink-0 text-green-400 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-5 py-5 text-sm leading-7 text-slate-400 sm:px-7 sm:text-base sm:leading-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-green-500/20 bg-slate-900 p-6 shadow-2xl shadow-green-500/10 sm:p-8 md:p-10 lg:p-14">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Still Have Questions?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Schedule a free Growth Audit and receive expert recommendations
              tailored specifically to your Education & Learning Platform—with
              no pressure and no generic sales pitch.
            </p>

            <button onClick={() => setIsPopupOpen(true)}  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
              Book Your Free Growth Audit

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="mt-5 text-sm text-slate-500">
              ✓ Free Consultation &nbsp; • &nbsp; ✓ No Obligation &nbsp; •
              &nbsp; ✓ Personalized Growth Recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}