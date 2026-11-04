import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberSafety — Portal Rede Segura" },
      { name: "description", content: "Portal de educação em segurança digital: vídeos, guias em PDF e orientações de denúncia." },
      { property: "og:title", content: "CyberSafety — Portal Rede Segura" },
      { property: "og:description", content: "Aprenda a se proteger na internet com vídeos, guias e canais de ajuda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const materiais = [
  { n: "01", titulo: "Golpes e Phishing", desc: "Como reconhecer mensagens falsas, links suspeitos e golpes por WhatsApp e e-mail." },
  { n: "02", titulo: "Senhas e Contas", desc: "Senhas fortes, autenticação em dois fatores e como proteger suas contas." },
  { n: "03", titulo: "Privacidade nas Redes", desc: "O que não compartilhar, configurações de privacidade e cuidado com dados pessoais." },
];

const passos = [
  "Não apague nada: guarde prints, links, e-mails e conversas.",
  "Anote data, horário e o perfil ou número envolvido.",
  "Se envolver banco ou Pix, ligue imediatamente para seu banco.",
  "Registre um boletim de ocorrência (pode ser online).",
  "Denuncie o conteúdo nos canais oficiais abaixo.",
];

const canais = [
  { nome: "SaferNet Brasil", info: "Denúncia de crimes na internet", url: "https://new.safernet.org.br/denuncie" },
  { nome: "Delegacia Virtual", info: "Boletim de ocorrência online do seu estado", url: "https://www.gov.br/pt-br/servicos/registrar-ocorrencia-policial" },
  { nome: "CERT.br", info: "Cartilha de segurança para internet", url: "https://cartilha.cert.br" },
  { nome: "Disque 100", info: "Direitos humanos e proteção de crianças", url: "https://www.gov.br/mdh/pt-br/disque100" },
  { nome: "Polícia — 190", info: "Emergências e ameaças imediatas", url: "tel:190" },
  { nome: "ANPD", info: "Vazamento e uso indevido de dados pessoais", url: "https://www.gov.br/anpd" },
];

function Section({ id, tag, title, children }: { id: string; tag: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-sm text-primary">// {tag}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono font-semibold text-primary">&gt; CyberSafety_</a>
          <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#materiais" className="hover:text-foreground">Materiais</a>
            <a href="#videos" className="hover:text-foreground">Vídeos</a>
            <a href="#guias" className="hover:text-foreground">Guias</a>
            <a href="#denuncia" className="hover:text-foreground">Denúncia</a>
            <a href="#ajuda" className="hover:text-foreground">Ajuda</a>
          </div>
        </nav>
      </header>

      <section className="grid-bg border-b">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="font-mono text-sm text-accent">Projeto de Redes de Computadores</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Portal <span className="text-primary">Rede Segura</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Educação em segurança digital para todos: aprenda a identificar golpes, proteger suas contas e saber onde pedir ajuda.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#materiais" className="glow rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground">Começar a aprender</a>
            <a href="#denuncia" className="rounded-lg border px-6 py-3 font-semibold hover:bg-secondary">Fui vítima, e agora?</a>
          </div>
        </div>
      </section>

      <Section id="materiais" tag="materiais" title="Três trilhas educativas">
        <div className="grid gap-6 md:grid-cols-3">
          {materiais.map((m) => (
            <div key={m.n} className="rounded-xl border bg-card p-6 transition hover:border-primary">
              <span className="font-mono text-4xl font-bold text-primary">{m.n}</span>
              <h3 className="mt-4 text-xl font-bold">{m.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="videos" tag="vídeos" title="Assista e aprenda">
        <div className="grid gap-6 md:grid-cols-3">
          {materiais.map((m) => (
            <div key={m.n} className="overflow-hidden rounded-xl border bg-card">
              <div className="grid-bg flex aspect-video items-center justify-center bg-muted">
                <span className="font-mono text-sm text-muted-foreground">▶ vídeo em breve</span>
              </div>
              <p className="p-4 font-semibold">{m.titulo}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="guias" tag="guias" title="Guias em PDF para consulta">
        <div className="grid gap-4 md:grid-cols-3">
          {materiais.map((m) => (
            <div key={m.n} className="flex items-center justify-between rounded-xl border bg-card p-5">
              <div>
                <p className="font-semibold">Guia: {m.titulo}</p>
                <p className="font-mono text-xs text-muted-foreground">PDF · em breve</p>
              </div>
              <span className="rounded-md bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">↓ PDF</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="denuncia" tag="denúncia" title="Sofreu um golpe ou crime digital?">
        <ol className="space-y-4">
          {passos.map((p, i) => (
            <li key={i} className="flex gap-4 rounded-xl border bg-card p-5">
              <span className="font-mono font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="ajuda" tag="ajuda" title="Canais de proteção e ajuda">
        <div className="grid gap-4 md:grid-cols-3">
          {canais.map((c) => (
            <a key={c.nome} href={c.url} target="_blank" rel="noreferrer" className="rounded-xl border bg-card p-5 transition hover:border-primary">
              <p className="font-bold">{c.nome} ↗</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.info}</p>
            </a>
          ))}
        </div>
      </Section>

      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        CyberSafety · Portal Rede Segura · Projeto de Redes de Computadores
      </footer>
    </div>
  );
}
