import { TTaskBody, TTask } from "../../types";
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from "mongodb";
import { client } from "../../db/mongoClient";
import { TTaskDB } from "./task-repository-types";

const collectionTasks = client.db().collection<TTaskDB>("tasks");

export const tasksRepository = {
  async tasksFindAll(
    limitValue: number,
    skipValue: number
  ): Promise<WithId<TTaskDB>[]> {
    return await collectionTasks
      .find({})
      .skip(skipValue)
      .limit(limitValue)
      .toArray();
  },

  async taskFindById(id: string): Promise<WithId<TTaskDB> | null> {
    return await collectionTasks.findOne({ _id: id });
  },

  async taskFindByFilter(
    searchData: string,
    skipValue: number,
    limitValue: number
  ): Promise<WithId<TTaskDB>[]> {
    return await collectionTasks
      .find({ title: { $regex: searchData, $options: "i" } })
      .skip(skipValue)
      .limit(limitValue)
      .toArray();
  },

  async taskCreate(newTask: TTaskDB): Promise<InsertOneResult<TTaskDB>> {
    return await collectionTasks.insertOne(newTask);
  },

  async tasksUpdate(
    id: string,
    dataUpdate: TTaskBody
  ): Promise<UpdateResult<TTaskDB>> {
    return await collectionTasks.updateOne({ _id: id }, { $set: dataUpdate });
  },

  async taskDelete(id: string): Promise<DeleteResult> {
    return await collectionTasks.deleteOne({ _id: id });
  },

  async tasksCountGet(searchData?: string): Promise<number> {
    if (searchData) {
      return await collectionTasks.countDocuments({
        title: { $regex: searchData, $options: "i" },
      });
    }

    return await collectionTasks.countDocuments({});
  },
};
