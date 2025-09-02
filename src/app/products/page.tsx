import BotaoReproducao from "@/components/BotaoReproducao";
import ListaDeCompras from "@/components/ListadeCompras";
import Navbar from "@/components/Navbar";

export default function Products() {

    return (
        

        <div>

            <div>
                <Navbar links={
                [
                {label:'Sobre', href:'about/'},
                {label:'Produtos', href:'products/'},
                {label:'Cliente', href:'server-client/'}
                ]
            }/>
            </div>

        <div>
            <BotaoReproducao />
        </div>

        <div>
            <ListaDeCompras />
        </div>

        </div>

    )

}