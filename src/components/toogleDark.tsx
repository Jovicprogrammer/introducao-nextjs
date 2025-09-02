
type props = {
    onToggle: () => void,
    isDark: boolean
}

export default function ToggleDark({onToggle, isDark}: props) {

    return (

        <button onClick={onToggle}
        className={`p-3 cursor-pointer rounded  text-white
        
        ${ isDark ? 'bg-black' : 'bg-red-700' }

        `}>

            {isDark ? 'Toggle Dark' : 'Toggle Light'}

        </button>

    )

}