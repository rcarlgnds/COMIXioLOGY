import {MdPostAdd, MdMessage} from 'react-icons/md'
import classes from "./MainFooter.module.css"

import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { THEME, ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';

function MainFooter(){
    function goToHomePage(){
        console.log("")
        return <Link to="/home"></Link>
    }
    const { theme, setTheme } = useContext(ThemeContext);
    
    const themeHandler = () => {
        setTheme(theme === THEME.light ? THEME.dark : THEME.light)
    }
    return(
        <div className={classes.footerBody}>
            <footer className={classes.footer}>
                <p>
                    <Link to="/home">
                        <button className={`${classes.button} ${theme === THEME.light ? classes['light-button'] : classes['dark-button']}`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                                </svg>
                            </div>
                        </button>
                    </Link>
                </p>
                <p>
                    <Link to="/search">
                        <button className={`${classes.button} ${theme === THEME.light ? classes['light-button'] : classes['dark-button']}`}>
                            <div className={classes.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </div>
                        </button>
                    </Link>
                </p>
                <p>
                    <Link to="/favorite">
                        <button className={`${classes.button} ${theme === THEME.light ? classes['light-button'] : classes['dark-button']}`}>
                            <div className={classes.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                            </div>
                        </button>
                    </Link>
                </p>
            </footer>
        </div>
    );
}

export default MainFooter;