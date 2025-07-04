export const usersRepository = {
  async createUser(
    collection,
    newUser: {
      userName: string;
      email: string;
      passwordHash: string;
      passwordSalt: string;
      createdAt: Date;
    }
  ) {
    return collection.insertOne(newUser);
  },
};
