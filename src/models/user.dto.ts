import mongoose, { type InferSchemaType } from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type: String, required: true}
});

export type UserType = InferSchemaType<typeof UserSchema>