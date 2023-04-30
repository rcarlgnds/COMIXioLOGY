import React, { useState, useRef } from 'react';
import classes from './SearchBar.module.css'
import {gql} from "@apollo/client"
import { useLazyQuery } from "@apollo/client"
import Post from './Post';

export const GET_ALL_MANGA = gql`
  query getAllAnime($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(type: MANGA, sort: POPULARITY_DESC, search: $search) {
        id
        coverImage {
          medium
        }
        title {
          english
        }
        description
        genres
        startDate {
          year
        }
      }
    }
  }
`;

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchAnime, { loading, error, data }] = useLazyQuery(GET_ALL_MANGA);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchAnime({
      variables: {
        page: 1,
        perPage: 10,
        search: query,
      },
    });
  };

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
    <div  className={classes.searchBar}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Manga..."
      />
      <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg></button>
      </div>
    </form>

    {loading ? (
      <center><b><p style={{ color:'white' }}>Loading...</p></b></center>
    ) : error ? (
      <center><b><p style={{ color:'white' }}>Error Fetching Data!</p></b></center>
    ) : (
      <ul>
        {data?.Page?.media.map((manga) => (
            <div className={classes.result}>
            <Post media={manga}></Post>
            </div>
        ))}
      </ul>
    )}
  </div>
);
}


export default SearchBar;
