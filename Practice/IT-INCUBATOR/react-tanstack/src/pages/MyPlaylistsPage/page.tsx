import { useMeQuery } from "@features/Auth";
import { Playlists } from "@features/Playlists";
import { Navigate } from "@tanstack/react-router";

export const MyPlaylistsPage = () => {
  const { data, isPending } = useMeQuery();

  if (isPending) return <div>Loading...</div>;

  if (!data) return <Navigate to="/" replace />;

  return (
    <div>
      <h2>My playlists</h2>
      <Playlists userId={data.userId} />
    </div>
  );
};
