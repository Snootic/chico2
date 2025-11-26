import mongoose, { type InferSchemaType } from "mongoose";
import { AuthorSchema } from "./author.dto";

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: AuthorSchema, required: true },
  publishDate: {type: Date, required: true}
});

export type BookType = InferSchemaType<typeof BookSchema>