import type { Locale } from "./i18n";

// Strings whose keys end in `Html` may contain <strong>/<code> markup and are
// rendered with dangerouslySetInnerHTML. Everything here is static, trusted copy.

const en = {
  meta: {
    title: "/workspace, shared AI context for small teams",
    description:
      "Your team's files, rules, skills and decisions, available inside the Claude, ChatGPT and Gemini subscriptions you already pay for. No API tokens.",
    ogDescription:
      "Each team member uses their own AI subscription but shares the same context.",
  },
  nav: {
    how: "How it works",
    whatsapp: "WhatsApp",
    pricing: "Pricing",
    about: "About",
    cta: "Join the waiting list",
  },
  hero: {
    h1: "Shared AI context for small teams.",
    sub: "Your team's files, rules, skills and decisions, available inside the Claude, ChatGPT and Gemini subscriptions you already pay for. No API tokens. Nothing to install on anyone's computer.",
    cta: "Join the waiting list",
    see: "See how it works",
    note: "Not open yet. We are onboarding teams from the waiting list in order.",
    chatLabel: "Any chat: Claude, ChatGPT, Gemini or WhatsApp",
    chatAria: "Example of a /ws request in a chat",
    bubbleUser: "/ws write the proposal for Café Aurora",
    bubbleAi1Html:
      "Pulled from your team context: the <strong>proposal</strong> skill, the <strong>tone</strong> memory file, the client brief Andres saved in Drive, and Tuesday's decision to offer a 10% launch discount.",
    bubbleAi2:
      "Here is the draft. When you confirm the price, I will record it as a team decision so nobody quotes a different one.",
    chips: [
      "skill: proposal",
      "memory: tone",
      "file: cafe-aurora-brief.pdf",
      "decision: launch discount 10%",
    ],
  },
  idea: {
    eyebrow: "The idea",
    h2: "Each team member uses their own AI subscription but shares the same context.",
    p1: "One person uses Claude, another uses ChatGPT, a third uses Gemini. Each one re-explains the business every time, pastes the same contract, and makes a decision the others never hear about. The decisions that do get made live in a WhatsApp group nobody can search.",
    p2: "The vendors do not share memory across people, and they do not share it with each other. The context that makes an AI useful for a business ends up scattered across personal accounts.",
    strong:
      "/workspace keeps that context in one place and serves it to whichever AI each person uses.",
  },
  shares: {
    eyebrow: "What the team shares",
    h2: "One context, every assistant.",
    cards: [
      {
        title: "Skills",
        body: "Named, rerunnable procedures: list a unit, draft a renewal, check the payment sheet. Written once in plain language, run from any chat.",
      },
      {
        title: "Memory",
        body: "Plain text files that describe the business: rules, tone, templates, standing decisions. Edited in a web UI, shared with everyone the moment they are saved.",
      },
      {
        title: "Decisions",
        body: "An append-only log. A decision recorded from a Claude chat is visible in a colleague's ChatGPT or Gemini chat, with who, when and where it came from.",
      },
      {
        title: "Files and chat",
        body: "Google Drive folders you mark as visible, a Slack channel, a WhatsApp group. Drive stays the system of record; /workspace keeps the extracted text, not the files.",
      },
    ],
    wide: [
      {
        title: "Agents on a schedule",
        body: "A skill that needs no judgment plus a trigger. After the 10th of the month, check the payment sheet and tell the team who has not paid. Runs on the admin's own Claude seat, no tokens billed.",
      },
      {
        title: "Personal stays personal",
        body: "Each member's calendar and email are their own. Colleagues see free and busy blocks, never titles. Nothing personal enters shared memory unless its owner records it.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    h2: "Three steps. No developer needed.",
    steps: [
      {
        titleHtml: "Add /workspace to your AI",
        bodyHtml:
          "In Claude, add it as a connector and sign in. In ChatGPT, install the plugin and connect. In Gemini, add it from the extensions list. One time per person, on any plan including Free.",
      },
      {
        titleHtml: "Connect what the team uses",
        bodyHtml:
          "Pick the Drive folders the AI may see. Join the Slack channel or WhatsApp group. Write the first memory file and skill in the web UI, or let /workspace draft them from a description.",
      },
      {
        titleHtml: "Type <code>/ws</code> or <code>@ws</code>",
        bodyHtml:
          "In Claude, <code>/ws</code> and the request. In ChatGPT and Gemini, <code>@ws</code>. In the team's WhatsApp group, the same <code>@ws</code>. The assistant pulls the relevant context and files first, does the task, and writes decisions back. Nothing triggers in your personal chats.",
      },
    ],
    worksLabel: "Works with",
    works: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "WhatsApp",
      "Google Drive",
      "Google Meet transcripts",
      "Slack",
    ],
  },
  wa: {
    label: "WhatsApp integration",
    h2: "Works inside the group your team already has.",
    leadHtml:
      "/workspace joins as one more participant. Messages become shared context, <code>@ws</code> gets an answer in the group, and agent alerts land where the team talks.",
    phoneAria: "Example of a WhatsApp group with /workspace as a member",
    title: "Café Aurora team",
    members: "Andres, Lucas, Marina, /workspace",
    msg1: "Café Aurora signed. Kickoff is next Monday.",
    msg2: "@ws draft the kickoff agenda for Café Aurora",
    msg3: "Kickoff agenda for Café Aurora is ready, built from the proposal in Drive and the date Andres just confirmed. Decision recorded: kickoff on Monday.",
    msg4Html:
      "Monthly check: the September invoice for Café Aurora has no payment on the sheet. Reply <strong>paid</strong> to mark it.",
    msg5: "paid",
    time4: "Tue 09:00",
  },
  pricing: {
    eyebrow: "Pricing",
    h2: "One plan. Per seat.",
    lead: "You keep paying your AI vendor for the model. /workspace charges only for the shared context. No usage meter on messages or requests.",
    muted1:
      "WhatsApp messages sent into your group are billed by Meta to your business at Meta's rates. Reading is free. Slack is free.",
    muted2:
      "This is the planned price. Nothing can be bought yet. Teams on the waiting list get it at this rate when they are onboarded.",
    planName: "Team",
    price: "$20",
    per: "per month, 5 seats included",
    seat: "$2 per extra seat per month",
    items: [
      "Skills, memory files and decision log",
      "Google Drive, Slack and WhatsApp as context",
      "Claude, ChatGPT and Gemini, on every plan including Free",
      "Scheduled agents on the admin's Claude seat",
      "Personal calendar and email, visible only to their owner",
    ],
    cta: "Join the waiting list",
    fine: "Planned terms: 30-day trial, prepaid monthly, cancel any time with access to the end of the paid period. No payment is taken on this site.",
  },
  about: {
    eyebrow: "About",
    h2: "Built by a small team, for small teams.",
    p1: "/workspace started with a family real estate business where three people used three different AI accounts and none of them knew what the others had decided. The first version is being built with that team as the pilot.",
    p2: "The product runs on top of the AI subscriptions teams already have, because early-stage businesses will not pay for API tokens on top of them. The server does deterministic work only; the model on the user's own plan does the thinking.",
    founders: [
      { name: "Lucas Schnoller", role: "Founder, Brasil" },
      { name: "Andres Ponte", role: "Co-founder, Argentina" },
    ],
    contact: "Contact:",
  },
  waitlist: {
    eyebrow: "Waiting list",
    h2: "Get on the list.",
    lead: "/workspace is not open yet. We are onboarding teams in order from the waiting list while the Claude connector and the ChatGPT plugin go through directory review. Tell us which assistants your team uses and we will write to you when it is your turn.",
  },
  form: {
    email: "Work email",
    emailPlaceholder: "you@company.com",
    team: "Team size",
    legend: "Which assistants does the team use?",
    whatsappGroup: "WhatsApp group",
    submit: "Join the waiting list",
    sending: "Sending…",
    ok: "You are on the list. We will write to you at the address you gave when your team can start.",
    note: "No payment, no account. We use your email only to contact you about access.",
    genericError: "Could not save your request.",
  },
  footer: {
    copyright: "© 2026 [LEGAL ENTITY NAME]. slashworkspace.com",
    language: "Language",
  },
};

export type Dict = typeof en;

const es: Dict = {
  meta: {
    title: "/workspace, contexto de IA compartido para equipos pequeños",
    description:
      "Los archivos, reglas, habilidades y decisiones de tu equipo, disponibles dentro de las suscripciones de Claude, ChatGPT y Gemini que ya pagas. Sin tokens de API.",
    ogDescription:
      "Cada miembro del equipo usa su propia suscripción de IA pero comparte el mismo contexto.",
  },
  nav: {
    how: "Cómo funciona",
    whatsapp: "WhatsApp",
    pricing: "Precios",
    about: "Sobre nosotros",
    cta: "Únete a la lista de espera",
  },
  hero: {
    h1: "Contexto de IA compartido para equipos pequeños.",
    sub: "Los archivos, reglas, habilidades y decisiones de tu equipo, disponibles dentro de las suscripciones de Claude, ChatGPT y Gemini que ya pagas. Sin tokens de API. Nada que instalar en ninguna computadora.",
    cta: "Únete a la lista de espera",
    see: "Mira cómo funciona",
    note: "Todavía no está abierto. Estamos incorporando equipos de la lista de espera en orden.",
    chatLabel: "Cualquier chat: Claude, ChatGPT, Gemini o WhatsApp",
    chatAria: "Ejemplo de un pedido /ws en un chat",
    bubbleUser: "/ws escribe la propuesta para Café Aurora",
    bubbleAi1Html:
      "Tomado del contexto de tu equipo: la habilidad <strong>propuesta</strong>, el archivo de memoria <strong>tono</strong>, el brief del cliente que Andrés guardó en Drive y la decisión del martes de ofrecer un 10% de descuento de lanzamiento.",
    bubbleAi2:
      "Aquí está el borrador. Cuando confirmes el precio, lo registraré como una decisión del equipo para que nadie cotice uno distinto.",
    chips: [
      "habilidad: propuesta",
      "memoria: tono",
      "archivo: cafe-aurora-brief.pdf",
      "decisión: descuento de lanzamiento 10%",
    ],
  },
  idea: {
    eyebrow: "La idea",
    h2: "Cada miembro del equipo usa su propia suscripción de IA pero comparte el mismo contexto.",
    p1: "Una persona usa Claude, otra usa ChatGPT, una tercera usa Gemini. Cada una vuelve a explicar el negocio cada vez, pega el mismo contrato y toma decisiones de las que los demás nunca se enteran. Las decisiones que sí se toman viven en un grupo de WhatsApp donde nadie puede buscar.",
    p2: "Los proveedores no comparten memoria entre personas, ni entre ellos. El contexto que hace útil a una IA para un negocio termina disperso en cuentas personales.",
    strong:
      "/workspace guarda ese contexto en un solo lugar y se lo entrega a la IA que use cada persona.",
  },
  shares: {
    eyebrow: "Lo que el equipo comparte",
    h2: "Un contexto, todos los asistentes.",
    cards: [
      {
        title: "Habilidades",
        body: "Procedimientos con nombre y reutilizables: publicar una unidad, redactar una renovación, revisar la planilla de pagos. Se escriben una vez en lenguaje simple y se ejecutan desde cualquier chat.",
      },
      {
        title: "Memoria",
        body: "Archivos de texto simple que describen el negocio: reglas, tono, plantillas, decisiones vigentes. Se editan en una interfaz web y se comparten con todos en el momento en que se guardan.",
      },
      {
        title: "Decisiones",
        body: "Un registro al que solo se agrega. Una decisión registrada desde un chat de Claude se ve en el ChatGPT o Gemini de un colega, con quién, cuándo y de dónde vino.",
      },
      {
        title: "Archivos y chat",
        body: "Carpetas de Google Drive que marcas como visibles, un canal de Slack, un grupo de WhatsApp. Drive sigue siendo el sistema de registro; /workspace guarda el texto extraído, no los archivos.",
      },
    ],
    wide: [
      {
        title: "Agentes programados",
        body: "Una habilidad que no requiere criterio más un disparador. Después del 10 de cada mes, revisa la planilla de pagos y avisa al equipo quién no pagó. Corre en el asiento de Claude del administrador, sin tokens facturados.",
      },
      {
        title: "Lo personal sigue siendo personal",
        body: "El calendario y el correo de cada miembro son suyos. Los colegas ven bloques libres y ocupados, nunca títulos. Nada personal entra a la memoria compartida salvo que su dueño lo registre.",
      },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    h2: "Tres pasos. Sin necesidad de un desarrollador.",
    steps: [
      {
        titleHtml: "Agrega /workspace a tu IA",
        bodyHtml:
          "En Claude, agrégalo como conector e inicia sesión. En ChatGPT, instala el plugin y conéctalo. En Gemini, agrégalo desde la lista de extensiones. Una vez por persona, en cualquier plan, incluido el gratuito.",
      },
      {
        titleHtml: "Conecta lo que usa el equipo",
        bodyHtml:
          "Elige las carpetas de Drive que la IA puede ver. Súmalo al canal de Slack o al grupo de WhatsApp. Escribe el primer archivo de memoria y la primera habilidad en la interfaz web, o deja que /workspace los redacte a partir de una descripción.",
      },
      {
        titleHtml: "Escribe <code>/ws</code> o <code>@ws</code>",
        bodyHtml:
          "En Claude, <code>/ws</code> y el pedido. En ChatGPT y Gemini, <code>@ws</code>. En el grupo de WhatsApp del equipo, el mismo <code>@ws</code>. El asistente primero trae el contexto y los archivos relevantes, hace la tarea y registra las decisiones. Nada se activa en tus chats personales.",
      },
    ],
    worksLabel: "Funciona con",
    works: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "WhatsApp",
      "Google Drive",
      "Transcripciones de Google Meet",
      "Slack",
    ],
  },
  wa: {
    label: "Integración con WhatsApp",
    h2: "Funciona dentro del grupo que tu equipo ya tiene.",
    leadHtml:
      "/workspace se une como un participante más. Los mensajes se vuelven contexto compartido, <code>@ws</code> recibe una respuesta en el grupo y las alertas de los agentes llegan adonde habla el equipo.",
    phoneAria: "Ejemplo de un grupo de WhatsApp con /workspace como miembro",
    title: "Equipo Café Aurora",
    members: "Andrés, Lucas, Marina, /workspace",
    msg1: "Café Aurora firmó. El kickoff es el próximo lunes.",
    msg2: "@ws redacta la agenda del kickoff para Café Aurora",
    msg3: "La agenda del kickoff de Café Aurora está lista, armada a partir de la propuesta en Drive y la fecha que Andrés acaba de confirmar. Decisión registrada: kickoff el lunes.",
    msg4Html:
      "Chequeo mensual: la factura de septiembre de Café Aurora no tiene pago en la planilla. Responde <strong>pagado</strong> para marcarla.",
    msg5: "pagado",
    time4: "mar 09:00",
  },
  pricing: {
    eyebrow: "Precios",
    h2: "Un plan. Por asiento.",
    lead: "Sigues pagándole a tu proveedor de IA por el modelo. /workspace cobra solo por el contexto compartido. Sin medidor de uso en mensajes ni solicitudes.",
    muted1:
      "Los mensajes de WhatsApp enviados a tu grupo los factura Meta a tu negocio según sus tarifas. Leer es gratis. Slack es gratis.",
    muted2:
      "Este es el precio planeado. Todavía no se puede comprar nada. Los equipos en la lista de espera lo obtienen a esta tarifa cuando son incorporados.",
    planName: "Equipo",
    price: "$20",
    per: "por mes, 5 asientos incluidos",
    seat: "$2 por asiento extra por mes",
    items: [
      "Habilidades, archivos de memoria y registro de decisiones",
      "Google Drive, Slack y WhatsApp como contexto",
      "Claude, ChatGPT y Gemini, en todos los planes, incluido el gratuito",
      "Agentes programados en el asiento de Claude del administrador",
      "Calendario y correo personales, visibles solo para su dueño",
    ],
    cta: "Únete a la lista de espera",
    fine: "Términos planeados: prueba de 30 días, pago mensual por adelantado, cancela cuando quieras con acceso hasta el final del período pagado. En este sitio no se cobra ningún pago.",
  },
  about: {
    eyebrow: "Sobre nosotros",
    h2: "Hecho por un equipo pequeño, para equipos pequeños.",
    p1: "/workspace nació en una inmobiliaria familiar donde tres personas usaban tres cuentas de IA distintas y ninguna sabía qué habían decidido las otras. La primera versión se está construyendo con ese equipo como piloto.",
    p2: "El producto corre sobre las suscripciones de IA que los equipos ya tienen, porque los negocios en etapa temprana no van a pagar tokens de API además de eso. El servidor hace solo trabajo determinista; el modelo del plan de cada usuario hace el razonamiento.",
    founders: [
      { name: "Lucas Schnoller", role: "Fundador, Brasil" },
      { name: "Andres Ponte", role: "Cofundador, Argentina" },
    ],
    contact: "Contacto:",
  },
  waitlist: {
    eyebrow: "Lista de espera",
    h2: "Súmate a la lista.",
    lead: "/workspace todavía no está abierto. Estamos incorporando equipos en orden desde la lista de espera mientras el conector de Claude y el plugin de ChatGPT pasan la revisión de los directorios. Cuéntanos qué asistentes usa tu equipo y te escribiremos cuando sea tu turno.",
  },
  form: {
    email: "Correo de trabajo",
    emailPlaceholder: "tu@empresa.com",
    team: "Tamaño del equipo",
    legend: "¿Qué asistentes usa el equipo?",
    whatsappGroup: "Grupo de WhatsApp",
    submit: "Únete a la lista de espera",
    sending: "Enviando…",
    ok: "Ya estás en la lista. Te escribiremos a la dirección que diste cuando tu equipo pueda empezar.",
    note: "Sin pagos ni cuenta. Usamos tu correo solo para contactarte sobre el acceso.",
    genericError: "No pudimos guardar tu solicitud.",
  },
  footer: {
    copyright: "© 2026 [LEGAL ENTITY NAME]. slashworkspace.com",
    language: "Idioma",
  },
};

const pt: Dict = {
  meta: {
    title: "/workspace, contexto de IA compartilhado para equipes pequenas",
    description:
      "Os arquivos, regras, habilidades e decisões da sua equipe, disponíveis dentro das assinaturas do Claude, ChatGPT e Gemini que você já paga. Sem tokens de API.",
    ogDescription:
      "Cada membro da equipe usa a própria assinatura de IA, mas compartilha o mesmo contexto.",
  },
  nav: {
    how: "Como funciona",
    whatsapp: "WhatsApp",
    pricing: "Preços",
    about: "Sobre",
    cta: "Entrar na lista de espera",
  },
  hero: {
    h1: "Contexto de IA compartilhado para equipes pequenas.",
    sub: "Os arquivos, regras, habilidades e decisões da sua equipe, disponíveis dentro das assinaturas do Claude, ChatGPT e Gemini que você já paga. Sem tokens de API. Nada para instalar no computador de ninguém.",
    cta: "Entrar na lista de espera",
    see: "Veja como funciona",
    note: "Ainda não está aberto. Estamos integrando equipes da lista de espera em ordem.",
    chatLabel: "Qualquer chat: Claude, ChatGPT, Gemini ou WhatsApp",
    chatAria: "Exemplo de um pedido /ws em um chat",
    bubbleUser: "/ws escreva a proposta para o Café Aurora",
    bubbleAi1Html:
      "Puxado do contexto da sua equipe: a habilidade <strong>proposta</strong>, o arquivo de memória <strong>tom</strong>, o briefing do cliente que o Andres salvou no Drive e a decisão de terça-feira de oferecer 10% de desconto de lançamento.",
    bubbleAi2:
      "Aqui está o rascunho. Quando você confirmar o preço, vou registrá-lo como uma decisão da equipe para que ninguém cote um valor diferente.",
    chips: [
      "habilidade: proposta",
      "memória: tom",
      "arquivo: cafe-aurora-brief.pdf",
      "decisão: desconto de lançamento 10%",
    ],
  },
  idea: {
    eyebrow: "A ideia",
    h2: "Cada membro da equipe usa a própria assinatura de IA, mas compartilha o mesmo contexto.",
    p1: "Uma pessoa usa o Claude, outra usa o ChatGPT, uma terceira usa o Gemini. Cada uma reexplica o negócio toda vez, cola o mesmo contrato e toma decisões que as outras nunca ficam sabendo. As decisões que são tomadas vivem em um grupo de WhatsApp onde ninguém consegue buscar.",
    p2: "Os fornecedores não compartilham memória entre pessoas, nem entre si. O contexto que torna uma IA útil para um negócio acaba espalhado em contas pessoais.",
    strong:
      "O /workspace mantém esse contexto em um só lugar e o entrega para a IA que cada pessoa usar.",
  },
  shares: {
    eyebrow: "O que a equipe compartilha",
    h2: "Um contexto, todos os assistentes.",
    cards: [
      {
        title: "Habilidades",
        body: "Procedimentos nomeados e reexecutáveis: anunciar uma unidade, redigir uma renovação, conferir a planilha de pagamentos. Escritos uma vez em linguagem simples, executados de qualquer chat.",
      },
      {
        title: "Memória",
        body: "Arquivos de texto simples que descrevem o negócio: regras, tom, modelos, decisões vigentes. Editados em uma interface web, compartilhados com todos no momento em que são salvos.",
      },
      {
        title: "Decisões",
        body: "Um registro só de acréscimos. Uma decisão registrada em um chat do Claude fica visível no ChatGPT ou Gemini de um colega, com quem, quando e de onde veio.",
      },
      {
        title: "Arquivos e chat",
        body: "Pastas do Google Drive que você marca como visíveis, um canal do Slack, um grupo de WhatsApp. O Drive continua sendo o sistema de registro; o /workspace guarda o texto extraído, não os arquivos.",
      },
    ],
    wide: [
      {
        title: "Agentes agendados",
        body: "Uma habilidade que não exige julgamento mais um gatilho. Depois do dia 10 do mês, confere a planilha de pagamentos e avisa à equipe quem não pagou. Roda no assento de Claude do administrador, sem tokens cobrados.",
      },
      {
        title: "O pessoal continua pessoal",
        body: "O calendário e o e-mail de cada membro são só dele. Os colegas veem blocos livres e ocupados, nunca títulos. Nada pessoal entra na memória compartilhada a menos que o dono registre.",
      },
    ],
  },
  how: {
    eyebrow: "Como funciona",
    h2: "Três passos. Sem precisar de desenvolvedor.",
    steps: [
      {
        titleHtml: "Adicione o /workspace à sua IA",
        bodyHtml:
          "No Claude, adicione como conector e faça login. No ChatGPT, instale o plugin e conecte. No Gemini, adicione pela lista de extensões. Uma vez por pessoa, em qualquer plano, inclusive o gratuito.",
      },
      {
        titleHtml: "Conecte o que a equipe usa",
        bodyHtml:
          "Escolha as pastas do Drive que a IA pode ver. Entre no canal do Slack ou no grupo de WhatsApp. Escreva o primeiro arquivo de memória e a primeira habilidade na interface web, ou deixe o /workspace redigi-los a partir de uma descrição.",
      },
      {
        titleHtml: "Digite <code>/ws</code> ou <code>@ws</code>",
        bodyHtml:
          "No Claude, <code>/ws</code> e o pedido. No ChatGPT e no Gemini, <code>@ws</code>. No grupo de WhatsApp da equipe, o mesmo <code>@ws</code>. O assistente primeiro puxa o contexto e os arquivos relevantes, faz a tarefa e registra as decisões. Nada é acionado nos seus chats pessoais.",
      },
    ],
    worksLabel: "Funciona com",
    works: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "WhatsApp",
      "Google Drive",
      "Transcrições do Google Meet",
      "Slack",
    ],
  },
  wa: {
    label: "Integração com WhatsApp",
    h2: "Funciona dentro do grupo que a sua equipe já tem.",
    leadHtml:
      "O /workspace entra como mais um participante. As mensagens viram contexto compartilhado, <code>@ws</code> recebe resposta no grupo e os alertas dos agentes chegam onde a equipe conversa.",
    phoneAria: "Exemplo de um grupo de WhatsApp com o /workspace como membro",
    title: "Equipe Café Aurora",
    members: "Andres, Lucas, Marina, /workspace",
    msg1: "O Café Aurora assinou. O kickoff é na próxima segunda.",
    msg2: "@ws redija a pauta do kickoff do Café Aurora",
    msg3: "A pauta do kickoff do Café Aurora está pronta, montada a partir da proposta no Drive e da data que o Andres acabou de confirmar. Decisão registrada: kickoff na segunda.",
    msg4Html:
      "Checagem mensal: a fatura de setembro do Café Aurora não tem pagamento na planilha. Responda <strong>pago</strong> para marcá-la.",
    msg5: "pago",
    time4: "ter 09:00",
  },
  pricing: {
    eyebrow: "Preços",
    h2: "Um plano. Por assento.",
    lead: "Você continua pagando o fornecedor de IA pelo modelo. O /workspace cobra só pelo contexto compartilhado. Sem medidor de uso em mensagens ou solicitações.",
    muted1:
      "As mensagens de WhatsApp enviadas ao seu grupo são cobradas pela Meta do seu negócio, às tarifas da Meta. Ler é grátis. O Slack é grátis.",
    muted2:
      "Este é o preço planejado. Ainda não dá para comprar nada. As equipes na lista de espera recebem essa tarifa quando forem integradas.",
    planName: "Equipe",
    price: "$20",
    per: "por mês, 5 assentos incluídos",
    seat: "$2 por assento extra por mês",
    items: [
      "Habilidades, arquivos de memória e registro de decisões",
      "Google Drive, Slack e WhatsApp como contexto",
      "Claude, ChatGPT e Gemini, em todos os planos, inclusive o gratuito",
      "Agentes agendados no assento de Claude do administrador",
      "Calendário e e-mail pessoais, visíveis só para o dono",
    ],
    cta: "Entrar na lista de espera",
    fine: "Termos planejados: teste de 30 dias, pagamento mensal antecipado, cancele quando quiser com acesso até o fim do período pago. Nenhum pagamento é feito neste site.",
  },
  about: {
    eyebrow: "Sobre",
    h2: "Feito por uma equipe pequena, para equipes pequenas.",
    p1: "O /workspace começou em uma imobiliária familiar onde três pessoas usavam três contas de IA diferentes e nenhuma sabia o que as outras tinham decidido. A primeira versão está sendo construída com essa equipe como piloto.",
    p2: "O produto roda sobre as assinaturas de IA que as equipes já têm, porque negócios em estágio inicial não vão pagar tokens de API além delas. O servidor faz apenas trabalho determinístico; o modelo do plano do próprio usuário faz o raciocínio.",
    founders: [
      { name: "Lucas Schnoller", role: "Fundador, Brasil" },
      { name: "Andres Ponte", role: "Cofundador, Argentina" },
    ],
    contact: "Contato:",
  },
  waitlist: {
    eyebrow: "Lista de espera",
    h2: "Entre na lista.",
    lead: "O /workspace ainda não está aberto. Estamos integrando equipes em ordem a partir da lista de espera enquanto o conector do Claude e o plugin do ChatGPT passam pela revisão dos diretórios. Conte quais assistentes a sua equipe usa e escreveremos quando chegar a sua vez.",
  },
  form: {
    email: "E-mail de trabalho",
    emailPlaceholder: "voce@empresa.com",
    team: "Tamanho da equipe",
    legend: "Quais assistentes a equipe usa?",
    whatsappGroup: "Grupo de WhatsApp",
    submit: "Entrar na lista de espera",
    sending: "Enviando…",
    ok: "Você está na lista. Escreveremos para o endereço informado quando a sua equipe puder começar.",
    note: "Sem pagamento, sem conta. Usamos seu e-mail só para falar sobre o acesso.",
    genericError: "Não foi possível salvar sua solicitação.",
  },
  footer: {
    copyright: "© 2026 [LEGAL ENTITY NAME]. slashworkspace.com",
    language: "Idioma",
  },
};

const dictionaries: Record<Locale, Dict> = { en, es, pt };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
