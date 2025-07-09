# Surveys UI

Interface de usuário para o sistema de pesquisas, desenvolvida com React, TypeScript e Material-UI.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Material-UI** - Biblioteca de componentes React
- **ESLint** - Linter para qualidade de código
- **Prettier** - Formatador de código

## 📁 Estrutura do Projeto

O projeto segue as melhores práticas de organização:

```
src/
├── components/          # Componentes reutilizáveis
│   ├── common/         # Componentes comuns
│   ├── forms/          # Componentes de formulário
│   ├── layout/         # Componentes de layout
│   └── projects/       # Componentes específicos
├── constants/          # Constantes da aplicação
├── hooks/             # Hooks customizados
├── pages/             # Páginas da aplicação
├── services/          # Serviços de API
├── types/             # Definições TypeScript
└── utils/             # Utilitários
```

## 🛠️ Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm test` - Executa testes
- `npm run lint` - Verifica qualidade do código
- `npm run lint:fix` - Corrige problemas de linting
- `npm run format` - Formata o código
- `npm run type-check` - Verifica tipos TypeScript

## 🎯 Funcionalidades

- ✅ Listagem de projetos
- ✅ Criação de novos projetos
- ✅ Busca e filtros
- ✅ Interface responsiva
- ✅ Tratamento de erros
- ✅ Loading states

## 📦 Instalação

```bash
npm install
```

## 🚀 Execução

```bash
npm start
```

A aplicação estará disponível em `http://localhost:8080`

## 🏗️ Arquitetura

### Componentes
- **Layout**: Header, PageContainer
- **Common**: LoadingSpinner, ErrorMessage
- **Forms**: SearchField
- **Projects**: ProjectsTable, CreateProjectForm

### Hooks
- `useProjects`: Gerencia estado dos projetos

### Serviços
- `apiService`: Centraliza chamadas da API

### Utilitários
- `dateUtils`: Formatação de datas
- `searchUtils`: Lógica de busca

## 🎨 Boas Práticas

1. **Separação de Responsabilidades**
2. **Componentes Reutilizáveis**
3. **Type Safety com TypeScript**
4. **Centralização de Serviços**
5. **Consistência de Padrões**
6. **Manutenibilidade**
7. **Escalabilidade**

## 📚 Documentação

Veja `src/README.md` para detalhes da estrutura interna do projeto.
