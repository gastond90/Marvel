import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName, getEvents } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import { Paginated } from "./Paginated";
import { SearchByEvent } from "./SearchByEvent";
import EventCard from "./EventCard";
import "./Home.css";
import "./Botones.css";
import "./Card.css";

export default function Events() {
  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.events);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allEvents?.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  /*  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return
  }
  var shuffled = shuffle(currentVideogames) */

  console.log(allEvents, "losevents");

  /*   console.log(shuffled, "lospj") */

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getEvents());
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

        {/*  <div>
          <button onClick={(e) => { handleClick(e);}} class= "botonver"> VER JUEGOS </button>
        </div>
        */}
      </div>

      <div>
        <SearchByEvent />
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
          allVideogames={allEvents.length}
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
          ) : allEvents[0] === "No existe el juego" ? (
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
                  <Link class="card" key={key++} to={`/home/event/${e.id}`}>
                    <Card
                      class="card"
                      key={key++}
                      name={e.title}
                      image={e.image}
                      path={e.thumbnail.path}
                      extension={e.thumbnail.extension}
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
