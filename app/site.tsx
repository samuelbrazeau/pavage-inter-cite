"use client";

import React, { useEffect, useState } from "react";

/* Clé Web3Forms : colle ici la clé reçue par courriel depuis web3forms.com */
const WEB3FORMS_KEY = "6ffc0d4b-3943-47f0-9ae4-62de5a602361";

const company = {
  name: "Pavage Inter Cité",
  phone: "(819) 595-0550",
  phoneHref: "tel:18195950550",
  address: "485 Rue de Vernon, Gatineau, QC J9J 3K4",
};

/* ---------- Contenu bilingue ---------- */
const T = {
  fr: {
    nav: { services: "Services", realisations: "Réalisations", processus: "Processus", contact: "Contact" },
    cta: { soumission: "Soumission gratuite", demander: "Demander une soumission", appeler: "Appeler maintenant", appelerCourt: "Appeler", envoyer: "Envoyer la demande", envoi: "Envoi en cours..." },
    hero: {
      tagline: ["Gatineau · Ottawa", "Résidentiel + Commercial"],
      titre: ["Pavage durable,", "finition propre,", "service local."],
    },
    ticker: [
      "Entreprise locale · Gatineau + Ottawa",
      "Licence RBQ 2264 4405 35",
      "Soumission rapide",
      "Équipement professionnel",
      "Travaux résidentiels et commerciaux",
      "Service direct et simple",
      "Finition propre et durable",
    ],
    services: {
      eyebrow: "Services",
      titre: "Tout pour vos travaux d’asphalte",
      savoirPlus: "En savoir plus",
      items: [
        ["Pavage résidentiel", "Entrées asphaltées propres, durables et adaptées à notre climat."],
        ["Pavage commercial", "Stationnements, accès commerciaux et surfaces conçues pour un usage intensif."],
        ["Réparation d’asphalte", "Correction de zones abîmées, nids-de-poule, affaissements et surfaces usées."],
        ["Resurfaçage", "Redonner une surface propre et uniforme à un pavage existant lorsque possible."],
        ["Stationnements", "Préparation, nivellement et asphaltage de stationnements résidentiels ou commerciaux."],
        ["Scellant et fissures", "Protection préventive pour prolonger la durée de vie de votre asphalte."],
      ] as [string, string][],
    },
    realisations: {
      eyebrow: "Réalisations",
      titre: "Des surfaces propres, solides et prêtes à utiliser",
      hudLabel: "Projet",
      hudRegion: "Gatineau–Ottawa",
      ctaProjet: "Votre projet ici",
    },
    processus: {
      eyebrow: "Processus",
      titre: "Simple du premier appel au résultat final",
      etapes: [
        { titre: "Contact rapide", texte: "Appelez-nous ou remplissez le formulaire, on vous répond dans les 24 heures." },
        { titre: "Évaluation gratuite", texte: "On se déplace sur place pour évaluer votre projet, sans frais ni engagement." },
        { titre: "Soumission détaillée", texte: "Vous recevez un prix ferme par écrit, sans surprise ni frais cachés." },
        { titre: "Réalisation des travaux", texte: "Notre équipe exécute les travaux à la date convenue, avec de l'équipement professionnel." },
        { titre: "Résultat durable", texte: "Un pavage fait pour durer, avec des conseils d'entretien pour protéger votre investissement." },
      ],
    },
    avis: { eyebrow: "Avis clients", titre: "Ce que nos clients disent" },
    soumission: {
      eyebrow: "Soumission gratuite",
      titre: "Réservez votre projet maintenant.",
      heures: "Lundi au vendredi, 7 h à 17 h",
      form: {
        nom: "Nom", nomPh: "Votre nom",
        tel: "Téléphone", telPh: "(819) 000-0000",
        email: "Email", emailPh: "email@exemple.com",
        ville: "Ville", villePh: "Gatineau, Ottawa, Aylmer...",
        type: "Type de projet",
        options: ["Entrée résidentielle", "Stationnement commercial", "Réparation d’asphalte", "Scellant / fissures", "Autre projet"],
        message: "Message", messagePh: "Décrivez brièvement votre projet.",
      },
      succes: {
        tag: "Demande reçue",
        titre: "Demande envoyée!",
        texte: "Merci! On vous répond dans les plus brefs délais. Pour un besoin urgent, appelez-nous directement.",
        bouton: "Envoyer une autre demande",
      },
      erreur: "Un problème est survenu lors de l'envoi. Réessayez, ou appelez-nous directement :",
    },
    footer: { coordonnees: "Coordonnées", liens: "Liens rapides" },
  },
  en: {
    nav: { services: "Services", realisations: "Our Work", processus: "Process", contact: "Contact" },
    cta: { soumission: "Free quote", demander: "Request a free quote", appeler: "Call now", appelerCourt: "Call", envoyer: "Send request", envoi: "Sending..." },
    hero: {
      tagline: ["Gatineau · Ottawa", "Residential + Commercial"],
      titre: ["Durable paving,", "clean finish,", "local service."],
    },
    ticker: [
      "Local company · Gatineau + Ottawa",
      "RBQ Licence 2264 4405 35",
      "Fast quotes",
      "Professional equipment",
      "Residential and commercial work",
      "Direct, simple service",
      "Clean, long-lasting finish",
    ],
    services: {
      eyebrow: "Services",
      titre: "Everything for your asphalt work",
      savoirPlus: "Learn more",
      items: [
        ["Residential paving", "Clean, durable asphalt driveways built for our climate."],
        ["Commercial paving", "Parking lots, commercial entrances and surfaces built for heavy use."],
        ["Asphalt repair", "Fixing damaged areas, potholes, sinking and worn surfaces."],
        ["Resurfacing", "Restoring a clean, uniform surface on existing pavement when possible."],
        ["Parking lots", "Preparation, grading and paving of residential or commercial parking lots."],
        ["Sealant and cracks", "Preventive protection to extend the life of your asphalt."],
      ] as [string, string][],
    },
    realisations: {
      eyebrow: "Our Work",
      titre: "Clean, solid surfaces ready to use",
      hudLabel: "Project",
      hudRegion: "Gatineau–Ottawa",
      ctaProjet: "Your project here",
    },
    processus: {
      eyebrow: "Process",
      titre: "Simple from first call to final result",
      etapes: [
        { titre: "Quick contact", texte: "Call us or fill out the form, we reply within 24 hours." },
        { titre: "Free assessment", texte: "We visit your site to assess the project, no cost, no commitment." },
        { titre: "Detailed quote", texte: "You get a firm written price, no surprises, no hidden fees." },
        { titre: "Work completed", texte: "Our crew completes the work on the agreed date with professional equipment." },
        { titre: "Lasting result", texte: "Paving built to last, with maintenance tips to protect your investment." },
      ],
    },
    avis: { eyebrow: "Client reviews", titre: "What our clients say" },
    soumission: {
      eyebrow: "Free quote",
      titre: "Book your project now.",
      heures: "Monday to Friday, 7 am to 5 pm",
      form: {
        nom: "Name", nomPh: "Your name",
        tel: "Phone", telPh: "(819) 000-0000",
        email: "Email", emailPh: "email@example.com",
        ville: "City", villePh: "Gatineau, Ottawa, Aylmer...",
        type: "Project type",
        options: ["Residential driveway", "Commercial parking lot", "Asphalt repair", "Sealant / cracks", "Other project"],
        message: "Message", messagePh: "Briefly describe your project.",
      },
      succes: {
        tag: "Request received",
        titre: "Request sent!",
        texte: "Thank you! We'll get back to you as soon as possible. For urgent needs, call us directly.",
        bouton: "Send another request",
      },
      erreur: "Something went wrong. Try again, or call us directly:",
    },
    footer: { coordonnees: "Contact info", liens: "Quick links" },
  },
} as const;

/* Avis réels Google : identiques dans les deux langues */
const reviews: [string, string][] = [
  ["Alexandre Gaudette", "Excellent service very organize good quality."],
  ["Maurice Basstrap 2MM", "Les chauffeurs de semi-remorque ont une conduite remarquable et une courtoisie remarquable avec un professionnalisme à son meilleur."],
  ["Reggy Dubourg", "It a good commercial paving company."],
];

const googleReviewsUrl =
  "https://www.google.com/search?q=pavage+inter+cit%C3%A9&oq=pava&gs_lcrp=EgRlZGdlKgkIABBFGDsY-QcyCQgAEEUYOxj5BzIPCAEQABhDGLEDGIAEGIoFMg8IAhAAGEMYsQMYgAQYigUyDAgDEAAYQxiABBiKBTIMCAQQABhDGIAEGIoFMgcIBRAAGIAEMgcIBhAAGIAEMgYIBxBFGEEyBggIEEUYPNIBBzk5MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&source=chrome.ob#lrd=0x4cce02faa11d806d:0xa678b41e58a9af57,1,,,,";

/* ---------- Styles globaux ---------- */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

      :root {
        --asphalt: #0B0B0D;
        --charcoal: #131316;
        --gravel: #1C1C20;
        --line: rgba(255,255,255,0.08);
        --safety: #FF7A00;
        --safety-hot: #FF8F26;
      }

      html { scroll-behavior: smooth; }

      .font-display {
        font-family: 'Oswald', 'Arial Narrow', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.01em;
      }
      .font-mono-tech {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      .tx-asphalt {
        background-image:
          radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
          radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 3px 3px, 7px 7px;
        background-position: 0 0, 2px 3px;
      }

      .tx-grid {
        background-image:
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
        background-size: 56px 56px;
        mask-image: radial-gradient(ellipse 90% 80% at 30% 20%, black 30%, transparent 75%);
        -webkit-mask-image: radial-gradient(ellipse 90% 80% at 30% 20%, black 30%, transparent 75%);
        animation: grid-pan 40s linear infinite;
      }
      @keyframes grid-pan {
        from { background-position: 0 0, 0 0; }
        to { background-position: 56px 56px, 56px 56px; }
      }

      .road-line {
        height: 4px;
        width: 120px;
        margin-top: 14px;
        background-image: linear-gradient(90deg, var(--safety) 0 22px, transparent 22px 34px);
        background-size: 34px 4px;
        background-repeat: repeat-x;
        clip-path: inset(0 100% 0 0);
        transition: clip-path 900ms cubic-bezier(0.22, 1, 0.36, 1) 150ms;
      }
      .rv-in .road-line { clip-path: inset(0 0 0 0); }
      .road-line-static { clip-path: inset(0 0 0 0); }

      [data-reveal] {
        opacity: 0;
        transform: translateY(18px);
        transition: opacity 500ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      [data-reveal].rv-in { opacity: 1; transform: translateY(0); }
      [data-reveal][data-reveal-delay="1"] { transition-delay: 90ms; }
      [data-reveal][data-reveal-delay="2"] { transition-delay: 180ms; }
      [data-reveal][data-reveal-delay="3"] { transition-delay: 270ms; }
      [data-reveal][data-reveal-delay="4"] { transition-delay: 360ms; }

      @keyframes ticker {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .ticker-track {
        display: flex;
        width: max-content;
        animation: ticker 32s linear infinite;
      }
      .ticker-track:hover { animation-play-state: paused; }

      .bracket-card { position: relative; }
      .bracket-card::before,
      .bracket-card::after {
        content: "";
        position: absolute;
        width: 18px; height: 18px;
        border: 2px solid var(--safety);
        opacity: 0;
        transition: opacity 250ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
        pointer-events: none;
      }
      .bracket-card::before {
        top: -2px; left: -2px;
        border-right: none; border-bottom: none;
        transform: translate(6px, 6px);
      }
      .bracket-card::after {
        bottom: -2px; right: -2px;
        border-left: none; border-top: none;
        transform: translate(-6px, -6px);
      }
      .bracket-card:hover::before,
      .bracket-card:hover::after,
      .bracket-card:focus-within::before,
      .bracket-card:focus-within::after {
        opacity: 1;
        transform: translate(0, 0);
      }

      .photo-card { position: relative; perspective: 800px; }
      .photo-card img {
        transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1), filter 450ms ease;
      }
      .photo-card:hover img {
        transform: scale(1.06);
        filter: saturate(1.12) contrast(1.06);
      }
      .photo-hud {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 14px 16px;
        background: linear-gradient(to top, rgba(11,11,13,0.75), transparent 45%);
        opacity: 0;
        transition: opacity 300ms ease;
        pointer-events: none;
      }
      .photo-card:hover .photo-hud { opacity: 1; }
      .photo-hud .hud-cross {
        position: absolute;
        top: 14px; right: 16px;
        width: 16px; height: 16px;
      }
      .photo-hud .hud-cross::before,
      .photo-hud .hud-cross::after {
        content: "";
        position: absolute;
        background: var(--safety);
      }
      .photo-hud .hud-cross::before { top: 7px; left: 0; width: 16px; height: 2px; }
      .photo-hud .hud-cross::after { top: 0; left: 7px; width: 2px; height: 16px; }

      .cta-sheen { position: relative; overflow: hidden; }
      .cta-sheen::after {
        content: "";
        position: absolute;
        top: 0; bottom: 0;
        left: -80%;
        width: 50%;
        background: linear-gradient(105deg, transparent, rgba(255,255,255,0.35), transparent);
        transform: skewX(-18deg);
        transition: left 500ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .cta-sheen:hover::after { left: 130%; }

      .cta-arrow {
        display: inline-block;
        transform: translateY(-0.09em);
      }

      @keyframes success-pop {
        0% { transform: scale(0.6); opacity: 0; }
        70% { transform: scale(1.08); }
        100% { transform: scale(1); opacity: 1; }
      }
      .success-check { animation: success-pop 450ms cubic-bezier(0.22, 1, 0.36, 1) both; }

      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        [data-reveal] { opacity: 1; transform: none; transition: none; }
        .road-line { clip-path: inset(0 0 0 0); transition: none; }
        .ticker-track { animation: none; flex-wrap: wrap; }
        .tx-grid { animation: none; }
        .photo-card:hover img { transform: none; }
        .cta-sheen::after { display: none; }
        .bracket-card::before, .bracket-card::after { transition: none; }
        .success-check { animation: none; }
      }
    `}</style>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  index,
}: {
  eyebrow: React.ReactNode;
  title: string;
  text?: string;
  index?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center" data-reveal>
      <p className="font-mono-tech mb-3 text-xs font-semibold text-[var(--safety)]">
        {index && <span className="mr-3 text-zinc-600">[{index}]</span>}
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold leading-[1.02] text-white md:text-6xl">{title}</h2>
      <div className="road-line mx-auto" aria-hidden="true" />
      {text && <p className="mt-6 text-lg leading-8 text-zinc-400">{text}</p>}
    </div>
  );
}

function Logo() {
  return (
    <img
      src="/images/PIC Logo (2).png"
      alt="Pavage Inter Cité"
      className="h-20 max-w-[180px] w-auto object-contain md:h-16"
    />
  );
}

/* ---------- Formulaire de soumission avec envoi réel ---------- */
function QuoteForm({ t, isFr }: { t: (typeof T)["fr"] | (typeof T)["en"]; isFr: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    /* Anti-spam : si le champ caché est rempli, c'est un bot */
    if (data.get("botcheck")) return;

    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", isFr ? "Nouvelle demande de soumission - Pavage Inter Cité" : "New quote request - Pavage Inter Cité");
    data.append("from_name", "Site web Pavage Inter Cité");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[560px] flex-col items-center justify-center border border-[var(--line)] bg-white p-8 text-center text-zinc-950 shadow-2xl md:p-12"
        role="status"
      >
        <div className="success-check flex h-16 w-16 items-center justify-center bg-[var(--safety)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="black" strokeWidth="3" strokeLinecap="square" />
          </svg>
        </div>
        <p className="font-mono-tech mt-6 text-xs font-semibold text-[var(--safety)]">{t.soumission.succes.tag}</p>
        <h3 className="font-display mt-2 text-4xl font-bold text-zinc-950">{t.soumission.succes.titre}</h3>
        <div className="road-line road-line-static mx-auto" aria-hidden="true" />
        <p className="mt-6 max-w-md leading-7 text-zinc-600">{t.soumission.succes.texte}</p>
        <a
          href={company.phoneHref}
          className="font-display mt-4 text-lg font-bold text-[var(--safety)] transition-colors duration-200 hover:text-[var(--safety-hot)]"
        >
          {company.phone}
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border border-zinc-300 px-6 py-3 font-display text-sm font-bold tracking-wider text-zinc-700 transition-colors duration-200 hover:border-[var(--safety)] hover:text-[var(--safety)]"
        >
          {t.soumission.succes.bouton}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[var(--line)] bg-white p-4 text-zinc-950 shadow-2xl md:p-8"
    >
      {/* Champ anti-spam invisible */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold">{t.soumission.form.nom}</span>
          <input
            name="nom"
            required
            className="w-full border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition-colors duration-200 focus:border-[var(--safety)]"
            placeholder={t.soumission.form.nomPh}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">{t.soumission.form.tel}</span>
          <input
            name="telephone"
            type="tel"
            required
            className="w-full border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition-colors duration-200 focus:border-[var(--safety)]"
            placeholder={t.soumission.form.telPh}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">{t.soumission.form.email}</span>
          <input
            name="email"
            type="email"
            className="w-full border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition-colors duration-200 focus:border-[var(--safety)]"
            placeholder={t.soumission.form.emailPh}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">{t.soumission.form.ville}</span>
          <input
            name="ville"
            className="w-full border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition-colors duration-200 focus:border-[var(--safety)]"
            placeholder={t.soumission.form.villePh}
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-bold">{t.soumission.form.type}</span>
          <div className="relative">
            <select
              name="type"
              className="w-full appearance-none border border-zinc-200 bg-zinc-50 px-4 py-4 pr-12 outline-none transition-colors duration-200 focus:border-[var(--safety)]"
            >
              {t.soumission.form.options.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black">▼</div>
          </div>
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-bold">{t.soumission.form.message}</span>
          <textarea
            name="message"
            className="min-h-32 w-full border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition-colors duration-200 focus:border-[var(--safety)]"
            placeholder={t.soumission.form.messagePh}
          />
        </label>
      </div>

      {status === "error" && (
        <div role="alert" className="mt-5 border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          {t.soumission.erreur}{" "}
          <a href={company.phoneHref} className="font-bold underline">
            {company.phone}
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="cta-sheen mt-5 w-full bg-[var(--safety)] px-6 py-4 font-display text-sm font-bold tracking-wider text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--safety-hot)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? (
          t.cta.envoi
        ) : (
          <>
            {t.cta.envoyer} <span className="cta-arrow">→</span>
          </>
        )}
      </button>
    </form>
  );
}

export default function Site({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const t = T[lang];
  const isFr = lang === "fr";

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("rv-in");
              io!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      els.forEach((el) => io!.observe(el));
    } else {
      els.forEach((el) => el.classList.add("rv-in"));
    }
    return () => {
      io?.disconnect();
    };
  }, []);

  const langLink = (target: "fr" | "en") => {
    const active = lang === target;
    return (
      <a
        href={target === "fr" ? "/" : "/en"}
        aria-current={active ? "page" : undefined}
        className={`text-sm font-bold transition-colors duration-200 ${
          active ? "text-[var(--safety)]" : "text-white hover:text-[var(--safety)]"
        }`}
      >
        {target.toUpperCase()}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--asphalt)] text-zinc-100">
      <GlobalStyles />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(11,11,13,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#accueil">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 font-display text-sm font-semibold tracking-wider text-zinc-400 lg:flex">
            <a href="#services" className="transition-colors duration-200 hover:text-white">{t.nav.services}</a>
            <a href="#realisations" className="transition-colors duration-200 hover:text-white">{t.nav.realisations}</a>
            <a href="#processus" className="transition-colors duration-200 hover:text-white">{t.nav.processus}</a>
            <a href="#contact" className="transition-colors duration-200 hover:text-white">{t.nav.contact}</a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2">
              {langLink("fr")}
              <span className="text-zinc-600">|</span>
              {langLink("en")}
            </div>

            <a
              href={company.phoneHref}
              className="font-display rounded-none border border-[var(--line)] px-4 py-3 text-sm font-bold tracking-wider text-white transition-colors duration-200 hover:border-[var(--safety)] hover:text-[var(--safety)]"
            >
              {company.phone}
            </a>

            <a
              href="#soumission"
              className="cta-sheen rounded-none bg-[var(--safety)] px-5 py-3 font-display text-sm font-bold tracking-wider text-black transition-colors duration-200 hover:bg-[var(--safety-hot)]"
            >
              {t.cta.soumission}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {langLink("fr")}
            <span className="text-zinc-600">|</span>
            {langLink("en")}
          </div>
          <a
            href={company.phoneHref}
            className="rounded-none bg-[var(--safety)] px-4 py-3 font-display text-sm font-bold text-black md:hidden"
          >
            {t.cta.appelerCourt}
          </a>
        </div>
      </header>

      <main id="accueil">
        {/* ---------- HERO ---------- */}
        <section className="relative isolate overflow-hidden bg-[var(--asphalt)] pt-28 text-white md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,122,0,0.16),transparent_36%),linear-gradient(90deg,rgba(11,11,13,0.98),rgba(11,11,13,0.86),rgba(11,11,13,0.55))]" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            >
              <source src="/videos/pavagevideo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32">
            <div data-reveal>
              <p className="font-mono-tech mb-5 text-xs text-zinc-500">
                {t.hero.tagline[0]} <span className="mx-2 text-[var(--safety)]">//</span> {t.hero.tagline[1]}
              </p>
              <h1 className="font-display max-w-4xl text-6xl font-bold leading-[0.95] md:text-8xl">
                {t.hero.titre[0]}
                <br />
                {t.hero.titre[1]}
                <br />
                <span className="text-[var(--safety)]">{t.hero.titre[2]}</span>
              </h1>
              <div className="road-line" aria-hidden="true" />

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#soumission"
                  className="cta-sheen inline-flex items-center justify-center rounded-none bg-[var(--safety)] px-7 py-4 font-display text-sm font-bold tracking-wider text-black shadow-[0_10px_40px_rgba(255,122,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--safety-hot)]"
                >
                  {t.cta.demander} <span className="cta-arrow">→</span>
                </a>

                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 px-7 py-4 font-display text-sm font-bold tracking-wider text-white backdrop-blur transition-colors duration-200 hover:border-[var(--safety)] hover:text-[var(--safety)]"
                >
                  {t.cta.appeler}
                </a>
              </div>
            </div>

            <div className="relative" />
          </div>
        </section>

        {/* ---------- BANDEAU CONFIANCE ---------- */}
        <section
          aria-label={isFr ? "Pourquoi nous choisir" : "Why choose us"}
          className="overflow-hidden border-y border-[var(--line)] bg-[var(--charcoal)] py-4"
        >
          <div className="ticker-track">
            {[...t.ticker, ...t.ticker].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-mono-tech mx-6 flex shrink-0 items-center gap-3 text-xs font-semibold text-zinc-400"
              >
                <span className="h-2 w-2 bg-[var(--safety)]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section id="services" className="tx-asphalt bg-[var(--asphalt)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader index="01" eyebrow={t.services.eyebrow} title={t.services.titre} />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map(([title, text], index) => (
                <div
                  key={title}
                  data-reveal
                  data-reveal-delay={String(index % 3)}
                  className="bracket-card group border border-[var(--line)] bg-[var(--charcoal)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--safety)]/60 hover:bg-[var(--gravel)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-[var(--safety)] font-display text-lg font-bold text-black">
                      {index + 1}
                    </div>
                    <span className="font-mono-tech text-[10px] text-zinc-600">SRV-0{index + 1}</span>
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 min-h-[84px] leading-7 text-zinc-400">{text}</p>
                  <a
                    href="#soumission"
                    className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold tracking-wider text-[var(--safety)] transition-transform duration-200 group-hover:translate-x-1"
                  >
                    {t.services.savoirPlus} <span className="cta-arrow">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- RÉALISATIONS ---------- */}
        <section id="realisations" className="bg-[var(--charcoal)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader index="02" eyebrow={t.realisations.eyebrow} title={t.realisations.titre} />
            <div className="grid gap-5 md:grid-cols-3">
              {[
                "/images/pavage5.jpg",
                "/images/pavage2.jpg",
                "/images/pavage3.jpg",
              ].map((src, i) => (
                <div
                  key={src}
                  data-reveal
                  data-reveal-delay={String(i)}
                  className={`photo-card group aspect-[4/3] overflow-hidden bg-zinc-900 ${i === 1 ? "md:mt-10" : ""}`}
                >
                  <img
                    src={src}
                    alt={isFr ? `Projet de pavage ${i + 1}` : `Paving project ${i + 1}`}
                    className="h-80 w-full object-cover"
                  />
                  <div className="photo-hud" aria-hidden="true">
                    <span className="hud-cross" />
                    <span className="font-mono-tech text-[10px] text-zinc-300">
                      {t.realisations.hudLabel} <span className="text-[var(--safety)]">//</span> {t.realisations.hudRegion}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[var(--safety)]">PIC-{String(i + 1).padStart(3, "0")}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center" data-reveal>
              <a
                href="#soumission"
                className="cta-sheen inline-flex items-center justify-center rounded-none bg-[var(--safety)] px-7 py-4 font-display text-sm font-bold tracking-wider text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--safety-hot)]"
              >
                {t.realisations.ctaProjet} <span className="cta-arrow">→</span> {t.cta.soumission}
              </a>
            </div>
          </div>
        </section>

        {/* ---------- PROCESSUS ---------- */}
        <section id="processus" className="tx-asphalt bg-[var(--asphalt)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader index="03" eyebrow={t.processus.eyebrow} title={t.processus.titre} />
            <div className="grid gap-4 md:grid-cols-5">
              {t.processus.etapes.map((step, index) => (
                <div
                  key={step.titre}
                  data-reveal
                  data-reveal-delay={String(index % 5 > 3 ? 3 : index % 5)}
                  className="bracket-card border border-[var(--line)] bg-[var(--charcoal)] p-6 transition-colors duration-300 hover:border-[var(--safety)]/60"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[var(--safety)] font-display text-lg font-bold text-black">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{step.titre}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{step.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- AVIS ---------- */}
        <section className="bg-[var(--charcoal)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader
              index="04"
              eyebrow={
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[var(--safety-hot)]"
                >
                  {t.avis.eyebrow}
                </a>
              }
              title={t.avis.titre}
            />
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map(([name, text], i) => (
                <div
                  key={name}
                  data-reveal
                  data-reveal-delay={String(i)}
                  className="bracket-card border border-[var(--line)] bg-[var(--gravel)] p-7 transition-colors duration-300 hover:border-[var(--safety)]/50"
                >
                  <div className="mb-4 text-xl text-[var(--safety)]">★★★★★</div>
                  <p className="leading-7 text-zinc-300">“{text}”</p>
                  <p className="font-display mt-5 font-semibold tracking-wide text-white">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SOUMISSION ---------- */}
        <section id="soumission" className="tx-asphalt relative isolate overflow-hidden bg-[var(--asphalt)] py-20 text-white md:py-28">
          <div className="tx-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <p className="font-mono-tech mb-3 text-xs font-semibold text-[var(--safety)]">
                <span className="mr-3 text-zinc-600">[05]</span>{t.soumission.eyebrow}
              </p>
              <h2 className="font-display text-5xl font-bold leading-[0.98] md:text-6xl">
                {t.soumission.titre}
              </h2>
              <div className="road-line" aria-hidden="true" />
              <div className="mt-9 space-y-4">
                <a
                  href={company.phoneHref}
                  className="flex items-center justify-between border border-[var(--line)] bg-white/5 p-4 text-zinc-300 transition-colors duration-200 hover:border-[var(--safety)]/60 hover:text-[var(--safety)]"
                >
                  <span className="text-base">{company.phone}</span>
                  <span className="font-mono-tech text-[10px] text-zinc-600">TEL</span>
                </a>

                <a
                  href="https://maps.google.com/?q=485+Rue+de+Vernon+Gatineau+QC+J9J+3K4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-[var(--line)] bg-white/5 p-4 text-zinc-300 transition-colors duration-200 hover:border-[var(--safety)]/60 hover:text-[var(--safety)]"
                >
                  <span>{company.address}</span>
                  <span className="font-mono-tech text-[10px] text-zinc-600">ADR</span>
                </a>

                <div className="flex items-center justify-between border border-[var(--line)] bg-white/5 p-4 text-zinc-300">
                  <span>{t.soumission.heures}</span>
                  <span className="font-mono-tech text-[10px] text-zinc-600">HRS</span>
                </div>

                <div className="flex items-center justify-between border border-[var(--line)] bg-white/5 p-4 text-zinc-300">
                  <span>{isFr ? "Licence RBQ : 2264 4405 35" : "RBQ Licence: 2264 4405 35"}</span>
                  <span className="font-mono-tech text-[10px] text-zinc-600">RBQ</span>
                </div>
              </div>
            </div>

            <div data-reveal data-reveal-delay="1">
              <QuoteForm t={t} isFr={isFr} />
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[var(--line)] bg-black py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-4 md:px-8">
          <div className="md:col-span-2">
            <div className="mb-2">
              <Logo />
            </div>
            <p className="font-mono-tech mt-3 text-[10px] text-zinc-600">
              Pavage Inter Cité <span className="text-[var(--safety)]">//</span> Gatineau · Ottawa <span className="text-[var(--safety)]">//</span> RBQ 2264 4405 35
            </p>
          </div>
          <div>
            <p className="font-display mb-4 font-semibold tracking-wider">{t.footer.coordonnees}</p>
            <div className="space-y-3 text-sm text-zinc-500">
              <p>{company.phone}</p>
              <p>{company.address}</p>
            </div>
          </div>
          <div>
            <p className="font-display mb-4 font-semibold tracking-wider">{t.footer.liens}</p>
            <div className="space-y-3 text-sm text-zinc-500">
              <p><a href="#services" className="transition-colors duration-200 hover:text-[var(--safety)]">{t.nav.services}</a></p>
              <p><a href="#realisations" className="transition-colors duration-200 hover:text-[var(--safety)]">{t.nav.realisations}</a></p>
              <p><a href="#soumission" className="transition-colors duration-200 hover:text-[var(--safety)]">{t.cta.soumission}</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}