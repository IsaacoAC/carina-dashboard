export default function ShowEmployee(props) {
    
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
        switch(props.data.CaveInstitucion){
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
            <table  className="show-table">
            <tbody>
            <tr>
                <th>Ignition:</th>
                <td>{props.data.Ignition}</td>
            </tr>
            <tr>
                <th>Nombre:</th>
                <td>{props.data.Nombre}</td>
            </tr>
            <tr>
                <th>Apellido P:</th>
                <td>{props.data.Apellido1}</td>
            </tr>
            <tr>
                <th>Apellido M:</th>
                <td>{props.data.Apellido2}</td>
            </tr>
            <tr>
                <th>CURP:</th>
                <td>{props.data.CURP}</td>
            </tr>
            <tr>
                <th>Puesto:</th>
                <td>{props.data.Puesto}</td>
            </tr>
            <tr>
                <th>Clave de Puesto DZ:</th>
                <td>{props.data.ClavePuestoDZ}</td>
            </tr>
            <tr>
                <th>Clave de Puesto STPS:</th>
                <td>{props.data.ClavePuestoSTPS}</td>
            </tr>
            <tr>
                <th>Departamento:</th>
                <td>{props.data.Departamento}</td>
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
            </tr>
            <tr>
                <th>Clave de Estudios:</th>
                <td>{selectEstudios()}</td>
            </tr>
            <tr>
                <th>Clave de Institucion:</th>
                <td>{selectInstitucion()}</td>
            </tr>
            <tr>
                <th>Fecha de Ingreso:</th>
                <td>{reverseDate()}</td>
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
                    <button className="btn-editar">EDITAR</button>
                    <button className="btn-eliminar">DESACTIVAR</button>
                </td>
                
                </tbody>
        </table>
        </div>
    )
}