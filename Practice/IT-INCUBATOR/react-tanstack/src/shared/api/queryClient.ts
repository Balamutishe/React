import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, //устаревание данных бесконечное,
      refetchOnMount: true, //включение запроса при монтровании компонента
      refetchOnWindowFocus: true, // включение запроса при переключении между окнами
      refetchOnReconnect: true, //включение запроса при переключении оффлайн онлайн
      gcTime: 1000 * 60 * 60, // время жизни данных в кэше (1 час)
    },
  },
});
