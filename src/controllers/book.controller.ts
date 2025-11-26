import { type BookType } from "../models";
import type { Request, Response } from "express";
import { BookService } from "../services";

export const BookController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const books = await BookService.findAll();
      if (books.length === 0) return res.status(204).json(books);
      return res.status(200).json(books);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar livros", error: e });
    }
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "ID do livro não fornecido" });

    try {
      const book = await BookService.findById(id);
      if (!book) return res.status(404).json({ message: "Livro não encontrado" });
      return res.status(200).json(book);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar livro", error: e });
    }
  },

  getByTitle: async (req: Request, res: Response) => {
    const title = req.params.title;
    if (!title) return res.status(400).json({ message: "Título do livro não fornecido" });

    try {
      const books = await BookService.findByTitle(title);
      if (!books || books.length === 0) return res.status(404).json({ message: "Livro não encontrado" });
      return res.status(200).json(books);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar livro", error: e });
    }
  },

  getByAuthor: async (req: Request, res: Response) => {
    const authorId = req.params.authorId;
    if (!authorId) return res.status(400).json({ message: "ID do autor não fornecido" });

    try {
      const books = await BookService.findBooksByAuthor(authorId);
      if (!books || books.length === 0) return res.status(404).json({ message: "Nenhum livro encontrado para este autor" });
      return res.status(200).json(books);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar livros do autor", error: e });
    }
  },

  create: async (req: Request, res: Response) => {
    const book = req.body as BookType;
    try {
      const created = await BookService.addBook(book);
      return res.status(201).json(created);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao criar livro", error: e });
    }
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id;
    const book = req.body as BookType;
    try {
      const updated = await BookService.updateBook(id, book);
      return res.status(200).json(updated);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao atualizar livro", error: e });
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleted = await BookService.deleteBook(id);
      return res.status(200).json(deleted);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao deletar livro", error: e });
    }
  }
};