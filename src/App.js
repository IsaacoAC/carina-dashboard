import Nav from "./components/Nav.js"
import Search from "./components/Search.js"
import AddEmployee from "./components/AddEmployee.js"
import ShowEmployee from "./components/ShowEmployee.js"
import FiltroDept from "./components/FiltroDept.js"
import "./index.css"
import { useState, useEffect } from "react"
import empleados from "./data.js"



export default function App(){

    const [add, setAdd] = useState(false)
    const [searchedEmployee, setSearchedEmployee] = useState([])
    const [filter, setFilter]= useState("inicio")

    function toggleAdd(){
        setAdd(prevState => !prevState)
    }

    function handleSearchByName(e, value){
        e.preventDefault()
        setSearchedEmployee(empleados.filter((obj)=>obj.Nombre === value))
    }

    function handleSearchByIgnition(e, value){
        e.preventDefault()
        setSearchedEmployee(empleados.filter((obj)=>obj.Ignition === value)) 
    }
    function handleSearchByDept(e, value){
        e.preventDefault()
        setSearchedEmployee(empleados.filter((obj)=>obj.Departamento === value)) 
    }
    function handleSearchByCURP(e, value){
        e.preventDefault()
        setSearchedEmployee(empleados.filter((obj)=>obj.CURP === value))
    }
    function handleSearchByPuesto(e, value){
        e.preventDefault()
        setSearchedEmployee(empleados.filter((obj)=>obj.Puesto === value)) 
    }

    const show = searchedEmployee.map(emplo => {
        return <ShowEmployee key={emplo.Ignition} data={emplo}/>})

    function setFiltroParam(e,value){
        e.preventDefault();
        
        setFilter(value);
    }


        // Posible respuesta para buscar
        ////https://stackoverflow.com/questions/63229433/react-search-by-object-key
        //https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
        //https://medium.com/crobyer/search-filter-with-react-js-88986c644ed5
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
        <FiltroDept setFiltroParam={setFiltroParam}/>
        </nav>
        <button onClick={toggleAdd}>Agregar</button>
        {add && <AddEmployee/>}
        
        {searchedEmployee.map(emplo => {
             return <ShowEmployee key={emplo.Ignition} data={emplo}/>}) }
        </>
    )
} 
