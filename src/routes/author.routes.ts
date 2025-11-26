import { Router } from "express";
import { AuthorController } from "../controllers";

const router = Router();

router.get("/author", 
  /* #swagger.tags = ['Author']
	  #swagger.summary = 'Lista todos os autores'
	  #swagger.responses[200] = {
		  description: 'Lista de autores',
		  schema: [{ _id: '1', name: 'Stephen King' }]
	  }
	  #swagger.responses[204] = {
		  description: 'Nenhum autor encontrado',
		  schema: []
	  }
  */
  AuthorController.getAll
);

router.get("/author/:id", 
  /* #swagger.tags = ['Author']
	  #swagger.summary = 'Busca autor por ID'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do autor', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Autor encontrado',
		  schema: { _id: '1', name: 'Stephen King' }
	  }
	  #swagger.responses[404] = {
		  description: 'Autor não encontrado',
		  schema: { message: 'Autor não encontrado' }
	  }
  */
  AuthorController.getById
);

router.get("/author/nome/:name", 
  /* #swagger.tags = ['Author']
	  #swagger.summary = 'Busca autor por nome'
	  #swagger.parameters['name'] = { in: 'path', description: 'Nome do autor', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Autores encontrados',
		  schema: [{ _id: '1', name: 'Stephen King' }]
	  }
	  #swagger.responses[404] = {
		  description: 'Autor não encontrado',
		  schema: { message: 'Autor não encontrado' }
	  }
  */
  AuthorController.getByName
);

router.post("/author", 
  /* #swagger.tags = ['Author']
	  #swagger.summary = 'Cria um novo autor'
	  #swagger.parameters['body'] = {
			in: 'body',
			description: 'Dados do autor',
			required: true,
			schema: { $ref: '#/components/schemas/Author' }
	  }
	  #swagger.responses[201] = {
		  description: 'Autor criado',
		  schema: { _id: '2', name: 'J. K. Rowling' }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao criar autor',
		  schema: { message: 'Erro ao criar autor', error: {} }
	  }
  */
  AuthorController.create
);

router.put("/author/:id", 
  /* #swagger.tags = ['Author']
	  #swagger.summary = 'Atualiza um autor'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do autor', required: true, type: 'string' }
	  #swagger.parameters['body'] = {
			in: 'body',
			description: 'Dados do autor',
			required: true,
			schema: { $ref: '#/components/schemas/Author' }
	  }
	  #swagger.responses[200] = {
		  description: 'Autor atualizado',
		  schema: { acknowledged: true, modifiedCount: 1 }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao atualizar autor',
		  schema: { message: 'Erro ao atualizar autor', error: {} }
	  }
  */
  AuthorController.update
);


router.delete("/author/:id", 
  /* #swagger.tags = ['Author']
	  #swagger.summary = 'Remove um autor'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do autor', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Autor removido',
		  schema: { acknowledged: true, deletedCount: 1 }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao deletar autor',
		  schema: { message: 'Erro ao deletar autor', error: {} }
	  }
  */
  AuthorController.delete
);

export default router;