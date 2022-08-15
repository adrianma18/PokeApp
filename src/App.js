import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { SearchBar } from "./components/SearchBar";
import { fetchPokemon } from "./utils/fetchPokemon";
import { BottomNavbar } from "./components/BottomNavbar";
import { Pokemon } from "./pages/Pokemon";
import axios from "axios";

function App() {
  const [mode, setMode] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingAll, setLoadingAll] = useState(true);

  // dark and light theme switch
  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  //get a specific pokemon
  const getPokemon = async (query) => {
    setLoading(true);
    const response = await fetchPokemon(query);
    const results = await response.json();
    setPokemon(results);
    setLoading(false);
  };

  //gets all the pokemon in a page (20 per page) and sets prev, current and next page url
  const getPage = async () => {
    setLoadingAll(true);
    const res = await axios.get(currentPageUrl);
    // console.log(res.data.results);
    setNextPageUrl(res.data.next);
    setPrevPageUrl(res.data.previous);
    getAllPokemon(res.data.results);
    setLoadingAll(false);
    // console.log(allPokemon)
  };

  //gets and separate data for each individual pokemons in a page separating in arrays
  const getAllPokemon = async (res) => {
    setAllPokemon([]);
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setAllPokemon((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    getPage();
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar checked={mode} change={() => setMode(!mode)} />
        <Paper elevation={16} sx={{ padding: "32px", minHeight: "82vh" }}>
          <SearchBar getPokemon={getPokemon} />
          <Routes>
            <Route
              path="/"
              element={
                !loadingAll && allPokemon ? (
                  <HomePage
                    allPokemon={allPokemon}
                    goToPrevPage={prevPageUrl ? goToPrevPage : null}
                    goToNextPage={nextPageUrl ? goToNextPage : null}
                    getPokemon={getPokemon}
                  />
                ) : null
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/pokemon"
              element={
                !loading && pokemon ? (
                  <Pokemon
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_default}
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    id={pokemon.id}
                  />
                ) : null
              }
            />
          </Routes>
        </Paper>
        <BottomNavbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
