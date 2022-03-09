import AddCard from "./AddCard.js"
import { useState } from "react"

export default function AddEmployee(props){

    function handleChange(value,name){
        props.addChange(value,name)
    }

    return(
        <form onSubmit={(e)=>props.add(e)} className="form-add">
            <h2>Empleados</h2>
            <AddCard onChange={handleChange} field={"Nombre"} dbName={"Nombre"}/>
            <AddCard onChange={handleChange} field={"Primer Apellido"} dbName={"Apellido1"}/>
            <AddCard onChange={handleChange} field={"Segundo Apellido"} dbName={"Apellido2"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Departamento"} dbName={"Departamento"}/>
            <AddCard onChange={handleChange} field={"Ignition"} dbName={"Ignition"}/>
            <AddCard onChange={handleChange} field={"CURP"} dbName={"CURP"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Codigo de puesto DZ"} dbName={"ClavePuestoDZ"}/>
            <AddCard onChange={handleChange} field={"Nombre de Puesto"} dbName={"Puesto"}/>
            <AddCard onChange={handleChange} field={"Clave de ocupacion/puesto STPS"} dbName={"ClavePuestoSTPS"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Clave nivel de estudios"} dbName={"ClaveEstudiosSTPS"}/>
            <AddCard onChange={handleChange} field={"Clave DOC aprobatorio"} dbName={"ClaveDocProbSTPS"}/>
            <AddCard onChange={handleChange} field={"Clave institucion"} dbName={"ClaveInstitucion"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Fecha de ingreso"} dbName={"FechaIngreso"}/>
            <button type="submit" className="add-btn">Agregar</button>
        </form>
    )
}