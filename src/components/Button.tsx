type ButtonProps = {
    label: string
}

export default function Button({label}: ButtonProps) {
    return (
        <button className="bg-blue-950 px-4 py-3 text-amber-200 hover:bg-transparent hover:font-bold cursor-pointer">
        {label}
        </button>
    )
}

