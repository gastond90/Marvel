import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function MovieCard({ name, year, image,description }) {
  return (
    <div>
      <div class=" grid place-items-center font-mono bg-gray-900">
        <div class="bg-white rounded-md bg-gray-800 shadow-lg">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none ">
              <img
                src={image}
                alt="pic"
                class="h-72 w-72 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="pt-4 text-2xl font-bold">{name}
                    ({year})</p>
              __________________________________________________________________________
              <hr class="hr-text" data-content="" />
              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold"></span>
              </div>
              <h4 class="hidden md:block px-4 my-4 text-sm text-left">
                {description}{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>







    </div>
  );
}
