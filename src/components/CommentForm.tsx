'use client'
import { useState } from "react"
import CommentList from "./CommentList";


export default function CommentForm() {

  return (
    <div className="m-4 justify-center">
      <form className="bg-blue-950 flex flex-col max-w-sm p-4 space-y-3 rounded text-white">
        <label htmlFor="name">Nome</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="insira seu nome" 
          className="border-3 border-amber-200" 
        />

        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message" 
          id="message" 
          placeholder="insira sua mensagem" 
          className="border-3 border-amber-200" 
        />

        <button type="submit" className="cursor-pointer bg-amber-200 text-blue-950 hover:font-bold hover:text-amber-200 hover:bg-transparent transition rounded">
          Enviar
        </button>
      </form>

    </div>
  );
}