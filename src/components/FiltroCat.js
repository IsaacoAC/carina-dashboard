import React from "react"

export default function FiltroCat(props) {

    return (
        <>
            <div className="cat-check">
                <h3 className="cat-title">Categorias de Busqueda</h3>
                <ul className="cat-list">
                    {props.checkedState.map(({name,value},index) => {
                        return (
                            <li key={index}>
                                <div className=" li-cat">
                                    <div className="">
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                        <input
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={name}
                                            value={name}
                                            checked={value}
                                            onChange={() => props.handleOnChange(index)}
                                        />
                                        
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}