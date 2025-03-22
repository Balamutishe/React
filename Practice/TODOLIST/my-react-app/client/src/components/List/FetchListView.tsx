import { List } from "./List";
import { useQueryList } from "../../hooks/useQueryList";

export const FetchListView = () => {
  const queryList = useQueryList();
  const list = queryList.data || [];

  switch (queryList.status) {
    case "success":
      return (
        <>
          <List list={list} refetch={queryList.refetch} />
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
