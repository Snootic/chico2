import { type LoanType } from "../models";
import type { Request, Response } from "express";
import { LoanService } from "../services";

export const LoanController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const loans = await LoanService.findAll();
      if (loans.length === 0) return res.status(204).json(loans);
      return res.status(200).json(loans);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar empréstimos", error: e });
    }
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "ID do empréstimo não fornecido" });

    try {
      const loan = await LoanService.findById(id);
      if (!loan) return res.status(404).json({ message: "Empréstimo não encontrado" });
      return res.status(200).json(loan);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar empréstimo", error: e });
    }
  },

  getByBook: async (req: Request, res: Response) => {
    const bookId = req.params.bookId;
    if (!bookId) return res.status(400).json({ message: "ID do livro não fornecido" });

    try {
      const loans = await LoanService.findLoansByBook(bookId);
      if (!loans || loans.length === 0) return res.status(404).json({ message: "Nenhum empréstimo encontrado para este livro" });
      return res.status(200).json(loans);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar empréstimos do livro", error: e });
    }
  },

  getByUser: async (req: Request, res: Response) => {
    const userId = req.params.userId;
    if (!userId) return res.status(400).json({ message: "ID do usuário não fornecido" });

    try {
      const loans = await LoanService.findLoansByUser(userId);
      if (!loans || loans.length === 0) return res.status(404).json({ message: "Nenhum empréstimo encontrado para este usuário" });
      return res.status(200).json(loans);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar empréstimos do usuário", error: e });
    }
  },

  create: async (req: Request, res: Response) => {
    const loan = req.body as LoanType;
    try {
      const created = await LoanService.addLoan(loan);
      return res.status(201).json(created);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao criar empréstimo", error: e });
    }
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id;
    const loan = req.body as LoanType;
    try {
      const updated = await LoanService.updateLoan(id, loan);
      return res.status(200).json(updated);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao atualizar empréstimo", error: e });
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleted = await LoanService.deleteLoan(id);
      return res.status(200).json(deleted);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao deletar empréstimo", error: e });
    }
  }
};