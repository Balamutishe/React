import { client, type SchemaCreatePlaylistRequestPayload } from "@shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePlayListsAddMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SchemaCreatePlaylistRequestPayload) => {
      const response = await client.POST("/playlists", {
        body: data,
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playlists"] });
    },
  });
};
