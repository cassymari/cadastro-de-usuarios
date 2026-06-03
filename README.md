![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-black)
![Render](https://img.shields.io/badge/Render-Deploy-purple)

# 🚀 Cadastro de Usuários

Aplicação Full Stack para gerenciamento de usuários, desenvolvida com React no frontend e Node.js no backend. O sistema permite cadastrar, listar, editar e excluir usuários, utilizando PostgreSQL como banco de dados.

## 🌐 Projeto Online

### Frontend


https://cassymari.github.io/cadastro-de-usuarios/

### Backend API

https://cadastro-de-usuarios-api-v8q6.onrender.com

---

## 📸 Preview

<img width="1079" height="1925" alt="C1" src="https://github.com/user-attachments/assets/4509a649-65ef-4361-926b-ed0131335a52" />


---

## ✨ Funcionalidades

* Cadastro de usuários
* Listagem de usuários
* Edição de usuários
* Exclusão de usuários
* Integração com banco de dados PostgreSQL
* API RESTful
* Persistência de dados com Prisma ORM

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* React
* JavaScript
* Axios
* CSS

### Backend

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* CORS
* Dotenv

### Banco de Dados

* PostgreSQL (Neon)

### Deploy

* Frontend: GitHub Pages
* Backend: Render
* Banco de Dados: Neon

---

## 📂 Estrutura da API

### Buscar todos os usuários

```http
GET /usuarios
```

### Cadastrar usuário

```http
POST /usuarios
```

Exemplo:

```json
{
  "name": "Cassiane",
  "email": "cassiane@email.com",
  "age": 25
}
```

### Atualizar usuário

```http
PUT /usuarios/:id
```

Exemplo:

```json
{
  "name": "Novo Nome",
  "email": "novo@email.com",
  "age": 30
}
```

### Excluir usuário

```http
DELETE /usuarios/:id
```

---

## ⚙️ Como Executar o Projeto Localmente

### Clone o repositório

```bash
git clone https://github.com/cassymari/cadastro-de-usuarios-api.git
```

### Acesse a pasta do projeto

```bash
cd cadastro-de-usuarios-api
```

### Instale as dependências

```bash
npm install
```

### Configure o arquivo .env

```env
DATABASE_URL="sua_url_postgresql"
```

### Execute o Prisma

```bash
npx prisma generate
npx prisma db push
```

### Inicie a aplicação

```bash
npm start
```

---

## 📁 Estrutura do Projeto

```text
├── prisma
│   ├── schema.prisma
│
├── server.js
├── package.json
├── .env
├── .gitignore
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar e consolidar conhecimentos em:

* Desenvolvimento Full Stack
* Criação de APIs REST
* Integração Frontend e Backend
* Banco de Dados PostgreSQL
* ORM Prisma
* Deploy de aplicações em produção

---

## 👩‍💻 Desenvolvedora

**Cassiane M. Nascimento**

GitHub: https://github.com/cassymari

LinkedIn: www.linkedin.com/in/cassiane-m-nascimento
