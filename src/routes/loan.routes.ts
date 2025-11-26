import { Router } from "express";
import { LoanController } from "../controllers";

const router = Router();

router.get("/loan", 
	/* #swagger.tags = ['Loan']
		 #swagger.summary = 'Lista todos os empréstimos'
		 #swagger.responses[200] = {
				description: 'Lista de empréstimos',
				schema: [{
					_id: '1',
					book: { _id: 'b1', title: 'It', author: { _id: 'a1', name: 'Stephen King' }, year: 1986 },
					user: { _id: 'u1', name: 'João', email: 'joao@email.com' },
					loanDate: '2023-11-01T00:00:00.000Z',
					returnDate: '2023-12-01T00:00:00.000Z'
				}]
		 }
		 #swagger.responses[204] = {
				description: 'Nenhum empréstimo encontrado',
				schema: []
		 }
	*/
	LoanController.getAll
);

router.get("/loan/:id", 
	/* #swagger.tags = ['Loan']
		 #swagger.summary = 'Busca empréstimo por ID'
		 #swagger.parameters['id'] = { in: 'path', description: 'ID do empréstimo', required: true, type: 'string' }
		 #swagger.responses[200] = {
				description: 'Empréstimo encontrado',
				schema: {
					_id: '1',
					book: { _id: 'b1', title: 'It', author: { _id: 'a1', name: 'Stephen King' }, year: 1986 },
					user: { _id: 'u1', name: 'João', email: 'joao@email.com' },
					loanDate: '2023-11-01T00:00:00.000Z',
					returnDate: '2023-12-01T00:00:00.000Z'
				}
		 }
		 #swagger.responses[404] = {
				description: 'Empréstimo não encontrado',
				schema: { message: 'Empréstimo não encontrado' }
		 }
	*/
	LoanController.getById
);

router.get("/loan/livro/:bookId", 
	/* #swagger.tags = ['Loan']
		 #swagger.summary = 'Busca empréstimos por livro'
		 #swagger.parameters['bookId'] = { in: 'path', description: 'ID do livro', required: true, type: 'string' }
		 #swagger.responses[200] = {
				description: 'Empréstimos encontrados',
				schema: [{
					_id: '1',
					book: { _id: 'b1', title: 'It', author: { _id: 'a1', name: 'Stephen King' }, year: 1986 },
					user: { _id: 'u1', name: 'João', email: 'joao@email.com' },
					loanDate: '2023-11-01T00:00:00.000Z',
					returnDate: '2023-12-01T00:00:00.000Z'
				}]
		 }
		 #swagger.responses[404] = {
				description: 'Empréstimo não encontrado',
				schema: { message: 'Empréstimo não encontrado' }
		 }
	*/
	LoanController.getByBook
);

router.get("/loan/usuario/:userId", 
	/* #swagger.tags = ['Loan']
		 #swagger.summary = 'Busca empréstimos por usuário'
		 #swagger.parameters['userId'] = { in: 'path', description: 'ID do usuário', required: true, type: 'string' }
		 #swagger.responses[200] = {
				description: 'Empréstimos encontrados',
				schema: [{
					_id: '1',
					book: { _id: 'b1', title: 'It', author: { _id: 'a1', name: 'Stephen King' }, year: 1986 },
					user: { _id: 'u1', name: 'João', email: 'joao@email.com' },
					loanDate: '2023-11-01T00:00:00.000Z',
					returnDate: '2023-12-01T00:00:00.000Z'
				}]
		 }
		 #swagger.responses[404] = {
				description: 'Empréstimo não encontrado',
				schema: { message: 'Empréstimo não encontrado' }
		 }
	*/
	LoanController.getByUser
);

router.post("/loan", 
  /* #swagger.tags = ['Loan']
	  #swagger.summary = 'Cria um novo empréstimo'
	  #swagger.parameters['body'] = {
		  in: 'body',
		  description: 'Dados do empréstimo',
		  required: true,
		  schema: { $ref: '#/components/schemas/Loan' }
	  }
	  #swagger.responses[201] = {
		  description: 'Empréstimo criado',
		  schema: {
			 _id: '2',
			 book: { _id: 'b2', title: 'Harry Potter', author: { _id: 'a2', name: 'J. K. Rowling' }, year: 1997 },
			 user: { _id: 'u2', name: 'Maria', email: 'maria@email.com' },
			 loanDate: '2023-12-01T00:00:00.000Z',
			 returnDate: '2024-01-01T00:00:00.000Z'
		  }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao criar empréstimo',
		  schema: { message: 'Erro ao criar empréstimo', error: {} }
	  }
  */
  LoanController.create
);

router.put("/loan/:id", 
  /* #swagger.tags = ['Loan']
	  #swagger.summary = 'Atualiza um empréstimo'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do empréstimo', required: true, type: 'string' }
	  #swagger.parameters['body'] = {
		  in: 'body',
		  description: 'Dados do empréstimo',
		  required: true,
		  schema: { $ref: '#/components/schemas/Loan' }
	  }
	  #swagger.responses[200] = {
		  description: 'Empréstimo atualizado',
		  schema: { acknowledged: true, modifiedCount: 1 }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao atualizar empréstimo',
		  schema: { message: 'Erro ao atualizar empréstimo', error: {} }
	  }
  */
  LoanController.update
);

router.delete("/loan/:id", 
  /* #swagger.tags = ['Loan']
	  #swagger.summary = 'Remove um empréstimo'
	  #swagger.parameters['id'] = { in: 'path', description: 'ID do empréstimo', required: true, type: 'string' }
	  #swagger.responses[200] = {
		  description: 'Empréstimo removido',
		  schema: { acknowledged: true, deletedCount: 1 }
	  }
	  #swagger.responses[500] = {
		  description: 'Erro ao deletar empréstimo',
		  schema: { message: 'Erro ao deletar empréstimo', error: {} }
	  }
  */
  LoanController.delete
);

export default router;