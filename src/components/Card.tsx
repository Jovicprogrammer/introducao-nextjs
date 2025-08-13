import Image from "next/image"

type Categories = "Humano" | "Monstro" | "Objeto" | "Lugar"

type CardProps = {
    title: string,
    description: string,
    imageUrl: string,
    category: string
}

export default function Card({title, description, imageUrl, category}: CardProps) {

    return (

        <div className="bg-blue-950 max-w-sm flex items-center flex-col m-2 rounded-2xl py-5 px-4 space-y-3 border-4 border-amber-200 ">
            
            <div className="text-center">
                <h2 className="text-amber-200 ">{title}</h2>
                <h3 className="text-amber-100 italic">{category}</h3>
            </div>

            <Image className="border-3 border-amber-200 rounded hover:opacity-75 transition cursor-pointer"
            src={imageUrl}
            width={200}
            height={200}
            alt="imagem"
            />
            
            <p className="text-white text-center">{description}</p>
            
        </div>

    )

}