import {
  DeleteResult,
  InsertOneResult,
  ObjectId,
  OptionalId,
  UpdateResult,
  WithId,
} from "mongodb";
import { client } from "../db/mongoClient";
import { TUser } from "../types/User";

const collectionUsers = client.db().collection<TUser>("users");

export const usersRepository = {
  async usersFindAll(limitValue: number, skipValue: number) {
    return await collectionUsers
      .find({})
      .skip(skipValue)
      .limit(limitValue)
      .toArray();
  },

  async userFindById(id: string) {
    return collectionUsers.findOne({ _id: new ObjectId(id) });
  },

  async userFindByLoginOrEmail(loginOrEmail: string) {
    return await collectionUsers.findOne({
      $or: [{ userName: loginOrEmail }, { email: loginOrEmail }],
    });
  },

  async userCreate(
    newUser: OptionalId<TUser>
  ): Promise<InsertOneResult<TUser>> {
    return collectionUsers.insertOne(newUser);
  },
};
