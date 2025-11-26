import { type BookType } from "../models/book.dto";
import { BookRepository } from "../repositories/book.repository";
import type { DeleteResult, Document } from "mongoose";

export const BookService = {
  async findAll(): Promise<BookType[]> {
    return await BookRepository.findAll();
  },
  async findById(id: string): Promise<BookType | null> {
    return await BookRepository.findById(id);
  },
  async findByTitle(title: string): Promise<BookType[] | null> {
    return await BookRepository.findByTitle(title);
  },
  async findBooksByAuthor(authorUUID: string): Promise<BookType[] | null> {
    return await BookRepository.findBooksByAuthor(authorUUID);
  },
  async addBook(input: BookType | BookType[]): Promise<Document | Document[]> {
    return await BookRepository.addBook(input);
  },
  async deleteBook(id: string | string[]): Promise<DeleteResult | Document | null> {
    return await BookRepository.deleteBook(id);
  },
  async updateBook(id: string, book: BookType) {
    return await BookRepository.updateBook(id, book);
  }
};