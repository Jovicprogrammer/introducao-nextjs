'use client'

import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function Map() {

    return (

        <MapContainer
        center={[-35.2975906, 149.1012676]}
        zoom={10}
        scrollWheelZoom={false}
        minZoom={10}
        className="w-full h-[400px] "
        

        >

        <Marker position={[-35.2975906, 149.1012676]}>
      <Popup>
        aqui fica Canberra!
      </Popup>
    </Marker>
        

        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        </MapContainer>

    )

}