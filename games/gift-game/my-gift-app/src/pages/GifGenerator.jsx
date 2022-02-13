import { useEffect, useState } from "react";
import axios from "axios";
import "./_GifGenerator.css";

const GitGenerator = () => {
  const [query, setquery] = useState("hola");
  const [gifs, setgifs] = useState([]);

  const handleGifs = async () => {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: process.env.REACT_APP_GIPHY_KEY_NAME,
        q: query,
        limit: 50,
      },
    });
    console.log("query", query);
    console.log("response", response.data.data);
    setgifs(response.data.data);
  };
  const handleTrendingGifs = async () => {
    const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: process.env.REACT_APP_GIPHY_KEY_NAME,
        limit: 50,
      },
    });
    setgifs(response.data.data);
  };

  useEffect(() => {
    console.log("UseEffect ejecutándose");
    handleTrendingGifs();
  }, []);

  return (
    <div className="gifGenerator">
      <div className="gifGenerator__search">
        <input type="text" onChange={(e) => setquery(e.target.value)} />
        <button onClick={handleGifs}>New Gifs</button>
      </div>

      <div className="gifs">
        {gifs.map(({ images }) => {
          return (
            <img
              src={images.fixed_height_small.url}
              alt={images.fixed_height_small.url}
              key={images.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GitGenerator;
