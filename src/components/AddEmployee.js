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
            "Departamento": "",
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
        if(name==="Primer-Apellido"){
            name="Apellido1"
        }
        if(name==="Segundo-Apellido"){
            name="Apellido2"
        }
        setEmplo((prevEmplo)=>{
            return {
                ...prevEmplo,
                [name]:value
            }
        })
    }

    return(
        <form className="form-add">
            <h2>Empleados</h2>
            <AddCard onChange={handleChange} field={"Nombre"}/>
            <AddCard onChange={handleChange} field={"Primer Apellido"}/>
            <AddCard onChange={handleChange} field={"Segundo Apellido"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"CURP"}/>
            <AddCard onChange={handleChange} field={"Clave de estado"}/>
            <AddCard onChange={handleChange} field={"Clave de municipio"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Codigo de puesto"}/>
            <AddCard onChange={handleChange} field={"Puesto"}/>
            <AddCard onChange={handleChange} field={"Clave de ocupacion/puesto"}/>
            <br></br>
            <AddCard onChange={handleChange} field={"Clave nivel de estudios"}/>
            <AddCard onChange={handleChange} field={"Clave DOC aprobatorio"}/>
            <AddCard onChange={handleChange} field={"Clave institucion"}/>
            <br></br>
            <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)}
            />
            <button className="add-btn" onClick={(e)=>props.add(e,emplo)}>Agregar</button>
        </form>
    )
}