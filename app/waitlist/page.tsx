"use client";

import Navigation from "@/components/Navigation";
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
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl">
          {!submitted ? (
            <>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Join the waitlist
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  dcrm.life is currently in development. Be the first to know when we launch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-md bg-black px-6 py-3.5 text-base font-semibold text-white hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </button>

                <p className="text-center text-sm text-gray-500">
                  We&apos;ll email you when we launch. No spam, ever.
                </p>
              </form>

              <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What to expect:
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="text-black">✓</span>
                    <span>Early access when we launch</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-black">✓</span>
                    <span>Special launch pricing ($9.99/month)</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-black">✓</span>
                    <span>First look at new features</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-black">✓</span>
                    <span>Help shape the product with your feedback</span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                You&apos;re on the list!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;ll email you at <span className="font-semibold">{email}</span> when we launch.
              </p>
              <a
                href="/"
                className="inline-block rounded-md bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Back to Home
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
