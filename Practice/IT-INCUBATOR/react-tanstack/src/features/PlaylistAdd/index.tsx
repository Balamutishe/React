import { useForm } from "react-hook-form";
import { usePlayListsAddMutation } from "./api/usePlaylistsAddMutation";
import type { SchemaCreatePlaylistRequestPayload } from "@shared/api";

export const FormPlaylistsAdd = () => {
  const { mutate } = usePlayListsAddMutation();
  const { register, handleSubmit } =
    useForm<SchemaCreatePlaylistRequestPayload>();

  const onSubmit = (data: SchemaCreatePlaylistRequestPayload) => mutate(data);

  return (
    <form style={{ marginBottom: "0.5rem" }} onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ marginBottom: "0.5rem" }}>Playlists add</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "0.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Input title..."
          {...register("title")}
        />
        <input
          type="text"
          placeholder="Input description..."
          {...register("description")}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
