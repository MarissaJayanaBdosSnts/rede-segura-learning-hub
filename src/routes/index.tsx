import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Megaphone, Shield, Users } from "lucide-react";
import { materiais } from "@/lib/content";
import { meta, Section } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("Rede Segura — Segurança digital para pessoas trans e LGBTQIA+", "Portal educativo sobre privacidade, doxxing, discurso de ódio e deepfakes, com orientações de proteção e denúncia."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="grid-bg border-b">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-sm text-accent">Educação em Segurança Digital e Privacidade</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Portal <span className="text-primary">Rede Segura</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Informação e acolhimento para pessoas trans, LGBTQIA+ e todo mundo que quer se proteger da exposição de dados e da violência na internet.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/materiais" className="glow rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground">Começar a aprender</Link>
            <Link to="/denuncias" className="rounded-lg border px-6 py-3 font-semibold hover:bg-secondary">Preciso de ajuda agora</Link>
          </div>
        </div>
      </section>

      <Section title="Três trilhas educativas">
        <div className="grid gap-6 md:grid-cols-3">
          {materiais.map((m) => (
            <Link key={m.slug} to="/materiais/$slug" params={{ slug: m.slug }} className="group rounded-xl border bg-card p-6 transition hover:border-primary">
              <span className="font-mono text-4xl font-bold text-primary">{m.n}</span>
              <h3 className="mt-4 text-xl font-bold">{m.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{m.resumo}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">Acessar <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Explore o portal">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { to: "/protecao" as const, icon: Shield, t: "Central de Proteção Digital", d: "Configurações de privacidade, senhas, localização e fotos." },
            { to: "/denuncias" as const, icon: Megaphone, t: "Central de Denúncias e Ajuda", d: "Canais oficiais e ferramentas das plataformas." },
            { to: "/sobre" as const, icon: Users, t: "Sobre o projeto", d: "Por que o Rede Segura existe e para quem." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="rounded-xl border bg-card p-6 transition hover:border-accent">
              <c.icon className="h-8 w-8 text-accent" aria-hidden />
              <h3 className="mt-4 text-lg font-bold">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
