import { useState, type FC } from "react";
import c from "./style.module.css";
import { Pagination } from "@shared/ui/Pagination";
import { usePlaylistsQuery } from "./api";
import { PlayListDelete } from "@features/Playlist/PlaylistDelete";

interface IProps {
  userId: string;
  onPlaylistSelected?: (playlistId: string) => void;
}

export const Playlists: FC<IProps> = ({ userId, onPlaylistSelected }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isPending, isFetching, isError } = usePlaylistsQuery(
    userId,
    currentPage,
    search
  );

  const handlePlaylistSelected = (playlistId: string) =>
    onPlaylistSelected?.(playlistId);

  if (isPending) return <span>Loading...</span>;
  if (isError) return <div>Error...</div>;

  return (
    <div className={c.containerPlaylists}>
      <Pagination
        current={currentPage}
        pageCount={data.meta.pagesCount}
        onPageNumberChange={setCurrentPage}
        isFetching={isFetching}
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
        {data.data.map((playlists) => (
          <li
            key={playlists.id}
            onClick={() => handlePlaylistSelected(playlists.id)}
          >
            {playlists.attributes.title}{" "}
            <PlayListDelete playlistId={playlists.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
