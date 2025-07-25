import { client } from "@shared/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const usePlaylistsQuery = (
  userId: string,
  currentPage: number,
  search: string
) => {
  return useQuery({
    queryKey: ["playlists", { currentPage, search, userId }],
    queryFn: async ({ signal }) => {
      const response = await client.GET("/playlists", {
        params: {
          query: {
            userId,
            pageNumber: currentPage,
            search,
          },
        },
        // signal это контроллер созданный для управления запросом,
        // если ты перешел например на другую страницу
        // и не дождался резолва промиса
        signal,
      });

      return response.data!;
    },
    // показ данных старой страницы пока не придут данные новой
    placeholderData: keepPreviousData,
  });
};
