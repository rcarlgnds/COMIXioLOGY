import React from "react";
import Post from "../Post/Post";
import { useState } from "react";
import { useEffect } from "react";

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      let parsedFavorites;
      try {
        parsedFavorites = JSON.parse(storedFavorites);
      } catch (error) {
        console.error("Error parsing stored favorites:", error);
        return;
      }
      if (Array.isArray(parsedFavorites)) {
        setFavorites(parsedFavorites);
      } else if (typeof parsedFavorites === "object") {
        const favoritesArray = Object.values(parsedFavorites);
        setFavorites(favoritesArray);
      } else {
        console.error("Stored favorites is not an array or object:", storedFavorites);
      }
    }
  }, []);

  if (favorites.length === 0) {
    // console.log(favorites)
    return <p>You have no favorite manga...</p>;
  }

  return (
    <div>
      <div style={{ height: "70px" }}></div> {/* Hollow component */}
      <div style={{ 
          display: "grid",
          gridTemplateColumns: "1fr",
          backgroundColor: "black",
          rowGap: "1rem",
          columnGap: "1rem"
      }}>
        {favorites.map((media) => {
          return <Post media={media} />;
        })}
        <div style={{ height: "80px" }}></div> {/* Hollow component */}
      </div>
    </div>
  );
}

export default FavoritePage;

