import mongoose, { type InferSchemaType } from "mongoose";
import { BookSchema } from "./book.dto";
import { UserSchema } from "./user.dto";

export const LoanSchema = new mongoose.Schema({
  book: { type: BookSchema, required: true },
  user: { type: UserSchema, required: true },
  loanDate: { type: Date, required: true },
  returnDate: { type: Date, required: true }
});

export type LoanType = InferSchemaType<typeof LoanSchema>