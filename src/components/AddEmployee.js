import AddCard from "./AddCard.js"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react"

export default function AddEmployee(){

    const [startDate, setStartDate] = useState(new Date())

    return(
        <form className="form-add">
            <h2>Empleados</h2>
            <AddCard field={"Nombre"}/>
            <AddCard field={"Primer Apellido"}/>
            <AddCard field={"Segundo Apellido"}/>
            <br></br>
            <AddCard field={"CURP"}/>
            <AddCard field={"Clave de estado"}/>
            <AddCard field={"Clave de municipio"}/>
            <br></br>
            <AddCard field={"Codigo de puesto"}/>
            <AddCard field={"Puesto"}/>
            <AddCard field={"Clave de ocupacion/puesto"}/>
            <br></br>
            <AddCard field={"Clave nivel de estudios"}/>
            <AddCard field={"Clave DOC aprobatorio"}/>
            <AddCard field={"Clave institucion"}/>
            <br></br>
            <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)}
            />
            <button className="add-btn">Agregar</button>
        </form>
    )
}