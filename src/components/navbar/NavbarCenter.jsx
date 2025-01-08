export default function NavbarCenter({ text }) {
    return (
        <nav>
            <div className="mx-auto max-w-lg flex items-center justify-center">
                <h1 className="font-semibold text-lg text-white font-poppins">{text}</h1>
            </div>
        </nav>
    )
}