import ClientCounter from "@/components/ClientCounter"
export default function ServerExample() {

    // const data = await fetchDataFromDB()
    const data = 'dados agora' 

    return (

        <div>
            <h1>Dados do Servidor</h1>
            <p>{data}</p>
            <ClientCounter />
        </div>

    )

}