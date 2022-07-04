import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName, getVideogames } from "../actions";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import { Paginated } from "./Paginated";
import { SearchByComic } from "./SearchByComic";
import "./Home.css";
import "./Botones.css";
import "./Card.css";

export default function Games() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allGames?.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  /*  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return
  }
  var shuffled = shuffle(currentVideogames) */

  console.log(allGames, "losgames");

  /*   console.log(shuffled, "lospj") */

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideogames());
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
    <div className="comics">
      <nav class="navv">
        <h1>GAMES</h1>
        <ul class="container">
          <li class="dropdown">
            <div>
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
              <Link to="/home/movies">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                  MOVIES
                </button>
              </Link>
              <Link to="/home">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                  HOME
                </button>

                <div class="inline-flex"></div>
              </Link>
            </div>
          </li>
          <h5>Marvel App</h5>
          Ton Duba 2022☕
        </ul>
      </nav>
      <div className="comics">
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
          allVideogames={allGames.length}
          paginated={paginated}
        />
        <div>
          {currentVideogames[0] === "NO" ? (
           <div>
           <h1>NO RESULTS FOUND❌</h1>
           <img
             className="imgerr"
             src="https://c.tenor.com/Jar7MovEXPoAAAAC/deadpool-omg.gif"
             alt=""
           />
           </div>
          ) : allGames[0] === "No existe el juego" ? (
            <div>
          <h1>NO RESULTS FOUND❌</h1>
          <img
            className="imgerr"
            src="https://c.tenor.com/Jar7MovEXPoAAAAC/deadpool-omg.gif"
            alt=""
          />
          </div>
          ) : currentVideogames.length === 0 ? (
            <div>
              <button className="loader">LOADING...</button>
            </div>
          ) : (
            currentVideogames &&
            currentVideogames.map((e) => {
              return (
                <div key={key++}>
                  <Link
                    /* className="card" */ key={e.id}
                    to={`/home/game/${e.id}`}
                  >
                    <GameCard
                      /* className="card" */
                      key={e.id}
                      name={e.name}
                      image={e.image}
                      /* genre={e.genres.map((i) => (
                        <h5 key={key++}>{i}</h5>
                      ))} */

                      genre={e.genres}
                      /* platforms={e.platforms.map((i) => (
                        <h5 key={key++}>{i}</h5>
                      ))} */
                      platforms={e.platforms}
                      rating={e.rating}
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
