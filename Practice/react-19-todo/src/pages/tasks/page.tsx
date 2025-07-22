import {
  startTransition,
  Suspense,
  use,
  useActionState,
  useMemo,
  useState,
  useTransition,
} from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  fetchTasks,
  type PaginatedResponse,
  type Task,
} from "../../shared/api/api";
import { useParams } from "react-router-dom";
import { createTaskAction, deleteTaskAction } from "./actions";
import { useUsersGlobal } from "../../entities/user";

export function TasksPage() {
  const { userId } = useParams();

  const [page, setPage] = useState(1);

  const [paginatedTasksPromise, setTasksPromise] = useState(() =>
    fetchTasks({ filters: { userId } })
  );

  const refetchTasks = () =>
    startTransition(() =>
      setTasksPromise(fetchTasks({ filters: { userId }, page }))
    );

  const onPageChange = (newPage: number) => {
    setPage(newPage);
    setTasksPromise(fetchTasks({ filters: { userId }, page: newPage }));
  };

  const tasksPromise = useMemo(() => {
    return paginatedTasksPromise.then((response) => response.data);
  }, [paginatedTasksPromise]);

  return (
    <main className="container mx-auto p-4 pt-10 flex flex-col gap-4">
      <h1 className="text-3xl font-bold underline mb-4">
        Tasks:{" "}
        <Suspense>
          <UserPreview userId={userId as string} />
        </Suspense>
      </h1>
      <div>
        <CreateTaskForm userId={userId as string} refetchTasks={refetchTasks} />
        <ErrorBoundary
          fallbackRender={(e) => (
            <div className="text-red-500">
              Something wrong: {JSON.stringify(e)}
            </div>
          )}
        >
          <Suspense fallback={<div>Загрузка...</div>}>
            <TasksList
              tasksPromise={tasksPromise}
              refetchTasks={refetchTasks}
            />
            <Pagination
              tasksPaginated={paginatedTasksPromise}
              page={page}
              onPageChange={onPageChange}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
}

const UserPreview = ({ userId }: { userId: string }) => {
  const { usersPromise } = useUsersGlobal();

  const users = use(usersPromise);

  return <span>{users.find((u) => u.id === userId)?.email}</span>;
};

const Pagination = ({
  tasksPaginated,
  page,
  onPageChange,
}: {
  tasksPaginated: Promise<PaginatedResponse<Task[]>>;
  page: number;
  onPageChange: (page: number) => void;
}) => {
  const [isLoading, startTransition] = useTransition();
  const { last, first, next, prev, pages } = use(tasksPaginated);

  const handlePageChange = (page: number) => () =>
    startTransition(() => onPageChange(page));

  return (
    <nav
      className={`${
        isLoading ? "opacity-50" : ""
      }flex item-center justify-between`}
    >
      <div className="grid grid-cols-4 gap-2">
        <button
          className="px-3 py-2 rounded-1"
          onClick={handlePageChange(first)}
          disabled={isLoading}
        >
          First ({first})
        </button>
        {prev && (
          <button
            className="px-3 py-2"
            onClick={handlePageChange(prev)}
            disabled={isLoading}
          >
            Prev ({prev})
          </button>
        )}
        {next && (
          <button
            className="px-3 py-2"
            onClick={handlePageChange(next)}
            disabled={isLoading}
          >
            Next ({next})
          </button>
        )}
        <button
          className="px-3 py-2 rounded-r"
          onClick={handlePageChange(last)}
          disabled={isLoading}
        >
          Last ({last})
        </button>
      </div>
      <span className="text-sm">
        Page {page} of {pages}
      </span>
    </nav>
  );
};

const CreateTaskForm = ({
  userId,
  refetchTasks,
}: {
  userId: string;
  refetchTasks: () => void;
}) => {
  const [state, dispatch, isPending] = useActionState(
    createTaskAction({ refetchTasks, userId }),
    { title: "" }
  );

  return (
    <form className="flex gap-2" action={dispatch}>
      <input
        type="text"
        name="title"
        className="border p-2 rounded"
        defaultValue={state.title}
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer rounded disabled:bg-gray-400"
      >
        Add
      </button>
    </form>
  );
};

const TasksList = ({
  tasksPromise,
  refetchTasks,
}: {
  tasksPromise: Promise<Task[]>;
  refetchTasks: () => void;
}) => {
  const tasks = use(tasksPromise);
  return (
    <div className="flex flex-col">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} refetchTasks={refetchTasks} />
      ))}
    </div>
  );
};

const TaskCard = ({
  task,
  refetchTasks,
}: {
  task: Task;
  refetchTasks: () => void;
}) => {
  const [state, dispatch, isPending] = useActionState(
    deleteTaskAction({ refetchTasks }),
    {}
  );

  return (
    <div className="p-2 mb-2 rounded bg-gray-100 flex gap-2 width-100">
      {task.title} -
      <Suspense>
        <UserPreview userId={task.userId} />
      </Suspense>
      <form className="ml-auto" action={dispatch}>
        <input name="id" value={task.id} type="hidden" />
        <button
          type="submit"
          disabled={isPending}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
        >
          Delete
        </button>
        {state.error && <div className="text-red-500">{state.error}</div>}
      </form>
    </div>
  );
};
