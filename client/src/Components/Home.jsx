import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, orderByName, orderByRating, getComics, getEvents, getMovies } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import { Paginated } from "./Paginated";
import { SearchBar } from "./SearchBar";
import  {SearchByComic} from "./SearchByComic";
import  {SearchByEvent} from "./SearchByEvent";
import { FilterByGenre } from "./FilterByGenre";
import "./Home.css";
import "./Botones.css";
import "./Card.css";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  const allComics = useSelector((state) => state.comics);
  const allEvents = useSelector((state) => state.events);
  const allMovies = useSelector((state) => state.movies);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames?.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  console.log(allComics, "loscomics");
  console.log(allEvents, "loseventos")
  console.log(allMovies, "laspelis")

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getComics());
    dispatch(getEvents());
    dispatch(getMovies());
  }, []);
  

  /* function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleSortRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  } */

  /* console.log("CCURRENT", currentVideogames) */
  let key = 1
  return (
    <div class="home">
      <div class="home">
        <div>
          <h1></h1>
        </div>

        {/*  <button onClick={mejorescinco}>Top 5</button> */}

        {/*  <div>
          <Link to="/videogame">
            <button class= "botoncrearjuego">CREAR JUEGO</button>
          </Link>
          <div><h1></h1></div>
          <button onClick={(e) => { handleClick(e);}} class= "botonver"> VER JUEGOS </button>
        </div>
        <div><h1></h1></div>
        
        <div><h1></h1></div>
        <div>
          <FilterByGenre />
        </div> */}
      </div>
      <div>
          <SearchBar /> 
        </div>
      <div>
          <SearchByComic /> 
        </div>
      <div>
          <SearchByEvent /> 
        </div>
      <div>
        {/* <div class="content-select">
        <select onChange={(e) => handleFilterCreated(e)}>
        <option hidden={true}>Origen</option>
          <option value="All">Todos</option>
          <option value="Created">Creados</option>
          <option value="Existing">Originales</option>
        </select>
        </div> */}

        {/* <div class="content-select">
          <select onChange={(e) => handleSort(e)}>
          <option hidden={true}>Por Nombre</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
          </div> */}

        {/* <div class="content-select">
          <select onChange={(e) => handleSortRating(e)}>
          <option hidden={true}>Por Puntaje</option>
            <option value="Max-Min">Mejores Primero</option>
            <option value="Min-Max">Peores Primero</option>
            <option value='top5'>mejores 5</option>

          </select>
        </div> */}

        <Paginated
          videogamesPerPage={videogamesPerPage}
          allVideogames={allVideogames.length}
          paginated={paginated}
        />
        <div class="videogames">
          {currentVideogames[0] === "NO" ? (
            <img
              class="imgerr"
              src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
              alt=""
              width="630px"
              height="630px"
            />
          ) : allVideogames[0] === "No existe el juego" ? (
            <img
              class="imgerr"
              src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
              alt=""
            />
          ) : currentVideogames.length === 0 ? (
            <div>
              <button class="loader">LOADING...</button>
            </div>
          ) : (
            currentVideogames &&
            
            currentVideogames.map((e) => {
              return (
                <div key={key++}>
                  <Link class="card" key={key++} to={`/home/${e.id}`}>
                    <Card
                      class="card"
                      key={key++}
                      name={e.name}
                      image={e.image}
                      genre={e.genres?.join(",")}
                      rating={e.rating}
                      path={e.image.path}
                      extension={e.image.extension}
                      description={e.description}
                    />
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
