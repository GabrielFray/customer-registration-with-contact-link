
# Customer registration with contact link (Aplicação Web)

## Tabela de Conteúdos

1. [Sobre](#sobre)
2. [Links Relevantes](#links)
3. [Techs](#techs)
4. [Instalação](#install)
5. [Desenvolvido por](#devs)
6. [Termos de uso](#terms)


---

<a name="sobre"></a>

## 1. Sobre

- A finalidade desta API é criar um sistema de cadastro simplificado de clientes, onde será possível vincular contatos a cada cliente. A API permitirá a visualização dos clientes e dos contatos vinculados a eles de forma organizada e fácil de acessar. Além disso, essa API fornecerá as funcionalidades básicas de um CRUD (criação, leitura, atualização e exclusão) para gerenciar esses dados de forma eficiente e segura, permitindo que você mantenha seu cadastro de clientes atualizado e sempre à mão. Em resumo, a API de cadastro de clientes com vínculo de contatos oferece uma solução simplificada e prática para gerenciar seus dados de clientes e contatos.

<a name="links"></a>

## 2. Links relevantes

- <a name="deploy-da-aplicação" href ="https://customer-registration-api.onrender.com" target="_blank">Link da aplicação</a>

## Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

<img height="500" align="center" src="https://i.imgur.com/abEspg6.png"></img>

<a align="left" name="techs"></a>

## 3. Techs

Visão Geral das tecnologias usadas no projeto.

- [TypeScript](https://www.typescriptlang.org/)
- [Yup](https://www.npmjs.com/package/yup)

---
<a align="left" name="techs"></a>

---
<a name="install"></a>

## 4. Instalação e uso

### 4.1 Requisitos:
- React a partir da versão 18.0
- Gerenciador de pacotes yarn ou npm
- Rodar a aplicação Back-end localmente

### 4.2 Instalação
4.2.1 - Para rodar a aplicação localmente faça os passos a passos da documentação da [API](https://github.com/GabrielFray/customer-registration-with-contact-link-api). Caso queira rodar com o deploy use esse link ```https://customer-registration-api.onrender.com```, colocando o link na pasta ```services``` na variável ```baseUrl```, porém ele tem problemas de lentidão, é recomendado que seja rodado localmente para os testes.
4.2.2 - Após o clone no repositório para adicionar todas as dependências do package json execute o comando: 
`yarn install` 

4.2.3 - Crie um arquivo na raiz do projeto chamado .env e faça as configurações das variáveis de ambiente com base no .env.example do projeto
```
SECRET_KEY=chave secreta definida pelo seu time de desenvolvimento
DATABASE_URL="postgres://gabriel_fray:7355@127.0.0.1:5432/customer_registration"
DATABASE_URL="postgres://user:password@localhost:5432/postgres_db"  
```
4.2.4 - Para rodar projeto utilize o comando `yarn dev` no terminal, caso de tudo certo receberá uma mensagem parecida com essa:

```
[INFO] 17:23:18 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.8.4)
VITE v4.0.4  ready in 4915 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose  
  ➜  press h to show help
```

<a name="devs"></a>

4.2.4 - O deploy foi feito no vercel e podera ser acessado por esse link Get in touch(), mas ainda sim terá que rodar o back-end localmente.

## 5. Desenvolvido por


[ Voltar para o topo ](#tabela-de-conteúdos)

- <a name="Gabriel-fray" href="https://www.linkedin.com/in/gabrielfray/" target="_blank">Gabriel Fray</a>

<a name="terms"></a>

## 6. Termos de uso

Este é um projeto Open Source para fins educacionais e não comerciais, **Tipo de licença** - <a name="mit" href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>
