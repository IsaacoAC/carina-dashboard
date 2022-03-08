



export default function AddCard(props){

    const newName = props.field.replace(/ /g,"-")

    const Render= ()=>{
        if(props.field==="Clave nivel de estudios"){
            
        }
        return(
            <>
            <label className="add-label" htmlFor="add-data">
                {props.field}
            </label>
            <input
                className="add-input"
                type="text"
                id="add-data"
                name={newName}
                onChange={(e)=>props.onChange(e.target.value,e.target.name)}
            />
            </>
        )
    }

    return(
        <>
        {Render()}
        </>
    )
}