import { usersRepository } from "../../repository";
import bcrypt from "bcrypt";

export const usersService = {
  async usersFindAll(limitValue: number, skipValue: number) {
    return await usersRepository.usersFindAll(limitValue, skipValue);
  },

  async createUser(login: string, email: string, password: string) {
    const passwordSalt = await bcrypt.genSalt(10);
    const passwordHash = await this._generateHash(password, passwordSalt);

    const newUser = {
      _id: crypto.randomUUID(),
      userName: login,
      email,
      passwordHash,
      passwordSalt,
      createdAt: new Date(),
    };

    return await usersRepository.userCreate(newUser);
  },

  async userFindById(id: string) {
    return await usersRepository.userFindById(id);
  },

  async checkCredentials(loginOrEmail: string, password: string) {
    const user = await usersRepository.userFindByLoginOrEmail(loginOrEmail);
    if (!user) return false;

    const passwordHash = await this._generateHash(password, user.passwordSalt);
    if (user.passwordHash !== passwordHash) return false;

    return user;
  },

  async _generateHash(password: string, salt: string) {
    return await bcrypt.hash(password, salt);
  },

  async usersCountGet(searchData?: string) {
    return await usersRepository.tasksCountGet(searchData);
  },

  async queryPagesDataTransform(
    pageSize?: number,
    pageNumber?: number,
    searchData?: string
  ): Promise<{
    pagesCountValue: number;
    limitValue: number;
    skipValue: number;
  }> {
    let elementsCount = 0;
    const pageNumberVariant = pageNumber || 1;
    const pageSizeVariant = pageSize || 5;

    searchData
      ? (elementsCount = await this.usersCountGet(searchData))
      : (elementsCount = await this.usersCountGet());

    const limitValue = pageSizeVariant;
    const pagesCountValue = Math.ceil(elementsCount / pageSizeVariant);
    const skipValue = (pageNumberVariant - 1) * pageSizeVariant;

    return {
      pagesCountValue,
      limitValue,
      skipValue,
    };
  },
};
