'use client'
import { useState } from "react"

export default function MiniDisplay() {

    const [display, setDisplay] = useState('')

    function MoreMais() {

        if (display.length > 19) {
            setDisplay(display.slice(0, -1))
        }
        else {
            return
        }
        
    }
        MoreMais()

    function sumDisplay() {
        const values = display.split('+')
        
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
            0
        )

        setDisplay(String(result))

    }

    function minDisplay() {
        const values = display.split('-')
        
        const numberValues = values.map((value) => Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora - valorAtual
        )

        setDisplay(String(result))

    }

    function multiDisplay() {
        const values = display.split('x')
        
        const numberValues = values.map((value) => Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora * valorAtual
        )

        setDisplay(String(result))

    }

    function divDisplay() {
         const values = display.split('÷')
        
        const numberValues = values.map((value) => Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora / valorAtual)

        setDisplay(String(result))
    }

    function Calculate() {
        if(display.includes('+'))
        {
            sumDisplay()
        }

        if(display.includes('-'))
        {
            minDisplay()
        }
        
        if(display.includes('x'))
        {
            multiDisplay()
        }
        if(display.includes('÷'))
        {
            divDisplay()
        }
        
    }

    return (

        <div className=" flex flex-col items-center mt-10 p-10 ">

            {/* display 0-0 */}
            <div className="flex items-center justify-center border border-blue-950 p-4 w-70 h-20 text-2xl text-center rounded overflow-x-auto "> 
            {display}
            </div>

            {/* teclado +_+ */}

            <div className="mt-5 mb-20 grid grid-cols-4 gap-2 w-70 h-70 ">
                
                <button onClick={() => {setDisplay(display + '1')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">1</button>
                <button onClick={() => {setDisplay(display + '2')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">2</button>
                <button onClick={() => {setDisplay(display + '3')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">3</button>

                
                <button onClick={() => {(setDisplay(''))}} className="bg-amber-200 p-2 rounded active:bg-amber-500 transition cursor-pointer hover:bg-amber-100 ">C</button>

                <button onClick={() => {setDisplay(display + '4')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">4</button>
                <button onClick={() => {setDisplay(display + '5')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">5</button>
                <button onClick={() => {setDisplay(display + '6')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">6</button>

                
                <button onClick={() => {(setDisplay(display.slice(0, -1)))}} className="bg-amber-200 p-2 rounded active:bg-amber-500 transition cursor-pointer hover:bg-amber-100">⌫</button>

                <button onClick={() => {setDisplay(display + '7')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">7</button>
                <button onClick={() => {setDisplay(display + '8')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">8</button>
                <button onClick={() => {setDisplay(display + '9')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded cursor-pointer transition hover:bg-blue-400">9</button>

                <button onClick={() => {(setDisplay(display + '+'))}} className="bg-amber-600 p-2 rounded active:bg-amber-700 transition cursor-pointer hover:bg-amber-400">+</button>


                <button onClick={() => {setDisplay(display + '0')}} className="bg-blue-500 p-2 rounded transition active:bg-blue-900 cursor-pointer hover:bg-blue-400">0</button>


                 <button onClick={() => {(setDisplay(display + '-'))}} className="bg-amber-600 p-2 rounded active:bg-amber-700 transition cursor-pointer hover:bg-amber-400">-</button>

                 <button onClick={() => {(setDisplay(display + 'x'))}} className="bg-amber-600 p-2 rounded active:bg-amber-700 transition cursor-pointer hover:bg-amber-400">x</button>

                 <button onClick={() => {(setDisplay(display + '÷'))}} className="bg-amber-600 p-2 rounded active:bg-amber-700 transition cursor-pointer hover:bg-amber-400">÷</button>

                 {/* igualdade = */}
                <button onClick={() => {Calculate()}} className="bg-indigo-400 p-2 rounded active:bg-indigo-700 transition cursor-pointer hover:bg-indigo-300 col-span-4">=</button>
            </div>

        </div>

    )


}