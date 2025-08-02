import type { TClient } from "@shared/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useClientChange = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (clientData: Partial<TClient>) => {
      const response = await fetch(
        `http://localhost:3001/clients/${clientData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients", "all"] });
    },
    onError: (error) => {
      console.error("Error editing client:", error);
    },
  });
};
