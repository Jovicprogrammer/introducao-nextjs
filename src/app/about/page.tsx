import React from "react"
import Navbar from "@/components/Navbar"

import Button from "@/components/Button"
import Card from "@/components/Card"

export default function About() {

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
                <Button label="I DREAM ABOUT SINKING"></Button>
                <Button label="NO QUESTIONS ASKED"></Button>
                <Button label="NATURAL CAUSES"></Button>
            </div>
<div className="flex">
    
                <Card title="QUADECA" description="Vanished from the real world, Quad take a journey through a destroyed world to find the meaning of life." imageUrl="/quadeca.png"></Card>
    
                <Card title="THE GREAT BAKUNAWA" description="The legendary monster serpent that eats the moon and brings the eclipse. Look out." imageUrl="/bakunawa.png"></Card>

                <Card title="DEATH" description="With their mysterious boat and funeral grim, DEATH comes with your time." imageUrl="/barqueiro.png"></Card>
</div>

        </div>
        </div>

    )

}