import { Collection } from "mongodb";
import { usersRepository } from "../repository";
import bcrypt from "bcrypt";

export const usersService = {
  async createUser(
    collection: Collection,
    login: string,
    email: string,
    password: string
  ) {
    const passwordSalt = await bcrypt.genSalt(10);
    const passwordHash = await this._generateHash(password, passwordSalt);

    const newUser = {
      userName: login,
      email,
      passwordHash,
      passwordSalt,
      createdAt: new Date(),
    };

    return usersRepository.createUser(collection, newUser);
  },

  async checkCredentials(loginOrEmail: string, password: string) {},

  async _generateHash(password: string, salt: string) {
    return await bcrypt.hash(password, salt);
  },
};
