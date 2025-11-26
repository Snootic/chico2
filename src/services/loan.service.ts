import { type LoanType } from "../models/loan.dto";
import { LoanRepository } from "../repositories/loan.repository";
import type { DeleteResult, Document } from "mongoose";

export const LoanService = {
  async findAll(): Promise<LoanType[]> {
    return await LoanRepository.findAll();
  },
  async findById(id: string): Promise<LoanType | null> {
    return await LoanRepository.findById(id);
  },
  async findLoansByBook(bookUUID: string): Promise<LoanType[] | null> {
    return await LoanRepository.findLoansByBook(bookUUID);
  },
  async findLoansByUser(userUUID: string): Promise<LoanType[] | null> {
    return await LoanRepository.findLoansByUser(userUUID);
  },
  async addLoan(input: LoanType | LoanType[]): Promise<Document | Document[]> {
    return await LoanRepository.addLoan(input);
  },
  async deleteLoan(id: string | string[]): Promise<DeleteResult | Document | null> {
    return await LoanRepository.deleteLoan(id);
  },
  async updateLoan(id: string, loan: LoanType) {
    return await LoanRepository.updateLoan(id, loan);
  }
};