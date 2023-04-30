import { useParams } from "react-router-dom";
import classes from "./MangaDetailComponent.module.css"
import { gql, useQuery } from '@apollo/client';
import { useState, useEffect, useContext } from "react";
import { THEME, ThemeContext } from "../Context/ThemeContext";

const GET_MANGA = gql`
  query GetManga($id: Int!) {
    Media(id: $id, type: MANGA) {
      id
      averageScore
      title {
        english
        romaji
      }
      description
      coverImage {
        medium
      }
      genres
      startDate {
        year
        month
        day
      }
    }
  }
`;

function MangaDetailComponent(){
  const { theme, setTheme } = useContext(ThemeContext);
    
    const themeHandler = () => {
        setTheme(theme === THEME.light ? THEME.dark : THEME.light)
    }

    const [favorite, setFavorite] = useState(false);

    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MANGA, {
      variables: { id: parseInt(id) }
    });
  
    useEffect(() => {
        // Check if the manga is in favorites
        const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
        if (favorites[id]) {
            setFavorite(true);
        }
    }, [id]);

    if (loading) return <center><p>Loading...</p></center>;
    if (error) return <center><p>Error fetching manga...</p></center>;
  
    if (!data.Media) return null;

    const { title, description, coverImage, genres, averageScore } = data.Media;

    const handleFavorite = () => {
        if (favorite) {
            // Remove manga from favorites
            const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
            delete favorites[id];
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            // Add manga to favorites
            const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
            favorites[id] = data.Media;
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        setFavorite(!favorite);
    }

    

    return(
        <div className={classes.detailComponent}>
            <button className={classes.likeBtn} onClick={handleFavorite}>{favorite ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>}
            </button>
            <img className={classes.image} src={coverImage.medium}/>
            <h1 className={`${classes.light-title} ${theme === THEME.light ? classes['light-title'] : classes['dark-title']}`}>{title.english}</h1>
            <h2 className={`${classes.light-title} ${theme === THEME.light ? classes['light-title'] : classes['dark-title']}`}>Score : {averageScore} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg></h2>
            <h2 className={`${classes.light-title} ${theme === THEME.light ? classes['light-title'] : classes['dark-title']}`}>Genre   : {genres.join(', ')}</h2>
            <h2 className={`${classes.light-title} ${theme === THEME.light ? classes['light-title'] : classes['dark-title']}`}>Description      : </h2>
            <p className={`${classes.light-title} ${theme === THEME.light ? classes['light-descriptionContent'] : classes['dark-descriptionContent']}`} dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    );
}

export default MangaDetailComponent;
