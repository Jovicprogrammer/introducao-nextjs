'use client'

import React from "react";
import { useState, useEffect } from "react"

type Post = {

    id: number;
    title: string;
    body: string;

}

export default function PostsPage () {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {

        const fetchPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data = await res.json();
            setPosts(data)

        }
        fetchPosts(); 
    }, [])

    return (

        <div className="bg-violet-400 min-h-screen">
        
            
            <h1 className="text-3x1 font-bold mb-6">Últimos Posts</h1>

            {posts.map((post) => (
                <div key={post.id} className="bg-indigo-400 shadow-indigo-900 p-4 m-4 rounded">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}



        
        </div>

    )

}