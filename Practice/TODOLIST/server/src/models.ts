import { TTask } from "./types";

export type TTaskQueryModel = {
  title: string;
};

export type TTaskParamsModel = {
  id: string;
};

export type TTaskBodyModel = Partial<Omit<TTask, "id">>;
