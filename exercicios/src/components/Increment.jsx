import { useState } from "react"

export default function Incrementar(){
    const [contador, setContador] = useState(0)

    function aumentar(){
        setContador(contador + 1)
    }

    return(
        <>
            <p>{contador}</p>
            <button onClick={aumentar}>+</button>
        </>
    )
}