import { FormProvider, useForm } from "react-hook-form";
import { usePlayListsAddMutation } from "./api/usePlaylistsAddMutation";
import type { SchemaCreatePlaylistRequestPayload } from "@shared/api";
import { Input } from "./ui";

export const FormPlaylistsAdd = () => {
  const { mutate } = usePlayListsAddMutation();
  const methodsForm = useForm<SchemaCreatePlaylistRequestPayload>();

  const onSubmit = (data: SchemaCreatePlaylistRequestPayload) => mutate(data);

  return (
    <FormProvider {...methodsForm}>
      <form
        style={{ marginBottom: "0.5rem" }}
        onSubmit={methodsForm.handleSubmit(onSubmit)}
      >
        <h2 style={{ marginBottom: "0.5rem" }}>Playlists add</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "0.5rem",
          }}
        >
          <Input registerName={"title"} placeholder={"Input title..."} />
          <Input
            registerName={"description"}
            placeholder={"Input description..."}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </FormProvider>
  );
};
