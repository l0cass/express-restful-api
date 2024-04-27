# API RESTful com Express e MongoDB

Este projeto é uma API RESTful construída com [Express](https://expressjs.com/), conectada a um banco de dados [MongoDB](https://www.mongodb.com/), e que utiliza [Mongoose](https://mongoosejs.com/) para modelar os dados.

## Recursos

- Rotas CRUD para gerenciamento de posts:
  - **GET `/posts`**: Retorna todos os posts não excluídos.
  - **GET `/posts/:id`**: Retorna um post específico pelo ID.
  - **POST `/posts`**: Cria um novo post com título, conteúdo e autor.
  - **DELETE `/posts`**: Remove um post pelo título usando soft delete.
- Conexão com MongoDB Atlas.
- Variáveis de ambiente configuradas com `dotenv`.
- Tratamento de erros para solicitações inválidas e falhas no banco de dados.

## Requisitos para Execução

Para rodar o projeto, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/l0cass/api-restful.git
   ```

````

2. Navegue até o diretório do projeto:

   ```bash
   cd api-restful
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente no arquivo `.env` (por exemplo, porta do servidor, URI do banco de dados):

   ```bash
   PORT=3000
   MONGODB_URI="your_mongodb_connection_string"
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

6. O servidor estará rodando em `http://localhost:3000` (ou a porta definida na variável de ambiente).

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou correções, sinta-se à vontade para abrir um [issue](https://github.com/l0cass/api-restful/issues) ou enviar um [pull request](https://github.com/l0cass/api-restful/pulls).

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

```

Este README.md fornece uma visão geral do projeto, instruções de configuração e execução, detalhes das funcionalidades, bem como informações sobre contribuição e licença. Com isso, você deve ter um bom ponto de partida para compartilhar seu projeto com outras pessoas.
````
