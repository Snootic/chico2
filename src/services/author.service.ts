import { type AuthorType } from "../models/author.dto";
import { AuthorRepository } from "../repositories/author.repository";
import type { DeleteResult, Document } from "mongoose";

export const AuthorService = {
  async findAll(): Promise<AuthorType[]> {
    return await AuthorRepository.findAll();
  },
  async findById(id: string): Promise<AuthorType | null> {
    return await AuthorRepository.findById(id);
  },
  async findByName(name: string): Promise<AuthorType[] | null> {
    return await AuthorRepository.findByName(name);
  },
  async addAuthor(input: AuthorType | AuthorType[]): Promise<Document | Document[]> {
    return await AuthorRepository.addAuthor(input);
  },
  async deleteAuthor(id: string | string[]): Promise<DeleteResult | Document | null> {
    return await AuthorRepository.deleteAuthor(id);
  },
  async updateAuthor(id: string, author: AuthorType) {
    return await AuthorRepository.updateAuthor(id, author);
  }
};