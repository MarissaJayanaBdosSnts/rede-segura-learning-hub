export type Ref = { label: string; url: string };
export type Material = {
  slug: "doxxing" | "discurso-de-odio" | "deepfakes";
  n: string;
  titulo: string;
  resumo: string;
  intro: string;
  topicos: { titulo: string; texto: string }[];
  simulacao: { titulo: string; texto: string };
  prevencao: string[];
  vitima: string[];
  /** Cole aqui o link de incorporação do YouTube (ex.: https://www.youtube.com/embed/ID) */
  videoUrl?: string;
  /** Coloque o PDF em /public/pdfs/ e informe o caminho (ex.: /pdfs/doxxing.pdf) */
  pdfUrl?: string;
  referencias: Ref[];
};

const SAFERNET: Ref = { label: "SaferNet Brasil — Canal de Ajuda", url: "https://new.safernet.org.br/helpline" };
const CERT: Ref = { label: "CERT.br — Cartilha de Segurança para Internet", url: "https://cartilha.cert.br" };

export const materiais: Material[] = [
  {
    slug: "doxxing",
    n: "01",
    titulo: "Doxxing e exposição de dados pessoais",
    resumo: "O que é doxxing, como dados vazam sem consentimento e como se proteger.",
    intro:
      "Doxxing é a prática de reunir e divulgar informações pessoais de alguém sem consentimento, normalmente para intimidar, perseguir ou expor. Para pessoas trans e LGBTQIA+, a exposição pode atingir dados especialmente sensíveis, como nome civil e identidade de gênero.",
    topicos: [
      { titulo: "O que é doxxing", texto: "É a coleta e publicação de dados privados — como endereço, telefone, documentos ou local de trabalho — reunidos a partir de redes sociais, vazamentos, buscas e cadastros públicos." },
      { titulo: "Como os dados são expostos", texto: "Fotos com localização, perfis públicos, marcações de amigos, cadastros em sites, vazamentos de bancos de dados e informações cruzadas entre plataformas diferentes." },
      { titulo: "Nome civil, endereço e trabalho", texto: "Divulgar o nome civil de uma pessoa trans, seu endereço ou local de trabalho pode facilitar perseguição, discriminação e violência fora da internet." },
      { titulo: "Riscos para pessoas trans e LGBTQIA+", texto: "A exposição pode revelar orientação sexual ou identidade de gênero sem consentimento (outing), gerar assédio coordenado, perda de emprego, rompimentos familiares e risco à integridade física." },
      { titulo: "Consequências", texto: "Medo, isolamento, danos à saúde mental, prejuízos profissionais e risco à segurança. Dados ligados à vida sexual são considerados dados pessoais sensíveis pela LGPD." },
    ],
    simulacao: {
      titulo: "Simulação educativa (situação fictícia)",
      texto: "Alex, uma pessoa trans, publica uma foto em frente ao prédio onde trabalha. Um perfil anônimo cruza essa foto com um cadastro antigo e publica o nome civil e o endereço de Alex num grupo. Alex salva prints com data e link, denuncia o perfil na plataforma e procura apoio na SaferNet.",
    },
    prevencao: [
      "Revise quem pode ver suas publicações, lista de amigos e informações de perfil.",
      "Desative a localização automática nas fotos e evite mostrar fachadas, placas e crachás.",
      "Use e-mails e nomes de usuário diferentes em cada plataforma.",
      "Ative a verificação em duas etapas em todas as contas.",
      "Pesquise seu próprio nome periodicamente para saber o que está público.",
    ],
    vitima: [
      "Não confronte quem expôs seus dados; priorize sua segurança.",
      "Salve evidências: prints com data, hora e link de cada publicação.",
      "Denuncie o conteúdo e o perfil nas ferramentas da plataforma.",
      "Procure a SaferNet e registre boletim de ocorrência.",
      "Se houver risco à sua integridade física, ligue 190.",
    ],
    referencias: [
      { label: "Lei Geral de Proteção de Dados (Lei nº 13.709/2018)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" },
      { label: "ANPD — Autoridade Nacional de Proteção de Dados", url: "https://www.gov.br/anpd" },
      SAFERNET,
      CERT,
    ],
  },
  {
    slug: "discurso-de-odio",
    n: "02",
    titulo: "Discurso de ódio e denúncia",
    resumo: "Como reconhecer ataques, preservar evidências e denunciar nos canais certos.",
    intro:
      "Discurso de ódio são manifestações que ofendem, ameaçam ou incitam violência contra pessoas por características como orientação sexual, identidade de gênero, raça ou religião. Na internet, ele pode se espalhar rápido — mas pode e deve ser denunciado.",
    topicos: [
      { titulo: "O que caracteriza discurso de ódio", texto: "Conteúdos que atacam, desumanizam ou incitam discriminação e violência contra um grupo ou pessoa por quem ela é. Opinião não é o mesmo que ataque ou incitação." },
      { titulo: "Discriminação contra LGBTQIA+", texto: "Desde 2019, o STF reconhece que atos de homofobia e transfobia podem ser enquadrados na Lei do Racismo (Lei nº 7.716/1989), conforme decisão na ADO 26." },
      { titulo: "Assédio, ameaças e perseguição", texto: "Mensagens repetidas, ameaças e perseguição online são condutas graves. A perseguição (stalking) é crime previsto no art. 147-A do Código Penal, incluído pela Lei nº 14.132/2021." },
      { titulo: "Consequências da violência digital", texto: "Ansiedade, medo, afastamento das redes e da vida social, além de danos à reputação e ao trabalho." },
      { titulo: "Como preservar evidências", texto: "Faça prints mostrando o perfil, o conteúdo, a data e a URL. Copie os links. Se possível, registre uma ata notarial em cartório para dar mais força à prova." },
    ],
    simulacao: {
      titulo: "Simulação educativa (situação fictícia)",
      texto: "Sam publica um vídeo sobre seu dia a dia e recebe dezenas de comentários ofensivos sobre sua identidade de gênero, inclusive ameaças. Sam limita os comentários, salva prints com links, denuncia cada perfil na plataforma e envia a denúncia à SaferNet.",
    },
    prevencao: [
      "Use os filtros de comentários e palavras ofensivas das plataformas.",
      "Restrinja quem pode comentar, marcar ou enviar mensagens.",
      "Bloqueie e silencie perfis agressores.",
      "Combine com amigos uma rede de apoio para denúncias em grupo.",
    ],
    vitima: [
      "Não responda aos ataques.",
      "Preserve evidências antes de bloquear ou apagar.",
      "Denuncie publicações, comentários, perfis e mensagens na plataforma.",
      "Denuncie à SaferNet, ao Disque 100 e registre boletim de ocorrência.",
      "Busque apoio psicológico e de pessoas de confiança.",
    ],
    referencias: [
      { label: "STF — ADO 26 (criminalização da homotransfobia)", url: "https://portal.stf.jus.br/processos/detalhe.asp?incidente=4515053" },
      { label: "Lei nº 7.716/1989", url: "https://www.planalto.gov.br/ccivil_03/leis/l7716.htm" },
      { label: "Lei nº 14.132/2021 (perseguição)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14132.htm" },
      { label: "SaferNet — Denuncie", url: "https://new.safernet.org.br/denuncie" },
      { label: "Disque 100 — Direitos Humanos", url: "https://www.gov.br/mdh/pt-br/disque100" },
    ],
  },
  {
    slug: "deepfakes",
    n: "03",
    titulo: "Imagens íntimas e deepfakes",
    resumo: "Manipulação por IA, divulgação não consentida e como buscar ajuda.",
    intro:
      "Deepfakes são imagens, vídeos ou áudios falsos criados ou alterados com inteligência artificial para parecerem reais. Eles podem ser usados para criar conteúdo íntimo falso, chantagear e constranger pessoas.",
    topicos: [
      { titulo: "O que são deepfakes", texto: "Conteúdos sintéticos em que o rosto, o corpo ou a voz de alguém são inseridos ou alterados por IA, criando situações que nunca aconteceram." },
      { titulo: "IA e manipulação de imagens", texto: "Ferramentas de IA conseguem trocar rostos, gerar nudez falsa e imitar vozes a partir de poucas fotos públicas." },
      { titulo: "Divulgação não consentida", texto: "Divulgar cena de sexo, nudez ou pornografia sem consentimento é crime (art. 218-C do Código Penal, incluído pela Lei nº 13.718/2018)." },
      { titulo: "Falsificação de imagens e vídeos", texto: "Sinais comuns: bordas borradas no rosto, iluminação incoerente, piscadas estranhas, mãos e dentes deformados e áudio fora de sincronia." },
      { titulo: "Chantagem e exposição", texto: "Golpistas podem ameaçar divulgar imagens (reais ou falsas) para exigir dinheiro ou mais imagens. Pagar não garante que a ameaça pare." },
    ],
    simulacao: {
      titulo: "Simulação educativa (situação fictícia)",
      texto: "Jordan recebe uma mensagem com uma montagem íntima falsa e a ameaça de divulgá-la caso não faça um Pix. Jordan não paga, não responde, salva as mensagens, bloqueia o contato, usa a ferramenta StopNCII e procura a SaferNet e a delegacia.",
    },
    prevencao: [
      "Limite quem pode ver e baixar suas fotos.",
      "Desconfie de perfis novos que pedem fotos ou chamadas de vídeo rapidamente.",
      "Nunca envie imagens íntimas sob pressão.",
      "Converse com pessoas de confiança se algo parecer estranho.",
    ],
    vitima: [
      "Não pague e não negocie com quem ameaça.",
      "Salve mensagens, perfis e links como evidência.",
      "Denuncie o conteúdo na plataforma e peça a remoção.",
      "Use o StopNCII.org para ajudar a impedir que imagens íntimas sejam compartilhadas.",
      "Procure a SaferNet e registre boletim de ocorrência.",
    ],
    referencias: [
      { label: "Lei nº 13.718/2018 (art. 218-C do Código Penal)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13718.htm" },
      { label: "StopNCII.org", url: "https://stopncii.org" },
      SAFERNET,
      CERT,
    ],
  },
];

export const protecao = [
  { icon: "Lock", titulo: "Privacidade nas redes", itens: ["Deixe o perfil privado quando possível.", "Revise quem vê publicações, stories e lista de amigos.", "Controle quem pode marcar, mencionar e enviar mensagens."] },
  { icon: "Smartphone", titulo: "Permissões dos aplicativos", itens: ["Revise nas configurações do celular o acesso a câmera, microfone, contatos e fotos.", "Remova apps que você não usa.", "Baixe apps só das lojas oficiais."] },
  { icon: "KeyRound", titulo: "Contas e senhas", itens: ["Use senhas longas e diferentes para cada conta.", "Ative a verificação em duas etapas.", "Considere um gerenciador de senhas."] },
  { icon: "MapPin", titulo: "Localização", itens: ["Desative a localização em tempo real nas redes.", "Publique fotos de lugares depois de sair deles.", "Revise quem vê sua localização em apps de mapa."] },
  { icon: "Camera", titulo: "Publicação de fotos", itens: ["Evite mostrar fachada de casa, placas, crachás e documentos.", "Remova os dados de localização da foto.", "Pense antes de postar fotos de outras pessoas."] },
  { icon: "UserRound", titulo: "Informações pessoais", itens: ["Não publique endereço, telefone ou documentos.", "Cuidado com testes e formulários que pedem dados.", "Use e-mails diferentes para cadastros."] },
] as const;

export const canais: { grupo: string; itens: { nome: string; info: string; url: string }[] }[] = [
  {
    grupo: "Denúncia e apoio",
    itens: [
      { nome: "SaferNet — Denuncie", info: "Recebe denúncias anônimas de crimes contra os direitos humanos na internet, incluindo LGBTfobia.", url: "https://new.safernet.org.br/denuncie" },
      { nome: "SaferNet — Canal de Ajuda", info: "Orientação gratuita e sigilosa para quem sofre violência online.", url: "https://new.safernet.org.br/helpline" },
      { nome: "Disque 100", info: "Canal gratuito do governo federal para denúncias de violações de direitos humanos.", url: "https://www.gov.br/mdh/pt-br/disque100" },
      { nome: "Ouvidoria Nacional de Direitos Humanos", info: "Recebe e encaminha denúncias de violações de direitos humanos aos órgãos responsáveis.", url: "https://www.gov.br/mdh/pt-br/ondh" },
      { nome: "ANPD", info: "Para casos de uso indevido ou vazamento de dados pessoais por empresas e órgãos.", url: "https://www.gov.br/anpd" },
      { nome: "StopNCII.org", info: "Ajuda a impedir o compartilhamento de imagens íntimas sem consentimento.", url: "https://stopncii.org" },
    ],
  },
  {
    grupo: "Ferramentas de denúncia das plataformas",
    itens: [
      { nome: "Instagram", info: "Central de ajuda com instruções para denunciar posts, comentários, perfis e mensagens.", url: "https://help.instagram.com" },
      { nome: "TikTok", info: "Como denunciar vídeos, comentários, contas e mensagens.", url: "https://support.tiktok.com/pt_BR/safety-hc/report-a-problem" },
      { nome: "Facebook", info: "Como denunciar conteúdos e perfis abusivos.", url: "https://www.facebook.com/help/181495968648557" },
      { nome: "YouTube", info: "Como denunciar vídeos, canais e comentários inadequados.", url: "https://support.google.com/youtube/answer/2802027?hl=pt-BR" },
    ],
  },
];
