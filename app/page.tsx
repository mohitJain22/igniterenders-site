"use client";
import { useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Mail,
  Phone,
  Rocket,
  Sparkles,
  PlayCircle,
  ArrowRight,
  Instagram,
  Linkedin,
  Youtube,
  Images,
  Workflow,
  Shield,
} from "lucide-react";

// ---- Typed wrapper to avoid framer-motion className typing issues on some builds
const MDiv = (props: HTMLMotionProps<"div">) => <motion.div {...props} />;

const BRAND = {
  name: "IgniteRenders",
  tagline: "High-impact 3D product ads that convert",
  email: "hello@igniterenders.com",
  phone: "+91 90000 00000",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  youtube: "https://www.youtube.com/",
};

const GALLERY = [
  { title: "Sleek Headphones – Launch Visual", img: "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1600&auto=format&fit=crop" },
  { title: "Smartwatch – Liquid Metal Look", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop" },
  { title: "Coffee Maker – Cinematic Ad", img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1600&auto=format&fit=crop" },
  { title: "Skincare – Floating CG Packshot", img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1600&auto=format&fit=crop" },
  { title: "Soda Can – Splash Simulation", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1600&auto=format&fit=crop" },
  { title: "Sneakers – Motion Teaser", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop" },
];

function Nav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold tracking-tight">{BRAND.name}</span>
          <Badge className="ml-2">3D Ads Studio</Badge>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="opacity-80 hover:opacity-100">Work</a>
          <a href="#services" className="opacity-80 hover:opacity-100">Services</a>
          <a href="#process" className="opacity-80 hover:opacity-100">Process</a>
          <a href="#pricing" className="opacity-80 hover:opacity-100">Pricing</a>
          <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact"><Button size="sm" className="rounded-2xl">Get a quote</Button></a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            3D product visuals that
            <span className="bg-gradient-to-br from-indigo-400 to-cyan-300 bg-clip-text text-transparent"> stop the scroll.</span>
          </h1>
          <p className="mt-5 text-base md:text-lg opacity-80 max-w-xl">
            We craft cinematic renders, simulations, and motion spots for ads, product launches, and e-commerce. Faster than shoots. Limitless creativity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#work"><Button size="lg" className="rounded-2xl"><Images className="w-4 h-4 mr-2"/>See our work</Button></a>
            <a href="#contact"><Button variant="secondary" size="lg" className="rounded-2xl"><Rocket className="w-4 h-4 mr-2"/>Start a project</Button></a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm opacity-80">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4"/> NDA friendly</div>
            <div className="flex items-center gap-2"><PlayCircle className="w-4 h-4"/> 4K delivery</div>
            <div className="flex items-center gap-2"><Sparkles className="w-4 h-4"/> PBR accurate</div>
          </div>
        </motion.div>

        <MDiv initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}}>
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1602526432604-c0e5d1471d55?q=80&w=1600&auto=format&fit=crop" alt="Hero 3D render" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"/>
          </div>
        </MDiv>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: <Sparkles className="w-5 h-5"/>, title: "CG Packshots", desc: "Photoreal stills for Amazon, Shopify, D2C and print." },
    { icon: <PlayCircle className="w-5 h-5"/>, title: "Ad Spots", desc: "6–30s motion ads optimised for Meta, YouTube & OTT." },
    { icon: <Workflow className="w-5 h-5"/>, title: "Simulations", desc: "Fluids, cloth, particles and hard-surface motion." },
    { icon: <Shield className="w-5 h-5"/>, title: "Lookdev & PBR", desc: "Physically-accurate shaders, lighting and color pipelines." },
  ];
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">What we do</h2>
        <Badge>End-to-end production</Badge>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">{it.icon}</div>
              <CardTitle className="text-lg">{it.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="opacity-80 text-sm leading-relaxed">{it.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Selected work</h2>
        <a href="#contact" className="text-sm opacity-80 hover:opacity-100 flex items-center gap-1">Request full reel <ArrowRight className="w-4 h-4"/></a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY.map((item, idx) => (
          <MDiv
            key={idx}
            initial={{opacity:0, y:10}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.4, delay: idx*0.04}}
            className="group relative overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="text-sm font-medium">{item.title}</div>
              <Button size="sm" variant="secondary" className="rounded-xl">View</Button>
            </div>
          </MDiv>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Brief & Mood", desc: "We define goals, audience, specs and references.", meta: "1–2 days" },
    { title: "Model & Lookdev", desc: "Assets, shaders and lighting tuned for hero shots.", meta: "3–7 days" },
    { title: "Animation & Sims", desc: "Blocking to final, with approvals on the way.", meta: "3–10 days" },
    { title: "Grade & Delivery", desc: "Color-managed renders in all required formats.", meta: "1–2 days" },
  ];
  return (
    <section id="process" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-8">How we work</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-base flex items-center justify-between">
                <span>{i+1}. {s.title}</span>
                <Badge>{s.meta}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="opacity-80 text-sm leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: "Starter", price: "₹49k+", features: ["1 CG packshot (4K)", "Basic lookdev", "2 rounds of revisions", "Licensing for social + web"] },
    { name: "Growth", price: "₹1.5L+", features: ["6–15s motion ad (1080p)", "Advanced lookdev + sims", "3 rounds of revisions", "Platform-ready exports"] },
    { name: "Launch", price: "₹3L+", features: ["30s hero spot (4K)", "Full pipeline + sound", "Storyboards + styleframes", "Full usage rights"] },
  ];
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-8">Transparent pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <Card key={i} className={`${i===1 ? 'ring-2 ring-indigo-400' : ''}`}>
            <CardHeader>
              <CardTitle className="text-xl">{t.name}</CardTitle>
              <div className="text-3xl font-semibold">{t.price}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5"/>{f}</li>
                ))}
              </ul>
              <a href="#contact"><Button className="w-full mt-6 rounded-2xl">Choose {t.name}</Button></a>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-xs opacity-70 mt-3">*Final quotes depend on scope, assets, timelines and usage. Prices shown are typical starting points.</p>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setStatus("sent"); };
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Let's make something stunning</h2>
          <p className="mt-3 opacity-80 max-w-prose">Share a link to your product, target platform, deadlines and example styles you like. We'll reply with a ballpark and suggested approach.</p>
          <div className="mt-6 space-y-2 text-sm">
            <a className="flex items-center gap-2 opacity-90 hover:opacity-100" href={`mailto:${BRAND.email}`}><Mail className="w-4 h-4"/>{BRAND.email}</a>
            <a className="flex items-center gap-2 opacity-90 hover:opacity-100" href={`tel:${BRAND.phone}`}><Phone className="w-4 h-4"/>{BRAND.phone}</a>
          </div>
          <div className="mt-6 flex items-center gap-4 opacity-80">
            <a href={BRAND.instagram} aria-label="Instagram" className="hover:opacity-100 opacity-80"><Instagram className="w-5 h-5"/></a>
            <a href={BRAND.linkedin} aria-label="LinkedIn" className="hover:opacity-100 opacity-80"><Linkedin className="w-5 h-5"/></a>
            <a href={BRAND.youtube} aria-label="YouTube" className="hover:opacity-100 opacity-80"><Youtube className="w-5 h-5"/></a>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Project brief</CardTitle>
          </CardHeader>
          <CardContent>
            {status === "sent" ? (
              <div className="text-sm">
                <p className="font-medium">Thanks! We'll get back within 24 hours.</p>
                <p className="opacity-80 mt-2">Meanwhile, email us references at <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input required placeholder="Name"/>
                <Input required type="email" placeholder="Email"/>
                <Input placeholder="Company"/>
                <Input placeholder="Link to product / assets"/>
                <Textarea placeholder="Tell us about the scope, timeline, and platforms"/>
                <Button type="submit" className="w-full rounded-2xl">Request quote</Button>
                <p className="text-xs opacity-70 text-center">By submitting, you agree to be contacted about your project.</p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
      <Card className="bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border-white/20">
        <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl md:text-3xl font-semibold">Ready to launch scroll-stopping ads?</div>
            <p className="opacity-80 text-sm mt-2 max-w-prose">We can start from CAD, references or even napkin sketches. Typical turnaround 7–14 days.</p>
          </div>
          <a href="#contact"><Button size="lg" className="rounded-2xl"><Rocket className="w-4 h-4 mr-2"/>Get started</Button></a>
        </CardContent>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 text-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="opacity-80">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        <div className="flex items-center gap-4 opacity-80">
          <a href="#" className="hover:opacity-100">Privacy</a>
          <a href="#" className="hover:opacity-100">Terms</a>
          <a href={`mailto:${BRAND.email}`} className="hover:opacity-100">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Work />
      <Services />
      <Process />
      <Pricing />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
