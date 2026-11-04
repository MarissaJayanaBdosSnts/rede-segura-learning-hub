import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero, Section } from "@/components/site";

const blocos = [
  { t: "O que é", d: "O Rede Segura é um portal educativo sobre segurança digital e privacidade, com foco em pessoas trans e LGBTQIA+, aberto a toda a população." },
  { t: "Por que foi desenvolvido", d: "Foi criado como projeto da disciplina de Redes de Computadores, para levar conhecimento técnico sobre internet e dados a quem mais sofre com a violência online." },
  { t: "Problema que enfrenta", d: "A exposição de dados pessoais, o discurso de ódio e a manipulação de imagens por IA atingem de forma especial pessoas LGBTQIA+, que muitas vezes não sabem como se proteger ou onde denunciar." },
  { t: "Público-alvo", d: "Pessoas trans e LGBTQIA+, seus familiares e aliados, educadores e qualquer pessoa que use a internet." },
  { t: "Objetivos educativos", d: "Informar sobre riscos, ensinar práticas de proteção, orientar a preservação de evidências e aproximar as pessoas dos canais oficiais de denúncia e apoio." },
];

export const Route = createFileRoute("/sobre")({
  head: () => meta("Sobre o projeto — Rede Segura", "Conheça o Rede Segura: objetivos, público-alvo e o problema que o projeto busca enfrentar."),
  component: () => (
    <>
      <PageHero tag="sobre" title="Sobre o Rede Segura">Educação em Segurança Digital e Privacidade para Pessoas Trans e LGBTQIA+.</PageHero>
      <Section title="O projeto">
        <div className="grid gap-6 md:grid-cols-2">
          {blocos.map((b) => (
            <div key={b.t} className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-bold text-primary">{b.t}</h3>
              <p className="mt-2 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  ),
});
