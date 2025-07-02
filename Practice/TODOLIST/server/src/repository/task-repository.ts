import { TTaskBody, TCollectionTasks, TTasksList, TTask } from "../types";
import { DeleteResult, InsertOneResult, ObjectId, UpdateResult } from "mongodb";

export const tasksRepository = {
  async tasksFindAll(
    collection: TCollectionTasks,
    pageSize: number,
    skipValue: number
  ) {
    return await collection.find({}).skip(skipValue).limit(pageSize).toArray();
  },

  async taskFindById(collection: TCollectionTasks, id: string) {
    return await collection.findOne({ _id: new ObjectId(id) });
  },

  async taskFindByFilter(collection: TCollectionTasks, searchData: string) {
    return await collection.find({ title: { $regex: searchData } }).toArray();
  },

  async taskCreate(
    collection: TCollectionTasks,
    newTask: TTask
  ): Promise<InsertOneResult<TTasksList>> {
    // @ts-ignore
    return await collection.insertOne(newTask);
  },

  async tasksUpdate(
    collection: TCollectionTasks,
    id: string,
    dataUpdate: TTaskBody
  ): Promise<UpdateResult<TTasksList>> {
    return await collection.updateOne(
      { _id: new ObjectId(id) },
      //@ts-ignore
      { $set: dataUpdate }
    );
  },

  async taskDelete(
    collection: TCollectionTasks,
    id: string
  ): Promise<DeleteResult> {
    return await collection.deleteOne({ _id: new ObjectId(id) });
  },

  async tasksCountGet(collection: TCollectionTasks) {
    return await collection.countDocuments({});
  },
};
