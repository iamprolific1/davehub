
import './App.css';

import { EarthLock } from "lucide-react"

import { motion } from "framer-motion";




const SERVICES = [
  {
    id: 'lost-wallet',
    title: 'Lost Wallet Recovery',
    description:
    'We help recover access to digital wallets by using secure verification and step-by-step expert processes to reclaim your funds and credentials.',
  },
  {
    id: 'scam-crypto',
    title: 'Scam Crypto Recovery',
    description:
    'Our recovery team investigates transaction trails, negotiates with platforms, and coordinates with legal partners to recover lost crypto where possible.',
  },
  {
    id: 'account-recovery',
    title: 'Account Recovery',
    description:
    'From email to social accounts — we follow privacy-first processes to validate ownership and restore access without exposing sensitive data.',
  },
  {
    id: 'fake-investment',
    title: 'Fake Investment Scam Recovery',
    description:
    'Targeted recovery program for fake investment schemes: evidence collection, platform escalation, and tailored restitution strategies.',
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Freelancer — Austin, USA",
    photo: null,
    excerpt:
      "I thought my crypto was gone forever. DaveHub rebuilt the trail and helped me get a large portion back. Professional, calm, and super effective.",
    service: "Scam Crypto Recovery",
  },
  {
    id: 2,
    name: "James K.",
    role: "Small Business Owner — Seattle, USA",
    photo: null,
    excerpt:
      "They recovered my compromised business account within days. Clear updates and a human team that actually cared — highly recommend.",
    service: "Account Recovery",
  },
  {
    id: 3,
    name: "Anastasia R.",
    role: "Student — Ontario, Canada",
    photo: null,
    excerpt:
      "I lost access to a wallet with essential funds. DaveHub guided me through secure verification and restored access — lifesaving support.",
    service: "Lost Wallet Recovery",
  },
  {
    id: 4,
    name: "Leroy B.",
    role: "Investor — London, UK",
    photo: null,
    excerpt:
      "After falling for a fake investment scheme, DaveHub coordinated with the relevant platforms and helped recover part of my assets. Absolutely worth it.",
    service: "Fake Investment Scam Recovery",
  },
  {
    id: 5,
    name: "Victoria L.",
    role: "eCommerce Seller — Miami, USA",
    photo: null,
    excerpt:
      "My store’s account got hijacked. DaveHub helped me regain access quickly and even advised on better protection going forward.",
    service: "Account Recovery",
  },
  {
    id: 6,
    name: "Michael T.",
    role: "Engineer — Los Angeles, USA",
    photo: null,
    excerpt:
      "Lost wallet, no seed phrase… I thought I was doomed. DaveHub restored it step-by-step without ever requesting sensitive details. Completely legit.",
    service: "Lost Wallet Recovery",
  },
  {
    id: 7,
    name: "Isabella C.",
    role: "Digital Creator — Lisbon, Portugal",
    photo: null,
    excerpt:
      "DaveHub helped me trace funds from a phishing scam. Their transparency and expertise gave me peace of mind during every stage.",
    service: "Scam Crypto Recovery",
  },
  {
    id: 8,
    name: "Daniel W.",
    role: "Software Consultant — Chicago, USA",
    photo: null,
    excerpt:
      "I ignored a ‘too good to be true’ investment pitch and lost money. DaveHub recovered a significant amount and prevented further losses.",
    service: "Fake Investment Scam Recovery",
  },
  {
    id: 9,
    name: "Kimberly J.",
    role: "Accountant — Houston, USA",
    photo: null,
    excerpt:
      "Someone gained access to my cloud wallet, but DaveHub helped restore control fast. The communication was professional and comforting.",
    service: "Account Recovery",
  },
  {
    id: 10,
    name: "Ethan S.",
    role: "Entrepreneur — New York, USA",
    photo: null,
    excerpt:
      "I never expected a recovery service to be this ethical and responsive. DaveHub saved me from a brutal crypto scam. I’m thankful.",
    service: "Scam Crypto Recovery",
  },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
}

const appear = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
        <header className='sticky top-0 z-50 backdrop-blur-sm bg-white/60 border-b border-slate-100'>
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold shadow-md">DH</div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight">DaveHub</h1>
                <p className="text-xs text-slate-500">Recovery specialists — secure, private, effective</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6 items-center text-sm text-slate-600">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
              <button className="ml-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm shadow-sm">Get Help</button>
            </nav>
            <div className="md:hidden">
              <button aria-label="menu" className="p-2 rounded-lg bg-slate-100">
                <EarthLock />
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div initial="hidden" animate="show" variants={container} className="lg:col-span-7">
              <motion.h2 variants={appear} className="text-4xl md:text-5xl leading-tight font-extrabold tracking-tight">
                Trusted recovery for lost funds and compromised accounts
              </motion.h2>
              <motion.p variants={appear} className="mt-4 text-lg text-slate-600 max-w-xl">
                DaveHub is a dedicated recovery agency specializing in lost wallet recovery, scam crypto recovery, account recovery, and fake investment restitution. We combine technical investigations with privacy-first procedures and legal coordination when required.
              </motion.p>

              <motion.div variants={appear} className="mt-8 flex gap-4 flex-wrap">
                <a href="#contact" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:scale-[1.02] transform transition">Get a free case review</a>
                <a href="#testimonials" className="inline-flex items-center gap-3 border border-slate-200 px-5 py-3 rounded-lg text-slate-700 hover:bg-slate-50">See success stories</a>
              </motion.div>

              <motion.div variants={appear} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SERVICES.map((s) => (
                  <div key={s.id} className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="text-sm font-semibold">{s.title}</h4>
                    <p className="text-xs mt-1 text-slate-500">{s.description}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-700/30 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold">Real recoveries. Real people.</h3>
                  <p className="mt-2 text-slate-200 text-sm leading-relaxed">Read short summaries from people who recovered access, funds, or justice with DaveHub.</p>
                  <div className="mt-6 space-y-4">
                    {TESTIMONIALS.slice(0, 3).map((t) => (
                      <article key={t.id} className="bg-white/6 p-4 rounded-xl">
                        <p className="text-sm leading-snug">“{t.excerpt}”</p>
                        <div className="mt-3 flex items-center gap-3 text-xs text-slate-200 opacity-90">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">{t.name[0]}</div>
                          <div>
                            <div className="font-medium">{t.name}</div>
                            <div className="text-[11px] text-slate-300">{t.role} • {t.service}</div>
                          </div>
                        </div>
                      </article>
                      ))}
                  </div>

                  <div className="mt-6">
                    <a href="#contact" className="inline-block px-4 py-2 rounded-lg bg-white text-indigo-900 font-semibold">Start your recovery</a>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-500">All cases follow a privacy-first policy — we never ask for private keys or account passwords in plain text.</div>
            </motion.div>
          </section>

          {/* testimonials grid */}
          <section id="testimonials" className="mt-14">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <motion.blockquote key={t.id} variants={appear} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                  <p className="text-slate-700">“{t.excerpt}”</p>
                  <footer className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">{t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-xs text-slate-500">{t.role} • {t.service}</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400">Case #{1000 + t.id}</div>
                  </footer>
                  </motion.blockquote>
                  ))}
                </motion.div>
          </section>

          {/* Why DaveHub? */}
          <section className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 bg-gradient-to-br from-white to-indigo-50 p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold">Why people choose DaveHub</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Privacy-first processes — we never ask for private keys or passwords.</li>
                <li>• Transparent updates with a dedicated recovery specialist.</li>
                <li>• Technical and legal coordination when needed.</li>
                <li>• Proven track record across wallets, exchanges, and account providers.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow sticky top-24">
              <h4 className="font-semibold">Quick stats</h4>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50 rounded-xl">
                  <div className="text-2xl font-bold">87%</div>
                  <div className="text-xs text-slate-500">Successful case resolution rate</div>
                </div>
                <div className="p-4 bg-indigo-50 rounded-xl">
                  <div className="text-2xl font-bold">1–3</div>
                  <div className="text-xs text-slate-500">Weeks to initial resolution (typical)</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500">Note: timelines vary depending on platform cooperation and case complexity.</div>
            </div>
          </section>

          {/* Contact / CTA */}
          <section id="contact" className="mt-14 bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-semibold">Start your recovery — free case review</h3>
                <p className="mt-2 text-slate-600">Fill out the form and one of our recovery specialists will reach out with next steps and a secure intake process.</p>

                <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input className="w-full p-3 rounded-lg border border-slate-200" placeholder="Full name" required />
                    <input className="w-full p-3 rounded-lg border border-slate-200" placeholder="Email" type="email" required />
                  </div>
                  <input className="w-full p-3 rounded-lg border border-slate-200" placeholder="Short case title (e.g. Lost Wallet)" required />
                  <textarea className="w-full p-3 rounded-lg border border-slate-200" placeholder="Briefly describe what happened — avoid pasting private keys" rows={4} required />
                  <div className="flex items-center gap-3">
                    <button className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold">Request review</button>
                    <button type="button" className="px-4 py-3 rounded-lg border">Call support</button>
                  </div>
                  <div className="text-xs text-slate-500">We will never ask for full private keys or passwords — only proof of ownership documentation in encrypted form where required.</div>
                </form>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-white shadow">
                  <h4 className="font-semibold">What to prepare</h4>
                  <ol className="mt-2 text-slate-600 list-decimal list-inside">
                    <li>Transaction IDs & screenshots</li>
                    <li>Platform & account identifiers</li>
                    <li>Any communication with scammers (if available)</li>
                  </ol>
                </div>

                <div className="p-6 rounded-xl bg-white shadow">
                  <h4 className="font-semibold">Security reminder</h4>
                  <p className="mt-2 text-slate-600 text-sm">Never share private keys or unencrypted passwords. DaveHub will always provide an encrypted intake channel when needed.</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-12 text-center text-slate-500 text-sm">
            <div>© {new Date().getFullYear()} DaveHub — Recovery agency. All rights reserved.</div>
          </footer>
        </main>

        {/* Floating helper */}
        <div className="fixed right-6 bottom-6">
          <a href="#contact" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-4 py-3 rounded-2xl shadow-lg">Ask for help</a>
        </div>
      </div>
    </>
  )
}

export default App
