"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your actual form submission endpoint
    // For now, we'll just simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navigation />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl">
          {!submitted ? (
            <>
              <div className="text-center mb-16">
                <div className="mb-6 inline-block rounded-full bg-black/5 px-4 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm">
                  Currently in development
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Join the waitlist
                </h1>
                <p className="text-xl text-gray-600 font-light">
                  Be the first to know when we launch.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-gray-900 bg-white p-10 shadow-2xl shadow-gray-900/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full rounded-xl border-2 border-gray-200 px-5 py-3.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-black focus:outline-none focus:ring-0"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full rounded-xl border-2 border-gray-200 px-5 py-3.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-black focus:outline-none focus:ring-0"
                      placeholder="you@example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-black px-6 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/20 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? "Joining..." : "Join Waitlist"}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    We&apos;ll email you when we launch. No spam, ever.
                  </p>
                </form>
              </div>

              <div className="mt-12 rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  What to expect
                </h3>
                <div className="space-y-4">
                  {[
                    "Early access when we launch",
                    "Special launch pricing ($9.99/month)",
                    "First look at new features",
                    "Help shape the product with your feedback"
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 p-4 transition-all hover:border-gray-300 hover:shadow-md"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-base text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                >
                  <span>←</span>
                  <span>Back to home</span>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="rounded-3xl border-2 border-gray-900 bg-white p-16 shadow-2xl shadow-gray-900/10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-700 mb-8">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                  You&apos;re on the list!
                </h2>
                <p className="text-lg text-gray-600 mb-3">
                  We&apos;ll email you at
                </p>
                <p className="text-xl font-semibold text-gray-900 mb-12">
                  {email}
                </p>
                <Link
                  href="/"
                  className="inline-block rounded-full bg-black px-10 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/20"
                >
                  Back to Home
                </Link>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500">
                  In the meantime, tell your friends about dcrm.life
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
