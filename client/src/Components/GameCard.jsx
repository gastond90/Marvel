import React from "react";
import "./Card.css";
import "./Home.css";

export default function GameCard({ image, name, genre,platforms }) {
  return (
    <div>

<div class=" grid place-items-center font-mono bg-gray-900 max-w-2000 min-w-2000">
      
      <div class="bg-white rounded-md bg-gray-800 shadow-lg ">
        <div class="md:flex px-4 leading-none ">
          <div class="flex-none ">
           <img
            src= {image}
            alt="pic"
            class="h-72 w-82 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
          />           
          </div>

          <div class="flex-col text-gray-300 min-w-2000">
   
            <p class="pt-4 text-2xl font-bold ">{name}</p>
            
            ________________________________________________________________________________
            <hr class="hr-text" data-content=""/>
            <div class="text-md flex justify-between px-4 my-2">
              {/* <span class="font-bold">2h 2min | Crime, Drama, Thriller</span> */}
              <span class="font-bold"></span>
            </div>
            <p class="hidden md:block px-4 my-4 text-sm text-left"> Genres: {genre}</p>
            <p class="hidden md:block px-4 my-4 text-sm text-left"> Platforms: {platforms}</p>
            
            {/* <p class="flex text-md px-1 my-1">
              Genres: {genre}
              <span class="font-bold px-2">|</span>
              Platforms: {platforms}
            </p> */}

            </div>
        </div>          
      </div>
      </div>
       {/*  <div class="container">
          <div class="cellphone-container">
            <div class="movie">
              <div class="menu"></div>
              <div class="movie-img">
                <img class="movie-img" src={image} alt="img not found" width="250px"
          height="200px"></img>
              </div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>{name}</h1>
                
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h3>Genres: {genre}</h3>
                   
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    
                    <h3>Platforms: {platforms}</h3>
                  
                  </div>
                </div>
               
              
              </div>
            </div>
          </div>
     
      </div> */}
    </div>
  );
}
