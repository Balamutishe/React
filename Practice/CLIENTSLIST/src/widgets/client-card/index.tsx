import type { TClient } from "@shared/types";
import { ClientDelete } from "@features/clients";
import { useStateFormChange, useStateCurrentUser } from "@app/store";

export const ClientCard = (props: TClient) => {
  const setCurrentUser = useStateCurrentUser((state) => state.setUserData);
  const setIsOpen = useStateFormChange((state) => state.setIsOpen);

  const handleUsersDataSet = () => {
    setCurrentUser({
      id: props.id,
      username: props.name,
      surname: props.surname,
    });
    setIsOpen(true);
  };

  return (
    <div className="w-full flex justify-spaces-between mb-10">
      <span className="w-1/12">{props.id}</span>
      <span className="w-1/3">
        {props.name} {props.surname}
      </span>
      <span className="w-1/4">{props.createdAt}</span>
      <span className="w-1/4">{props.updatedAt}</span>
      <button className="w-1/9" onClick={handleUsersDataSet}>
        Change
      </button>
      <span className="w-1/9">
        <ClientDelete id={props.id} />
      </span>
    </div>
  );
};
