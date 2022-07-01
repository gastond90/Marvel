import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName, getMovies } from "../actions";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Paginated } from "./Paginated";
import "./Home.css";
import "./Botones.css";
import "./Card.css";

export default function Movies() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allMovies?.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  console.log(allMovies, "laspelis")

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  /* function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }
  } */

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  let key = 1;
  return (
    <div className="home">
<nav class="navv">
      <h1>MOVIES</h1>
        <ul class="container">
        <li class="dropdown">
          <div>
              <Link to="/home">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                  HOME
                </button>
              </Link>
              <Link to="/home/comics">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                  COMICS
                </button>
              </Link>
              <Link to="/home/events">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                 EVENTS
                </button>
              </Link>
              <Link to="/home/games">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                 GAMES
                </button>

                <div class="inline-flex"></div>
              </Link>
            </div>
          </li>
          
          <h5>Marvel App</h5>
             Ton Duba 2022☕
        </ul>
        <div>
        {/* <SearchBar /> */}
      </div>
      </nav>
      <div className="home">

        {/*  <div>
          <button onClick={(e) => { handleClick(e);}} className= "botonver"> VER JUEGOS </button>
        </div>
        */}
      </div>

      <div>
        {/* <div className="content-select">
          <select onChange={(e) => handleSort(e)}>
            <option hidden={true}>Por Nombre</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div> */}

        <Paginated
          videogamesPerPage={videogamesPerPage}

          allVideogames={allMovies.length}

          paginated={paginated}
        />
        <div>
          {currentVideogames[0] === "NO" ? (
            <img
              className="imgerr"
              src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
              alt=""
              width="630px"
              height="630px"
            />
          ) : allMovies[0] === "No existe el juego" ? (
            <img
              className="imgerr"
              src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
              alt=""
            />
          ) : currentVideogames.length === 0 ? (
            <div>
              <button className="loader">LOADING...</button>
            </div>
          ) : (
            currentVideogames &&
            
            currentVideogames.map((e) => {
              return (
                <div key={key++}>
                  <Link className="card" key={key++} to={`/home/movie/${e.id}`}>
                    <MovieCard
                      className="card"
                      key={key++}
                      name={e.title}
                      image={e.image}
                      year={e.year}
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
