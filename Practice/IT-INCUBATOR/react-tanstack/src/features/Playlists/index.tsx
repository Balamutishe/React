import { keepPreviousData, useQuery } from "@tanstack/react-query";
import c from "./style.module.css";
import { client } from "@shared/api";
import { Pagination } from "@shared/ui/Pagination";
import { useState } from "react";

export const Playlists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const query = useQuery({
    queryKey: ["playlists", { currentPage, search }],
    queryFn: async ({ signal }) => {
      const response = await client.GET("/playlists", {
        params: {
          query: {
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

  if (query.isPending) return <span>Loading...</span>;

  if (query.isError)
    return (
      <div>
        <p>Error: {JSON.stringify(query.error.message)}</p>
        <button onClick={() => query.refetch()}>Retry query</button>
      </div>
    );

  return (
    <div className={c.containerPlaylists}>
      <Pagination
        current={currentPage}
        pageCount={query.data.meta.pagesCount}
        onPageNumberChange={setCurrentPage}
        isFetching={query.isFetching}
      />
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <ul>
        {query.data.data.map((playlists) => (
          <li key={playlists.id}>{playlists.attributes.title}</li>
        ))}
      </ul>
    </div>
  );
};
