export default function EditEmployee(props) {
    
    function selectEstudios() {
        switch(props.data.ClaveEstudiosSTPS){
            case "3":
                return "3: Secundaria";
            case "4":
                return "4: Bachilleres";
            case "6":
                return "6: Licenciatura";
            case "8":
                return "8: Maestria";
            default:
                return "No se ha seleccionado";
        }
    }

    function selectInstitucion(){
        switch(props.data.ClaveInstitucion){
            case "1":
                return "1: Publica";
            case "2":
                return "2: Privada";
            case "3":
                return "3: Ninguna";
            default:
                return "No se ha seleccionado"
        }
    }

    function reverseDate(){
        const str = props.data.FechaIngreso
        return str.split("/").reverse().join("/");
    }

    return (
        <div className="contenedor-tabla">
            <table  className={props.data.Active? "show-table":"show-inactive-table"}>
            
            <tbody >
            <tr>
                <th>Ignition:</th>
                <td>{props.data.Ignition}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="Ignition" 
                type="text"
                placeholder={props.data.Ignition} ></input></td>
            </tr>
            <tr>
                <th>Nombre:</th>
                <td>{props.data.Nombre}</td>
                <td><input
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="Nombre" 
                type="text" placeholder={props.data.Nombre} ></input></td>
            </tr>
            <tr>
                <th>Apellido P:</th>
                <td>{props.data.Apellido1}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="Apellido1" 
                type="text" placeholder={props.data.Apellido1} ></input></td>
            </tr>
            <tr>
                <th>Apellido M:</th>
                <td>{props.data.Apellido2}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="Apellido2" 
                type="text" placeholder={props.data.Apellido2} ></input></td>
            </tr>
            <tr>
                <th>CURP:</th>
                <td>{props.data.CURP}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="CURP" 
                type="text" placeholder={props.data.CURP} ></input></td>
            </tr>
            <tr>
                <th>Puesto:</th>
                <td>{props.data.Puesto}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="Puesto" 
                type="text" placeholder={props.data.Puesto} ></input></td>
            </tr>
            <tr>
                <th>Clave de Puesto DZ:</th>
                <td>{props.data.ClavePuestoDZ}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="ClavePuestoDZ" 
                type="text" placeholder={props.data.ClavePuestoDZ} ></input></td>
            </tr>
            <tr>
                <th>Clave de Puesto STPS:</th>
                <td>{props.data.ClavePuestoSTPS}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="ClavePuestoSTPS" 
                type="text" placeholder={props.data.ClavePuestoSTPS} ></input></td>
            </tr>
            <tr>
                <th>Departamento:</th>
                <td>{props.data.Departamento}</td>
                <td><select
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="Departamento" 
                >
                        <option selected={props.data.Departamento===""?true:false} value={""}>Selecciona una opcion</option>
                        <option selected={props.data.Departamento==="Recursos Humanos"?true:false} value={"Recursos Humanos"}>Recursos Humanos</option>
                        <option selected={props.data.Departamento==="Mercadotecnia"?true:false} value={"Mercadotecnia"}>Mercadotecnia</option>
                        <option selected={props.data.Departamento==="All Data"?true:false} value={"All Data"}>All Data</option>
                        <option selected={props.data.Departamento==="Contact Center"?true:false} value={"Contact Center"}>Contact Center</option>
                        <option selected={props.data.Departamento==="Finance"?true:false} value={"Finance"}>Finance</option>
                        <option selected={props.data.Departamento==="IT"?true:false} value={"IT"}>IT</option>
                    </select></td>
            </tr>
            <tr>
                <th>Clave de Estado STPS:</th>
                <td>{props.data.ClaveEdoSTPS}</td>
            </tr>
            <tr>
                <th>Clave de Municipio STPS:</th>
                <td>{props.data.ClaveMnpoSTPS}</td>
            </tr>
            <tr>
                <th>Clave de Documento Probatorio STPS:</th>
                <td>{props.data.ClaveDocProbSTPS}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="ClaveDocProbSTPS" 
                type="text" placeholder={props.data.ClaveDocProbSTPS} ></input></td>
            </tr>
            <tr>
                <th>Clave de Estudios:</th>
                <td>{selectEstudios()}</td>
                <td><select
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="ClaveEstudiosSTPS" 
                >
                        <option selected={props.data.ClaveEstudiosSTPS===""?true:false} value={""}>Selecciona una opcion</option>
                        <option selected={props.data.ClaveEstudiosSTPS==="3"?true:false} value={"3"}>3:Secundaria</option>
                        <option selected={props.data.ClaveEstudiosSTPS==="4"?true:false} value={"4"}>4:Bachilleres</option>
                        <option selected={props.data.ClaveEstudiosSTPS==="6"?true:false} value={"6"}>6:Licenciatura</option>
                        <option selected={props.data.ClaveEstudiosSTPS==="8"?true:false} value={"8"}>8:Maestria</option>
                    </select></td>
            </tr>
            <tr>
                <th>Clave de Institucion:</th>
                <td>{selectInstitucion()}</td>
                <td><select
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="ClaveInstitucion" 
                >
                        <option selected={props.data.ClaveInstitucion===""?true:false} value={""}>Selecciona una opcion</option>
                        <option selected={props.data.ClaveInstitucion==="1"?true:false} value={"1"}>1:Publica</option>
                        <option selected={props.data.ClaveInstitucion==="2"?true:false} value={"2"}>2:Privada</option>
                        <option selected={props.data.ClaveInstitucion==="3"?true:false} value={"3"}>3:Ninguna</option>
                    </select></td>
            </tr>
            <tr>
                <th>Fecha de Ingreso:</th>
                <td>{reverseDate()}</td>
                <td><input 
                onChange={(e)=>props.edit(props.data.Ignition,e.target.value,e.target.name)} 
                name="FechaIngreso" 
                type="date" placeholder={reverseDate()} ></input></td>
            </tr>
            <tr>
                <th>Soft Skills:</th>
                <td>{props.data.SoftSkills.map((soft)=> <tr> {soft? soft:"-"}</tr>)}</td>
            </tr>
            <tr>
                <th>Hard Skills:</th>
                <td>{props.data.HardSkills.map((hard)=> <tr> {hard? hard:"-"}</tr>)}</td>
            </tr>
            <tr>
                <th>Cursos:</th>
                <td>{props.data.Cursos.map((curso)=> <tr> {curso? curso:"-"}</tr>)}</td>
            </tr>
            <tr>
                <th>Reembolsos:</th>
                <td>{props.data.Reembolsos.map((r)=> <tr> {r? r:"-"}</tr>)}</td>
            </tr>
            <th>Acciones:</th>
                <td>
                    <button onClick={()=>props.guardarEmpleado(props.data.Ignition)} className="btn-editar">GUARDAR</button>
                    {props.data.Active? <button onClick={()=>props.desactivar(props.data.Ignition)} className="btn-eliminar">DESACTIVAR</button>:
                    <button onClick={()=>props.activar(props.data.Ignition)} className="btn-activar">ACTIVAR</button>}
                </td>
                
                </tbody>
        </table>
        </div>
    )
}