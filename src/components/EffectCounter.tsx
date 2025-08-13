'use client'

import { useEffect, useState } from "react"
import { useSVGOverlay } from "react-leaflet/SVGOverlay"

export default function EffectCounter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        alert('ativou o effect!')
        document.title = `the horizon SCRAPER ${count}`
    }, [count])

    return (

        <div className="text-center p-10">
        
        <h1 className="bg-blue-950 text-amber-200 text-center p-4 m-3"> Contagem: {count} </h1>

        <div className="flex gap-3 justify-center">
            <button className="bg-amber-200 text-blue-950 p-3 self-center cursor-pointer hover:bg-transparent hover:font-bold transition" onClick={() => {setCount(count + 1)}}> Incrementar </button>
            <button className="bg-indigo-300 text-blue-950 p-3 self-center cursor-pointer hover:bg-transparent hover:font-bold transition" onClick={() => {setCount((0))}}> Resetar </button>
        </div>


        </div>

    )

}