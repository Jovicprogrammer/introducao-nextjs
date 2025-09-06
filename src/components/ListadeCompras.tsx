'use client'
import { useState } from "react";

type CardProps = {
    index: number,
    item: string,
    adquirido: boolean,
}
export default function ListaDeCompras() {

    const items = [
        { 
            index: 1,
            item: 'Maçã',
            comprado: false
        },
        
        { 
            index: 2,
            item: 'Bolo',
            comprado: false
        },

        { 
            index: 3,
            item: 'Lâmpada',
            comprado: false
        },

        { 
            index: 4,
            item: 'Mingau',
            comprado: false
        },

        { 
            index: 5,
            item: 'Sal',
            comprado: false
        },

        { 
            index: 6,
            item: 'Pepsi Cola',
            comprado: false
        },

    ];

    const [ListaCompras, setListaCompras] = useState(items)

    function handleCheck(index: number) {
        const listaAtualizada = ListaCompras.map((item, i) => {
            if(i == index) {
                item.comprado = !item.comprado
                
                
                
            } return item
        })
        setListaCompras(listaAtualizada)
    } 


    return (

<div className="m-4 justify-items-center">
        
        <h2 className="font-bold pb-2">Lista de Compras</h2>
    
            <ul className="">
    
                {ListaCompras.map((item, index) => (
                            <li className="flex gap-2" key={index}>
                                <input onClick={() => handleCheck(index)} type="checkbox" />
    
                                <h2 className={item.comprado ?
                                "mx-2 line-through" : "mx-2"}>{item.item}
                                </h2>
    
                            </li>
    
                        ))}
    
    
            </ul>
</div>


    )


}