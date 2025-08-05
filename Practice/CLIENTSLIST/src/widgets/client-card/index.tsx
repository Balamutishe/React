import type { TClient } from "@shared/types";
import { ClientDelete } from "@features/clients";
import { useStateCurrentUser, useStateModal } from "@app/store";
import { dateTimeUpdate } from "@shared/utils";

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
    <div className="w-full flex justify-between items-center mb-2 py-6 px-6 bg-white rounded">
      <span className="w-1/12">
        {props.id.substring(0, props.id.indexOf("-"))}
      </span>
      <span className="w-1/5">
        {props.name} {props.surname}
      </span>
      <span className="w-1/6">{dateTimeUpdate(props.createdAt)}</span>
      <span className="w-1/6">{dateTimeUpdate(props.updatedAt)}</span>
      <span className="w-1/6">
        {props.contacts.map((contact) => (
          <>
            <span key={crypto.randomUUID()}>
              {Object.entries(contact).map(([contactType, contactValue]) => (
                <span>
                  {contactType}: {contactValue}
                </span>
              ))}
            </span>
            <br />
          </>
        ))}
      </span>
      <span className="flex justify-between items-center w-1/5">
        <button
          className="w-1/2 mr-3 px-4 py-3 cursor-pointer bg-orange-300 hover:bg-orange-500 hover:text-white rounded"
          onClick={handleUsersDataSet}
        >
          Change
        </button>
        <ClientDelete
          id={props.id}
          variant="w-1/2 px-4 py-3 bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer rounded"
        />
      </span>
    </div>
  );
};
