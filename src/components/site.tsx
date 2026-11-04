import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/materiais", label: "Materiais" },
  { to: "/protecao", label: "Proteção digital" },
  { to: "/denuncias", label: "Denúncias e ajuda" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Principal">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary">
          <ShieldCheck className="h-6 w-6" aria-hidden /> Rede Segura
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} activeOptions={{ exact: l.to === "/" }} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-primary font-semibold" }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="border-t px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)} className="block py-2 text-muted-foreground">{l.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      Rede Segura — Educação em Segurança Digital e Privacidade para Pessoas Trans e LGBTQIA+ · Projeto de Redes de Computadores
      <p className="mt-2">Em emergência, ligue 190.</p>
    </footer>
  );
}

export function PageHero({ tag, title, children }: { tag: string; title: string; children?: ReactNode }) {
  return (
    <section className="grid-bg border-b">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-sm text-accent">// {tag}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
