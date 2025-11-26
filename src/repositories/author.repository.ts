import type { DeleteResult, Document, Model } from "mongoose";
import { AuthorSchema, type AuthorType } from "../models";
import { mongoose } from "../mongodb";

const AuthorModel: Model<AuthorType> = mongoose.models.Author || mongoose.model<AuthorType>("Author", AuthorSchema);

export const AuthorRepository = {
  async findAll(): Promise<AuthorType[]> {
    const authors: AuthorType[] = await AuthorModel.find()
    return authors
  },
  async findById(id: string): Promise<AuthorType | null> {
    const author: AuthorType | null = await AuthorModel.findOne({'_id': id})
    return author
  },
  async findByName(name: string): Promise<AuthorType[] | null> {
    const authors: AuthorType[] | null = await AuthorModel.find({ "name": name })
    return authors
  },
  async addAuthor(input: AuthorType | AuthorType[]): Promise<Document | Document[]> {
    return await AuthorModel.create(input);
  },
  async deleteAuthor(id: string | string[]): Promise<DeleteResult | Document | null> {
    if (Array.isArray(id)) {
      return AuthorModel.deleteMany({ '_id': { $in: id } })
    }
    return AuthorModel.findByIdAndDelete(id)
  },
  async updateAuthor(id: string, author: AuthorType) {
    return AuthorModel.updateOne({ _id: id }, author);
  }
};
