import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useClientDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`http://localhost:3001/clients/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients", "all"] });
    },
    onError: (error) => {
      console.error("Error adding client:", error);
    },
  });
};
