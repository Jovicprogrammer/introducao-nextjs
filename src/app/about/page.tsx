import React from "react"
import Navbar from "@/components/Navbar"

import Button from "@/components/Button"
import Card from "@/components/Card"

export default function About() {

     const items = [
        { title: 'QUADECA',
            description: 'Vanished from the real world, Quad take a journey through a destroyed world to find the meaning of life.',
            imageUrl: '/quadeca.png',
            category: 'Humano'},
        
        { title: 'THE GREAT BAKUNAWA',
            description: 'The legendary monster serpent that eats the moon and brings the eclipse. Look out.', imageUrl: '/bakunawa.png',
            category: 'Monstro'},

        { title: 'DEATH',
            description: 'With their mysterious boat and funeral grim, DEATH comes with your time.',
            imageUrl: '/barqueiro.png',
            category: 'Monstro'},

        { title: 'THE SHIP',
            description: 'Discover new worlds with this grand construction.',
            imageUrl: '/ship.png',
            category: 'Objeto'},

        { title: 'LIGHTHOUSE',
            description: 'The light the sailors need to not get lost.',
            imageUrl: '/lighthouse.png',
            category: 'Lugar'},

        { title: 'THE OCEAN',
            description: 'The enourmous body of water that hides all kinds of danger',
            imageUrl: '/ocean.png',
            category: 'Lugar'},


      ];

    return (

        <div>

            <Navbar links={[
                {label:'Produtos', href:'products/'},
                {label:'Exemplo', href: 'server-example/'}
            ]}/>

        <div className="mt-4">
            <h1>Sobre a gente</h1>
            <p>
                nossa história começa lá em 2020, auge da infame pandemia que alastrou o mundo inteiro... que jeito de dar o pontapé inicial! Mas você sabe o que dizem: camarão que dorme a corrente leva, então estudamos a melhor forma de começar a ativa de forma sensível e efetiva.
            </p>
            <div>
                <Button label="THUNDRRR"/>
                <Button label="GODSTAINED"></Button>
                <Button label="MONDAY"></Button>
                <Button label="THE GREAT BAKUNAWA"></Button>
                <Button label="WAGING WAR"></Button>
                <Button label="DANCING WITHOUT MOVING"></Button>
                <Button label="FORGONE"></Button>
                <Button label="NO QUESTIONS ASKED"></Button>
                <Button label="NATURAL CAUSES"></Button>
                <Button label="CASPER"></Button>
            </div>
<div className="flex flex-wrap justify-center ">
    
         {items.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} category={item.category}></Card>
          ))}

</div>

            
           
            

        </div>
        </div>

    )

}