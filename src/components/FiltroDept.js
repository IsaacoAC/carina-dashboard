import React from "react"

export default function FiltroDept(props){
    return(
        <>
        <select onChange={(e)=>(props.setFiltroParam(e, e.target.value))}>
            <option value="">Selecciona un Departamento</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Mercadotecnia">Merchandising</option>
            <option value="All Data">All Data</option>
            <option value="Contact Center">Contact Center</option>
            <option value="Financieros">Finance</option>
            <option value="IT">IT</option>
        </select>
        </>
    )
}