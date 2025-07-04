import { TTaskBody, TTask } from "../types";
import {
  DeleteResult,
  InsertOneResult,
  ObjectId,
  OptionalId,
  UpdateResult,
  WithId,
} from "mongodb";
import { client } from "../db/mongoClient";

const collectionTasks = client.db().collection<TTask>("tasks");

export const tasksRepository = {
  async tasksFindAll(limitValue: number, skipValue: number) {
    return await collectionTasks
      .find({})
      .skip(skipValue)
      .limit(limitValue)
      .toArray();
  },

  async taskFindById(id: string) {
    return await collectionTasks.findOne({ _id: new ObjectId(id) });
  },

  async taskFindByFilter(
    searchData: string,
    skipValue: number,
    limitValue: number
  ): Promise<WithId<TTask>[]> {
    return await collectionTasks
      .find({ title: { $regex: searchData, $options: "i" } })
      .skip(skipValue)
      .limit(limitValue)
      .toArray();
  },

  async taskCreate(
    newTask: OptionalId<TTask>
  ): Promise<InsertOneResult<TTask>> {
    return await collectionTasks.insertOne(newTask);
  },

  async tasksUpdate(
    id: string,
    dataUpdate: TTaskBody
  ): Promise<UpdateResult<TTask>> {
    return await collectionTasks.updateOne(
      { _id: new ObjectId(id) },
      { $set: dataUpdate }
    );
  },

  async taskDelete(id: string): Promise<DeleteResult> {
    return await collectionTasks.deleteOne({ _id: new ObjectId(id) });
  },

  async tasksCountGet(searchData?: string): Promise<number> {
    if (searchData) {
      return await collectionTasks.countDocuments({
        title: { $regex: searchData },
      });
    }

    return await collectionTasks.countDocuments({});
  },
};
