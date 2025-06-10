'use client'

import React from "react";
import { useState, useEffect } from "react"
import Image from "next/image";

type Dog = {
  message: string
}

export default function PostPage() {
  const [dog, setDog] = useState<Dog | null>(null)

  useEffect(() => {
    const fetchDog = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await res.json()
      setDog(data)

    }
    fetchDog()
  }, [])

  return (
    <div className="bg-violet-400 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Post do Dia</h1>

      {dog ? (
        <div className="bg-indigo-400 shadow-lg p-4 m-4 rounded">
          <Image src={dog.message}
                    alt="nextjs logo "
                    height={400}
                    width={400}
                    className=" "
                    />
        </div>
      ) : (
        <p>Carregando post...</p>
      )}
    </div>
  )


}
