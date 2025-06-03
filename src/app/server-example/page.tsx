import ClientCounter from "@/components/ClientCounter"
import Navbar from "@/components/Navbar"
export default function ServerExample() {

    // const data = await fetchDataFromDB()
    const data = 'dados agora' 

    return (

        <div>

            <Navbar links={[
                {label:'Sobre', href:'about/'},
                {label:'Cliente', href: 'server-client/'},
                {label:'Produtos', href:'products/'},
                {label:'Casa', href: '/'}

            ]}
            
            
            />

            <h1>Dados do Servidor</h1>
            <p>{data}</p>
            <ClientCounter />
        </div>

    )

}