import { List } from "./List";
import { useQueryList } from "../../hooks/useQueryList";
import { FormNoteAdd } from "../FormNoteAdd/FormNoteAdd";

export const FetchListView = () => {
  const queryList = useQueryList();

  switch (queryList.status) {
    case "success":
      return (
        <>
          <FormNoteAdd refetch={queryList.refetch} />
          <List list={queryList.data} refetch={queryList.refetch} />
        </>
      );
    case "error":
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryList.refetch()}>Повторить запрос</button>
        </div>
      );
  }
};
