import ClientCounter from "@/components/ClientCounter"
import EffectCounter from "@/components/EffectCounter"
import LikeButton from "@/components/LikeButton"
import Navbar from "@/components/Navbar"
export default function ServerExample() {

    // const data = await fetchDataFromDB()
    const data = 'dados agora' 

    return (

        <div className="bg-blue-100 ">

            <Navbar links={[
                {label:'Sobre', href:'about/'},
                {label:'Cliente', href: 'server-client/'},
                {label:'Produtos', href:'products/'},
                {label:'Casa', href: '/'}

            ]}
            
            
            />
{/* 
            <h1>Dados do Servidor</h1>
            <p>{data}</p>
            <ClientCounter /> */}

            <div>
                <LikeButton initial={0}/>
            </div>

            <div>
                <EffectCounter />
            </div>

        </div>

    )

}