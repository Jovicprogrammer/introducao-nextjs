
import React from "react"
import Navbar from "@/components/Navbar"

import Button from "@/components/Button"
import Card from "@/components/Card"
import CommentForm  from "@/components/CommentForm"
import CommentList from "@/components/CommentList"
import Counter from "@/components/Counter"


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

        <div className="bg-blue-100 ">

            <Navbar links={[
                {label:'Produtos', href:'products/'},
                {label:'Exemplo', href: 'server-example/'}
            ]}/>

        <div className="mt-4">

            <div className="text-center">
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

            <div>
                <Counter initial={0} />
            </div>

<div className="flex flex-wrap justify-center ">

    
         {items.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} category={item.category}></Card>
          ))}

</div>

        <div>
          <CommentForm />
          
        </div>
            

        </div>
        </div>

    )

}