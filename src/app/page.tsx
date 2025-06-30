import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import CardCreator from "@/components/CardCreator";
import PlaceForm from "@/components/PlaceForm";

export default function Home() {

  return (

    <div>

      <Navbar links={

        [
        {label:'Produtos', href:'products/'}
        ]
      
      }/>

      <Welcome/>

      <div className="place-content-center">

        <h1 className="text-center text-4xl m-5">Principais Notícias</h1>

        <CardCreator
         icon='https://www.svgrepo.com/show/369457/nextjs.svg' title='Novo NEXT EM BREVE' subtitle='e o que depois??'
      />

        <CardCreator icon='https://www.svgrepo.com/show/493162/hacker.svg' title='Max Headroom invade a TV(?)' subtitle= 'hacker usa de canais de Chicago para criticar politicos.'
         />

        <CardCreator icon='https://www.svgrepo.com/show/11060/television.svg' title='Japoneses descobrem dia do fim do mundo' subtitle='A Terra será inabitável daqui a bilhões de anos.'
        />

      </div>

      <div className="flex justify-center"> 
        <PlaceForm />
      </div>

    </div>
    
  );
}
