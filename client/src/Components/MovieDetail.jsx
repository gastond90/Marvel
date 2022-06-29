import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import "./Botones.css";

export function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const lapeli = useSelector((state) => state.detail);

  console.log("DETALLE", lapeli);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  return (
    <div>
      <div>
        <h1>MOVIE DETAIL</h1>
        {lapeli.image && (
          <div key={lapeli.id}>
            <h1>{lapeli?.title}</h1>

            <img src={`${lapeli.image}`} alt="" width="450" height="350" />

            <h3>Cast:</h3>
         
            {lapeli.cast.map((i) => (
              <p>{i}</p>
            ))}

            <h3>Director:{lapeli.directors}</h3>

            {lapeli.images.map((i) => (
              <img src={i} alt="" width="75" height="75" />
            ))}
            <p>{lapeli.plot}</p>

            <h4 class="detalle"> {lapeli?.description}</h4>
          </div>
        )}

        <h3>Trailer:</h3>

        <video src={lapeli.trailer} width="640" height="480"></video>

        <Link to="/home/movies">
          <button class="botondetail">VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
