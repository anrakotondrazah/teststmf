import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Menu, X, Calculator, FileText, Headphones, ShieldCheck, Users, TrendingUp, Mail, Facebook, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import pocketbaseClient from '@/lib/pocketbaseClient';
const NAV = [{
  label: 'Accueil',
  href: '#accueil'
}, {
  label: 'En savoir plus',
  href: '#services'
}, {
  label: 'À propos',
  href: '#apropos'
}, {
  label: 'Contact',
  href: '#contact'
}];
const fade = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
function Reveal({
  children,
  className,
  delay = 0
}) {
  return <motion.div className={className} variants={fade} initial="hidden" whileInView="show" viewport={{
    once: true,
    amount: 0.25
  }} transition={{
    delay
  }}>
      {children}
    </motion.div>;
}
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#0a1a3f]/95 backdrop-blur shadow-lg shadow-blue-950/20' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-[80rem] px-5 h-20 flex items-center justify-between">
        <a href="#accueil" className="font-display text-2xl font-800 font-bold tracking-tight text-white">
          STMF
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(n => <a key={n.href} href={n.href} className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors">
              {n.label}
            </a>)}
          <a href="#contact" className="rounded-full bg-white text-[#0a1a3f] text-sm font-semibold px-5 py-2.5 hover:bg-blue-100 transition-colors">
            Nous contacter
          </a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && <div className="md:hidden bg-[#0a1a3f] border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-blue-100/90 font-medium py-1">
              {n.label}
            </a>)}
        </div>}
    </header>;
}
function Hero() {
  return <section id="accueil" className="relative min-h-[100dvh] flex items-center bg-[#0a1a3f] overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,#1e40af_0,transparent_45%),radial-gradient(circle_at_85%_75%,#2563eb_0,transparent_45%)]" />
      <div className="relative mx-auto max-w-[80rem] px-5 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div>
          <motion.span initial={{
          opacity: 0,
          y: 12
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-100 uppercase">
            <MapPin size={14} /> Externalisation depuis Madagascar
          </motion.span>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.1
        }} className="font-display mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold text-white">
            Plus fiable et moins chère que l'IA :{' '}
            <span className="text-blue-300">l'intelligence humaine et émotionnelle</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.25
        }} className="mt-6 text-lg text-blue-100/80 max-w-xl">
            STMF : une équipe d'experts de la gestion locative, formée pour répondre à tous vos besoins.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.4
        }} className="mt-9 flex flex-wrap gap-4">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white text-[#0a1a3f] font-semibold px-6 py-3.5 hover:bg-blue-100 transition-colors">
              En savoir plus <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white font-semibold px-6 py-3.5 hover:bg-white/10 transition-colors">
              Nous contacter
            </a>
          </motion.div>
        </div>
        <motion.div initial={{
        opacity: 0,
        scale: 0.96
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-2xl" />
          <img src="https://horizons-cdn.hostinger.com/a6c7a7c5-ae07-496e-a2be-7407a60dca1c/bureau-5-n7ODS.png" alt="Équipe d'experts STMF en gestion locative dans un bureau" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/2]" />
        </motion.div>
      </div>
    </section>;
}
function About() {
  return <section id="qui" className="bg-white py-24">
      <div className="mx-auto max-w-[72rem] px-5 grid lg:grid-cols-5 gap-12 items-center">
        <Reveal className="lg:col-span-2">
          <img src="https://horizons-cdn.hostinger.com/a6c7a7c5-ae07-496e-a2be-7407a60dca1c/bureau-1-Eu1Mq.png" alt="L'équipe STMF au travail dans les bureaux" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
        </Reveal>
        <Reveal className="lg:col-span-3" delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Qui sommes-nous ?</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-[#0a1a3f] leading-tight">
            L'expertise locale au service des professionnels de la gestion locative
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Depuis Madagascar, STMF accompagne les professionnels dans l'externalisation de leurs tâches
            administratives. Grâce à notre expertise locale, nous garantissons efficacité, fiabilité et
            confidentialité.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[['Efficacité', TrendingUp], ['Fiabilité', ShieldCheck], ['Confidentialité', CheckCircle2]].map(([label, Icon]) => <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <Icon className="text-blue-700" size={22} />
                <p className="mt-2 font-semibold text-[#0a1a3f]">{label}</p>
              </div>)}
          </div>
        </Reveal>
      </div>
    </section>;
}
const SERVICES = [{
  icon: Calculator,
  title: 'Sous-traitance comptable',
  desc: 'Gestion des banques, factures, appels de fonds, charges et indexation des loyers en toute rigueur.',
  items: ['Rapprochements bancaires', 'Factures & appels de fonds', 'Charges & régularisations', 'Indexation des loyers'],
  img: 'https://horizons-cdn.hostinger.com/a6c7a7c5-ae07-496e-a2be-7407a60dca1c/065f11a3b8f89871d661643a70d1005e.jpg'
}, {
  icon: FileText,
  title: 'Sous-traitance administrative',
  desc: 'Suivi complet des dossiers locataires, relances, comparatifs et gestion électronique documentaire.',
  items: ['Relances & préavis', 'Dossiers locataires', 'Comparatifs entrées/sorties', 'GED'],
  img: 'https://horizons-cdn.hostinger.com/a6c7a7c5-ae07-496e-a2be-7407a60dca1c/a6e072c2e1a3d06f1e9987b0326f93f9.jpg'
}, {
  icon: Headphones,
  title: 'Relation clients',
  desc: 'Un accueil humain et réactif pour vos locataires et propriétaires, avec suivi des interventions.',
  items: ['Accueil téléphonique', 'Contacts locataires/propriétaires', 'Suivi des entretiens', 'Suivi des réparations'],
  img: 'https://horizons-cdn.hostinger.com/a6c7a7c5-ae07-496e-a2be-7407a60dca1c/7c97f07c6f5234d27c7f2939a9f2c8dc.jpg'
}];
function Services() {
  return <section id="services" className="bg-[#0a1a3f] py-24">
      <div className="mx-auto max-w-[80rem] px-5">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">En savoir plus</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-white leading-tight">
            Gestionnaires locatifs: découvrez comment les professionnels de votre secteur s'organisent pour assurer la qualité et la continuité de leur service de gestion immobilière.
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => <Reveal key={s.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3f] to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                    <s.icon size={15} /> {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-blue-100/70">{s.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {s.items.map(it => <li key={it} className="flex items-center gap-2 text-sm text-blue-100/90">
                        <CheckCircle2 size={15} className="text-blue-300 shrink-0" /> {it}
                      </li>)}
                  </ul>
                </div>
              </div>
            </Reveal>)}
        </div>
      </div>
    </section>;
}
function AboutCompany() {
  return <section id="apropos" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-[72rem] px-5">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">À propos</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-[#0a1a3f] leading-tight">
            STMF, votre partenaire en externalisation comptable et administrative
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Depuis 2023, STMF accompagne les administrateurs de biens français avec une équipe formée à la
            gestion locative, valorisant le professionnalisme, la confidentialité et une approche résolument humaine.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 h-full">
              <Users className="text-blue-700" size={28} />
              <h3 className="font-display mt-4 text-2xl font-bold text-[#0a1a3f]">L'équipe derrière votre réussite</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Des experts formés et engagés, sélectionnés pour leur rigueur et leur sens du service. Chaque
                collaborateur maîtrise les spécificités de la gestion locative française pour devenir un véritable
                prolongement de vos équipes.
              </p>
              <img src="https://horizons-cdn.hostinger.com/a6c7a7c5-ae07-496e-a2be-7407a60dca1c/bureau-4-JaWa3.png" alt="Espace de travail professionnel de STMF" className="mt-6 rounded-xl w-full object-cover aspect-[16/9]" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-[#0a1a3f] p-8 shadow-sm h-full text-white">
              <TrendingUp className="text-blue-300" size={28} />
              <h3 className="font-display mt-4 text-2xl font-bold">L'évolution de STMF</h3>
              <p className="mt-3 text-blue-100/80 leading-relaxed">
                D'une petite structure fondée en 2023 à un partenaire de confiance des administrateurs de biens,
                STMF n'a cessé de grandir en professionnalisme et en fiabilité.
              </p>
              <div className="mt-8 space-y-6">
                {[['2023', 'Création de STMF à Madagascar'], ['2024', 'Accompagnement des premiers administrateurs de biens français'], ['Aujourd\'hui', 'Une équipe experte au service de la continuité de votre gestion']].map(([year, txt]) => <div key={year} className="flex gap-4">
                    <span className="font-display font-bold text-blue-300 w-24 shrink-0">{year}</span>
                    <span className="text-blue-100/90">{txt}</span>
                  </div>)}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>;
}
function Contact() {
  const {
    toast
  } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await pocketbaseClient.collection('contacts').create(form);
      toast({
        title: 'Message envoyé',
        description: 'Merci, nous vous répondrons rapidement.'
      });
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: "L'envoi a échoué, réessayez."
      });
    } finally {
      setLoading(false);
    }
  };
  const field = 'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition';
  return <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-[72rem] px-5 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Contact</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-[#0a1a3f] leading-tight">
            Parlons de votre externalisation
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Une question, un projet de sous-traitance ? Notre équipe vous accompagne.
          </p>
          <div className="mt-8 space-y-4">
            <a href="mailto:stmfanilo@gmail.com" className="flex items-center gap-3 text-[#0a1a3f] font-medium hover:text-blue-700 transition">
              <span className="grid place-items-center h-11 w-11 rounded-full bg-blue-50 text-blue-700"><Mail size={20} /></span>
              stmfanilo@gmail.com
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573559982621" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] text-white font-semibold px-6 py-3 hover:bg-[#1466d4] transition">
              <Facebook size={18} /> Suivez-nous sur Facebook
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Nom</label>
                <input required value={form.name} onChange={e => setForm({
                ...form,
                name: e.target.value
              })} className={field} placeholder="Votre nom" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Téléphone</label>
                <input value={form.phone} onChange={e => setForm({
                ...form,
                phone: e.target.value
              })} className={field} placeholder="Optionnel" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input required type="email" value={form.email} onChange={e => setForm({
              ...form,
              email: e.target.value
            })} className={field} placeholder="vous@exemple.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea required rows={5} value={form.message} onChange={e => setForm({
              ...form,
              message: e.target.value
            })} className={field} placeholder="Votre message" />
            </div>
            <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#0a1a3f] text-white font-semibold py-3.5 hover:bg-[#12275c] transition disabled:opacity-60">
              {loading ? 'Envoi...' : 'Envoyer le message'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>;
}
function Footer() {
  return <footer className="bg-[#071230] text-blue-100/70 py-10">
      <div className="mx-auto max-w-[80rem] px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-white">STMF</span>
        <nav className="flex flex-wrap gap-6 text-sm">
          {NAV.map(n => <a key={n.href} href={n.href} className="hover:text-white transition">{n.label}</a>)}
        </nav>
        <p className="text-sm">© {new Date().getFullYear()} STMF — Gestion locative</p>
      </div>
    </footer>;
}
export default function HomePage() {
  return <div className="bg-white">
      <Helmet>
        <title>STMF — Externalisation comptable et administrative en gestion locative</title>
        <meta name="description" content="STMF, spécialiste de l'externalisation comptable et administrative en gestion locative depuis Madagascar. Sous-traitance, relation clients et gestion administrative pour les administrateurs de biens." />
        <meta name="keywords" content="STMF, gestion locative, location, sous-traitance, relation clients, gestion administrative, externalisation comptable" />
        <meta property="og:title" content="STMF — Externalisation en gestion locative" />
        <meta property="og:description" content="Une équipe d'experts de la gestion locative, formée pour répondre à tous vos besoins." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AboutCompany />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>;
}