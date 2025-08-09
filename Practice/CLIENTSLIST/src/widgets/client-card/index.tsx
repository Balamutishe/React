import type { TClient } from "@shared/types";
import { ClientDelete } from "@features/clients";
import { useStateCurrentUser, useStateModal } from "@app/store";
import { dateTimeUpdate } from "@shared/utils";

export const ClientCard = (props: TClient) => {
  return (
    <div className="w-full flex justify-between items-center mb-2 py-6 px-6 bg-white rounded">
      <span className="w-1/12 text-gray-400">
        {props.id.substring(0, props.id.indexOf("-"))}
      </span>
      <span className="w-1/6">
        {props.name} {props.surname}
      </span>
      <span className="w-1/7">{dateTimeUpdate(props.createdAt)}</span>
      <span className="w-1/7">{dateTimeUpdate(props.updatedAt)}</span>
      <span className="w-1/5">
        {props.contacts.length !== 0
          ? props.contacts.map((contact) => (
              <>
                <span className="mr-1">{contact.type}:</span>
                <span>{contact.value}</span>
                <br />
              </>
            ))
          : "Нет контактов"}
      </span>
      <span className="flex justify-between items-center w-1/5">
        <ButtonCallFormChange clientData={props} />
        <ClientDelete
          id={props.id}
          variant="w-1/2 px-4 py-3 bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer rounded"
        />
      </span>
    </div>
  );
};

const ButtonCallFormChange = ({ clientData }: { clientData: TClient }) => {
  const setCurrentUser = useStateCurrentUser((state) => state.setUserData);
  const { setVariant, setIsVisibility } = useStateModal((state) => state);

  const handleUsersDataSet = () => {
    setCurrentUser({
      id: clientData.id,
      name: clientData.name,
      surname: clientData.surname,
      contacts: clientData.contacts,
    });
    setVariant("edit");
    setIsVisibility(true);
  };

  return (
    <button
      className="w-1/2 mr-3 px-4 py-3 cursor-pointer bg-green-300 hover:bg-green-500 hover:text-white rounded"
      onClick={handleUsersDataSet}
    >
      Изменить
    </button>
  );
};
