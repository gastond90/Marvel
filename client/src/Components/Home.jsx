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
    
    <div className="home">

      <nav class="navv">
      <h1>CHARACTERS</h1>
      
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
              <Link to="/home/games">
                <button class="bg-gray-1300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 ">
                 GAMES
                </button>


                <div class="inline-flex"></div>
              </Link>
              <SearchBar />
            </div>
          </li>
          
          <h5>Marvel App</h5>
             Ton Duba 2022☕
        </ul>
        <div>
        
      </div>
      
      </nav>

      <div className="home">
    
      </div>
      <div>
        <div className="content-select">
          <select onChange={(e) => handleSort(e)}>
            <option hidden={true}>Alphabetically</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
        
      </div>

      

      <Paginated
        videogamesPerPage={videogamesPerPage}
        allVideogames={allVideogames.length}
        paginated={paginated}
      />
      
      <div >
        {currentVideogames[0] === "NO" ? (
          <div>
         <h1>NO RESULTS FOUND❌</h1>
          <img
            className="imgerr"
            src="https://c.tenor.com/Jar7MovEXPoAAAAC/deadpool-omg.gif"
            alt=""
          />
          </div>
        ) : allVideogames[0] === "No existe el juego" ? (
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
                <Link className="card" key={key++} to={`/home/${e.id}`}>
                  <Card
                    className="card"
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
      {/* <Footer /> */}
    </div>
  );
}
