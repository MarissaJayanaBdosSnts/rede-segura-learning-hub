import { createFileRoute, Link } from "@tanstack/react-router";
import { materiais } from "@/lib/content";
import { meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/materiais/")({
  head: () => meta("Materiais educativos — Rede Segura", "Trilhas sobre doxxing, discurso de ódio e deepfakes, com vídeos, guias em PDF e referências."),
  component: () => (
    <>
      <PageHero tag="materiais" title="Materiais educativos">Escolha uma trilha para aprender, se prevenir e saber o que fazer.</PageHero>
      <Section title="Trilhas">
        <div className="grid gap-6 md:grid-cols-3">
          {materiais.map((m) => (
            <Link key={m.slug} to="/materiais/$slug" params={{ slug: m.slug }} className="rounded-xl border bg-card p-6 transition hover:border-primary">
              <span className="font-mono text-4xl font-bold text-primary">{m.n}</span>
              <h3 className="mt-4 text-xl font-bold">{m.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{m.resumo}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  ),
});
