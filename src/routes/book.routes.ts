import { Router } from "express";
import { BookController } from "../controllers";

const router = Router();

router.get("/book", 
  /* #swagger.tags = ['Book']
	  #swagger.summary = 'Lista todos os livros'
	  #swagger.responses[200] = {
		  description: 'Lista de livros',
		  schema: [{ _id: '1', title: 'It', author: 'Stephen King' }]
	  }
	  #swagger.responses[204] = {
		  description: 'Nenhum livro encontrado',
		  schema: []
	  }
  */
  BookController.getAll
);

router.get("/book/:id", 
  /* #swagger.tags = ['Book']
	  #swagger.summary = 'Busca livro por ID'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do livro', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Livro encontrado',
		  schema: { _id: '1', title: 'It', author: 'Stephen King' }
	  }
	  #swagger.responses[404] = {
		  description: 'Livro não encontrado',
		  schema: { message: 'Livro não encontrado' }
	  }
  */
  BookController.getById
);

router.get("/book/title/:title", 
  /* #swagger.tags = ['Book']
	  #swagger.summary = 'Busca livro por título'
	  #swagger.parameters['title'] = { in: 'path', description: 'Título do livro', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Livros encontrados',
		  schema: [{ _id: '1', title: 'It', author: 'Stephen King' }]
	  }
	  #swagger.responses[404] = {
		  description: 'Livro não encontrado',
		  schema: { message: 'Livro não encontrado' }
	  }
  */
  BookController.getByTitle
);

router.get("/book/author/:authorId", 
  /* #swagger.tags = ['Book']
	  #swagger.summary = 'Busca livros por autor'
	  #swagger.parameters['authorId'] = { in: 'path', description: 'ID do autor', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Livros encontrados',
		  schema: [{ _id: '1', title: 'It', author: 'Stephen King' }]
	  }
	  #swagger.responses[404] = {
		  description: 'Livro não encontrado',
		  schema: { message: 'Livro não encontrado' }
	  }
  */
  BookController.getByAuthor
);

router.post("/book", 
  /* #swagger.tags = ['Book']
	  #swagger.summary = 'Cria um novo livro'
	  #swagger.requestBody = {
			required: true,
			content: {
				"application/json": {
					schema: { $ref: '#/components/schemas/Book' }
				}
			}
	  }
	  #swagger.responses[201] = {
		  description: 'Livro criado',
		  schema: { _id: '2', title: 'Harry Potter', author: 'J. K. Rowling' }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao criar livro',
		  schema: { message: 'Erro ao criar livro', error: {} }
	  }
  */
  BookController.create
);

router.put("/book/:id", 
  /* #swagger.tags = ['Book']
	  #swagger.summary = 'Atualiza um livro'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do livro', required: true, type: 'string' }
	  #swagger.requestBody = {
			required: true,
			content: {
				"application/json": {
					schema: { $ref: '#/components/schemas/Book' }
				}
			}
	  }
	  #swagger.responses[200] = {
		  description: 'Livro atualizado',
		  schema: { acknowledged: true, modifiedCount: 1 }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao atualizar livro',
		  schema: { message: 'Erro ao atualizar livro', error: {} }
	  }
  */
  BookController.update
);

router.delete("/book/:id", 
  /* #swagger.tags = ['Book']
	  #swagger.summary = 'Remove um livro'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do livro', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Livro removido',
		  schema: { acknowledged: true, deletedCount: 1 }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao deletar livro',
		  schema: { message: 'Erro ao deletar livro', error: {} }
	  }
  */
  BookController.delete
);

export default router;