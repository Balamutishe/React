import { client } from "@shared/api";
import { useQuery } from "@tanstack/react-query";

export const usePlaylistGetOne = (playlistId: string) => {
  return useQuery({
    queryKey: ["playlist", playlistId],
    queryFn: async () => {
      const response = await client.GET("/playlists/{playlistId}", {
        params: {
          path: { playlistId },
        },
      });
      return response.data!;
    },
    enabled: !!playlistId,
  });
};
