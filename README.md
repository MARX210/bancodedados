# 🗄️ Banco de Dados — Sistema de Cadastro de Estudantes

Aplicação web full-stack desenvolvida na disciplina de **Banco de Dados** na **UTFPR**, integrando Next.js com banco de dados PostgreSQL via **Neon** (serverless).

## 📄 Sobre

Sistema com autenticação, dashboard e gerenciamento de estudantes, explorando na prática a integração entre front-end moderno e banco de dados relacional.

## ✨ Funcionalidades

- **Login** — tela de autenticação com suporte a Apple e Google
- **Dashboard** — painel principal após autenticação
- **Cadastro de Estudante** — formulário com inserção direta no banco via Server Actions do Next.js
- **Listagem de Estudantes** — tabela com busca de dados em tempo real no PostgreSQL

## 🛠️ Tecnologias

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

- **Next.js 15** — App Router + Server Actions
- **Neon** — PostgreSQL serverless
- **shadcn/ui** — componentes de interface (Sidebar, Table, Card, Input)

## 🚀 Como executar

```bash
npm install
# ou
pnpm install
```

Crie um arquivo `.env.local` na raiz:

```env
DATABASE_URL=sua_url_do_neon_aqui
```

```bash
npm run dev
```

Acesse <http://localhost:3000>.

## 🗃️ Estrutura do Banco

```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
```

## 🎓 Contexto Acadêmico

Desenvolvido na disciplina de **Banco de Dados** — UTFPR, Francisco Beltrão.
