import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, FileText, LifeBuoy, PlayCircle } from "lucide-react";
import { materiais } from "@/lib/content";
import { meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/materiais/$slug")({
  loader: ({ params }) => {
    const m = materiais.find((x) => x.slug === params.slug);
    if (!m) throw notFound();
    return m;
  },
  head: ({ loaderData }) =>
    loaderData ? meta(`${loaderData.titulo} — Rede Segura`, loaderData.resumo) : { meta: [{ title: "Material não encontrado — Rede Segura" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <Section title="Material não encontrado">
      <Link to="/materiais" className="text-primary underline">Ver todos os materiais</Link>
    </Section>
  ),
  component: MaterialPage,
});

function List({ items, icon: Icon }: { items: string[]; icon: typeof CheckCircle2 }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3 rounded-lg border bg-card p-4">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden /> <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function MaterialPage() {
  const m = Route.useLoaderData();
  return (
    <>
      <PageHero tag={`material ${m.n}`} title={m.titulo}>{m.intro}</PageHero>

      <Section title="Entenda o tema">
        <div className="grid gap-4 md:grid-cols-2">
          {m.topicos.map((t) => (
            <div key={t.titulo} className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-bold text-primary">{t.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{t.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exemplo">
        <div className="rounded-xl border border-dashed border-accent bg-card p-6">
          <p className="flex items-center gap-2 font-mono text-sm text-accent"><AlertTriangle className="h-4 w-4" aria-hidden /> {m.simulacao.titulo}</p>
          <p className="mt-3">{m.simulacao.texto}</p>
          <p className="mt-3 text-xs text-muted-foreground">Personagens e situação criados apenas para fins educativos.</p>
        </div>
      </Section>

      <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
        <Section title="Como se prevenir"><List items={m.prevencao} icon={CheckCircle2} /></Section>
        <Section title="Se você for vítima"><List items={m.vitima} icon={LifeBuoy} /></Section>
      </div>

      <Section title="Vídeo e guia em PDF">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border bg-card">
            {m.videoUrl ? (
              <iframe className="aspect-video w-full" src={m.videoUrl} title={`Vídeo: ${m.titulo}`} allowFullScreen />
            ) : (
              <div className="grid-bg flex aspect-video flex-col items-center justify-center gap-2 bg-muted text-muted-foreground">
                <PlayCircle className="h-10 w-10" aria-hidden /> Vídeo educativo em breve
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center rounded-xl border bg-card p-6">
            <FileText className="h-10 w-10 text-primary" aria-hidden />
            <p className="mt-3 text-lg font-bold">Guia: {m.titulo}</p>
            {m.pdfUrl ? (
              <a href={m.pdfUrl} target="_blank" rel="noreferrer" className="mt-4 w-fit rounded-lg bg-primary px-5 py-2 font-semibold text-primary-foreground">Baixar PDF</a>
            ) : (
              <p className="mt-2 text-muted-foreground">Guia em PDF em breve.</p>
            )}
          </div>
        </div>
      </Section>

      <Section title="Referências">
        <ul className="list-disc space-y-2 pl-6">
          {m.referencias.map((r) => (
            <li key={r.url}><a href={r.url} target="_blank" rel="noreferrer" className="text-accent underline underline-offset-4">{r.label}</a></li>
          ))}
        </ul>
      </Section>
    </>
  );
}
