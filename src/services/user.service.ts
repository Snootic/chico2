import { type UserType } from "../models/user.dto";
import { UserRepository } from "../repositories/user.repository";
import type { DeleteResult, Document } from "mongoose";

export const UserService = {
  async findAll(): Promise<UserType[]> {
    return await UserRepository.findAll();
  },
  async findById(id: string): Promise<UserType | null> {
    return await UserRepository.findById(id);
  },
  async findByEmail(email: string): Promise<UserType[] | null> {
    return await UserRepository.findByEmail(email);
  },
  async addUser(input: UserType | UserType[]): Promise<Document | Document[]> {
    return await UserRepository.addUser(input);
  },
  async deleteUser(id: string | string[]): Promise<DeleteResult | Document | null> {
    return await UserRepository.deleteUser(id);
  },
  async updateUser(id: string, user: UserType) {
    return await UserRepository.updateUser(id, user);
  }
};