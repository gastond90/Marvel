import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {getCharactersByName} from '../actions';
import "./Botones.css"

export function SearchBar () {
    const dispacht = useDispatch();
    const [name, setName] = useState("");

    function handleInputName (e){
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit (e){
        e.preventDefault();
        dispacht(getCharactersByName(name));
        setName("");
    };

    return (
        <div>
            <input type = "search" placeholder="Search characters" onChange={e => handleInputName(e)} />
            <button className="botonbuscar" type="submit"  onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
}