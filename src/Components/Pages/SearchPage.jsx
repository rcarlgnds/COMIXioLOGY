import SearchBar from "../Post/SearchBar";
import SearchComponent from "../Post/SearchComponent";



function SearchPage(){
    return(
        <div>
            <SearchComponent/>
            <div style={{ height: "80px" }}></div> {/* Hollow component */}
        </div>
    )
}

export default SearchPage;