import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, //устаревание данных бесконечное,
      refetchOnMount: false, //отключение запроса при монтровании компонента
      refetchOnWindowFocus: false, // отключение запроса при переключении между окнами
      refetchOnReconnect: false, //отключение запроса при переключении оффлайн онлайн
      gcTime: 1000 * 60 * 60, // время жизни данных в кэше (1 час)
    },
  },
});
