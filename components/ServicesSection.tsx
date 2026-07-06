"use client";

import {
  Megaphone,
  Search,
  Bot,
  Database,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const services = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Paid acquisition engineered for enrollments, not just clicks. Google Ads, Meta Ads, YouTube, and programmatic campaigns built around your actual conversion economics—CAC, LTV, and cohort-based ROAS.",
    color: "from-green-500 to-green-500",
  },
  {
    icon: Search,
    title: "SEO, GEO & AEO",
    description:
      "Be visible wherever future students search. Traditional SEO, Generative Engine Optimization (ChatGPT, Gemini, Perplexity), and Answer Engine Optimization to own search results and AI-generated answers.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "Marketing Automation",
    description:
      "Automated email journeys, SMS campaigns, lead nurturing, and behavioral workflows that convert inquiries into enrolled students without manual follow-ups.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Database,
    title: "CRM Strategy & Implementation",
    description:
      "A CRM designed around your admissions funnel with lead scoring, pipeline management, automation, reporting, and sales-marketing alignment so no opportunity is lost.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe2,
    title: "Complete Digital Marketing",
    description:
      "SEO, paid media, content marketing, social media, creative strategy, analytics, and CRO working together as one unified growth engine—not multiple disconnected agencies.",
    color: "from-indigo-500 to-green-600",
  },
];

export default function ServicesSection() {
  const { setIsPopupOpen } = usePopup();

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-300">
            A Complete Growth Stack for Education & Learning Platforms
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-green-400 md:text-5xl lg:text-6xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              to Scale Your Platform,
            </span>
            <span className="block text-green-600">Under One Roof.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-green-300">
            We combine performance marketing, AI search visibility, automation,
            CRM implementation, and digital strategy into one accountable growth
            system for modern education businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-green-600/30 bg-green-950/20 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20"
              >
                {/* Icon */}
                <div
                  className={`inline-flex w-fit rounded-2xl bg-gradient-to-r ${service.color} p-4`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-green-400">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 flex-grow leading-7 text-green-200">
                  {service.description}
                </p>

                {/* Learn More Button */}
                 <button  onClick={() => setIsPopupOpen(true)}  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
             Learn More

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

                {/* Glow Effect */}
                {/* <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div
                    className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-r ${service.color} opacity-20 blur-3xl`}
                  />
                </div> */}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 rounded-[32px] border border-green-600/40 bg-gradient-to-r from-green-900/30 via-black to-green-900/30 p-12 text-center shadow-2xl shadow-green-500/20">
          <h3 className="text-3xl font-bold text-green-400 md:text-4xl">
            Ready to Scale Your Education Platform?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-300">
            Whether youre growing an EdTech startup, online academy,
            certification platform, or university program, well build a
            measurable growth engine tailored to your enrollment goals.
          </p>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-green-500"
          >
            Contact Us
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-4 text-sm text-green-300">
            Fill the form below and our growth experts will get in touch.
          </p>
        </div>
      </div>
    </section>
  );
}