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
    const [listaEmpleados, setListaEmpleados]=([empleados])
    const [filter, setFilter]= useState("")
    const [q, setQ]= useState("")
    const [searchParam]=useState(["Nombre", "Apellido1", "Apellido2","CURP", "Puesto", "Ignition"])


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
    function handleSearchByCURP(e, value){
        e.preventDefault()
        setSearchedEmployee(empleados.filter((obj)=>obj.CURP === value))
    }
    function handleSearchByPuesto(e, value){
        e.preventDefault()
        setSearchedEmployee(empleados.filter((obj)=>obj.Puesto === value)) 
    }

    function setFiltroParam(e,value){
        e.preventDefault();
        setFilter(value);
    }

    function qSetter(e,value){
        e.preventDefault();
        setQ(value);
        handleSearch()
    }

    function handleSearch(lista){
        return lista.filter((item)=>{
            return searchParam.some((newItem)=>{
                return(
                    item[newItem].toString().toLowerCase().indexOf(q.toLowerCase())>-1
                )
            })
        })
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
        <FiltroDept  setFiltroParam={setFiltroParam}/>
        <Search query={q} handleSearch={qSetter} />
        </nav>
        <button onClick={toggleAdd}>Agregar</button>
        {add && <AddEmployee/>}
        
        {handleSearch(listaEmpleados).map(emplo => {
             return <ShowEmployee key={emplo.Ignition} data={emplo}/>}) }
        </>
    )
} 
