
type props = {
    onClick: () => void,
    id: number,
    autor: string,
    conteudo: string,
    likes: number

}

export default function PostCard({onClick, id, autor, conteudo, likes}: props) {

    return (

      <div className="m-3 p-3 text-center bg-linear-to-b from-yellow-300 to to-yellow-600 rounded space-y-2">

        <h2><span className="text-blue-900">{autor}</span> postou algo:</h2>

        <p className="text-cyan-950 bg-white rounded ">
            {conteudo}
        </p>

        <h3 className="text-blue-900">Likes: <span className="text-cyan-700">{likes}</span></h3>
          
          <button className="p-3 bg-pink-900 text-white hover:bg-pink-800 active:bg-pink-600 transition cursor-pointer rounded" onClick={onClick}>
              Curtir
          </button>
      </div>

    )

}