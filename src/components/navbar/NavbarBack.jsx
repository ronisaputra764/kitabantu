import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export default function NavbarBack({ text }) {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    return (
        <nav>
            <div className="mx-auto max-w-lg flex gap-3 items-center ps-5">
                <button onClick={goBack}>
                    <FontAwesomeIcon className="text-white" size="xl" icon={faArrowLeftLong} />
                </button>
                <h1 className="font-semibold text-lg text-white font-poppins">{text}</h1>
            </div>
        </nav>
    )
}