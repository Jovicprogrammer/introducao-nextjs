'use client'

import React from "react";
import { useState, useEffect } from "react"
import Image from "next/image";

type Pony = {
  name: string;
  image: string;
  occupation: string;

}

export default function PostPage() {
  const [pony, setPony] = useState<Pony | null>(null)

  const fetchPony = async () => {
    try {
      const res = await fetch("http://ponyapi.net/v1/")
      const data = await res.json()
      setPony(data)
    } catch (error) {
      console.error("Error fetching pony:", error)
    }
  }

  useEffect(() => {
    fetchPony()
  }, [])

  return (
    <div className="bg-violet-400 min-h-screen p-6 flex flex-col items-center ">
      <h1 className="text-3xl font-bold mb-6 text-center">{pony?.name}</h1>

      {pony ? (
        <div className="bg-indigo-400 shadow-lg p-4 m-4 rounded justify-center items-center">
          <Image 
            src={pony.image}
            alt="Cachorro aleatório"
            height={250}
            width={250}
            className="justify-items-center"
          />
          <h2>ocupação:{pony.occupation}</h2>
        </div>
      ) : (
        <p>Carregando post...</p>
      )}

      <div>
        <button className="bg-indigo-500 text-white py-2 px-3 hover:bg-indigo-400 rounded cursor-pointer transition" onClick={fetchPony}>Novo pônei</button>
      </div>
    </div>
    
  )
}