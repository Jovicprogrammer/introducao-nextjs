import ThemeToggle from "@/components/ThemeToggle"
import Navbar from "@/components/Navbar"

export default function ServerClient() {

    const dates = new Date()
    const date = dates.getDate()
    const hours = dates.getHours()

    return (

        <div>

        <Navbar links={[
                        {label:'Sobre', href:'about/'},
                        {label:'Cliente', href: 'server-client/'},
                        {label:'Produtos', href:'products/'},
                        {label:'Casa', href: '/'}
        
                    ]}/>

        <div>
            <p>Hoje é dia {date}</p>
            <p>Exatamente {hours} horas</p>
            
            <ThemeToggle/>
        </div>

        </div>

    )

}