import { type AuthorType } from "../models";
import type { Request, Response } from "express";
import { AuthorService } from "../services";

export const AuthorController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const authors = await AuthorService.findAll();
      if (authors.length === 0) return res.status(204).json(authors);
      return res.status(200).json(authors);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar autores", error: e });
    }
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "ID do autor não fornecido" });

    try {
      const author = await AuthorService.findById(id);
      if (!author) return res.status(404).json({ message: "Autor não encontrado" });
      return res.status(200).json(author);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar autor", error: e });
    }
  },

  getByName: async (req: Request, res: Response) => {
    const name = req.params.name;
    if (!name) return res.status(400).json({ message: "Nome do autor não fornecido" });

    try {
      const authors = await AuthorService.findByName(name);
      if (!authors || authors.length === 0) return res.status(404).json({ message: "Autor não encontrado" });
      return res.status(200).json(authors);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar autor", error: e });
    }
  },

  create: async (req: Request, res: Response) => {
    const author = req.body as AuthorType;
    try {
      const created = await AuthorService.addAuthor(author);
      return res.status(201).json(created);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao criar autor", error: e });
    }
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id;
    const author = req.body as AuthorType;
    try {
      const updated = await AuthorService.updateAuthor(id, author);
      return res.status(200).json(updated);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao atualizar autor", error: e });
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleted = await AuthorService.deleteAuthor(id);
      return res.status(200).json(deleted);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao deletar autor", error: e });
    }
  }
};