'use client'
import React from "react"
import dynamic from "next/dynamic"

const Map = dynamic(()=> import('@/components/Map'),
            {ssr:false})

export default function MapPage() {

    return (

        <div className="h-screen bg-blue-100 flex flex-col items-center">

        <h1 className="text-3xl font-bold caret-amber-500 mb-4 mt-3">Mapa com Leaflet</h1>

        <p className="mb-4">
            Clique nos marcadores para ver os detalhes dos locais!!
        </p>

        <Map />

        </div>

    )

}