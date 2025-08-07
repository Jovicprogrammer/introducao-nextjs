'use client'

import { useState } from "react";
import Image from "next/image";

type likeProps = {
    initial: number


}

export default function LikeButton(props:likeProps) {


    const [count, setCount] = useState(props.initial);
    
    return (

        <div className="flex m-4 p-7 justify-center bg-blue-950 items-center gap-10">

        <Image className="cursor-pointer transition hover:not-focus:opacity-50" onClick={() => setCount(count+1)} src={'/ww_heart.png'} width={100} height={100} alt="a heart">
        
        </Image>

        <h1 className="text-amber-200 font-semibold text-2xl">
            Likes: {count}
        </h1>

        </div>

    )

}

