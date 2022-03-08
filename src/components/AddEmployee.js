import AddCard from "./AddCard.js"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react"

export default function AddEmployee(props){

    const [startDate, setStartDate] = useState(new Date())
    const [emplo, setEmplo]=useState(
        {
            "Ignition": "",
            "Active": true,
            "Nombre": "",
            "Apellido1": "",
            "Apellido2": "",
            "CURP": "",
            "Puesto": "",
            "ClavePuestoDZ":"",
            "ClavePuestoSTPS": "",
            "Departamento": "",
            "ClaveEdoSTPS":"",
            "ClaveMnpoSTPS":"",
            "ClaveEstudiosSTPS":"",
            "ClaveDocProbSTPS":"",
            "ClaveInstitucion":"",
            "FechaIngreso":"",
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

    function handleChange(value,name){
        setEmplo((prevEmplo)=>{
            return {
                ...prevEmplo,
                [name]:value
            }
        })
        console.log(value,name)
    }

    return(
        <form className="form-add">
            <h2>Empleados</h2>
            <AddCard onChange={handleChange} field={"Nombre"} dbName={"Nombre"}/>
            <AddCard onChange={handleChange} field={"Primer Apellido"} dbName={"Apellido1"}/>
            <AddCard onChange={handleChange} field={"Segundo Apellido"} dbName={"Apellido2"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Departamento"} dbName={"Departamento"}/>
            <AddCard onChange={handleChange} field={"Ignition"} dbName={"Ignition"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"CURP"} dbName={"CURP"}/>
            <AddCard onChange={handleChange} field={"Clave de estado"} dbName={"ClaveEdoSTPS"}/>
            <AddCard onChange={handleChange} field={"Clave de municipio"} dbName={"ClaveMnpoSTPS"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Codigo de puesto DZ"} dbName={"ClavePuestoDZ"}/>
            <AddCard onChange={handleChange} field={"Nombre de Puesto"} dbName={"Puesto"}/>
            <AddCard onChange={handleChange} field={"Clave de ocupacion/puesto STPS"} dbName={"ClavePuestoSTPS"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Clave nivel de estudios"} dbName={"ClaveEstudiosSTPS"}/>
            <AddCard onChange={handleChange} field={"Clave DOC aprobatorio"} dbName={"ClaveDocProbSTPS"}/>
            <AddCard onChange={handleChange} field={"Clave institucion"} dbName={"ClaveInstitucion"}/>
            <br></br>
            {/* Buscar como agregar fehas a un formulario */
                <AddCard onChange={handleChange} field={"Fecha de ingreso"} dbName={"FechaIngreso"}/>}
            <button className="add-btn" onClick={(e)=>props.add(e,emplo)}>Agregar</button>
        </form>
    )
}