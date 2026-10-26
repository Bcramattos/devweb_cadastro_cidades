# Cadastro de Cidades

Projeto da disciplina da faculdade — **Aula 04 (Exercício Cidades)**.

Aplicação web feita em **Angular** com **Bootstrap** que permite **cadastrar cidades** e
**ver todas as cidades cadastradas** em uma lista de cards.

> Curso: Análise e Desenvolvimento de Sistemas (FATEC) — 2º semestre
> Autor: Bruno Mattos

---

## O que o programa faz

- Tem um **formulário** para digitar os dados de uma cidade.
- Confere se os campos foram preenchidos corretamente antes de salvar.
- Mostra cada cidade cadastrada dentro de um **card** do Bootstrap.
- Limpa o formulário depois de cadastrar, para já poder digitar a próxima cidade.
- Mostra uma mensagem quando ainda não existe nenhuma cidade na lista.

Os dados ficam **apenas na memória do navegador**. Ou seja, se você atualizar a página (F5),
a lista volta a ficar vazia — isso é normal nesse exercício, porque ainda não temos banco de dados.

---

## Dados cadastrados

Cada cidade guarda 5 informações:

| Informação | Exemplo |
|---|---|
| id (número de controle) | 1 |
| nome | Jacareí |
| uf | SP |
| população | 235000 |
| ddd | 12 |

O campo **id** não é digitado: o próprio programa gera esse número na hora de cadastrar.

---

## Tecnologias usadas

- **Angular 22** — framework usado para montar a tela.
- **Bootstrap 5** — usado para o visual (caixas, botões e os cards).
- **TypeScript** — linguagem do código (é um JavaScript com tipos).
- **Node.js** — necessário para rodar e instalar o projeto.

---

## Como rodar o projeto no seu computador

### 1. Você precisa ter instalado

- [Node.js](https://nodejs.org/) (de preferência uma versão recente)
- Um editor de código, como o [VS Code](https://code.visualstudio.com/)

Para conferir se o Node foi instalado, abra o terminal e digite:

```bash
node -v
```

Se aparecer um número de versão (por exemplo `v22.0.0`), está tudo certo.

### 2. Baixar as dependências

Dentro da pasta do projeto, rode:

```bash
npm install
```

Esse comando baixa tudo que o projeto precisa para funcionar. Ele demora um pouco na primeira vez
e só precisa ser rodado uma vez.

### 3. Ligar o projeto

```bash
npm start
```

Depois abra o navegador em: **http://localhost:4200**

Para parar o projeto, volte ao terminal e aperte `Ctrl + C`.

---

## Como usar

1. Preencha os campos **Nome**, **UF**, **DDD** e **População**.
2. Clique em **Cadastrar**.
3. O card da cidade aparece logo abaixo, na lista.
4. Se algum campo estiver errado ou vazio, o próprio formulário avisa em vermelho.
5. O botão **Limpar** apaga o que você digitou sem cadastrar nada.

---

## Onde fica cada parte do código

```
src/app/
├── app-module.ts          -> arquivo de configuração da aplicação
├── app.html               -> chama a tela de cidades
├── cidade/
│   ├── cidade.ts          -> a lógica: recebe os dados e guarda na lista
│   └── cidade.html        -> a tela: o formulário e os cards
└── interfaces/
    └── cidade.ts          -> a lista de campos que uma cidade precisa ter
```

## Conceitos que pratiquei neste exercício

- Criar uma aplicação Angular no modo **módulos** (`--no-standalone`).
- Configurar o **Bootstrap** em um projeto Angular.
- Usar **formulário reativo**, que é o formulário controlado pelo próprio código.
- Criar uma **interface** para definir o formato dos dados.
- Criar um **componente** e colocá-lo dentro da tela principal.
- Usar `@if` (mostrar ou esconder algo) e `@for` (repetir algo para cada item da lista).
- Montar uma lista usando os **cards** do Bootstrap.

---

## Comandos úteis

| Comando | Para que serve |
|---|---|
| `npm start` | Liga o projeto para você ver no navegador |
| `npm run build` | Gera a versão final do projeto, na pasta `dist/` |
| `npm test` | Roda os testes automáticos do projeto |
