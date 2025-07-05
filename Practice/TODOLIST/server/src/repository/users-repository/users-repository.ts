import { DeleteResult, InsertOneResult, UpdateResult, WithId } from "mongodb";
import { client } from "../../db/mongoClient";
import { TUserDB } from "./users-repository-types";

const collectionUsers = client.db().collection<TUserDB>("users");

export const usersRepository = {
  async usersFindAll(limitValue: number, skipValue: number) {
    return await collectionUsers
      .find({})
      .skip(skipValue)
      .limit(limitValue)
      .toArray();
  },

  async userFindById(id: string): Promise<WithId<TUserDB> | null> {
    return collectionUsers.findOne({ _id: id });
  },

  async userFindByLoginOrEmail(
    loginOrEmail: string
  ): Promise<WithId<TUserDB> | null> {
    return await collectionUsers.findOne({
      $or: [{ userName: loginOrEmail }, { email: loginOrEmail }],
    });
  },

  async userCreate(newUser: TUserDB): Promise<InsertOneResult<TUserDB>> {
    return collectionUsers.insertOne(newUser);
  },

  async tasksCountGet(searchData?: string): Promise<number> {
    if (searchData) {
      return await collectionUsers.countDocuments({
        title: { $regex: searchData },
      });
    }

    return await collectionUsers.countDocuments({});
  },
};
