

Estrutura
```
ong-platform/
├─ index.html        # Página institucional (missão, visão, transparência)
├─ projetos.html     # Lista de projetos + filtros + campanhas
├─ cadastro.html     # Formulário completo com validação e máscaras (CPF, telefone, CEP)
├─ styles.css        # Design system simples (mobile-first, alto contraste)
├─ app.js            # Interações: menu, filtros, máscaras, validação
└─ assets/
   ├─ logo.svg
   ├─ favicon.png
   ├─ voluntarios1.jpg
   ├─ relatorio.jpg
   ├─ educacao.jpg
   ├─ saude.jpg
   └─ meioambiente.jpg
```

 Requisitos atendidos
- **HTML5 semântico**: uso de `header`, `main`, `section`, `article`, `nav`, `footer`, `figure`, `h1–h3`, `aria-*`, `role`.
- **Responsividade**: layout mobile-first com *grid* e *flex*, *breakpoints*.
- **Acessibilidade**: skip-link, foco visível, labels associados, `aria-live`, contraste alto.
- **Desempenho**: imagens com `loading="lazy"`, CSS único, JS defer.
- **SEO**: `title`, `meta description`, headings hierárquicos, links internos.
- **Formulários**: inputs HTML5, `required`, `pattern`, `minlength`, `select`, `fieldset/legend`, radios, checkboxes, validação nativa + JS.
- **Máscaras**: CPF, CEP, Telefone (JS puro).
- **Interatividade**: filtro por categorias, barra de progresso, simulação de doação/cadastro.

 Deploy com GitHub Pages
1. Faça push da branch `main`
2. No GitHub, Settings → Pages → **Deploy from branch**
3. Selecione `main`, pasta `/root`
4. A URL pública ficará: `[https://seu-usuario.github.io/ong-a-familia-e-tudo](https://github.com/othiagoverso)`

 Git e versionamento
```bash
git init
git add .
git commit -m "feat: entrega 1 - base HTML5/CSS/JS e formulários com máscaras"
git branch -M main
# git remote add origin <seu-repo-url>
# git push -u origin main
```

 Metodologia ágil (simulação)
- **Backlog**: histórias por persona (Administrador, Voluntário, Doador, Visitante).
- **Sprints**: 1–2 semanas; quadro Kanban (To do / Doing / Done).
- **Definition of Done**: passa validação, responsivo, acessível (AA), testado localmente.

 Licença
MIT — use à vontade para estudos.
