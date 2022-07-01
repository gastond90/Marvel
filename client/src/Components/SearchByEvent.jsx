import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {getEventsByName } from '../actions';
import "./Botones.css"

export function SearchByEvent () {
    const dispacht = useDispatch();
    const [name, setName] = useState("");

    function handleInputName (e){
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit (e){
        e.preventDefault();
        dispacht(getEventsByName(name));
        setName("");
    };

    return (
        <div>
            <input type = "search" placeholder="Search events" onChange={e => handleInputName(e)} />
            <button className="botonbuscar" type="submit"  onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
}