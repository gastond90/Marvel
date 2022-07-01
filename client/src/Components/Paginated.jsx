import React from "react";
import "./Paginated.css"

export function Paginated ({videogamesPerPage, allVideogames, paginated}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++){
        pageNumber.push(i)
    };

    return (
        <nav className="pag">
            <section className="paginacion">
            <ul>
                {pageNumber && pageNumber.map(n => (
                    <li key = {n} >
                        <a className="active" onClick={()=> paginated(n)}>{n}</a>
                    </li>
                ))}                              
            </ul>
            </section>
            
        </nav>
        
    )
}