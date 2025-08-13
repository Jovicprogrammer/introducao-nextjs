'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Lampada() {

    function trocarTudo() {
        
        if (apagado == '/apagada.png' && ligado == '/fogo.png') {

        setAceso('/acesa.png')
        setDesligado('/vento.png')

        } else {
        setAceso('/apagada.png')
        setDesligado('/fogo.png')
        }

    }

    const [apagado, setAceso] = useState('/apagada.png');
    const [ligado, setDesligado] = useState('/fogo.png');


    return (

        <div className="flex flex-row justify-center items-center m-22 bg-blue-100">

        <Image className="cursor-pointer hover:not-focus:opacity-70 h-81 w-60" onClick={() => {trocarTudo()}} src={ligado} width={400} height={100} alt="">
        </Image>

        <Image className="h-100 w-60" src={apagado} width={200} height={200} alt="">
        </Image>

        

        </div>

    )

}