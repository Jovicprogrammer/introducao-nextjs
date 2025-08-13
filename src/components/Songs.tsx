
type SongProps = {
    title: string,
    lyrics: string,
    album: string
}

export default function Songs({title, lyrics, album}: SongProps) {

    return (

        <div className="bg-blue-950 max-w-sm flex items-center flex-col m-2 rounded-2xl py-5 px-4 space-y-3 border-4 border-amber-200 ">
            
            <div className="text-center">
                <h2 className="text-amber-200 ">{title}</h2>
                <h3 className="text-amber-100 italic">album: {album}</h3>
            </div>
            
            <div>
                <p className="text-white text-center">{lyrics}</p>
            </div>
            
        </div>

    )

}