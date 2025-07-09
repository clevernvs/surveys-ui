# Estrutura do Projeto UI

Este projeto segue as melhores práticas de organização de código React/TypeScript.

## 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── common/         # Componentes comuns (Loading, Error, etc.)
│   ├── forms/          # Componentes de formulário
│   ├── layout/         # Componentes de layout (Header, Container, etc.)
│   └── projects/       # Componentes específicos de projetos
├── constants/          # Constantes da aplicação
│   ├── api.ts         # Endpoints da API
│   └── messages.ts    # Mensagens da aplicação
├── hooks/             # Hooks customizados
├── pages/             # Páginas da aplicação
├── services/          # Serviços de API
├── types/             # Definições de tipos TypeScript
├── utils/             # Utilitários e funções auxiliares
└── App.tsx           # Componente principal
```

## 🏗️ Arquitetura

### Componentes
- **Layout**: Componentes de estrutura da página (Header, PageContainer)
- **Common**: Componentes reutilizáveis (LoadingSpinner, ErrorMessage)
- **Forms**: Componentes de formulário (SearchField)
- **Projects**: Componentes específicos de projetos

### Hooks
- `useProjects`: Gerencia estado e operações dos projetos

### Serviços
- `apiService`: Centraliza chamadas da API

### Utilitários
- `dateUtils`: Formatação de datas
- `searchUtils`: Lógica de busca e filtros

### Tipos
- Centralizados em `types/index.ts`
- Interfaces bem definidas para todos os dados

### Constantes
- `api.ts`: Endpoints e configurações da API
- `messages.ts`: Mensagens da aplicação

## 🎯 Boas Práticas Implementadas

1. **Separação de Responsabilidades**: Cada arquivo tem uma responsabilidade específica
2. **Reutilização**: Componentes modulares e reutilizáveis
3. **Type Safety**: TypeScript com interfaces bem definidas
4. **Centralização**: Serviços e hooks centralizados
5. **Consistência**: Padrões consistentes em todo o projeto
6. **Manutenibilidade**: Código organizado e fácil de manter
7. **Escalabilidade**: Estrutura preparada para crescimento

## 📦 Como Usar

### Importando Componentes
```typescript
import { Header, LoadingSpinner, ProjectsTable } from './components';
```

### Importando Páginas
```typescript
import { ProjectsListPage, CreateProjectPage } from './pages';
```

### Usando Hooks
```typescript
import { useProjects } from './hooks/useProjects';
```

### Usando Serviços
```typescript
import { apiService } from './services/api';
``` 