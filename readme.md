# API Chico

A API pode ser acessada em: **[chico.coisas-mais-estranhas.com.br](https://chico.coisas-mais-estranhas.com.br)**

## Sobre
Esta é uma API para gerenciamento de autores, livros, usuários e empréstimos, desenvolvida em Node.js/TypeScript, utilizando MongoDB como banco de dados.

## Como rodar localmente

É recomendado utilizar um ambiente Linux com Docker Compose instalado.

Execute o comando abaixo para subir o ambiente de desenvolvimento:

```sh
docker compose --env-file .env -f docker-compose-dev.yaml up -d --build
```

Isso irá criar e iniciar os containers necessários para a aplicação e o banco de dados MongoDB.

## Ambiente de produção

A build de produção foi feita para rodar em servidor dedicado, cuja configuração recomendada pode ser encontrada em:
**[LAB](https://github.com/snootic/lab)**

O servidor possui redes internas e externas próprias, configuração de Nginx como proxy reverso e banco de dados dedicado para essa e outras aplicações.

---
