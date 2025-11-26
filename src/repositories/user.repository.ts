import type { DeleteResult, Document, Model } from "mongoose";
import { UserSchema, type UserType } from "../models";
import { mongoose } from "../mongodb";

const UserModel: Model<UserType> = mongoose.models.User || mongoose.model<UserType>("User", UserSchema);

export const UserRepository = {
  async findAll(): Promise<UserType[]> {
    const users: UserType[] = await UserModel.find();
    return users;
  },
  async findById(id: string): Promise<UserType | null> {
    const user: UserType | null = await UserModel.findOne({ '_id': id });
    return user;
  },
  async findByEmail(email: string): Promise<UserType[] | null> {
    const users: UserType[] | null = await UserModel.find({ "email": email });
    return users;
  },
  async addUser(input: UserType | UserType[]): Promise<Document | Document[]> {
    return await UserModel.create(input);
  },
  async deleteUser(id: string | string[]): Promise<DeleteResult | Document | null> {
    if (Array.isArray(id)) {
      return UserModel.deleteMany({ '_id': { $in: id } });
    }
    return UserModel.findByIdAndDelete(id);
  },
  async updateUser(id: string, user: UserType) {
    return UserModel.updateOne({ _id: id }, user);
  }
};
