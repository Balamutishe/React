import { client, type SchemaGetPlaylistsOutput } from "@shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePlaylistDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (playlistId: string) => {
      const response = await client.DELETE(`/playlists/{playlistId}`, {
        params: {
          path: { playlistId },
        },
      });

      return response.data;
    },
    onSuccess: (_, playlistId: string) => {
      queryClient.setQueriesData(
        { queryKey: ["playlists"] },
        (oldData: SchemaGetPlaylistsOutput) => {
          return {
            ...oldData,
            data: oldData.data.filter((playlist) => playlist.id !== playlistId),
          };
        }
      );
    },
  });
};
