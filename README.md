# Projeto Frontend - Todo List App

Este projeto é o frontend para o sistema de gerenciamento de tarefas (Todo List). Ele foi desenvolvido utilizando React, TypeScript e outras bibliotecas para desenvolvimento web.

## Sumário

- [Projeto Frontend - Todo List App](#projeto-frontend---todo-list-app)
  - [Sumário](#sumário)
  - [Descrição](#descrição)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Funcionalidades](#funcionalidades)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação e Configuração](#instalação-e-configuração)

## Descrição

O aplicativo frontend permite que os usuários visualizem, criem, atualizem e excluam tarefas. Ele se comunica com a API backend e utiliza WebSockets para atualizações em tempo real. O projeto segue boas práticas de desenvolvimento com React e TypeScript, e possui testes unitários para garantir a qualidade do código.

## Tecnologias Utilizadas

- **React** – Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript** – Superset do JavaScript com tipagem estática.
- **Styled-components** – Estilização de componentes com CSS-in-JS.
- **React Router** – Gerenciamento de rotas.
- **React Query** – Gerenciamento de estado assíncrono e cache de dados.
- **Jest e React Testing Library** – Testes unitários e de integração.
- **React hook form** – Gerenciamento de formulários.
- **Socket.IO** – Comunicação em tempo real com WebSockets.
- **Axios** – Cliente HTTP para fazer requisições à API backend.

## Funcionalidades

- **Exibição de Tarefas:** Visualize a lista de tarefas com atualizações em tempo real.
- **Criação e Edição de Tarefas:** Formulários com validação para criar e atualizar tarefas.
- **Autenticação:** Login e cadastro via credenciais e/ou provedores externos (ex.: Google).
- **Atualizações em Tempo Real:** Integração com WebSockets para refletir alterações de tarefas em tempo real.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Kenzohfs/todo-list-react-app.git
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto e copie as chaves do .env.example, adicionando seus próprios valores.

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```
