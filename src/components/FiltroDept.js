import React from "react"

export default function FiltroDept(props){
    return(
        <>
        <select className="filtro" onChange={(e)=>(props.setFiltroParam(e, e.target.value))}>
            <option value="none">Selecciona un Departamento</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Mercadotecnia">Merchandising</option>
            <option value="All Data">All Data</option>
            <option value="Contact Center">Contact Center</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
        </select>
        </>
    )
}