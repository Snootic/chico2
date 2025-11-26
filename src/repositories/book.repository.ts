import type { DeleteResult, Document, Model } from "mongoose";
import { BookSchema, type BookType } from "../models";
import { mongoose } from "../mongodb";

const BookModel: Model<BookType> = mongoose.models.Book || mongoose.model<BookType>("Book", BookSchema);

export const BookRepository = {
  async findAll(): Promise<BookType[]> {
    const books: BookType[] = await BookModel.find();
    return books;
  },
  async findById(id: string): Promise<BookType | null> {
    const book: BookType | null = await BookModel.findOne({ '_id': id });
    return book;
  },
  async findByTitle(title: string): Promise<BookType[] | null> {
    const books: BookType[] | null = await BookModel.find({ "title": title });
    return books;
  },
  async findBooksByAuthor(authorUUID: string): Promise<BookType[] | null> {
    const books: BookType[] | null = await BookModel.find({ "author._id": authorUUID });
    return books;
  },
  async addBook(input: BookType | BookType[]): Promise<Document | Document[]> {
    return await BookModel.create(input);
  },
  async deleteBook(id: string | string[]): Promise<DeleteResult | Document | null> {
    if (Array.isArray(id)) {
      return BookModel.deleteMany({ '_id': { $in: id } });
    }
    return BookModel.findByIdAndDelete(id);
  },
  async updateBook(id: string, book: BookType) {
    return BookModel.updateOne({ _id: id }, book);
  }
};
