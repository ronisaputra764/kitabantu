import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong, faSquareShareNodes } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export default function NavbarShare() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    return (
        <nav>
            <div className="mx-auto max-w-lg flex gap-3 items-center justify-between px-6 py-">
                <button onClick={goBack}>
                    <FontAwesomeIcon className="text-slate-100" size="2xl" icon={faArrowLeftLong} />
                </button>
                <FontAwesomeIcon className="text-slate-100" size="2xl" icon={faSquareShareNodes} />
            </div>
        </nav>
    )
}