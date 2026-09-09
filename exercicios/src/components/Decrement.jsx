import { useState } from "react"

export default function Decrementar(){
    const [contador, setContador] = useState(0)

    function diminuir(){
        setContador(contador - 1)
    }

    return(
        <>
            <p>{contador}</p>
            <button onClick={diminuir}>-</button>
        </>
    )
}