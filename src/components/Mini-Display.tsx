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

    return (

        <div className=" flex flex-col items-center mt-10 p-10 ">

            {/* display 0-0 */}
            <div className="flex items-center justify-center border border-blue-950 p-4 w-60 h-15 text-2xl text-center rounded overflow-hidden bg-blue-100"> 
            {display}
            </div>

            {/* teclado +_+ */}

            <div className="mt-5 mb-20 grid grid-cols-3 gap-2 w-50 h-60 ">
                
                <button onClick={() => {setDisplay(display + '1')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">1</button>
                <button onClick={() => {setDisplay(display + '2')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">2</button>
                <button onClick={() => {setDisplay(display + '3')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">3</button>
                <button onClick={() => {setDisplay(display + '4')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">4</button>
                <button onClick={() => {setDisplay(display + '5')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">5</button>
                <button onClick={() => {setDisplay(display + '6')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">6</button>
                <button onClick={() => {setDisplay(display + '7')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">7</button>
                <button onClick={() => {setDisplay(display + '8')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded transition cursor-pointer hover:bg-blue-400">8</button>
                <button onClick={() => {setDisplay(display + '9')}} className="bg-blue-500 p-2 active:bg-blue-900 rounded cursor-pointer transition hover:bg-blue-400">9</button>
                <button onClick={() => {(setDisplay(display.slice(0, -1)))}} className="bg-amber-200 p-2 rounded active:bg-amber-500 transition cursor-pointer hover:bg-amber-100">⌫</button>
                <button onClick={() => {setDisplay(display + '0')}} className="bg-blue-500 p-2 rounded transition active:bg-blue-900 cursor-pointer hover:bg-blue-400">0</button>
                <button onClick={() => {(setDisplay(''))}} className="bg-amber-200 p-2 rounded active:bg-amber-500 transition cursor-pointer hover:bg-amber-100 ">Apagar</button>
            </div>

        </div>

    )


}