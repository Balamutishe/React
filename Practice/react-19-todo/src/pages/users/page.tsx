import { Suspense, useActionState, useOptimistic } from "react";
import { type User } from "../../shared/api/api";
import { ErrorBoundary } from "react-error-boundary";
import { type CreateUserAction, type DeleteUserAction } from "./actions";
import { useUsers } from "./useUsers";
import { Link } from "react-router-dom";

export function UsersPage() {
  const { useUsersList, createUserAction, deleteUserAction } = useUsers();

  return (
    <main className="container mx-auto p-4 pt-10 flex flex-col gap-4">
      <h1 className="text-3xl font-bold underline mb-4">Users</h1>
      <div>
        <CreateUserForm createUserAction={createUserAction} />
        <ErrorBoundary
          fallbackRender={(e) => (
            <div className="text-red-500">
              Something wrong: {JSON.stringify(e)}
            </div>
          )}
        >
          <Suspense fallback={<div>Загрузка...</div>}>
            <UsersList
              useUsersList={useUsersList}
              deleteUserAction={deleteUserAction}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
}

export function CreateUserForm({
  createUserAction,
}: {
  createUserAction: CreateUserAction;
}) {
  const [state, dispatch] = useActionState(createUserAction, {
    email: "",
  });

  const [optimisticState, setOptimisticState] = useOptimistic(state);

  return (
    <form
      className="flex gap-2"
      action={(formData: FormData) => {
        setOptimisticState({ email: "" });
        dispatch(formData);
      }}
    >
      <input
        type="email"
        name="email"
        className="border p-2 rounded"
        defaultValue={optimisticState.email}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer rounded disabled:bg-gray-400"
      >
        Add
      </button>
      {optimisticState.error && (
        <div className="text-red-500">{optimisticState.error}</div>
      )}
    </form>
  );
}

export function UsersList({
  useUsersList,
  deleteUserAction,
}: {
  useUsersList: () => User[];
  deleteUserAction: DeleteUserAction;
}) {
  const users = useUsersList();

  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUserAction={deleteUserAction}
        />
      ))}
    </div>
  );
}

export function UserCard({
  user,
  deleteUserAction,
}: {
  user: User;
  deleteUserAction: DeleteUserAction;
}) {
  const [state, dispatch] = useActionState(deleteUserAction, {});

  return (
    <div className="p-2 mb-2 rounded bg-gray-100 flex gap-2 width-100">
      {user.email}
      <form className="ml-auto" action={dispatch}>
        <input name="id" value={user.id} type="hidden" />
        <Link
          to={`/${user.id}/tasks`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
        >
          Tasks
        </Link>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
        >
          Delete
        </button>
        {state.error && <div className="text-red-500">{state.error}</div>}
      </form>
    </div>
  );
}
