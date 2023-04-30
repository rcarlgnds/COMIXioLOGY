import SearchBar from "./SearchBar";
import classes from './SearchComponent.module.css'

function SearchComponent(){
    return(
        <div className={classes.searchComponent}>
            <h1 className={classes.title}>Let's read some Mangas !</h1>
            <SearchBar />
        </div>
    );

}

export default SearchComponent;