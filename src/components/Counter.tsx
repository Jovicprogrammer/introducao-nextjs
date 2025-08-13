'use client'
import { useState } from "react"

type countProps = {
    initial: number

}

export default function Counter(props: countProps) { 

    const [count, setCount] = useState(props.initial);

    return (
        
        <div className="flex flex-col justify-center">
        
        <h1 className="bg-blue-950 text-amber-200 text-center p-4 m-3">Contagem: {count}</h1>
        
        <div className="flex gap-3 justify-center mt-2 mb-4">
            
            <button onClick={() => setCount(count+1)}
             className="bg-amber-200 text-blue-950 p-3 self-center cursor-pointer hover:bg-transparent hover:font-bold transition">Incrementar</button>
             <button onClick={() => setCount(count-1)}
             className="bg-amber-200 text-blue-950 p-3 self-center cursor-pointer hover:bg-transparent hover:font-bold transition">Decrementar</button>
        </div>

        </div>

    )

}