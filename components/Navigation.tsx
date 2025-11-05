"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-black">
            dcrm.life
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/waitlist"
              className="rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/waitlist"
                className="rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
