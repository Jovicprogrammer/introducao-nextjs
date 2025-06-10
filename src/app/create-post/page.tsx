'use client'
import React from "react"
import { useState } from "react"
import axios from "axios"

type FormData = {
    title: string;
    body: string;
}

type ResponseData = {
    id: number; 
    title: string;
    body: string;
}

export default function CreatePostPage() {

    const [formData, setFormData] = useState<FormData>({title: "", body: ""})

    const [ResponseData, setResponseData] = useState<ResponseData | null>({id:0, title:'', body:''})
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }  


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

    const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts', formData,
            {headers: {"Content-Type":"application/json"}}
        ); setResponseData(data)
    } 

    return (

        <div className="flex items-center justify-center p-6">
            <div>
                <h1 className="text-2xl font-bold mt-4 mb-4">
                    Criar novo post
                </h1>

                <form onSubmit={handleSubmit}>

                    {/* titulo */}
                    <div>
                        <label className="block text-sm font-medium">Título</label>
                        <input type="text" className="mt-1 border rounded px-3 py-3 w-full"
                        name="title" value={formData.title} required onChange={handleChange}/>
                    </div>

                    {/* contenido */}
                    <div>
                        <label className="block text-sm font-medium mt-4">Conteúdo</label>
                        <textarea name="body" value={formData.body}  rows={5}
                        className="mt-1 border rounded px-3 py-2 w-full" onChange={handleChange}></textarea>
                    </div>

                    <button className="bg-indigo-500 text-white py-2 px-3 hover:bg-indigo-400 rounded cursor-pointer">
                        Publicar
                    </button>

                </form>

                {ResponseData && (
                    <div className="mt-6 border border-green-400 bg-emerald-600">
                        <p>Post criado com sucesso!</p>
                        <p>ID: {ResponseData.id}</p>
                        <p>Título: {ResponseData.title}</p>
                        <p>Conteúdo: {ResponseData.body}</p>
                    </div>
                )}

            </div>
        </div>

    )

}