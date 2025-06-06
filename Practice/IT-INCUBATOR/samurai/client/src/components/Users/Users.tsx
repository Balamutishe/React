import { FC } from "react";
import { TUsersList } from "../../api/users/types.ts";
import { List } from "../List/List.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import c from "./Users.module.css";
import { User } from "./User.tsx";

type TUsersProps = {
  usersList: TUsersList;
  pageCount: number;
};

export const Users: FC<TUsersProps> = ({ usersList, pageCount }) => {
  return (
    <div className={c.users}>
      <div className={c.header}>
        <h2 className={c.title}>Users</h2>
        <Pagination pageCount={pageCount} variant={"users"} />
      </div>
      <List
        listItems={usersList.map((user) => (
          <li key={crypto.randomUUID()}>
            <User user={user} />
          </li>
        ))}
        listLength={usersList.length}
      />
    </div>
  );
};
