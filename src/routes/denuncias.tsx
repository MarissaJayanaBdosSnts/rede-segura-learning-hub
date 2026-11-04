import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { canais } from "@/lib/content";
import { meta, PageHero, Section } from "@/components/site";

const passos = [
  "Não apague nada: guarde prints com data, hora e link.",
  "Anote o perfil, número ou página envolvida.",
  "Denuncie o conteúdo na própria plataforma.",
  "Procure os canais oficiais abaixo e registre boletim de ocorrência.",
  "Em caso de risco imediato, ligue 190.",
];

export const Route = createFileRoute("/denuncias")({
  head: () => meta("Central de Denúncias e Ajuda — Rede Segura", "SaferNet, Disque 100, Ouvidoria de Direitos Humanos, ANPD e ferramentas de denúncia das redes sociais."),
  component: () => (
    <>
      <PageHero tag="denúncias" title="Central de Denúncias e Ajuda">Você não está só. Veja o que fazer e onde buscar apoio.</PageHero>
      <Section title="Primeiros passos">
        <ol className="space-y-3">
          {passos.map((p, i) => (
            <li key={p} className="flex gap-4 rounded-xl border bg-card p-4">
              <span className="font-mono font-bold text-primary">{String(i + 1).padStart(2, "0")}</span> {p}
            </li>
          ))}
        </ol>
      </Section>
      {canais.map((g) => (
        <Section key={g.grupo} title={g.grupo}>
          <div className="grid gap-4 md:grid-cols-3">
            {g.itens.map((c) => (
              <a key={c.nome} href={c.url} target="_blank" rel="noreferrer" className="rounded-xl border bg-card p-5 transition hover:border-primary">
                <p className="flex items-center gap-2 font-bold">{c.nome} <ExternalLink className="h-4 w-4 text-accent" aria-hidden /></p>
                <p className="mt-2 text-sm text-muted-foreground">{c.info}</p>
              </a>
            ))}
          </div>
        </Section>
      ))}
    </>
  ),
});
