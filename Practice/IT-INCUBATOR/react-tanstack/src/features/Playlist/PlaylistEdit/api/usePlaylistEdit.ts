import { client, type SchemaUpdatePlaylistRequestPayload } from "@shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePlaylistEdit = (playlistId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SchemaUpdatePlaylistRequestPayload) => {
      const response = await client.PUT("/playlists/{playlistId}", {
        body: { ...data, tagIds: [] },
        params: {
          path: { playlistId },
        },
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playlists"] });
    },
    retry: false,
  });
};
