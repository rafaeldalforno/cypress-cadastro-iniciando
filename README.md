# 🔐 Testes Automatizados com Cypress

Este projeto contém testes automatizados de **cadastro de usuário válido e inválido** no site de demonstração [AutomationPractice-Qazando](https://automationpratice.com.br/) utilizando:

- [Cypress](https://www.cypress.io/)
- [Cucumber (Gherkin)](https://cucumber.io/)

---

## 📁 Estrutura do Projeto

```
cypress-cadastro-iniciando/
├── .github/
|   ├── workflows/
|   |   ├── cypress-pipeline-schedule.yml
|   |   └── cypress-pipeline.yml
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── features/
│   │   |   └── cadastro-usuario.feature
│   │   └── cadastro-usuario.cy.js
│   ├── fixtures/
|   |   ├── desafio_invalid_data.json
|   |   ├── desafio_valid_data.json
|   |   └── example.json
│   ├── reports/
|   |   ├── html/
|   |   |   ├── assets/
|   |   |   |   └── ...
|   |   |   ├── screenshots/
|   |   |   ├── index.html/
│   ├── screenshots/
│   ├── support/
|   |   ├── pages/
│   │   |   ├── home_page.js
│   │   |   └── register_page.js
|   |   ├── e2e.js
|   |   ├── home_page_commands.js
|   |   └── register_page_commands.js
│   └── ...
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

---

## 📌 Cenários abordados
- Cadastro com campos vazios
- Cadastro com campo e-mail vazio
- Cadastro com campo e-mail inválido
- Cadastro com campo senha vazia
- Cadastro com campo senha inválida
- Cadastro realizado com sucesso

---

## 🚀 Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Executar testes

- **Modo Interativo (GUI do Cypress):**

```bash
npx cypress open
```

---

## ✍️ Autor(a)

**Rafael Dal Forno dos Santos**  
🔗 [LinkedIn](https://www.linkedin.com/in/rafaeldalforno/)

Projeto desenvolvido para fins de estudo, prática e demonstração de automação de testes com Cypress.