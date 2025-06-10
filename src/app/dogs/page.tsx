'use client'

import React from "react";
import { useState, useEffect } from "react"
import Image from "next/image";

type Dog = {
  message: string
}

export default function PostPage() {
  const [dog, setDog] = useState<Dog | null>(null)

  const fetchDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
    setDog(data)
  }

  useEffect(() => {
    fetchDog()
  }, [])

  return (
    <div className="bg-violet-400 min-h-screen p-6 flex flex-col items-center ">
      <h1 className="text-3xl font-bold mb-6 text-center">Um Cão Aleatório 🐶</h1>

      {dog ? (
        <div className="bg-indigo-400 shadow-lg p-4 m-4 rounded justify-center items-center">
          <Image 
            src={dog.message}
            alt="Cachorro aleatório"
            height={250}
            width={250}
            className="justify-items-center"
          />
        </div>
      ) : (
        <p>Carregando post...</p>
      )}

      <div>
        <button className="bg-indigo-500 text-white py-2 px-3 hover:bg-indigo-400 rounded cursor-pointer transition" onClick={fetchDog}>Novo cão</button>
      </div>
    </div>
    
  )
}