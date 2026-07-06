"use client";

import Link from "next/link";
import { usePopup } from "@/components/PopupProvider";

export default function Footer() {
  const { setIsPopupOpen } = usePopup();

  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo & Description */}
          <div className="max-w-md">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight"
            >
              PANDA<span className="text-[#22c55e]">eCe</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
             Helping EdTech companies, online learning platforms, coaching institutes, universities, certification providers, and education startups generate qualified student enrollments through SEO, Google Ads, Meta Ads, AI Search Optimization (GEO & AEO), CRM, and performance-driven digital marketing.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm font-medium sm:grid-cols-3 md:text-base">
            <Link
              href="#marketing"
              className="transition hover:text-[#22c55e]"
            >
              EdTech Marketing
            </Link>

            <Link
              href="#growth"
              className="transition hover:text-[#22c55e]"
            >
              EdTech Growth
            </Link>

            <Link
              href="#services"
              className="transition hover:text-[#22c55e]"
            >
              Services
            </Link>

            <Link
              href="#ivf-process"
              className="transition hover:text-[#22c55e]"
            >
              EdTech Process
            </Link>

            <Link
              href="#IVFFAQSection"
              className="transition hover:text-[#22c55e]"
            >
              FAQ
            </Link>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="text-left transition hover:text-[#22c55e]"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">PANDAeCe</span>. All
            Rights Reserved.
          </p>

          <p>
            EdTech Digital Marketing Agency • Bangalore • India
          </p>
        </div>
      </div>
    </footer>
  );
}