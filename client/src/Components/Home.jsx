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

      


{/* <div class="min-h-screen grid place-items-center font-mono bg-gray-900">

  <div class="bg-white rounded-md bg-gray-800 shadow-lg">
    <div class="md:flex px-4 leading-none max-w-4xl">
      <div class="flex-none ">
        <img src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" alt="pic" class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg" />
      </div>

      <div class="flex-col text-gray-300">

        <p class="pt-4 text-2xl font-bold"> Joker (2020)</p>
        <hr class="hr-text" data-content=""/>
        <div class="text-md flex justify-between px-4 my-2">
          <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
          <span class="font-bold"></span>
        </div>
        <p class="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>

        <p class="flex text-md px-4 my-2">
          Rating: 9.0/10
          <span class="font-bold px-2">|</span>
          Mood: Dark
        </p>

      </div></div></div></div> */}





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
            </div>
          </li>
          
          <h5>Marvel App</h5>
             Ton Duba 2022☕
        </ul>
        <div>
        <SearchBar />
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
          <img
            className="imgerr"
            src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
            alt=""
            width="630px"
            height="630px"
          />
        ) : allVideogames[0] === "No existe el juego" ? (
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
    </div>
  );
}
