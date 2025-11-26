import mongoose, { type InferSchemaType } from "mongoose";

export const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export type AuthorType = InferSchemaType<typeof AuthorSchema>