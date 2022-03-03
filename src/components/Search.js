import { useState } from "react"
import React from "react"

export default function Search(props){
    return(
        <>
        <label className="form-search" htmlFor="header-search">
            {props.section}
        </label>
        <br></br>
        <input className="search-input"
            type="text"
            id="header-search"
            placeholder="Buscar"
            onChange={e => props.handleSearch(e,e.target.value)}
        />
    </>
    )
}