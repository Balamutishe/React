import type { FC } from "react";
import { usePlaylistDelete } from "./api";

interface IProps {
  playlistId: string;
}

export const PlayListDelete: FC<IProps> = ({ playlistId }) => {
  const { mutate, isPending } = usePlaylistDelete();

  const handleDelete = () => mutate(playlistId);

  return (
    <button onClick={handleDelete} disabled={isPending}>
      Delete
    </button>
  );
};
