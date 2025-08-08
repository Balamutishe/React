import { useStateModal } from "@app/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useClientCreate = () => {
  const queryClient = useQueryClient();
  const { setIsVisibility } = useStateModal((state) => state);

  return useMutation({
    mutationFn: async (clientData: {
      name: string;
      surname: string;
      contacts: { type: string; value: string }[];
    }) => {
      const response = await fetch(`http://localhost:3001/clients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          name: clientData.name,
          surname: clientData.surname,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          contacts: clientData.contacts,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    onSuccess: () => {
      setIsVisibility(false);
      queryClient.invalidateQueries({ queryKey: ["clients", "all"] });
    },
    onError: (error) => {
      console.error("Error created client:", error);
    },
  });
};
