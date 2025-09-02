'use client'
import { set } from "zod/v4-mini"
import PostCard from "./PostCard"
import { useState } from "react"
import { count } from "console"

interface Post {
  id: number
  autor: string
  conteudo: string
  likes: number
}

export default function FeedPage() {

    const initialPosts: Post[] = [

        {
        id: 0,
        autor: 'Addison',
        conteudo: 'Lifes no fun through clear waters...',
        likes: 0
        },

        {
        id: 1,
        autor: 'PinkPantheress',
        conteudo: 'my name is pink and im really glad to meet u',
        likes: 0
        },

        {
        id: 2,
        autor: 'Joey Valence',
        conteudo: 'jvb suckaaaaaa!!',
        likes: 0
        },

        {
        id: 3,
        autor: 'Joji',
        conteudo: 'give me reasons we should be complete...',
        likes: 0
        },

        {
        id: 4,
        autor: 'Quadeca',
        conteudo: 'Ill be there when no one is',
        likes: 0
        },

        {
        id: 5,
        autor: 'Arca',
        conteudo: 'Hay un abismo dentro de mi',
        likes: 0
        },

        {
        id: 6,
        autor: 'FKA Twigs',
        conteudo: 'inside my head i have the best time',
        likes: 0
        },

        {
        id: 7,
        autor: 'Brae',
        conteudo: 'if you give me you beyblade ill let it rip',
        likes: 0
        },

        {
        id: 8,
        autor: 'Caroline Polachek',
        conteudo: 'i dont know but i believe well have another day together',
        likes: 0
        }

    ]

    const [posts, setPosts] = useState<Post[]>(initialPosts)

    const handleLikeCount = (postId: number) => {
  setPosts(prevPosts => 
    prevPosts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 } 
        : post
    )
  )
}

    return (

       <div>
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          id={post.id} 
          autor={post.autor} 
          conteudo={post.conteudo} 
          likes={post.likes} 
          onClick={() => handleLikeCount(post.id)} // Passa a função com o id específico
        />
      ))}
    </div>


    );
    }






    











  
    




