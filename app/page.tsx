import React from "react";

const company = {
  name: "Pavage Inter Cité",
  phone: "(819) 595-0550",
  phoneHref: "tel:18195950550",
  address: "485 Rue de Vernon, Gatineau, QC J9J 3K4",
};

const services = [
  ["Pavage résidentiel", "Entrées asphaltées propres, durables et adaptées au climat de l’Outaouais."],
  ["Pavage commercial", "Stationnements, accès commerciaux et surfaces conçues pour un usage intensif."],
  ["Réparation d’asphalte", "Correction de zones abîmées, nids-de-poule, affaissements et surfaces usées."],
  ["Resurfaçage", "Redonner une surface propre et uniforme à un pavage existant lorsque possible."],
  ["Stationnements", "Préparation, nivellement et asphaltage de stationnements résidentiels ou commerciaux."],
  ["Scellant et fissures", "Protection préventive pour prolonger la durée de vie de votre asphalte."],
];

const trustItems = [
  "Entreprise locale en Outaouais",
  "Soumission rapide",
  "Équipement professionnel",
  "Travaux résidentiels et commerciaux",
  "Service direct et simple",
  "Finition propre et durable",
];

const steps = [
  "Contact rapide",
  "Évaluation gratuite",
  "Soumission détaillée",
  "Réalisation des travaux",
  "Résultat durable",
];

const reviews = [
  ["Alexandre Gaudette", "Excellent service very organize good quality."],
  ["Maurice Basstrap 2MM", "Les chauffeurs de semi-remorque ont une conduite remarquable et une courtoisie remarquable avec un professionnalisme à son meilleur."],
  ["Reggy Dubourg", "It a good commercial paving company."],
];

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: React.ReactNode;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-500">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-zinc-950 md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-zinc-600">{text}</p>}
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

export default function PavageInterCiteSite() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#accueil">
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 text-lg font-semibold text-zinc-300 lg:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#realisations" className="hover:text-white">Réalisations</a>
            <a href="#processus" className="hover:text-white">Processus</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={company.phoneHref} className="rounded-full border border-white/15 px-4 py-3 text-sm font-bold text-white hover:bg-white/10">
              ☎️ {company.phone}
            </a>
            <a href="#soumission" className="rounded-full bg-amber-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-amber-600">Soumission gratuite</a>
          </div>

          <a href={company.phoneHref} className="rounded-full bg-amber-500 px-4 py-3 text-sm font-black text-white md:hidden">Appeler</a>
        </div>
      </header>

      <main id="accueil">
        <section className="relative isolate overflow-hidden bg-zinc-950 pt-28 text-white md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(245,158,11,0.22),transparent_34%),linear-gradient(90deg,rgba(9,9,11,0.98),rgba(9,9,11,0.84),rgba(9,9,11,0.55))]" />
            <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 h-full w-full object-cover opacity-35"
>
  <source src="/videos/pavagevideo.mp4" type="video/mp4" />
</video>
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
            <div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
                Pavage durable, finition propre, service local.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300 md:text-xl">
                Pavage résidentiel et commercial à Gatineau et partout en Outaouais.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#soumission" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl shadow-amber-500/20 transition hover:bg-amber-600">
                  Demander une soumission →
                </a>

                <a href={company.phoneHref} className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white hover:text-zinc-950">
                  Appeler maintenant
                </a>
              </div>
            </div>

            <div className="relative">
              <img
              />
            </div>
          </div>
        </section>
        <section id="services" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader
              eyebrow="Services"
              title="Tout pour vos travaux d’asphalte"            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([title, text], index) => (
                <div key={title} className="group rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 transition hover:border-amber-200 hover:bg-white hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-lg font-black text-white shadow-lg shadow-amber-500/20">{index + 1}</div>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 min-h-[84px] leading-7 text-zinc-600">{text}</p>
                  <a href="#soumission" className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-amber-500">
                    En savoir plus →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="realisations" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader
              eyebrow="Réalisations"
              title="Des surfaces propres, solides et prêtes à utiliser"            />
            <div className="grid gap-5 md:grid-cols-3">
              {[
                "/images/pavage1.jpg",
                "/images/pavage2.jpg",
                "/images/pavage3.jpg",
              ].map((src, i) => (
                <div key={src} className={`group aspect-[4/3] overflow-hidden rounded-[2rem] bg-zinc-200 ${i === 1 ? "md:mt-10" : ""}`}>
                  <img src={src} alt="Projet de pavage" className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processus" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader
              eyebrow="Processus"
              title="Simple du premier appel au résultat final"            />
            <div className="grid gap-4 md:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step} className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-lg font-black text-white">{index + 1}</div>
                  <h3 className="font-black">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">Une étape claire pour garder le projet simple et prévisible.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader
  eyebrow={
    <a
      href="https://www.google.com/search?q=pavage+inter+cit%C3%A9&oq=pava&gs_lcrp=EgRlZGdlKgkIABBFGDsY-QcyCQgAEEUYOxj5BzIPCAEQABhDGLEDGIAEGIoFMg8IAhAAGEMYsQMYgAQYigUyDAgDEAAYQxiABBiKBTIMCAQQABhDGIAEGIoFMgcIBRAAGIAEMgcIBhAAGIAEMgYIBxBFGEEyBggIEEUYPNIBBzk5MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&source=chrome.ob#lrd=0x4cce02faa11d806d:0xa678b41e58a9af57,1,,,,"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-amber-600 transition"
    >
      Avis clients
    </a>
  }
  title="Une réputation locale à renforcer"
/>
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map(([name, text]) => (
                <div key={name} className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-xl text-yellow-500">★★★★★</div>
                  <p className="leading-7 text-zinc-700">“{text}”</p>
                  <p className="mt-5 font-black text-zinc-950">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="soumission" className="bg-zinc-950 py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-400">Soumission gratuite</p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">Réservez votre projet maintenant.</h2>
<div className="mt-8 space-y-4">
<a
  href={company.phoneHref}
  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-zinc-300 hover:bg-white/10"
>
  <span className="w-6 text-center">☎️</span>
  <span className="text-base"> {company.phone}</span>
</a>

  <a
    href="https://maps.google.com/?q=485+Rue+de+Vernon+Gatineau+QC+J9J+3K4"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-zinc-300 transition hover:text-amber-400"
  >
    <span className="w-6 text-center">📍</span>
    <span>{company.address}</span>
  </a>

  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-zinc-300">
    <span className="w-6 text-center">🕒</span>
    <span>Lundi au vendredi, 7 h à 17 h</span>
  </div>
</div>
</div>

            <form className="rounded-[2rem] border border-white/10 bg-white p-4 text-zinc-950 shadow-2xl md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block"><span className="mb-2 block text-sm font-bold">Nom</span><input className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none focus:border-amber-500" placeholder="Votre nom" /></label>
                <label className="block"><span className="mb-2 block text-sm font-bold">Téléphone</span><input className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none focus:border-amber-500" placeholder="(819) 000-0000" /></label>
                <label className="block"><span className="mb-2 block text-sm font-bold">Email</span><input className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none focus:border-amber-500" placeholder="email@exemple.com" /></label>
                <label className="block"><span className="mb-2 block text-sm font-bold">Ville</span><input className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none focus:border-amber-500" placeholder="Gatineau, Aylmer, Hull..." /></label>
                <label className="block md:col-span-2"><span className="mb-2 block text-sm font-bold">Type de projet</span><div className="relative">
                  <select className="w-full appearance-none rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 pr-12 outline-none focus:border-amber-500">
                    <option>Entrée résidentielle</option>
                    <option>Stationnement commercial</option>
                    <option>Réparation d’asphalte</option>
                    <option>Scellant / fissures</option>
                    <option>Autre projet</option>
                  </select>
<div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black">
  ▼
</div>
                </div></label>
<label className="block md:col-span-2">
  <span className="mb-2 block text-sm font-bold">Message</span>
  <textarea
    className="min-h-32 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none focus:border-amber-500"
    placeholder="Décrivez brièvement votre projet."
  />
</label>              </div>
              <button type="button" className="mt-5 w-full rounded-full bg-amber-500 px-6 py-4 text-sm font-black uppercase tracking-wide text-white hover:bg-amber-600">
                Envoyer la demande →
              </button>
              <p className="mt-4 text-center text-sm text-zinc-500">Réponse rapide pendant les heures d’ouverture.</p>
            </form>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-black py-4 text-white">
        <div className="mx-auto grid max-w-7xl gap-2 px-4 md:grid-cols-4 md:px-8">
          <div className="md:col-span-2">
            <div className="mb-2">
              <Logo />
            </div>
          </div>
          <div>
            <p className="mb-4 font-black">Coordonnées</p>
            <div className="space-y-3 text-sm text-zinc-400"><p>{company.phone}</p><p>{company.address}</p><p>Gatineau · Outaouais</p></div>
          </div>
          <div>
            <p className="mb-4 font-black">Liens rapides</p>
            <div className="space-y-3 text-sm text-zinc-400"><p><a href="#services" className="hover:text-white">Services</a></p><p><a href="#realisations" className="hover:text-white">Réalisations</a></p><p><a href="#soumission" className="hover:text-white">Soumission gratuite</a></p></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
