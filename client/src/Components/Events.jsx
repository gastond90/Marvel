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
    <div className="home">
      <nav class="navv">
      <h1>EVENTS</h1>
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
              <Link to="/home/movies">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                  MOVIES
                </button>
              </Link>
              <Link to="/home/games">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                 GAMES
                </button>

                <div class="inline-flex"></div>
              </Link>
              <SearchByEvent />
            </div>
          </li>
          
        </ul>
        <div>
        
      </div>

      </nav>
      <div className="home">

        {/*  <div>
          <button onClick={(e) => { handleClick(e);}} className= "botonver"> VER JUEGOS </button>
        </div>
        */}
      </div>

     
      <div>
       {/*  <div className="content-select">
          <select onChange={(e) => handleSort(e)}>
            <option hidden={true}>Por Nombre</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div> */}

        <Paginated
          videogamesPerPage={videogamesPerPage}

          allVideogames={allEvents.length}

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
          ) : allEvents[0] === "No existe el juego" ? (
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
                  <Link className="card" key={key++} to={`/home/event/${e.id}`}>
                    <Card
                      className="card"
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
