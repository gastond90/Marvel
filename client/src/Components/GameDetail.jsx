import React from 'react';
import {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {getGameDetail} from '../actions';
import {useDispatch, useSelector} from "react-redux";
import "./Detail.css"
import "./Botones.css"

export function GameDetail(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const aGame = useSelector((state) => state.detail);

    useEffect(() => { 
        dispatch(getGameDetail(id));
    },[]);

    return(
        <div>
            <div>
            {
                <div>
                    <div class="detalle">
                    <h1>{aGame.name}</h1>
                    </div>
                    <img src={aGame.image} alt = "" width="450" height="350"/>
                    <h3 class="detalle">Géneros: {aGame.genres?.join(",")}</h3>
                    <h3 class="detalle">Plataformas: {aGame.platforms?.join(",")}</h3>
                    <h3 class="detalle">Puntaje: {aGame.rating}</h3>
                    <h3 class="detalle">Lanzamiento: {aGame.released}</h3>
                    <h4 class="detalle">Descripción: {aGame.description}</h4>
                </div>    
            }
            
            <Link to = '/home/games'>
                <button class="botondetail">VOLVER</button>
            </Link>
            </div>
            
        </div>
    )

}
