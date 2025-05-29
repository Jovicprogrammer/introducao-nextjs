import Navbar from "@/components/Navbar";

export default function Products() {

    return (
        

        <div>

            <div>
                <Navbar link1_titulo="Sobre"
                link1_link="about/"
                link2_titulo="Produtos"
                link2_link="products/"
                link3_titulo="Descubra mais"
                link3_link="server-example/"/>
            </div>

        <h1>Nossos produtos</h1>
        
        <div>
            <h2>Balões de festa na cor rosa - 1000 unidades</h2>
            <h3>R$9,50</h3>
        </div>

        <div>
            <h2>Bolo de aniversário clássico (sob encomenda)</h2>
            <h3>R$50,00</h3>
        </div>

        <div>
            <h2>Caixa de música festiva</h2>
            <h3>R$80,00</h3>
        </div>

        </div>

    )

}