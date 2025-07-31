import { useQuery } from "@tanstack/react-query";

export const useClientsQuery = () => {
  return useQuery({
    queryKey: ["clients", "all"],
    queryFn: async () => {
      return await fetch("http://localhost:3001/clients").then((res) =>
        res.json()
      );
    },
  });
};
