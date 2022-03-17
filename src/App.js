import Nav from "./components/Nav.js"
import Search from "./components/Search.js"
import AddEmployee from "./components/AddEmployee.js"
import ShowEmployee from "./components/ShowEmployee.js"
import FiltroDept from "./components/FiltroDept.js"
import FiltroCat from "./components/FiltroCat.js"
import EditEmployee from "./components/EditEmployee.js"
import "./index.css"
import { useState, useEffect } from "react"
import empleados from "./data.js"



export default function App() {

    const [ArregloEmpleados, setArregloEmpleados] = useState(empleados)
    const [add, setAdd] = useState(false)
    const [filter, setFilter] = useState("none")
    const [q, setQ] = useState("")
    const [searchParam, setSearchParam] = useState([
        
        { "name": "Nombre", "value": false },
        { "name": "Apellido1", "value": false },
        { "name": "Apellido2", "value": false },
        { "name": "CURP", "value": false },
        { "name": "Puesto", "value": false },
        { "name": "Ignition", "value": false }])
    const [emplo, setEmplo] = useState(
        {
            "Ignition": "",
            "Active": true,
            "Nombre": "",
            "Apellido1": "",
            "Apellido2": "",
            "CURP": "",
            "Puesto": "",
            "ClavePuestoDZ": "",
            "ClavePuestoSTPS": "",
            "Departamento": "",
            "ClaveEdoSTPS": "8",
            "Editable":false,
            "ClaveMnpoSTPS": "19",
            "ClaveEstudiosSTPS": "",
            "ClaveDocProbSTPS": "",
            "ClaveInstitucion": "",
            "FechaIngreso": "",
            "SoftSkills": [
                ""
            ],
            "HardSkills": [
                ""
            ],
            "Cursos": [
                ""
            ],
            "Reembolsos": [
                ""
            ]
        }
    )
    let editEmpleado = []
    let updatedSearchParam = []

    function toggleAdd() {
        setAdd(prevState => !prevState)
    }

    function setFiltroParam(e, value) {
        e.preventDefault();
        setFilter(value);
    }

    function qSetter(e, value) {
        e.preventDefault();
        setQ(value);
    }

    function handleSearch(lista) {
        return lista.filter((item) => {
            if(item.Departamento===filter){
            return searchParam.some(({ name, value }) => {
                if (value === false) {
                    return
                } else {
                    return (
                        item[name].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                    )
                }

            })
            }else if (filter==="none"){
             return 
        }

        })
    }

    function handleAdd(e) {
        e.preventDefault();
        ArregloEmpleados.push(emplo)
        toggleAdd()
    }

    function setNewEmpleado(value, name) {
        setEmplo((prevEmplo) => {
            return {
                ...prevEmplo,
                [name]: value
            }
        })
    }

    function setEditEmpleado(ignition, value, name) {
        editEmpleado = ArregloEmpleados.map(
            (empleado) => {
                if (empleado.Ignition === ignition) {
                    return ({
                        ...empleado,
                        [name]: value
                    })
                } else {
                    return empleado
                }
            }
        )

        setArregloEmpleados(editEmpleado)
    }

    function handleGuardarEmpleado(ignition) {
        handleEditable(ignition)
    }

    function handleEditable(ignition) {
        let nuevoArreglo = ArregloEmpleados.map(
            (empleado) => {
                if (empleado.Ignition === ignition && empleado.Editable === true) {
                    return ({
                        ...empleado,
                        Editable: false
                    }
                    )
                } else if (empleado.Ignition === ignition && empleado.Editable === false) {
                    return ({
                        ...empleado,
                        Editable: true
                    }
                    )
                } else {
                    return empleado
                }
            }
        )
        setArregloEmpleados(nuevoArreglo)
    }

    function handleDesactivar(ignition) {
        let nuevoArreglo = ArregloEmpleados.map(
            (empleado) => {
                if (empleado.Ignition === ignition) {
                    return ({
                        ...empleado,
                        Active: false
                    }
                    )
                } else {
                    return empleado
                }
            }
        )
        setArregloEmpleados(nuevoArreglo)
    }

    function handleActivar(ignition) {
        let nuevoArreglo = ArregloEmpleados.map(
            (empleado) => {
                if (empleado.Ignition === ignition) {
                    return ({
                        ...empleado,
                        Active: true
                    }
                    )
                } else {
                    return empleado
                }
            }
        )
        setArregloEmpleados(nuevoArreglo)
    }

    const handleChangeCat = (position) => {
        const updatedsearchParam = searchParam.map(({name,value},index) =>{
            if(index === position){
                return(
                {name:name ,
                value:!value}
            )
            }else{
                return(
                    {name,value}
                )
            }
            
        }

        );
        //console.log(updatedsearchParam)
        setSearchParam(updatedsearchParam);

        /*const selectedSearchParam= searchParam.filter((param)=>{
            return param.indexOf(name) > -1;
        })
        console.log(selectedSearchParam)
        if(updatedSearchParam.some((item)=>item===selectedSearchParam[0])){
            let index = updatedSearchParam.findIndex((param)=>param===selectedSearchParam[0])
            console.log(index)
            updatedSearchParam.splice(index,1)
        }else{
            updatedSearchParam.push(selectedSearchParam[0])
        }
        setSearchParam(updatedSearchParam)*/
    }

    return (
        <>
            <Nav />
            <h1>Empleados</h1>
            <nav className="nav-search">
                <FiltroDept setFiltroParam={setFiltroParam} />
                <FiltroCat checkedState={searchParam} handleOnChange={handleChangeCat} />
                <Search handleSearch={qSetter} />
            </nav>
            <button onClick={toggleAdd}>Agregar</button>
            {add && <AddEmployee add={handleAdd} addChange={setNewEmpleado} />}
            {handleSearch(ArregloEmpleados).map(emplo => {
                if (emplo.Editable === true) {
                    return <EditEmployee
                        key={emplo.Ignition}
                        data={emplo}
                        desactivar={handleDesactivar}
                        activar={handleActivar}
                        edit={setEditEmpleado}
                        guardarEmpleado={handleGuardarEmpleado}
                    />
                } else {
                    return <ShowEmployee
                        key={emplo.Ignition}
                        data={emplo}
                        desactivar={handleDesactivar}
                        activar={handleActivar}
                        handleEditar={handleEditable} />
                }

            }
            )}
        </>
    )
} 
