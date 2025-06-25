import React from "react";
import Image from "next/image";
interface CardProps {
        icon: string;
        title: string;
        subtitle: string;
}

export default function CardCreator({title, subtitle, icon}: CardProps) {

    return (
    
    <div className="inline-flex ">


            <div className="bg-indigo-400 m-2.5 p-8 border-4 rounded-2xl text-left">
               
               <Image className="mb-5"
                src={icon}
                width={60}
                height={60}
                alt="imagem"
                />
                
                <h1 className="font-semibold">{title}</h1>
                
                <h2 className="font-normal">{subtitle}</h2>
            </div>
          
         
    </div>
    )

}