import { useMeQuery } from "@features/Auth";
import { Playlists } from "@widgets/Playlists";
import { Navigate } from "@tanstack/react-router";
import { FormPlaylistsAdd } from "@features/Playlist/PlaylistAdd";
import { useState } from "react";
import { FormPlaylistEdit } from "@features/Playlist";

export const MyPlaylistsPage = () => {
  const { data, isPending } = useMeQuery();
  const [editingPlaylistId, setEditingPlaylistId] = useState<string | null>(
    null
  );

  if (isPending) return <div>Loading...</div>;
  if (!data) return <Navigate to="/" replace />;

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>My playlists</h2>
      <hr />
      <FormPlaylistsAdd />
      <hr />
      <Playlists
        userId={data.userId}
        onPlaylistSelected={setEditingPlaylistId}
      />
      <hr />
      <FormPlaylistEdit
        key={editingPlaylistId}
        playlistId={editingPlaylistId}
      />
    </div>
  );
};
