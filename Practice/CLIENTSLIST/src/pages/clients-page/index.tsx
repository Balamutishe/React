import { List } from "@widgets/list";
import { useClientsQuery } from "./api/useClientsQuery";
import { ClientChange, ClientCreate } from "@features/clients";
import { Modal } from "@widgets/modal";
import { useStateModal, useStateSearch } from "@app/store";

export const ClientsPage = () => {
  const { searchValue } = useStateSearch((state) => state);
  const queryResult = useClientsQuery(searchValue);
  const { setIsVisibility, setVariant, variant } = useStateModal(
    (state) => state
  );

  // const { register, control, handleSubmit } = useForm({
  //   // defaultValues: {}; you can populate the fields by this attribute
  // });
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "contact",
  // });

  switch (queryResult.status) {
    case "error":
      return <div>Error: {queryResult.error.message}</div>;
    case "pending":
      return <div>Loading...</div>;
    case "success":
      return (
        <div className="w-full">
          <div className="flex justify-between align-center mb-10">
            <h2 className="text-3xl font-semibold">Клиенты</h2>
            <button
              onClick={() => {
                setIsVisibility(true);
                setVariant("create");
              }}
              className="px-4 py-2 bg-green-300 hover:bg-green-600 hover:text-white rounded cursor-pointer"
            >
              Create client
            </button>
          </div>
          <div className="w-full">
            <List data={queryResult.data} variant="clients" />
          </div>
          <Modal>
            {variant === "create" ? <ClientCreate /> : <ClientChange />}
          </Modal>

          {/* <form onSubmit={handleSubmit((data) => console.log(data))}>
            <ul>
              {fields.map((item, index) => (
                <li key={item.id}>
                  <Controller
                    render={({ field }) => (
                      <select {...field}>
                        <option value="Телефон">Телефон</option>
                        <option value="Почта">Почта</option>
                      </select>
                    )}
                    name={`contact.${index}.type`}
                    control={control}
                  />
                  <Controller
                    render={({ field }) => <input {...field} />}
                    name={`contact.${index}.value`}
                    control={control}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                append({ type: "Почта", value: "0000000000" });
              }}
            >
              append
            </button>
            <input type="submit" />
          </form> */}
        </div>
      );
  }
};
