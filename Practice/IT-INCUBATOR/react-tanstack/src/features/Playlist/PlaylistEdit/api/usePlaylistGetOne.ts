import { client } from "@shared/api";
import { useQuery } from "@tanstack/react-query";

export const usePlaylistGetOne = (playlistId: string | null) => {
  return useQuery({
    queryKey: ["playlists", "details", playlistId],
    queryFn: async () => {
      const response = await client.GET("/playlists/{playlistId}", {
        params: {
          path: { playlistId: playlistId! }, // Non-null assertion since we check for null in the query options
        },
      });
      return response.data!;
    },
    enabled: !!playlistId,
  });
};
