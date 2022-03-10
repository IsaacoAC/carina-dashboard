



export default function AddCard(props){

    function reverseDate(date){
        return date.split("/").reverse().join("/");
    }

    const Render= ()=>{
        if(props.field==="Clave nivel de estudios"){
            return(
                <>
                    <label className="add-label" htmlFor="add-data">
                    {props.field}
                    </label>
                    <select name={props.dbName} onChange={(e)=>props.onChange(e.target.value,e.target.name)}>
                        <option value={""}>Selecciona una opcion</option>
                        <option value={"3"}>3:Secundaria</option>
                        <option value={"4"}>4:Bachilleres</option>
                        <option value={"6"}>6:Licenciatura</option>
                        <option value={"8"}>8:Maestria</option>
                    </select>
                </>
            )
        }else if(props.field==="Clave institucion"){
            return(
                <>
                    <label className="add-label" htmlFor="add-data">
                    {props.field}
                    </label>
                    <select name={props.dbName} onChange={(e)=>props.onChange(e.target.value,e.target.name)}>
                        <option value={""}>Selecciona una opcion</option>
                        <option value={"1"}>1:Publica</option>
                        <option value={"2"}>2:Privada</option>
                        <option value={"3"}>3:Ninguna</option>
                        
                    </select>
                </>
            )
        }else if(props.field==="Departamento"){
            return(
                <>
                    <label className="add-label" htmlFor="add-data">
                    {props.field}
                    </label>
                    <select name={props.dbName} onChange={(e)=>props.onChange(e.target.value,e.target.name)}>
                        <option value={""}>Selecciona una opcion</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Mercadotecnia">Merchandising</option>
                        <option value="All Data">All Data</option>
                        <option value="Contact Center">Contact Center</option>
                        <option value="Finance">Finance</option>
                        <option value="IT">IT</option>
                    </select>
                </>
            )
        }else if(props.field==="Fecha de ingreso"){
            return(
                <>
                <label className="add-label" htmlFor="add-data">
                    {props.field}
                </label>
                <input
                    className="add-input"
                    type="date"
                    id="add-data"
                    name={props.dbName}
                    onChange={(e)=>props.onChange(reverseDate(e.target.value),e.target.name)}
                />
                </>
            )
        }else{
            return(
                <>
                <label className="add-label" htmlFor="add-data">
                    {props.field}
                </label>
                <input
                    className="add-input"
                    type="text"
                    id="add-data"
                    name={props.dbName}
                    onChange={(e)=>props.onChange(e.target.value,e.target.name)}
                />
                </>
            )
        }
        
    }

    return(
        <>
        {Render()}
        </>
    )
}