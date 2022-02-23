import { useState } from "react"
import React from "react"

export default function Search(props){
    const [value, setValue] = useState("")
    return(
        <form  className="form-search" onSubmit={
            (e)=> props.handleSearch(e,value)
            }>
        <label htmlFor="header-search">
            {props.section}
        </label>
        <br></br>
        <input
            type="text"
            id="header-search"
            placeholder="Buscar"
            onChange={e => setValue(e.target.value)}
        />
        <button 
            
            type="submit">Buscar</button>
    </form>
    )
}