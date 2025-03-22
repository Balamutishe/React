export type TTask = {
    id: number;
    title: string;
    done: boolean;
}
export type TPropsTodoList = {
    title: string;
    tasks: TTask[];
}