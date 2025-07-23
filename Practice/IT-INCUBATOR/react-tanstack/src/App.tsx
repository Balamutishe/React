import { useEffect } from "react";
import "./App.css";
import { client } from "./shared/api/client";

function App() {
  useEffect(() => {
    (async () => {
      const response = await client.GET("/playlists");
      const data = response.data;
      console.log(data);
    })();
  }, []);

  return <>Hello samurai</>;
}

export default App;
