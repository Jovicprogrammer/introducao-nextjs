import ThemeToggle from "@/components/ThemeToggle"

export default function ServerClient() {

    const dates = new Date()
    const date = dates.getDate()
    const hours = dates.getHours()

    return (

        <div>

        <p>Hoje é dia {date}</p>
        <p>Exatamente {hours} horas</p>
        
        <ThemeToggle/>

        </div>

    )

}