![React](https://img.shields.io/badge/react-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/jest-99424f?logo=jest)
![Testing Library](https://img.shields.io/badge/Testing%20Library-%F0%9F%A6%86-blue?logo=testing-library&logoColor=white)

# /dev/All

Esse projeto foi desenvolvido como parte de um desafio técnico na empresa [itexto](https://itexto.com.br/).
No desafio original meu perfil não foi aprovado, mas recebi um bom feedback e resolvi refazer o projeto por conta própria, a fim de melhorar minhas habilidades e aplicar os conhecimentos sugeridos pelo avaliador.

Como ponto inicial de desenvolvimento, escolhi um boilerplate de meus repositórios, baseado no template padrão do do Vite, usando **React + Typescript**, além de ferramentas úteis já instaladas para lidar com qualidade do código durante o desenvolvimento e que já estou habituado usar no meu dia a dia, seja em projetos curtos ou de cursos.

## 🔧 Ferramentas utilizadas

### Qualidade de código

- [**Husky**](https://typicode.github.io/husky/): já configurado para usar git-hooks pre-commit e commit-msg
  - pre-commit
    - [lint-staged](https://github.com/lint-staged/lint-staged) configurado para rodar as ferramentas de análise estática e de testes:
      - Eslint (com typescript-eslint e plugins do React)
      - Prettier
      - Jest
      - Typescript
  - commit-msg
    - `commitlint` com `@commitlint/config-conventional`

### Ambiente e testes

- **Jest** e **Testing Library** configurados para testes de componentes e interação do usuário.
- Suporte a **Dev Container** para desenvolvimento em ambiente isolado.

## 🚀 Desenvolvimento

O ambiente já está pronto para uso com Dev Container. Basta ter o Docker instalado e seguir as instruções do seu editor ou IDE para se conectar ao contêiner de desenvolvimento.

Caso prefira rodar o projeto localmente, é recomendável utilizar a versão do `Node` **18.20.8**.

### Comandos úteis

Instalar dependências:

```bash
npm install
```

Rodar o servidor de desenvolvimento:

```bash
npm run dev
```

Rodar o proxy server:

```bash
node proxy-server.cjs
```

## 🧪 Desafio Técnico - Frontend

Desenvolver um cliente web que consuma a API pública [dev/All](https://devall.com.br)

### 🔍 O que deve ser incluído

- Mostrar os últimos posts do dev/All.
- Permitir que o usuário filtre os posts usando uma barra de busca.
- Registrar os cliques em cada post antes de redirecionar o usuário.
- Relato com as informações sobre inspiração, desafios e decisões que guiaram o processo de desenvolvimento

### 📬 Exemplo dos Endpoints da API

- `GET /api/v2/post?page=1` — Retorna os posts mais recentes.
- `GET /api/v2/post?content=mysql&page=1` — Retorna os post mais recentes, filtrando pelo termo de busca.
- `GET /api/v2/post/clique/{id}` — Registra o click no post do backend e redireciona o usuário.

📄 OpenAPI Docs: [https://docs.itexto.com.br/devall](https://docs.itexto.com.br/devall)

## 📝 Relato de desenvolvimento

Nesse relato já considero os dados que recebi do feedback aplicando no contexto de refazer o projeto do zero.

Quanto a documentação do desafio em si, notei que o endpoint sugerido não estava funcionando. Mas, ao acessar o /dev/all, rastreei as requisições
na aba de rede e vi que estava usando a api/v2, então adaptei isso para funcionar
corretamente. No fim, isso era um "detalhe oculto" no desafio e a avaliação quanto essa solução foi muito positiva.

O uso do docker no projeto foi melhorado, na época eu não tinha o conhecimento sobre a especificação do dev container, o que resultou numa extensa documentação sobre como configurar o ambiente que eu utilizava, quando um `npm install` && `npm run dev` já resolveria.

E quanto a documentação, reorganizei tudo em um lugar só, cometi o equívoco de mandar o relato em um arquivo pdf separado do README.md o que causou confusão no avaliador.

### Início do desenvolvimento

#### Estilos

Inverti a ordem do desafio anterior: comecei instalando o Bulma CSS primeiro. Um dos pontos positivos da avaliação anterior foi a responsividade do projeto — e, neste caso, decidi ir além, ampliando o escopo original. Em vez de implementar somente uma barra de pesquisa e a lista de posts, resolvi fazer o site completo. Com isso, pude aproveitar muito mais o uso das classes do Bulma, implementando uma barra de navegação completa, responsiva e com botão de menu para telas menores.

Outro aspecto que decidi trabalhar foi o dark mode. Fazia tempo que eu não usava o Bulma, e nas versões mais recentes ele já oferece uma implementação automática baseada nas preferências do sistema. Isso acabou gerando um problema de contraste com os ícones — que, na verdade, eram imagens — quando exibidos no fundo escuro do dark mode no computador do avaliador. Eu não havia percebido isso antes, pois o meu sistema estava configurado no modo claro.

Para resolver isso, implementei o tema escuro como padrão. Além disso, o usuário agora tem um botão na barra de navegação para alternar entre os modos claro e escuro, com persistência via localStorage, garantindo que o tema usado seja o mesmo da última visita. Também substituí as imagens por ícones do FontAwesome, o que deve resolver qualquer problema de contraste entre temas.

#### Animações

No teste original, falhei por não usar recursos estéticos como animações e feedback visual ao usuário. O Bulma possui muitas classes para controlar animações básicas em componentes, que eu poderia ter utilizado no projeto anterior, mas acabei não explorando — talvez por não enxergar o frontend com esse nível de atenção ainda.

Mesmo com muitas opções prontas, o Bulma deixa a desejar em alguns aspectos. Aproveitei para incrementar um efeito slide-down no menu responsivo, criando uma transição mais suave com o uso do styled-components.

#### Testes

Os testes foram um ponto muito positivo na avaliação original, e resolvi manter o foco neles aqui. Escrevi testes que cobrem desde a renderização básica dos componentes até interações do usuário e verificação de estilos aplicados dinamicamente.

Aqui usei o GitHub Copilot pela primeira vez e fiquei surpreso ao ver como ele estava bem integrado ao projeto. Ele chegou a sugerir testes automaticamente assim que eu importava um componente — mesmo que eu precisasse fazer alguns ajustes nas sugestões para adaptá-las ao meu código.

### Avançando no desenvolvimento

Ao implementar novos recursos e corrigir os tratamentos de erro e feedback ao usuário, enfrentei alguns desafios que não haviam surgido no desafio original — justamente por, na época, ter optado por uma solução sem tratamento de erros ou mensagens de retorno. Alguns desses desafios consegui resolver completamente, outros apenas parcialmente, e em alguns casos a própria API não fornecia os recursos necessários para resolver.

#### CORS

O que talvez fosse o ponto alto do desafio original — o endpoint de click — retornava erro de CORS ao fazer requisições via Axios. Com isso, aprendi a usar um servidor proxy para realizar a requisição pelo backend do projeto. Essa abordagem permitiu acessar o endpoint, registrar o clique e realizar o redirecionamento. No entanto, não consegui implementar um feedback satisfatório para o usuário em caso de falha. Tentei redirecionar para alguma rota do frontend exibindo a mensagem de erro, mas não consegui fazer isso funcionar corretamente. Talvez por falta de experiência com o Express, não consegui encontrar uma solução mais adequada do que simplesmente exibir uma página em branco com a mensagem de erro.

#### Sources

Esse ponto nem estava previsto no desafio original, mas ao implementar o site completo acabei me deparando com ele. Na versão original, era possível ver os últimos posts de cada site registrado, mas mesmo analisando as requisições feitas no navegador, não encontrei nenhuma pista de uma API pública sendo usada. Acredito que tenha sido utilizada alguma outra estratégia que desconheço. Neste caso, implementei apenas links diretos para os sites das fontes.

#### React Router

Utilizei uma implementação básica de roteamento no `client-side` com o React Router. O projeto mantém um layout persistente com a barra de navegação e a barra lateral, enquanto cada rota renderiza o componente correspondente.

#### Estrutura do projeto

A maior parte dos componentes do projeto segue a estrutura de pastas:

```
src
├── components
│   └── NomeDoComponente
│       ├── __tests__/
│       ├── partials/
│       └── index.tsx

```

A pasta `__tests__` segue o padrão de nomenclatura usado com o Jest e contém os testes dos arquivos do respectivo componente.

A pasta `partials` reúne os subcomponentes de forma mais isolada, com cada um focado em uma única responsabilidade.

O arquivo `index.tsx` tem como função principal montar esses subcomponentes e gerenciar os estados com `useState`, repassando-os via props.

Fora dessa estrutura, existem a pasta `Shared`, que contém componentes reutilizados em mais de um local, mas que não exigem uma estrutura mais elaboradae e a `About`, por se tratar basicamente de texto.

### Desafios no frontend

Sobre algumas soluções implementados e melhorias que posso fazer.

#### Flexbox e posicionamento fixo.

O `LateralContent` no original possui posicionamento fixo e altura de `100vh`, o que implementei parcialmente devido ao layout com barra de navegação superior. Isso gerou conflitos com o uso do Flexbox, então criei um componente `PlaceHolder` apenas para ocupar esse espaço e simular uma renderização mais próxima da original.

#### Prop drilling e props opcionais.

Duas situações que podem ser melhoradas no projeto todo. Em alguns componentes, como o `PostLinst` o `isLoading` é passado em 3 níveis via propdrilling, o que até pode estar no limite do aceitável. Mesmo que cada nível faça uso dessa prop, ainda posso separar melhor os componentes e usar a renderização condicional no arquivo de index. Isso resolveria esse e o uso de posts e post serem passados como props opcionais, por mais que a lógica garanta que eles sejam renderizados de forma correta o componente acaba tendo mais responsabilidades do que deveria ter e deixando a leitura um pouco menos simples do que poderia ser. Então nesse quesito várias melhorias podem ainda ser feitas no código.
