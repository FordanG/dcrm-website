import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            The CRM that got out of your way
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Track deals. Get reminded. That&apos;s it.
          </p>
          <p className="mt-4 text-lg leading-7 text-gray-500">
            A refreshingly simple CRM for solo professionals. Just a pipeline, follow-up reminders, and the 3 metrics that matter. No bloat. No complexity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="https://app.dcrm.life"
              className="rounded-md bg-black px-8 py-3.5 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Try dcrm.life Free
            </a>
            <Link
              href="#features"
              className="text-base font-semibold leading-7 text-gray-900 hover:text-gray-600 transition-colors"
            >
              See how it works <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Setup takes 60 seconds. No credit card required.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-600">
            Used daily by 500+ solo professionals who were tired of enterprise CRMs
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Built for solo professionals
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            You&apos;re a perfect fit if you:
          </p>
          <ul className="mt-8 space-y-4 text-base leading-7 text-gray-600">
            <li className="flex gap-x-3">
              <span className="text-black">✓</span>
              <span>Work solo or with one partner (no large teams)</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-black">✓</span>
              <span>Have 5-50 active client conversations at any time</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-black">✓</span>
              <span>Hate CRMs that require training videos</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-black">✓</span>
              <span>Want something that takes 60 seconds to set up, not 60 hours</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-black">✓</span>
              <span>Value simplicity over customization</span>
            </li>
          </ul>

          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Who this is NOT for:</h3>
            <p className="text-sm text-gray-600 mb-3">
              Don&apos;t use dcrm.life if you:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Manage a sales team (we have zero collaboration features beyond 1 partner)</li>
              <li>• Need 100+ custom fields (you get 5, that&apos;s it)</li>
              <li>• Want email automation (we just track conversations)</li>
              <li>• Have 500+ simultaneous deals (we&apos;re not built for scale)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We removed 47 features you&apos;ll never use. You&apos;re welcome.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Visual Pipeline */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Visual Pipeline</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Clean Kanban board with drag-and-drop. Color-coded cards show who needs attention. Red border = 7+ days, no contact.
                </p>
              </div>

              {/* Follow-Up Reminders */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Gentle Reminders</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Daily digest email at 8am shows clients needing attention. No annoying notifications. Just one helpful email.
                </p>
              </div>

              {/* Quick Add */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Lightning-Fast Entry</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Add a client in 3 seconds. Only 5 fields. Auto-saves as you type. Press N anywhere to start.
                </p>
              </div>

              {/* Simple Dashboard */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">3 Numbers That Matter</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Pipeline value, deals closed, conversion rate. Warning signals for stuck deals. No complex reports.
                </p>
              </div>

              {/* Email & Calendar Sync */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Smart Sync</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Optional Gmail/Outlook integration. Auto-updates last contact time. Read-only—we track, not send.
                </p>
              </div>

              {/* Mobile Optimized */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Mobile First</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Swipe to update. Works offline. Bottom nav for your thumbs. Feels native everywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Anti-Features */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-lg border border-gray-300 bg-white p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What we deliberately DON&apos;T have</h3>
              <p className="text-sm text-gray-600 mb-4">We&apos;re proud of what we&apos;ve excluded:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <div>❌ No team features (beyond 1 partner)</div>
                <div>❌ No marketing automation</div>
                <div>❌ No 100+ custom fields</div>
                <div>❌ No workflow automation</div>
                <div>❌ No integration marketplace</div>
                <div>❌ No project management</div>
                <div>❌ No enterprise complexity</div>
                <div>❌ No &quot;implementation consultant&quot;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Philosophy
          </h2>
          <div className="mt-8 text-lg leading-8 text-gray-600 space-y-4">
            <p>
              Every feature request gets the same question: &quot;Will a solo freelancer with 10 clients use this weekly?&quot; If no, we don&apos;t build it.
            </p>
            <p>
              We&apos;re not trying to replace Salesforce. We&apos;re trying to be what you use instead of Excel when you realize you need something slightly more structured, but refuse to learn HubSpot.
            </p>
          </div>

          <div className="mt-12 rounded-lg bg-gray-50 p-8 border border-gray-200">
            <p className="text-base italic text-gray-700 mb-4">
              &quot;I spent 6 years using enterprise CRMs for 3-5 clients at a time. It was torture. So I built the tool I actually wanted to use. Simple. Fast. Honest.&quot;
            </p>
            <p className="text-sm text-gray-600">— Gabriel, Founder</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              No tiers. No hidden fees. No per-user pricing games.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-md">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Solo Professional</h3>
                <p className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$19</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">or $190/year (save $38)</p>
              </div>

              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-black">✓</span>
                  <span>Unlimited deals</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-black">✓</span>
                  <span>Daily follow-up reminders</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-black">✓</span>
                  <span>Email & calendar sync</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-black">✓</span>
                  <span>Mobile app (web-based)</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-black">✓</span>
                  <span>Share with 1 partner</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-black">✓</span>
                  <span>Export your data anytime</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-black">✓</span>
                  <span>Email support</span>
                </li>
              </ul>

              <a
                href="https://app.dcrm.life"
                className="mt-8 block w-full rounded-md bg-black px-4 py-3 text-center text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Start Free Trial
              </a>
              <p className="mt-4 text-center text-xs text-gray-500">
                14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Never forget to follow up again
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Setup takes 60 seconds. Start tracking your deals today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://app.dcrm.life"
              className="rounded-md bg-black px-8 py-3.5 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Try dcrm.life Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="https://app.dcrm.life" className="text-sm text-gray-600 hover:text-gray-900">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#about" className="text-sm text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@dcrm.life" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600 text-center">
              © 2024 dcrm.life. Built for solo professionals who hate complicated software.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
