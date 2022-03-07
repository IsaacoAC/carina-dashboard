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
    const [filter, setFilter]= useState("none")
    const [q, setQ]= useState("")
    const [searchParam]=useState(["Nombre", "Apellido1", "Apellido2","CURP", "Puesto", "Ignition"])
    const [newEmployee, setNewEmployee]=useState({})

    function toggleAdd(){
        setAdd(prevState => !prevState)
    }

    function setFiltroParam(e,value){
        e.preventDefault();
        setFilter(value);
    }

    function qSetter(e,value){
        e.preventDefault();
        setQ(value);
    }

    function handleSearch(lista){
        return lista.filter((item)=>{
            if(item.Departamento===filter){
                return searchParam.some((newItem)=>{
                    return(
                        item[newItem].toString().toLowerCase().indexOf(q.toLowerCase())>-1
                    )
                })
            }else if (filter==="none"){
                return 
            }
            
        })
    }

    function handleAdd(e,emplo){
        e.preventDefault();
        console.log(emplo)
        toggleAdd();
    }
    
    return(
        <>
        <Nav/>
        <h1>Empleados</h1>
        <nav className="nav-search">
        <FiltroDept  setFiltroParam={setFiltroParam}/>
        <Search handleSearch={qSetter} />
        </nav>
        <button onClick={toggleAdd}>Agregar</button>
        {add && <AddEmployee add={handleAdd}/>}
        {handleSearch(empleados).map(emplo => {
             return <ShowEmployee key={emplo.Ignition} data={emplo}/>}) }
        </>
    )
} 
