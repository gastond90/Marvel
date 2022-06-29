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
    <div class="home">

      <h1>GAMES</h1>
      <div class="home">
        {/*  <div>
          <button onClick={(e) => { handleClick(e);}} class= "botonver"> VER JUEGOS </button>
        </div>
        */}
      </div>

      {/*   <div>
        <SearchByComic />
      </div> */}

      <div>
        {/* <div class="content-select">
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
        <div class="videogames">
          {currentVideogames[0] === "NO" ? (
            <img
              class="imgerr"
              src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
              alt=""
              width="630px"
              height="630px"
            />
          ) : allGames[0] === "No existe el juego" ? (
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
                  <Link class="card" key={e.id} to={`/home/game/${e.id}`}>
                    <GameCard
                      class="card"
                      key={e.id}
                      name={e.name}
                      image={e.image}
                      genre={e.genres?.join(",")}
                      platforms={e.platforms?.join(",")}
                      rating={e.rating}
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
