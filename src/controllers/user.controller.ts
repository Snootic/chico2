import { type UserType } from "../models";
import type { Request, Response } from "express";
import { UserService } from "../services";

export const UserController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const users = await UserService.findAll();
      if (users.length === 0) return res.status(204).json(users);
      return res.status(200).json(users);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar usuários", error: e });
    }
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "ID do usuário não fornecido" });

    try {
      const user = await UserService.findById(id);
      if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
      return res.status(200).json(user);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar usuário", error: e });
    }
  },

  getByEmail: async (req: Request, res: Response) => {
    const email = req.params.email;
    if (!email) return res.status(400).json({ message: "Email do usuário não fornecido" });

    try {
      const users = await UserService.findByEmail(email);
      if (!users || users.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });
      return res.status(200).json(users);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao buscar usuário", error: e });
    }
  },

  create: async (req: Request, res: Response) => {
    const user = req.body as UserType;
    try {
      const created = await UserService.addUser(user);
      return res.status(201).json(created);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao criar usuário", error: e });
    }
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = req.body as UserType;
    try {
      const updated = await UserService.updateUser(id, user);
      return res.status(200).json(updated);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao atualizar usuário", error: e });
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleted = await UserService.deleteUser(id);
      return res.status(200).json(deleted);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Erro ao deletar usuário", error: e });
    }
  }
};