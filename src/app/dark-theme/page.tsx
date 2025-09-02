'use client'

import { useState } from "react"
import ToggleDark from "@/components/toogleDark"

export default function DarkTheme() {

    const [isDark, setIsDark] = useState(false)

    const handleToggleTheme = () => {
        setIsDark(isDark => !isDark)
    }

    return (

        <div className={` h-screen flex flex-col justify-center content-center items-center space-y-4 transition duration-75
        
            ${isDark ? 'bg-red-700 text-black' : 'bg-black text-red-700'}
        
        `}>

        <h2 className="font-bold">
            {isDark? 'Tema Claro' : 'Tema Escuro'}
        </h2>

        <ToggleDark 
        isDark={isDark}
        onToggle={handleToggleTheme}/>

        </div>

    )

}