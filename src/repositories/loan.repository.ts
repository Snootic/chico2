import type { DeleteResult, Document, Model } from "mongoose";
import { LoanSchema, type LoanType } from "../models";
import { mongoose } from "../mongodb";

const LoanModel: Model<LoanType> = mongoose.models.Loan || mongoose.model<LoanType>("Loan", LoanSchema);

export const LoanRepository = {
  async findAll(): Promise<LoanType[]> {
    const loans: LoanType[] = await LoanModel.find();
    return loans;
  },
  async findById(id: string): Promise<LoanType | null> {
    const loan: LoanType | null = await LoanModel.findOne({ '_id': id });
    return loan;
  },
  async findLoansByBook(bookUUID: string): Promise<LoanType[] | null> {
    const loans: LoanType[] | null = await LoanModel.find({ "book._id": bookUUID });
    return loans;
  },
  async findLoansByUser(userUUID: string): Promise<LoanType[] | null> {
    const loans: LoanType[] | null = await LoanModel.find({ "user._id": userUUID });
    return loans;
  },
  async addLoan(input: LoanType | LoanType[]): Promise<Document | Document[]> {
    return await LoanModel.create(input);
  },
  async deleteLoan(id: string | string[]): Promise<DeleteResult | Document | null> {
    if (Array.isArray(id)) {
      return LoanModel.deleteMany({ '_id': { $in: id } });
    }
    return LoanModel.findByIdAndDelete(id);
  },
  async updateLoan(id: string, loan: LoanType) {
    return LoanModel.updateOne({ _id: id }, loan);
  }
};
