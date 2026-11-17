<div align="center">

# 📘 Simulado ITIL 4 Foundation

Simulador de prova para treinar o ITIL 4 Foundation direto no navegador, sem instalar nada.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

**[🚀 Acessar o simulador](https://SEU-PROJETO.vercel.app)**

</div>

---

## ✨ Funcionalidades

- 🎯 **40 questões** por simulado, sorteadas de um banco com mais de 70 perguntas
- ⏱️ **60 minutos** de prova com cronômetro, igual ao formato do exame
- ✅ **Aprovação com 65%** (26 acertos de 40)
- 🔀 Ordem das questões e das alternativas **embaralhada** a cada tentativa
- 🧭 Navegação livre entre as questões, com **marcação para revisar**
- 📚 **Modo estudo** sem limite de tempo
- 💡 Revisão detalhada: mostra o que você marcou, a resposta correta e o **porquê**
- 🔎 Filtro para ver **somente as questões erradas**
- 📄 **Exportação em PDF** com o resumo completo do resultado
- 🌗 Tema **claro e escuro** automático
- 📱 **Responsivo**, funciona no computador e no celular

## 📸 Demonstração

> Adicione aqui um print da tela do simulador.
>
> `![Tela do simulador](docs/print.png)`

## 🗂️ Estrutura do projeto

```
simulador-itil/
├── index.html          # Estrutura da página
├── style.css           # Estilos, temas claro e escuro
├── script.js           # Lógica do simulado e geração do PDF
├── questoes-extra.js   # Banco adicional de questões
└── README.md
```

## ▶️ Como rodar localmente

Não precisa de build, Node ou dependências. Basta:

```bash
git clone https://github.com/SEU-USUARIO/simulador-itil.git
cd simulador-itil
```

Depois abra o arquivo `index.html` no navegador (dois cliques).

Se preferir um servidor local:

```bash
npx serve .
```

## ☁️ Deploy no Vercel

1. Suba o projeto para o GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. Em **Framework Preset**, deixe **Other**.
4. Clique em **Deploy**.

A cada `git push`, o Vercel republica automaticamente.

## ➕ Como adicionar novas questões

Edite o arquivo `questoes-extra.js` e adicione itens dentro do `Q.push(...)` neste formato:

```js
["Pergunta?", ["Opção A", "Opção B", "Opção C", "Opção D"], 1, "Explicação da resposta"],
```

O número é o **índice da resposta correta** (`0` = A, `1` = B, `2` = C, `3` = D). Não se preocupe com a posição: as alternativas são embaralhadas automaticamente.

> ⚠️ Cada item é separado por vírgula, e o último não leva vírgula antes do `)`.

## 📚 Conteúdo coberto

- As **4 dimensões** do gerenciamento de serviços
- Os **7 princípios orientadores**
- O **Sistema de Valor de Serviço** (SVS) e seus componentes
- As **6 atividades da cadeia de valor**
- Conceitos-chave: valor, resultado, custo, risco, utilidade e garantia
- As práticas cobradas no exame, entre elas: melhoria contínua, habilitação de mudança, gerenciamento de incidentes, problemas e solicitações, service desk, nível de serviço, segurança da informação, ativos de TI, monitoramento de eventos, liberação, implantação, configuração, relacionamento e fornecedores

## 🛠️ Tecnologias

- HTML, CSS e JavaScript puro (sem frameworks)
- [jsPDF](https://github.com/parallax/jsPDF) para gerar o PDF, carregado via CDN

## ⚠️ Aviso legal

As questões deste projeto são **originais**, escritas com base nos tópicos do syllabus do ITIL 4 Foundation, e **não reproduzem perguntas reais do exame**. Este é um projeto independente de estudo, sem vínculo com a PeopleCert ou a AXELOS.

ITIL® é marca registrada da PeopleCert. O simulador não garante aprovação no exame oficial.

## 🤝 Contribuindo

Sugestões e novas questões são bem-vindas:

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-melhoria`
3. Commit: `git commit -m "Adiciona questões sobre ..."`
4. Push: `git push origin minha-melhoria`
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<div align="center">

Feito para quem está estudando para a certificação. Bons estudos! 🎓

</div>
