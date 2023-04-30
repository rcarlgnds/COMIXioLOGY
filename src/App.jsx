import { useState } from 'react';
import './App.css';
import MainHeader from './Components/Post/MainHeader';
import MainFooter from './Components/Post/MainFooter';
import { THEME, ThemeContext } from './Components/Context/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import FavoritePage from './Components/Pages/FavoritePage';
import SearchPage from './Components/Pages/SearchPage';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import MangaDetail from './Components/Pages/MangaDetail';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
});

function App() {
  const [favorites, setFavorites] = useState([]);

  let[currTheme, setCurrTheme] = useState(THEME.light);
  const changeTheme = () => {
    if (currTheme === THEME.light) setCurrTheme(THEME.dark);
    else setCurrTheme(THEME.light)
  };

  function addToFavorites(manga){
    setFavorites([...favorites, manga])
  }

  const themeContextValue = { theme: currTheme, setTheme: changeTheme };
  
  return(
      <ApolloProvider client={client}>
        <ThemeContext.Provider value={themeContextValue}>      
        <BrowserRouter>
            <MainHeader/>
            <Routes>
              <Route path="/home" element={<HomePage/>}></Route>
              <Route path="/favorite" element={<FavoritePage/>}></Route>
              <Route path="/search" element={<SearchPage/>}></Route>
              <Route path="/detail/:id" element={<MangaDetail/>}></Route>
              <Route path="/favorites" element={<FavoritePage favorites={favorites} />} />
            </Routes>
            <MainFooter />
        </BrowserRouter>
        </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
