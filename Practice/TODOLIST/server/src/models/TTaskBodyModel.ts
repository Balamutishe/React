import { TTask } from "../types/Task";

export type TTaskBodyModel = Partial<Omit<TTask, "id">>;
