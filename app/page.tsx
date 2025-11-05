import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-48">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block rounded-full bg-black/5 px-4 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm">
            Currently in development
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl mb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
            The CRM that got
            <br />
            out of your way
          </h1>
          <p className="mt-8 text-2xl leading-relaxed text-gray-600 font-light">
            Track deals. Get reminded. That&apos;s it.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-500 max-w-2xl mx-auto">
            A refreshingly simple CRM for solo professionals. Just a pipeline, follow-up reminders, and the 3 metrics that matter.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Link
              href="/waitlist"
              className="group relative rounded-full bg-black px-10 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/20"
            >
              Join Waitlist
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#features"
              className="text-base font-semibold text-gray-700 hover:text-black transition-colors"
            >
              Explore features
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            Be the first to know when we launch
          </p>
        </div>
      </section>

      {/* Floating Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-gray-900">60s</div>
              <div className="mt-2 text-sm text-gray-600">Setup time</div>
            </div>
            <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-gray-900">$9.99</div>
              <div className="mt-2 text-sm text-gray-600">Per month</div>
            </div>
            <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-gray-900">0</div>
              <div className="mt-2 text-sm text-gray-600">Complexity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Built for solo professionals
          </h2>
          <div className="space-y-6">
            {[
              "Work solo or with one partner",
              "Have 5-50 active client conversations",
              "Hate CRMs that require training videos",
              "Want 60 seconds setup, not 60 hours",
              "Value simplicity over customization"
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 p-6 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700 pt-0.5">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-white to-gray-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
            <p className="text-xl text-gray-600 font-light">
              We removed 47 features you&apos;ll never use.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Visual Pipeline",
                  description: "Clean Kanban board with drag-and-drop. Color-coded cards show who needs attention.",
                  emoji: "📊"
                },
                {
                  title: "Gentle Reminders",
                  description: "Daily digest email at 8am. No annoying notifications. Just one helpful email.",
                  emoji: "🔔"
                },
                {
                  title: "Lightning Fast",
                  description: "Add a client in 3 seconds. Only 5 fields. Auto-saves as you type.",
                  emoji: "⚡"
                },
                {
                  title: "3 Numbers That Matter",
                  description: "Pipeline value, deals closed, conversion rate. Warning signals for stuck deals.",
                  emoji: "📈"
                },
                {
                  title: "Smart Sync",
                  description: "Optional Gmail/Outlook integration. Auto-updates last contact time.",
                  emoji: "🔄"
                },
                {
                  title: "Mobile First",
                  description: "Swipe to update. Works offline. Bottom nav for your thumbs.",
                  emoji: "📱"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl bg-white border border-gray-100 p-8 transition-all hover:border-gray-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{feature.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Anti-Features */}
          <div className="mx-auto mt-20 max-w-4xl">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What we deliberately excluded
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-600">
                {[
                  "No team features beyond 1 partner",
                  "No marketing automation",
                  "No 100+ custom fields",
                  "No workflow automation",
                  "No integration marketplace",
                  "No project management",
                  "No enterprise complexity",
                  "No implementation consultant"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gray-400">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Our Philosophy
          </h2>
          <div className="space-y-8 text-xl leading-relaxed text-gray-600 font-light">
            <p>
              Every feature request gets the same question: &quot;Will a solo freelancer with 10 clients use this weekly?&quot; If no, we don&apos;t build it.
            </p>
            <p>
              We&apos;re not trying to replace Salesforce. We&apos;re trying to be what you use instead of Excel when you realize you need something slightly more structured, but refuse to learn HubSpot.
            </p>
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-700 p-12 text-white">
            <p className="text-lg italic leading-relaxed mb-6">
              &quot;I spent 6 years using enterprise CRMs for 3-5 clients at a time. It was torture. So I built the tool I actually wanted to use. Simple. Fast. Honest.&quot;
            </p>
            <p className="text-sm text-gray-300">— Gabriel, Founder</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-b from-gray-50 to-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Simple pricing
            </h2>
            <p className="text-xl text-gray-600 font-light">
              No tiers. No hidden fees. No per-user pricing games.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <div className="rounded-3xl border-2 border-gray-900 bg-white p-10 shadow-2xl shadow-gray-900/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solo Professional</h3>
                <div className="flex items-baseline justify-center gap-x-2 mb-2">
                  <span className="text-6xl font-bold tracking-tight text-gray-900">$9.99</span>
                  <span className="text-xl font-semibold text-gray-600">/month</span>
                </div>
                <p className="text-base text-gray-500">or $99/year (save $20)</p>
              </div>

              <ul className="mt-10 space-y-4 text-base text-gray-700">
                {[
                  "Unlimited deals",
                  "Daily follow-up reminders",
                  "Email & calendar sync",
                  "Mobile app (web-based)",
                  "Share with 1 partner",
                  "Export your data anytime",
                  "Email support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white text-xs">✓</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/waitlist"
                className="mt-10 block w-full rounded-full bg-black px-6 py-4 text-center text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/20"
              >
                Join Waitlist
              </Link>
              <p className="mt-6 text-center text-sm text-gray-500">
                Be the first to know when we launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-8">
            Never forget to
            <br />
            follow up again
          </h2>
          <p className="text-xl text-gray-600 font-light mb-12">
            Setup takes 60 seconds. Start tracking your deals today.
          </p>
          <Link
            href="/waitlist"
            className="inline-block rounded-full bg-black px-12 py-5 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
          >
            Join Waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 text-center sm:text-left">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@dcrm.life" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600 text-center">
              © 2025 dcrm.life. Built for solo professionals who hate complicated software.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
