import type { TClient } from "@shared/types";
import { useQuery } from "@tanstack/react-query";

export const useClientsQuery = (filter?: string) => {
  return useQuery({
    queryKey: ["clients", "all", filter],
    queryFn: async () => {
      return await fetch(`http://localhost:3001/clients`).then(async (res) => {
        const data = await res.json();

        if (filter) {
          const filterData = data.filter((item: TClient) => {
            console.log(Object.values(item).join());
            if (
              Object.values(item)
                .join()
                .toLowerCase()
                .trim()
                .includes(filter.toLowerCase())
            ) {
              return item;
            }
          });

          return filterData;
        }

        return data;
      });
    },
  });
};
