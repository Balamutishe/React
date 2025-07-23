import { useQuery } from "@tanstack/react-query";
import c from "./style.module.css";
import { client } from "@shared/api";

export const Playlists = () => {
  const query = useQuery({
    queryKey: ["playlists"],
    queryFn: () => client.GET("/playlists"),
  });

  return (
    <div className={c.containerPlaylists}>
      <ul>
        {query.data?.data?.data.map((playlists) => (
          <li key={playlists.id}>{playlists.attributes.title}</li>
        ))}
      </ul>
    </div>
  );
};
