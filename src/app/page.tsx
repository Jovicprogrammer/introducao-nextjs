import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import CardCreator from "@/components/CardCreator";
import MiniDisplay from "@/components/Mini-Display";


export default function Home() {

  return (

    <div className="bg-blue-200 h-screen">

      <Navbar links={

        [
        {label:'Produtos', href:'products/'}
        ]
      
      }/>


      <div className="place-content-center">

        <MiniDisplay />

        {/* <h1 className="text-center text-4xl m-5">Principais Notícias</h1>

        <CardCreator
         icon='https://www.svgrepo.com/show/369457/nextjs.svg' title='Novo NEXT EM BREVE' subtitle='e o que depois??'
      />

        <CardCreator icon='https://www.svgrepo.com/show/493162/hacker.svg' title='Max Headroom invade a TV(?)' subtitle= 'hacker usa de canais de Chicago para criticar politicos.'
         />

        <CardCreator icon='https://www.svgrepo.com/show/11060/television.svg' title='Japoneses descobrem dia do fim do mundo' subtitle='A Terra será inabitável daqui a bilhões de anos.'
        /> */}

      </div>

      {/* <div className="flex justify-center"> 
        <PlaceForm lat={-3333} lng={333302}/>
      </div> */}

    </div>
    
  );
}
