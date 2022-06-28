import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {getComicsByName, } from '../actions';
import "./Botones.css"

export function SearchByComic () {
    const dispacht = useDispatch();
    const [name, setName] = useState("");

    function handleInputName (e){
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit (e){
        e.preventDefault();
        dispacht(getComicsByName(name));
        setName("");
    };

    return (
        <div>
            <input type = "search" placeholder="Search comics" onChange={e => handleInputName(e)} />
            <button class="botonbuscar" type="submit"  onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
}