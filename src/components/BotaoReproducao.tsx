'use client'

import { useState } from "react";
import Image from "next/image";


export default function BotaoReproducao() {


    const [count, setCount] = useState(false);
    
    return (

        <div className="flex m-4 p-7 justify-center bg-blue-950 items-center gap-10">

        <Image onClick={() => {setCount(!count)}} className="cursor-pointer transition hover:not-focus:opacity-50
        
        
        " src={count ? '/pause.png' : '/play.png'} width={300} height={300} alt="image">
        
        </Image>

        </div>

    )

}

