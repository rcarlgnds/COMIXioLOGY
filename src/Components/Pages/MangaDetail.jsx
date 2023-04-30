import { useParams } from "react-router-dom";
import MangaDetailComponent from "../Post/MangaDetailComponent";
import classes from "../Post/MangaDetailComponent.module.css"
import { THEME, ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

export default function MangaDetail({media}){
    let {mangaID} = useParams();
    const { theme, setTheme } = useContext(ThemeContext);
    
    const themeHandler = () => {
        setTheme(theme === THEME.light ? THEME.dark : THEME.light)
    }

    return (
        <div className={`${classes['light-background']} ${theme === THEME.light ?  classes["light-background"] : classes["dark-background"]}`}>
            <MangaDetailComponent media={media}/>
        </div>
    );
}
