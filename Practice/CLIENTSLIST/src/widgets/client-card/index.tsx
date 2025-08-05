import type { TClient } from "@shared/types";
import { ClientDelete } from "@features/clients";
import { useStateCurrentUser, useStateModal } from "@app/store";

export const ClientCard = (props: TClient) => {
  const setCurrentUser = useStateCurrentUser((state) => state.setUserData);
  const { setVariant, setIsVisibility } = useStateModal((state) => state);

  const handleUsersDataSet = () => {
    setCurrentUser({
      id: props.id,
      name: props.name,
      surname: props.surname,
    });
    setVariant("edit");
    setIsVisibility(true);
  };

  return (
    <div className="w-full flex justify-spaces-between mb-2 py-6 px-6 bg-white rounded">
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
