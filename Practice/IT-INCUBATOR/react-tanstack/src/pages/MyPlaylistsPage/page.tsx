import { useMeQuery } from "@features/Auth";
import { Playlists } from "@widgets/Playlists";
import { Navigate } from "@tanstack/react-router";
import { FormPlaylistsAdd } from "@features/Playlist/PlaylistAdd";

export const MyPlaylistsPage = () => {
  const { data, isPending } = useMeQuery();

  if (isPending) return <div>Loading...</div>;

  if (!data) return <Navigate to="/" replace />;

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>My playlists</h2>
      <FormPlaylistsAdd />
      <Playlists userId={data.userId} />
    </div>
  );
};
