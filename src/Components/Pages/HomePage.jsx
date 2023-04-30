import { useQuery } from "@apollo/client"
import { GET_ALL_MANGA } from "../Queries/GetAllMangaData"
import { useContext } from "react";
import PostsList from "../Post/PostsList";
import Post from "../Post/Post";
import { ThemeContext } from "../Context/ThemeContext";
import { useState } from "react";

export default function HomePage(){
    const [currentPage, setCurrentPage] = useState(1);

    const{loading, error, data} = useQuery(GET_ALL_MANGA, {
        variables : {
            page: currentPage,
            perPage: 100
        }
    });

    let theme = useContext(ThemeContext)

    if(loading) return <h1>Loading...</h1>
    else if (error) {
        return <marquee behavior="" direction="right" scrollamount="30"><h1>Error : {error.message}</h1></marquee>
    }

    if (data == null){
        console.log("Data is not found")
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
                {data.Page.media.map((media) => {
                    return <Post media = {media}></Post>     
                })}
            </div>
            <div style={{ height: "80px" }}></div> {/* Hollow component */}
        </div> 
    )
}