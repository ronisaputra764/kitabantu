import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function NavItem({ active, icon, text }) {
    return (
        <div
            className={`flex py-2 justify-center items-center rounded-full hover:cursor-pointer ${active
                ? "text-white bg-[#FE9AA0]"
                : "text-gray-400 border-s-gray-300 border-e-gray-300"
                }`}
        >
            <FontAwesomeIcon icon={icon} className="me-1" />
            {text}
        </div>
    )
}