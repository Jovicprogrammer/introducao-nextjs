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
            comprado: true
        },

        { 
            index: 4,
            item: 'Mingau',
            comprado: true
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
                return item
                
                
            }
        })
    } 

    

    const MyItem = function({index, item, adquirido}: CardProps){
        return (
            <div className="flex items-center justify-between space-y-2 max-w-[200px]">

                <li key={index} className={`flex items-center
        space-x-2 p-2 rounded-md
        
        bg-gray-50 hover:bg-gray-100
        ${adquirido ?  
            "line-through" : 
            "no-underline"}
        `}>
            <span>{item}</span>
            </li>
        
            <button className="bg-black text-white p-2 hover:bg-white hover:text-black hover:font-bold transition" onClick={() => handleCheck((index))} > 
            <span>{adquirido ? 'Desmarcar' : 'Marcar' }</span>
                </button>

            </div>
        )
    }




    return (


        <ul>
            {items.map((item) => (
                        <MyItem key={item.index} index={item.index} item={item.item} adquirido={item.comprado}></MyItem>
                        
                    ))}

                    
        </ul>


    )


}