import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, orderByName } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import { Paginated } from "./Paginated";
import { SearchBar } from "./SearchBar";
import "./Home.css";
import "./Botones.css";
import "./Card.css";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames?.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  /*  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return
  }
  var shuffled = shuffle(currentVideogames) */

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacters());
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
      <div class="home">
        <div>
          <Link to="/home/comics">
            <button>COMICS</button>
          </Link>
          <Link to="/home/events">
            <button>EVENTS</button>
          </Link>
          <Link to="/home/movies">
            <button>MOVIES</button>
          </Link>
          <Link to="/home/games">
            <button>GAMES</button>
          </Link>
        </div>

        {/*  <div>
          
          <button onClick={(e) => { handleClick(e);}} class= "botonver"> VER JUEGOS </button>
        </div>
      > */}
      </div>
      <div>
        <SearchBar />
      </div>

      <div>
        <div class="content-select">
          <select onChange={(e) => handleSort(e)}>
            <option hidden={true}>Por Nombre</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

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
