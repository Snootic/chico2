import { Router } from "express";
import { UserController } from "../controllers";

const router = Router();

router.get("/user", 
  /* #swagger.tags = ['User']
	  #swagger.summary = 'Lista todos os usuários'
	  #swagger.responses[200] = {
		  description: 'Lista de usuários',
		  schema: [{ _id: '1', name: 'João', email: 'joao@email.com' }]
	  }
	  #swagger.responses[204] = {
		  description: 'Nenhum usuário encontrado',
		  schema: []
	  }
  */
  UserController.getAll
);

router.get("/user/:id", 
  /* #swagger.tags = ['User']
	  #swagger.summary = 'Busca usuário por ID'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do usuário', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Usuário encontrado',
		  schema: { _id: '1', name: 'João', email: 'joao@email.com' }
	  }
	  #swagger.responses[404] = {
		  description: 'Usuário não encontrado',
		  schema: { message: 'Usuário não encontrado' }
	  }
  */
  UserController.getById
);

router.get("/user/email/:email", 
  /* #swagger.tags = ['User']
	  #swagger.summary = 'Busca usuário por e-mail'
	  #swagger.parameters['email'] = { in: 'path', description: 'E-mail do usuário', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Usuário encontrado',
		  schema: { _id: '1', name: 'João', email: 'joao@email.com' }
	  }
	  #swagger.responses[404] = {
		  description: 'Usuário não encontrado',
		  schema: { message: 'Usuário não encontrado' }
	  }
  */
  UserController.getByEmail
);

router.post("/user", 
  /* #swagger.tags = ['User']
	  #swagger.summary = 'Cria um novo usuário'
	  #swagger.parameters['body'] = {
			in: 'body',
			description: 'Dados do usuário',
			required: true,
			schema: { $ref: '#/components/schemas/User' }
	  }
	  #swagger.responses[201] = {
		  description: 'Usuário criado',
		  schema: { _id: '2', name: 'Maria', email: 'maria@email.com' }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao criar usuário',
		  schema: { message: 'Erro ao criar usuário', error: {} }
	  }
  */
  UserController.create
);

router.put("/user/:id", 
  /* #swagger.tags = ['User']
	  #swagger.summary = 'Atualiza um usuário'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do usuário', required: true, type: 'string' }
	  #swagger.parameters['body'] = {
			in: 'body',
			description: 'Dados do usuário',
			required: true,
			schema: { $ref: '#/components/schemas/User' }
	  }
	  #swagger.responses[200] = {
		  description: 'Usuário atualizado',
		  schema: { acknowledged: true, modifiedCount: 1 }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao atualizar usuário',
		  schema: { message: 'Erro ao atualizar usuário', error: {} }
	  }
  */
  UserController.update
);

router.delete("/user/:id", 
  /* #swagger.tags = ['User']
	  #swagger.summary = 'Remove um usuário'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do usuário', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Usuário removido',
		  schema: { acknowledged: true, deletedCount: 1 }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao deletar usuário',
		  schema: { message: 'Erro ao deletar usuário', error: {} }
	  }
  */
  UserController.delete
);

export default router;