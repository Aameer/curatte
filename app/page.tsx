// The curatte.com landing page. Numbers are production reads from September 2026; update them
// together with the raise deck so the two never disagree. Revenue and ROAS stay off this page on
// purpose: they are for investors, not for a public site.

const CONTACT_EMAIL = 'hello@curatte.com'

const shift = [
  { value: '51%', label: 'of all web traffic is now automated, the first time in a decade', source: 'Imperva, 2025' },
  { value: '+693%', label: 'AI referrals to US retail sites, 2025 holidays vs 2024', source: 'Adobe Analytics, 2026' },
  { value: '$190–385B', label: 'of US e-commerce run by AI shoppers by 2030', source: 'Morgan Stanley, 2025' },
]

const running = [
  { value: '586K', label: 'active affiliate links across 11 networks' },
  { value: '78,949', label: 'brands mapped across networks' },
  { value: '~80K', label: 'active offers from 47 sources in 12 regions' },
  { value: '3.5M', label: 'shoppers sent to merchants in the last 12 months' },
]

const steps = [
  { title: 'A shopper asks', body: '“White sneakers under $120, size 9.”' },
  { title: 'Any agent calls Curatte', body: 'ChatGPT, Claude, or any agent over MCP.' },
  { title: 'We curate', body: 'Every network, brand, catalogue, coupon and vendor, weighed by fit, size and price.' },
  { title: 'Options with links', body: 'A short list, each with a working affiliate link.' },
  { title: 'The shopper buys', body: 'On the merchant’s own site. Part of the commission comes back as cashback.' },
]

const products = [
  { name: 'Agent Affiliate Network', status: 'Launching', body: 'Agents embed our links and earn on the commerce they drive. One integration, every network behind it.' },
  { name: 'Deals for Agents', status: 'In build', body: 'Verified coupons and deals for any brand, by API, checked continuously by AI agents.' },
  { name: 'Curated shopping assistant', status: 'Live demo in Claude', body: 'Curated product picks inside ChatGPT and Claude, with cashback on every purchase.' },
  { name: 'Our coupon sites', status: 'Live', body: 'More than 22 coupon and deal sites that shoppers already use every day.' },
]

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-bold uppercase tracking-wider text-[#0E9F6E]">{eyebrow}</p>
      <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-10 border-b border-black/5 bg-[#FAFAFA]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Curatte</span>
          <div className="hidden gap-8 text-sm text-gray-600 md:flex">
            <a href="#today" className="hover:text-black">Today</a>
            <a href="#how" className="hover:text-black">How it works</a>
            <a href="#products" className="hover:text-black">Products</a>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full bg-[#111827] px-5 py-2 text-sm font-bold text-white hover:bg-black">
            Talk to us
          </a>
        </nav>
      </header>

      <section className="bg-[#0B1220] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm font-bold uppercase tracking-wider text-[#34D399]">Affiliate infrastructure for agentic commerce</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">The affiliate rails for AI agents</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Every network, every deal and every product in one place, so any AI agent can curate from it and get paid
            when a shopper buys. Free for shoppers, with cashback on top.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full bg-[#0E9F6E] px-6 py-3 font-bold text-white hover:bg-[#0B8A5F]">Talk to us</a>
            <a href="#how" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10">See how it works</a>
          </div>
        </div>
      </section>

      <Section id="shift" eyebrow="The shift" title="AI now sends shoppers to retailers, and that traffic is growing fast">
        <div className="grid gap-6 md:grid-cols-3">
          {shift.map((s) => (
            <div key={s.value} className="rounded-2xl bg-[#F1F3F5] p-8">
              <p className="text-4xl font-bold text-[#0E9F6E]" style={{ fontFamily: 'var(--font-heading)' }}>{s.value}</p>
              <p className="mt-3 text-gray-700">{s.label}</p>
              <p className="mt-4 text-xs text-gray-500">{s.source}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-gray-700">
          When an agent recommends a product, the sale still happens on the merchant’s site, and the click that gets it
          there is an affiliate click. Agents need the right product, the best working deal, and a way to get paid.
          That is what Curatte provides.
        </p>
      </Section>

      <Section id="today" eyebrow="Already running" title="We already run the data layer agents need">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {running.map((r) => (
            <div key={r.label} className="rounded-2xl border border-black/5 bg-white p-8">
              <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{r.value}</p>
              <p className="mt-3 text-gray-700">{r.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">Production figures, September 2026.</p>
      </Section>

      <Section id="how" eyebrow="How it works" title="One curation engine, reachable from ChatGPT, Claude and any agent">
        <ol className="grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className={`rounded-2xl p-6 ${i === 2 ? 'bg-[#E7F6EF]' : 'bg-[#F1F3F5]'}`}>
              <p className="text-sm font-bold text-[#0E9F6E]">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-2 font-bold">{s.title}</p>
              <p className="mt-2 text-sm text-gray-700">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="products" eyebrow="Products" title="Four products on one data layer">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl border border-black/5 bg-white p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className="whitespace-nowrap rounded-full bg-[#E7F6EF] px-3 py-1 text-xs font-bold text-[#0E9F6E]">{p.status}</span>
              </div>
              <p className="mt-3 text-gray-700">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-[#0B1220] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Building an agent that shops?</h2>
            <p className="mt-2 text-slate-300">Brands, networks, agent builders and investors: we’d like to hear from you.</p>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full bg-[#0E9F6E] px-6 py-3 font-bold text-white hover:bg-[#0B8A5F]">{CONTACT_EMAIL}</a>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">© 2026 Curatte</footer>
    </main>
  )
}
