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
