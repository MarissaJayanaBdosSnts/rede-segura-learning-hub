import { createFileRoute } from "@tanstack/react-router";
import { Camera, KeyRound, Lock, MapPin, Smartphone, UserRound } from "lucide-react";
import { protecao } from "@/lib/content";
import { meta, PageHero, Section } from "@/components/site";

const icons = { Camera, KeyRound, Lock, MapPin, Smartphone, UserRound };

export const Route = createFileRoute("/protecao")({
  head: () => meta("Central de Proteção Digital — Rede Segura", "Orientações práticas sobre privacidade nas redes, permissões de apps, senhas, localização e fotos."),
  component: () => (
    <>
      <PageHero tag="proteção" title="Central de Proteção Digital">Pequenos ajustes que fazem grande diferença na sua segurança.</PageHero>
      <Section title="Orientações práticas">
        <div className="grid gap-6 md:grid-cols-3">
          {protecao.map((p) => {
            const Icon = icons[p.icon];
            return (
              <div key={p.titulo} className="rounded-xl border bg-card p-6">
                <Icon className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg font-bold">{p.titulo}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  {p.itens.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Fonte: <a href="https://cartilha.cert.br" target="_blank" rel="noreferrer" className="text-accent underline">CERT.br — Cartilha de Segurança para Internet</a>
        </p>
      </Section>
    </>
  ),
});
