import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonNext({ text, icon, to }) {

    return (
        <div className="sticky bottom-0 pb-9">
            <Link to={to} className="mx-auto w-full">
                <div className="flex justify-center items-center text-white bg-[#FE9AA0] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 gap-2">
                    {icon && <FontAwesomeIcon size="lg" icon={icon} />}
                    <p className="font-semibold">{text}</p>
                </div>
            </Link>
        </div>
    )
}