// Questões originais no estilo ITIL 4 Foundation: [pergunta,[opções],índice correto,explicação]
const Q=[
["Quais são as quatro dimensões do gerenciamento de serviços no ITIL 4?",["Pessoas, produtos, processos e parceiros","Organizações e pessoas; informação e tecnologia; parceiros e fornecedores; fluxos de valor e processos","Planejar, construir, entregar e suportar","Estratégia, projeto, transição e operação"],1,"As quatro dimensões são organizações e pessoas, informação e tecnologia, parceiros e fornecedores, e fluxos de valor e processos."],
["Quantos princípios orientadores o ITIL 4 define?",["Quatro","Cinco","Sete","Nove"],2,"São sete: foco no valor, comece onde você está, progrida iterativamente com feedback, colabore e promova visibilidade, pense e trabalhe de forma holística, mantenha simples e prático, otimize e automatize."],
["Quais são os componentes do Sistema de Valor de Serviço (SVS)?",["Princípios orientadores, governança, cadeia de valor, práticas e melhoria contínua","Pessoas, processos, tecnologia e parceiros","Estratégia, projeto, transição, operação e melhoria","Plan, Do, Check, Act"],0,"O SVS é composto por princípios orientadores, governança, cadeia de valor de serviço, práticas e melhoria contínua."],
["Quais são as atividades da cadeia de valor de serviço?",["Planejar, melhorar, engajar, projetar e fazer a transição, obter/construir, entregar e suportar","Iniciar, planejar, executar, monitorar e encerrar","Estratégia, projeto, transição, operação e melhoria","Identificar, registrar, classificar, resolver e fechar"],0,"As seis atividades são: planejar, melhorar, engajar, projetar e fazer a transição, obter/construir, e entregar e suportar."],
["Qual princípio orientador recomenda reutilizar e medir o que já existe antes de criar algo novo?",["Foco no valor","Comece onde você está","Mantenha simples e prático","Pense e trabalhe de forma holística"],1,"“Comece onde você está” orienta a avaliar o estado atual e aproveitar o que já funciona."],
["Segundo o ITIL 4, o que é valor?",["O custo total de propriedade de um serviço","Os benefícios, a utilidade e a importância percebidos de algo","A receita gerada pelo provedor","O número de incidentes resolvidos"],1,"Valor é a percepção de benefícios, utilidade e importância."],
["Como o ITIL 4 define um resultado (outcome)?",["Algo entregue por uma atividade","Uma ação que consome recursos","Um resultado para uma parte interessada habilitado por um ou mais produtos","Um risco aceito"],2,"Outcome é o resultado para um stakeholder habilitado por outputs. Output é o que é entregue; outcome é o efeito obtido."],
["No ITIL 4, o que representa a garantia (warranty) de um serviço?",["O que o serviço faz","Garantia de que o serviço atenderá requisitos acordados, como disponibilidade e segurança","O custo do serviço","O contrato com o fornecedor"],1,"Utilidade é o que o serviço faz (adequação ao propósito); garantia é o quão bem ele faz (adequação ao uso)."],
["Qual é o propósito da prática de gerenciamento de incidentes?",["Reduzir a probabilidade de incidentes","Minimizar o impacto negativo dos incidentes restaurando a operação normal do serviço o mais rápido possível","Encontrar a causa-raiz dos incidentes","Gerenciar solicitações de usuários"],1,"Incidente é uma interrupção não planejada ou redução de qualidade; o foco é a restauração rápida."],
["Qual é o propósito do gerenciamento de problemas?",["Restaurar o serviço rapidamente","Reduzir a probabilidade e o impacto de incidentes, identificando causas reais e potenciais e gerenciando soluções de contorno e erros conhecidos","Aprovar mudanças","Registrar solicitações de serviço"],1,"Problema é causa real ou potencial de um ou mais incidentes."],
["O que é um erro conhecido (known error)?",["Um incidente de alta prioridade","Um problema que foi analisado mas não resolvido","Uma mudança emergencial","Uma solicitação rejeitada"],1,"Erro conhecido é um problema analisado que ainda não foi resolvido, geralmente com solução de contorno documentada."],
["Qual é o propósito da habilitação de mudança (change enablement)?",["Garantir que todas as mudanças sejam bloqueadas até aprovação do CAB","Maximizar o número de mudanças de TI bem-sucedidas, garantindo avaliação de riscos, autorização e gestão do cronograma","Implantar software em produção","Gerenciar o inventário de ativos"],1,"O foco é aumentar mudanças bem-sucedidas com riscos adequadamente avaliados."],
["Quais são os três tipos de mudança descritos no ITIL 4?",["Menor, maior e crítica","Padrão, normal e emergencial","Planejada, urgente e imediata","Técnica, operacional e estratégica"],1,"Mudança padrão (pré-autorizada, baixo risco), normal (avaliada e autorizada) e emergencial (implementada com urgência)."],
["Quem deve, em regra, autorizar uma mudança padrão?",["O CAB sempre","A alta direção","Ninguém no momento da implementação, pois já é pré-autorizada","O fornecedor"],2,"Mudanças padrão são de baixo risco, bem compreendidas e pré-autorizadas."],
["Qual é o propósito do service desk?",["Resolver todos os problemas técnicos","Capturar a demanda por resoluções de incidentes e solicitações de serviço, sendo o ponto único de contato","Aprovar mudanças","Definir acordos de nível de serviço"],1,"O service desk é o ponto de contato entre o provedor e seus usuários."],
["Uma solicitação para redefinir a senha de um usuário é um exemplo de:",["Incidente","Problema","Solicitação de serviço","Mudança emergencial"],2,"Solicitação de serviço é um pedido de ação previamente definida e acordada, como reset de senha."],
["Qual prática é responsável por definir metas claras e baseadas em negócio e monitorar o desempenho do serviço?",["Gerenciamento de nível de serviço","Gerenciamento de ativos de TI","Gerenciamento de implantação","Gerenciamento de configuração de serviço"],0,"O gerenciamento de nível de serviço define metas e acompanha o desempenho, como os SLAs."],
["Qual pergunta NÃO faz parte do modelo de melhoria contínua do ITIL 4?",["Qual é a visão?","Onde estamos agora?","Quem é o responsável pelo erro?","Conseguimos chegar lá?"],2,"O modelo inclui: visão, situação atual, estado desejado, como chegar lá, ação, verificação e manutenção do ímpeto."],
["Qual é o propósito do gerenciamento de configuração de serviço?",["Garantir que informações precisas sobre a configuração dos serviços e dos itens de configuração estejam disponíveis quando e onde necessárias","Controlar o ciclo de vida financeiro dos ativos","Implementar mudanças","Gerenciar fornecedores"],0,"Essa prática mantém informações sobre itens de configuração e seus relacionamentos."],
["Qual prática planeja e gerencia o ciclo de vida completo de todos os ativos de TI para maximizar valor, controlar custos e gerenciar riscos?",["Gerenciamento de ativos de TI","Gerenciamento de liberação","Gerenciamento de relacionamento","Gerenciamento de segurança da informação"],0,"IT asset management cobre o ciclo de vida dos ativos, incluindo apoio a decisões de compra, uso e descarte."],
["Qual é o propósito do monitoramento e gerenciamento de eventos?",["Resolver incidentes","Observar sistematicamente serviços e componentes e registrar e reportar mudanças de estado selecionadas, identificadas como eventos","Aprovar liberações","Realizar auditorias de fornecedores"],1,"Evento é qualquer mudança de estado com significado para o gerenciamento de um serviço ou item de configuração."],
["O que o gerenciamento de liberação (release management) faz?",["Move componentes novos ou alterados para ambientes ativos","Disponibiliza serviços e funcionalidades novos e alterados para uso","Autoriza mudanças","Gera relatórios de SLA"],1,"Liberação é a disponibilização de funcionalidades; implantação (deployment) é a movimentação de componentes para ambientes."],
["Qual é o propósito do gerenciamento de implantação (deployment management)?",["Disponibilizar funcionalidades aos usuários","Mover hardware, software, documentação e processos novos ou alterados para ambientes ativos","Registrar incidentes","Definir contratos com fornecedores"],1,"Deployment é o movimento de componentes; release é a disponibilização aos usuários."],
["Qual é o foco do gerenciamento de segurança da informação?",["Proteger as informações necessárias para a organização fazer negócios","Substituir o gerenciamento de riscos","Controlar apenas o acesso físico","Gerenciar somente senhas"],0,"Inclui proteger confidencialidade, integridade e disponibilidade da informação."],
["Qual prática estabelece e nutre vínculos entre a organização e suas partes interessadas, em níveis estratégico e tático?",["Gerenciamento de relacionamento","Gerenciamento de fornecedores","Service desk","Gerenciamento de nível de serviço"],0,"Relationship management identifica, analisa, monitora e melhora o relacionamento com stakeholders."],
["Qual prática garante que os fornecedores da organização e seu desempenho sejam gerenciados adequadamente?",["Gerenciamento de fornecedores","Gerenciamento de relacionamento","Gerenciamento de implantação","Melhoria contínua"],0,"Supplier management trata de contratos, desempenho e relacionamento com fornecedores."],
["No ITIL 4, quem é o papel que define os requisitos para um serviço e assume a responsabilidade pelos resultados do consumo?",["Usuário","Cliente","Patrocinador","Fornecedor"],1,"Cliente define requisitos e assume responsabilidade pelos resultados; usuário usa o serviço; patrocinador autoriza o orçamento."],
["Qual papel autoriza o orçamento para o consumo de serviços?",["Usuário","Cliente","Patrocinador","Provedor de serviço"],2,"O patrocinador (sponsor) é quem autoriza o orçamento."],
["O que descreve melhor uma oferta de serviço (service offering)?",["Uma descrição formal de um ou mais serviços projetada para atender a necessidades de um grupo-alvo de consumidores","Um contrato de nível de serviço","Um plano de continuidade","Uma lista de incidentes abertos"],0,"Oferta de serviço pode incluir bens, acesso a recursos e ações de serviço."],
["O que é um fluxo de valor (value stream)?",["Uma série de passos que uma organização realiza para criar e entregar produtos e serviços aos consumidores","Um conjunto de métricas financeiras","Um tipo de contrato","Um organograma"],0,"Um fluxo de valor é uma combinação de atividades da cadeia de valor que cria valor."],
["O princípio “pense e trabalhe de forma holística” significa que:",["Cada equipe deve otimizar sua própria área","Nenhum serviço é entregue por uma única parte; é preciso considerar o sistema como um todo","Tudo deve ser automatizado","É preciso reduzir o número de etapas"],1,"As atividades devem ser coordenadas considerando todas as quatro dimensões e o conjunto de partes."],
["Qual princípio orientador sugere eliminar etapas que não agregam valor e evitar excesso de regras?",["Mantenha simples e prático","Colabore e promova visibilidade","Progrida iterativamente com feedback","Foco no valor"],0,"Usar o mínimo de etapas necessário para atingir o objetivo."],
["Qual princípio orientador está associado à ideia de “fazer em pequenos passos, com ciclos de feedback”?",["Progrida iterativamente com feedback","Pense e trabalhe de forma holística","Otimize e automatize","Comece onde você está"],0,"Trabalhar em seções menores e gerenciáveis, que podem ser concluídas e das quais se obtém feedback."],
["Antes de automatizar uma atividade, o ITIL 4 recomenda:",["Automatizar imediatamente","Otimizar e simplificar a atividade primeiro","Contratar um fornecedor","Mover a atividade para a nuvem"],1,"“Otimize e automatize”: simplifique o que existe antes de automatizar, usando automação para liberar recursos humanos."],
["Qual é a definição de custo no ITIL 4?",["O valor pago ao fornecedor","A quantidade monetária de recursos consumidos por uma atividade ou recurso","O orçamento anual de TI","A receita menos o lucro"],1,"Custo é o valor monetário dos recursos consumidos, e não preço nem orçamento."],
["Qual é a definição de risco no ITIL 4?",["Um evento que já ocorreu","Algo que pode causar perdas, danos ou dificuldade em atingir objetivos","O custo de um incidente","Um tipo de mudança"],1,"Risco é uma possível ocorrência que pode causar dano ou perda, ou dificultar o alcance de objetivos."],
["Qual é a diferença entre saída (output) e resultado (outcome)?",["São sinônimos","Output é o que se entrega; outcome é o efeito obtido pela parte interessada","Output é o efeito percebido; outcome é o que se entrega","Output é financeiro; outcome é técnico"],1,"Output é uma entrega tangível ou intangível; outcome é o resultado alcançado."],
["No ITIL 4, o que representa a entrada principal da cadeia de valor de serviço?",["Apenas incidentes","Oportunidade e demanda","Somente requisitos legais","Relatórios financeiros"],1,"Oportunidade e demanda entram na cadeia, e o valor é a saída."],
["Qual dimensão considera fatores externos como político, econômico, social, tecnológico, legal e ambiental (PESTLE)?",["Todas as quatro dimensões são afetadas por fatores externos","Somente a dimensão de parceiros e fornecedores","Somente a dimensão de informação e tecnologia","Nenhuma, pois são fatores externos"],0,"Fatores PESTLE influenciam todas as quatro dimensões."],
["Qual atividade da cadeia de valor garante a compreensão das necessidades das partes interessadas e a transparência?",["Engajar","Obter/construir","Entregar e suportar","Planejar"],0,"Engajar fornece compreensão das necessidades, transparência e boas relações com stakeholders."]
];
const PASS=65,TOTAL=40*60;
const app=document.getElementById("app");
let S=null,tm=null;
const $=h=>{app.innerHTML=h};
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const fmt=s=>String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
function home(){
  clearInterval(tm);
  $(`<h1>Simulado ITIL 4 Foundation</h1>
  <div class="card"><p>40 questões de múltipla escolha, 60 minutos e aprovação com 65% (26 acertos), no mesmo formato do exame oficial. A ordem das questões e das alternativas muda a cada tentativa.</p>
  <p class="mu">As questões são originais, escritas com base no conteúdo do syllabus da AXELOS/PeopleCert. Perguntas reais do exame são confidenciais e não são reproduzidas aqui.</p>
  <div class="nav"><button class="pri" id="go">Iniciar simulado</button><button id="go2">Modo estudo (sem tempo)</button></div></div>`);
  document.getElementById("go").onclick=()=>start(true);
  document.getElementById("go2").onclick=()=>start(false);
}
function start(timed){
  S={items:sh(Q.map((q,i)=>i)).slice(0,40).map(i=>{const q=Q[i],o=sh(q[1].map((t,k)=>({t,c:k===q[2]})));return{q:q[0],o,e:q[3],a:null,f:false}}),i:0,left:TOTAL,timed,done:false};
  clearInterval(tm);
  if(timed)tm=setInterval(()=>{S.left--;const t=document.getElementById("tm");if(t){t.textContent=fmt(S.left);t.classList.toggle("low",S.left<300)}if(S.left<=0)finish()},1000);
  render();
}
function render(){
  const it=S.items[S.i],n=S.items.length,ans=S.items.filter(x=>x.a!==null).length;
  $(`<div class="top"><span class="ui">Questão ${S.i+1} de ${n}</span><span class="timer" id="tm">${S.timed?fmt(S.left):"Sem tempo"}</span></div>
  <div class="bar"><i style="width:${ans/n*100}%"></i></div>
  <div class="card"><h2>${it.q}</h2>
  ${it.o.map((o,k)=>`<button class="opt ${it.a===k?"sel":""}" data-k="${k}">${"ABCD"[k]}. ${o.t}</button>`).join("")}
  <div class="nav"><button id="pv" ${S.i?"":"disabled"}>Anterior</button><button id="nx" ${S.i<n-1?"":"disabled"}>Próxima</button><button id="fg">${it.f?"Remover marcação":"Marcar para revisar"}</button></div></div>
  <div class="card"><span class="ui mu">${ans} de ${n} respondidas. Questões marcadas têm barra laranja.</span>
  <div class="grid">${S.items.map((x,k)=>`<button data-g="${k}" class="${x.a!==null?"done":""} ${k===S.i?"cur":""} ${x.f?"flag":""}">${k+1}</button>`).join("")}</div>
  <div class="nav"><button class="pri" id="fn">Finalizar simulado</button></div></div>`);
  app.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{it.a=+b.dataset.k;render()});
  app.querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{S.i=+b.dataset.g;render()});
  document.getElementById("pv").onclick=()=>{S.i--;render()};
  document.getElementById("nx").onclick=()=>{S.i++;render()};
  document.getElementById("fg").onclick=()=>{it.f=!it.f;render()};
  document.getElementById("fn").onclick=()=>{const m=n-ans;if(!m||confirm("Há "+m+" questão(ões) sem resposta. Finalizar mesmo assim?"))finish()};
}
function finish(){
  clearInterval(tm);S.done=true;
  const n=S.items.length,ok=S.items.filter(x=>x.a!==null&&x.o[x.a].c).length,pc=Math.round(ok/n*100),pass=pc>=PASS;
  S.res={n,ok,pc,pass};
  $(`<h1>Resultado</h1><div class="card"><div class="score ${pass?"pass":"fail"}">${pc}%</div>
  <p class="ui"><b>${pass?"Aprovado":"Reprovado"}</b>: ${ok} de ${n} acertos (mínimo ${Math.ceil(n*PASS/100)}).</p>
  <div class="nav"><button class="pri" id="pd">Baixar PDF com o resumo</button><button id="sw">Mostrar só erradas</button><button id="rt">Novo simulado</button></div></div><div id="rv"></div>`);
  const draw=only=>{document.getElementById("rv").innerHTML=S.items.map((x,k)=>({x,k})).filter(({x})=>!only||!hit(x)).map(({x,k})=>{
    const r=x.o.find(o=>o.c),g=x.a===null?null:x.o[x.a],h=hit(x);
    return `<div class="card"><h2>${k+1}. ${x.q}</h2>${x.o.map((o,j)=>`<div class="opt ${o.c?"ok":x.a===j?"bad":""}">${"ABCD"[j]}. ${o.t}${x.a===j?" (sua resposta)":""}${o.c?" (correta)":""}</div>`).join("")}
    <div class="exp ${h?"":"er"}"><b>${h?"Você acertou.":g?"Você errou.":"Sem resposta."}</b>${g&&!h?` Você marcou “${g.t}”, que não é a correta.`:""}<br><b>Resposta correta:</b> ${r.t}<br><b>Por quê:</b> ${x.e}</div></div>`}).join("")};
  let only=false;draw(false);
  document.getElementById("sw").onclick=e=>{only=!only;e.target.textContent=only?"Mostrar todas":"Mostrar só erradas";draw(only)};
  document.getElementById("rt").onclick=home;
  document.getElementById("pd").onclick=pdf;
}
function hit(x){return x.a!==null&&x.o[x.a].c}
function pdf(){
  if(!window.jspdf){alert("A biblioteca de PDF não carregou. Verifique sua conexão e recarregue a página.");return}
  const d=new window.jspdf.jsPDF({unit:"mm",format:"a4"}),W=180;let y=18;
  const cl=s=>String(s).replace(/[“”]/g,'"').replace(/[‘’]/g,"'");
  const w=(t,sz,b,gap)=>{d.setFont("helvetica",b?"bold":"normal");d.setFontSize(sz);d.splitTextToSize(cl(t),W).forEach(l=>{if(y>280){d.addPage();y=18}d.text(l,15,y);y+=sz*0.46});y+=gap||0};
  const r=S.res,dt=new Date();
  w("Simulado ITIL 4 Foundation",18,true,2);
  w("Data: "+dt.toLocaleDateString("pt-BR")+" "+dt.toLocaleTimeString("pt-BR"),10,false,1);
  w("Resultado: "+r.pc+"% ("+r.ok+" de "+r.n+" acertos) - "+(r.pass?"APROVADO":"REPROVADO")+" (minimo 65%)",12,true,4);
  const err=S.items.filter(x=>!hit(x)).length;
  w("Erradas ou em branco: "+err+". Revise as explicacoes abaixo.",10,false,5);
  S.items.forEach((x,k)=>{
    const rt=x.o.find(o=>o.c),g=x.a===null?null:x.o[x.a];
    w((k+1)+". ["+(hit(x)?"CERTA":g?"ERRADA":"EM BRANCO")+"] "+x.q,10,true,1);
    if(g&&!hit(x))w("Sua resposta: "+g.t,9,false,0.5);
    w("Resposta correta: "+rt.t,9,false,0.5);
    w("Por que: "+x.e,9,false,4);
  });
  d.save("simulado-itil-"+dt.toISOString().slice(0,10)+".pdf");
}

home();
