import { useQuery } from "@tanstack/react-query";

export const useClientsQuery = (filter?: string) => {
  const query = `?name_like=${filter}`;

  return useQuery({
    queryKey: ["clients", "all", query],
    queryFn: async () => {
      return await fetch(`http://localhost:3001/clients${query}`).then(
        async (res) => {
          const data = await res.json();

          return data;
        }
      );
    },
  });
};
