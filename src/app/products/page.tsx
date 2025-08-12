import Navbar from "@/components/Navbar";
import Lampada from "@/components/Lampada";
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
                <Lampada />
            </div>

        </div>

    )

}