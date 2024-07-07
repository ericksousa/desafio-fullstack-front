# Sobre

Aplicação desenvolvida com as seguintes tecnologias:

- Vue 3
- Vite
- TypeScript
- Tailwind
- Pinia
- PrimeVue

> O objetivo é consumir a API [deste repositório](https://github.com/ericksousa/desafio-fullstack-back) para realizar autenticação, cadastro de categoria e produtos.

## Estrutura de pastas

```
.
├── controllers
│   ├── config
│   ├── services
│   │   └── shared
│   └── util
├── models
│   ├── entity
│   │   ├── auth
│   │   ├── category
│   │   └── product
│   └── interfaces
├── views
│   ├── components
│   │   └── header
│   ├── data
│   │   ├── auth
│   │   ├── categories
│   │   └── products
│   ├── pages
│   │   ├── auth
│   │   ├── categories
│   │   ├── layouts
│   │   └── products
│   ├── styles
│   └── util
└── vue
    ├── router
    │   ├── enum
    │   ├── hooks
    └── store
        ├── auth
        ├── categories
        └── products
```

## Comandos úteis

### Build and start app
- docker compose up -d
- docker exec -it app_front sh
- npm i && npm run dev

