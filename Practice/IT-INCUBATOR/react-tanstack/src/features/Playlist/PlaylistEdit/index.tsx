import { FormProvider, useForm } from "react-hook-form";
import { usePlaylistEdit } from "./api/usePlaylistEdit";
import type { SchemaUpdatePlaylistRequestPayload } from "@shared/api";
import { Input } from "./ui";
import { useEffect, type FC } from "react";
import { usePlaylistGetOne } from "./api";

interface IProps {
  playlistId: string | null;
}

export const FormPlaylistEdit: FC<IProps> = ({ playlistId }) => {
  const { data, isPending, isError } = usePlaylistGetOne(playlistId);
  const { mutate } = usePlaylistEdit(playlistId!);

  const methodsForm = useForm<SchemaUpdatePlaylistRequestPayload>();

  const onSubmit = (data: SchemaUpdatePlaylistRequestPayload) => mutate(data);

  useEffect(() => {
    methodsForm.reset();
  }, [playlistId]);

  if (!playlistId) return <></>;
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <FormProvider {...methodsForm}>
      <form
        style={{ marginBottom: "0.5rem" }}
        onSubmit={methodsForm.handleSubmit(onSubmit)}
      >
        <h2 style={{ marginBottom: "0.5rem" }}>Playlist edit</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "0.5rem",
          }}
        >
          <Input
            registerName={"title"}
            placeholder={"Input title..."}
            defaultValue={data.data.attributes.title}
          />
          <Input
            registerName={"description"}
            placeholder={"Input description..."}
            defaultValue={data.data.attributes.description!}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </FormProvider>
  );
};
