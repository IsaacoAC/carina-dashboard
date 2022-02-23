import image from "../images/datazone-logo.png"


export default function Nav() {
    return (
        <>
        
        <nav className="menu">
            <img className="nav-logo" src={image}></img>
            <ul className="menu-items">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Empleados</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Reembolsos</a></li>
                <li><a href="#">Puestos</a></li>
                <li><a href="#">Reportes</a></li>
            </ul>
            <button className="nav-button">Iniciar</button>
        </nav>
        </>
    )
}