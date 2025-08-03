import type { TClient } from "@shared/types";
import { useStateFormChange } from "@app/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useClientChange = () => {
  const queryClient = useQueryClient();
  const setIsOpen = useStateFormChange((state) => state.setIsOpen);

  return useMutation({
    mutationFn: async ({
      id,
      clientData,
    }: {
      id: string;
      clientData: Partial<TClient>;
    }) => {
      const response = await fetch(`http://localhost:3001/clients/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    onSuccess: () => {
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["clients", "all"] });
    },
    onError: (error) => {
      console.error("Error editing client:", error);
    },
  });
};
