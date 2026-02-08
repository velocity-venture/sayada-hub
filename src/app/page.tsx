import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "For solo operators ready to automate the basics.",
    features: [
      "5 core automations",
      "1,000 tasks/month",
      "Email + chat support",
      "Dashboard analytics",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
    href: "https://us.sayada.ai/signup?plan=starter",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/mo",
    description: "Full automation suite for growing businesses.",
    features: [
      "All 20 automations",
      "10,000 tasks/month",
      "Priority support",
      "Custom workflow builder",
      "Advanced analytics",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    href: "https://us.sayada.ai/signup?plan=professional",
    highlighted: true,
  },
  {
    name: "White-Label",
    price: "$499",
    period: "/mo",
    description: "Resell automations under your own brand.",
    features: [
      "Everything in Professional",
      "10,000 tasks/month",
      "Workflow export",
      "Your brand, your clients",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Contact Sales",
    href: "https://us.sayada.ai/signup?plan=whitelabel",
    highlighted: false,
  },
];

const automationTiers = [
  {
    tier: "Executive Assistant",
    items: [
      "Smart Inbox",
      "Calendar Tetris",
      "Meeting Scribe",
      "Missed Call Handler",
      "FAQ Bot",
    ],
  },
  {
    tier: "Operations",
    items: [
      "Lead Qualification",
      "Social Auto-Poster",
      "Review Management",
      "Invoice Chasing",
      "Onboarding Flows",
      "Expense Tracking",
      "Inventory Alerts",
    ],
  },
  {
    tier: "Strategic",
    items: [
      "Competitor Watch",
      "Sentiment Analysis",
      "Dynamic Reporting",
      "CRM Hygiene",
      "Proposal Generator",
      "Payroll Prep",
      "Legal/Compliance Check",
      "Custom Workflow Logic",
    ],
  },
];

const stats = [
  { value: "20", label: "Pre-built Automations" },
  { value: "85%", label: "Less Manual Work" },
  { value: "14", label: "Day Free Trial" },
  { value: "3", label: "Pricing Tiers" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A]/80 backdrop-blur-md border-b border-[#2A2A4A]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5A5AF2] to-[#8B5CF6] flex items-center justify-center font-bold text-sm">
              S
            </div>
            <span className="text-xl font-bold tracking-tight">
              Sayada<span className="text-[#5A5AF2]">.ai</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#8888AA]">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#automations" className="hover:text-white transition">
              Automations
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#regions" className="hover:text-white transition">
              Regions
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://us.sayada.ai/login"
              className="text-sm text-[#8888AA] hover:text-white transition"
            >
              Sign In
            </Link>
            <Link
              href="https://us.sayada.ai/signup"
              className="text-sm bg-[#5A5AF2] hover:bg-[#4A4AE2] px-4 py-2 rounded-lg font-medium transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1A1A2E] border border-[#2A2A4A] rounded-full px-4 py-1.5 text-sm text-[#8888AA] mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now live in US &amp; MENA
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 font-[family-name:var(--font-montserrat)]">
            Intelligence at the
            <br />
            <span className="gradient-text">Speed of Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8888AA] max-w-2xl mx-auto mb-10 leading-relaxed">
            20 AI-powered automations that eliminate manual work. From solo
            consultants to Fortune 500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://us.sayada.ai/signup"
              className="bg-[#5A5AF2] hover:bg-[#4A4AE2] text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg shadow-[#5A5AF2]/20"
            >
              Start 14-Day Free Trial
            </Link>
            <a
              href="#automations"
              className="border border-[#2A2A4A] hover:border-[#5A5AF2] text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              See All Automations
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-[#1A1A2E] rounded-xl border border-[#2A2A4A]"
            >
              <div className="text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-[#8888AA] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
              Automate the Noise.{" "}
              <span className="gradient-text">Scale the Wins.</span>
            </h2>
            <p className="text-lg text-[#8888AA] max-w-2xl mx-auto">
              Every workflow is powered by AI agents that learn your patterns,
              execute with precision, and get smarter over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                title: "Instant Activation",
                desc: "Go from signup to your first automation in under 48 hours. No code required. No consultants needed.",
              },
              {
                icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z",
                title: "20 Pre-Built Workflows",
                desc: "From smart inbox to competitor watch. Each automation handles a specific business function with battle-tested logic.",
              },
              {
                icon: "M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941",
                title: "Measurable ROI",
                desc: "Track exactly how many hours you save, deals you close faster, and dollars you stop leaving on the table.",
              },
              {
                icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
                title: "Multi-Region Ready",
                desc: "Run your business in the US or MENA market. Full Arabic support, RTL interface, and regional compliance built in.",
              },
              {
                icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z",
                title: "Enterprise Security",
                desc: "SOC2-aligned practices, encrypted data at rest and in transit, role-based access controls, and audit logging.",
              },
              {
                icon: "M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495",
                title: "Custom Workflow Builder",
                desc: "Build your own automations with our visual workflow editor. Connect any tool, add any logic, deploy in minutes.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-[#1A1A2E] rounded-xl border border-[#2A2A4A] hover:border-[#5A5AF2]/50 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#5A5AF2]/10 flex items-center justify-center mb-4 group-hover:bg-[#5A5AF2]/20 transition">
                  <svg
                    className="w-5 h-5 text-[#5A5AF2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#8888AA] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations */}
      <section id="automations" className="py-20 px-6 bg-[#0A0A14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
              20 Automations.{" "}
              <span className="gradient-text">Zero Busywork.</span>
            </h2>
            <p className="text-lg text-[#8888AA] max-w-2xl mx-auto">
              Each automation is a complete workflow that handles one business
              function end-to-end.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationTiers.map((group) => (
              <div key={group.tier} className="space-y-4">
                <h3 className="text-lg font-semibold text-[#5A5AF2] mb-4">
                  {group.tier}
                </h3>
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 bg-[#1A1A2E] rounded-lg border border-[#2A2A4A]"
                  >
                    <svg
                      className="w-5 h-5 text-green-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-lg text-[#8888AA] max-w-2xl mx-auto">
              Start free for 14 days. No credit card required to explore.
              Upgrade when you&apos;re ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-8 rounded-2xl border transition ${
                  tier.highlighted
                    ? "bg-[#1A1A2E] border-[#5A5AF2] glow-blue"
                    : "bg-[#1A1A2E] border-[#2A2A4A] hover:border-[#5A5AF2]/50"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5A5AF2] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-[#8888AA]">{tier.period}</span>
                </div>
                <p className="text-sm text-[#8888AA] mb-6">
                  {tier.description}
                </p>
                <Link
                  href={tier.href}
                  className={`block text-center py-3 rounded-xl font-semibold transition ${
                    tier.highlighted
                      ? "bg-[#5A5AF2] hover:bg-[#4A4AE2] text-white"
                      : "bg-[#2A2A4A] hover:bg-[#3A3A5A] text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-green-400 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-[#8888AA]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section id="regions" className="py-20 px-6 bg-[#0A0A14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
              One Platform.{" "}
              <span className="gradient-text">Two Markets.</span>
            </h2>
            <p className="text-lg text-[#8888AA] max-w-2xl mx-auto">
              Sayada.ai is built for global business with regional intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#1A1A2E] rounded-2xl border border-[#2A2A4A] hover:border-[#5A5AF2]/50 transition">
              <div className="text-3xl mb-4">US</div>
              <h3 className="text-2xl font-bold mb-3">us.sayada.ai</h3>
              <p className="text-[#8888AA] mb-6">
                Full English interface. Stripe payments. Optimized for US
                business workflows, compliance standards, and integrations.
              </p>
              <Link
                href="https://us.sayada.ai"
                className="inline-flex items-center gap-2 text-[#5A5AF2] hover:text-[#8B5CF6] font-medium transition"
              >
                Launch US App
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="p-8 bg-[#1A1A2E] rounded-2xl border border-[#2A2A4A] hover:border-[#5A5AF2]/50 transition">
              <div className="text-3xl mb-4">MENA</div>
              <h3 className="text-2xl font-bold mb-3">sa.sayada.ai</h3>
              <p className="text-[#8888AA] mb-6">
                Full Arabic + English. RTL interface. SDAIA compliant. Built for
                Vision 2030 businesses across the Middle East.
              </p>
              <Link
                href="https://sa.sayada.ai"
                className="inline-flex items-center gap-2 text-[#5A5AF2] hover:text-[#8B5CF6] font-medium transition"
              >
                Launch MENA App
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">
            Ready to{" "}
            <span className="gradient-text">Automate Your Business?</span>
          </h2>
          <p className="text-lg text-[#8888AA] mb-10 max-w-xl mx-auto">
            Join hundreds of businesses already saving time and scaling faster
            with Sayada.ai.
          </p>
          <Link
            href="https://us.sayada.ai/signup"
            className="inline-block bg-[#5A5AF2] hover:bg-[#4A4AE2] text-white px-10 py-4 rounded-xl text-lg font-semibold transition shadow-lg shadow-[#5A5AF2]/20"
          >
            Start Your 14-Day Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2A2A4A] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#5A5AF2] to-[#8B5CF6] flex items-center justify-center font-bold text-xs">
                  S
                </div>
                <span className="font-bold">
                  Sayada<span className="text-[#5A5AF2]">.ai</span>
                </span>
              </div>
              <p className="text-sm text-[#8888AA]">
                Intelligence at the Speed of Business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-[#8888AA]">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#automations"
                    className="hover:text-white transition"
                  >
                    Automations
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Regions</h4>
              <ul className="space-y-2 text-sm text-[#8888AA]">
                <li>
                  <Link
                    href="https://us.sayada.ai"
                    className="hover:text-white transition"
                  >
                    United States
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://sa.sayada.ai"
                    className="hover:text-white transition"
                  >
                    MENA / Saudi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-[#8888AA]">
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2A2A4A] pt-8 text-center text-sm text-[#8888AA]">
            &copy; {new Date().getFullYear()} Sayada.ai, a Velocity Venture
            Holdings, LLC company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
