import Nav from "./components/Nav.js"
import Search from "./components/Search.js"
import AddEmployee from "./components/AddEmployee.js"
import ShowEmployee from "./components/ShowEmployee.js"
import "./index.css"
import { useState, useEffect } from "react"
import Data from "./data.json"


export default function App(){

    const [add, setAdd] = useState(false)
    const [searchedEmployee, setSearchedEmployee] = useState([])

    function toggleAdd(){
        setAdd(prevState => !prevState)
    }

    function handleSearchByName(e, value){
        e.preventDefault()
        setSearchedEmployee(Data.empleados.filter((obj)=>obj.Nombre === value))
    }

    function handleSearchByIgnition(e, value){
        e.preventDefault()
        setSearchedEmployee(Data.empleados.filter((obj)=>obj.Ignition === value)) 
    }
    function handleSearchByDept(e, value){
        e.preventDefault()
        setSearchedEmployee(Data.empleados.filter((obj)=>obj.Departamento === value)) 
    }
    function handleSearchByCURP(e, value){
        e.preventDefault()
        setSearchedEmployee(Data.empleados.filter((obj)=>obj.CURP === value))
    }
    function handleSearchByPuesto(e, value){
        e.preventDefault()
        setSearchedEmployee(Data.empleados.filter((obj)=>obj.Puesto === value)) 
    }

    const show = searchedEmployee.map(emplo => {
        return <ShowEmployee key={emplo.Ignition} data={emplo}/>})

    return(
        <>
        <Nav/>
        <h1>Empleados</h1>
        <nav className="nav-search">
        <Search handleSearch={handleSearchByIgnition} section={"Ignition"}/>
        <Search handleSearch={handleSearchByPuesto} section={"Puesto"}/>
        <Search handleSearch={handleSearchByDept} section={"Departamento"}/>
        <Search handleSearch={handleSearchByName} section={"Nombre"}/>
        <Search handleSearch={handleSearchByCURP} section={"CURP"}/>
        </nav>
        <button onClick={toggleAdd}>Agregar</button>
        
        {searchedEmployee.map(emplo => {
             return <ShowEmployee key={emplo.Ignition} data={emplo}/>}) }
        </>
    )
} 
