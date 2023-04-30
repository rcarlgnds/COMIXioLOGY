// styles bisa diganti jadi classes juga
import { Link } from 'react-router-dom';
import classes from './Post.module.css'
import { THEME, ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';

function Post({media}){
    let theme = useContext(ThemeContext)

    return(
        <div
      style={{
        "--gradient-color-1": theme.theme.gradientColor1,
        "--gradient-color-2": theme.theme.gradientColor2,
        "--title-color": theme.theme.color
      }}
      className="post"
    >
            <div className={classes.post}>
                <div className={classes.info}>
                    <Link to={`/detail/${media.id}`}>
                        <img src={media.coverImage.medium} alt={media.title.english} />
                        {media.title.english ?
                        <p className={classes.title}>{media.title.english}</p> :
                        <p className={classes.title}>{media.title.romaji}</p>}
                    </Link>
                    <p className={classes.genre} style={{  color: theme.theme.color }}>{media.genres.join(", ")}</p>
                </div> 
            </div> 
        </div>
    );
}

export default Post;