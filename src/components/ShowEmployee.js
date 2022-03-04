export default function ShowEmployee(props) {
    return (
        <>
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
                <th>Departamento:</th>
                <td>{props.data.Departamento}</td>
            </tr>
            <tr>
                <th>Soft Skills:</th>
                <td>{props.data.SoftSkills.map((soft)=> <tr> {soft? "-" : ""} {soft}</tr>)}</td>
            </tr>
            <tr>
                <th>Hard Skills:</th>
                <td>{props.data.HardSkills.map((hard)=> <tr>{hard? "-" : ""} {hard}</tr>)}</td>
            </tr>
            <tr>
                <th>Cursos:</th>
                <td>{props.data.Cursos.map((curso)=> <tr>{curso? "-" : ""} {curso}</tr>)}</td>
            </tr>
            <tr>
                <th>Reembolsos:</th>
                <td>{props.data.Reembolsos.map((r)=> <tr>{r? "-" : ""} {r}</tr>)}</td>
            </tr>
            </tbody>
        </table>
            
        
        </>
    )
}