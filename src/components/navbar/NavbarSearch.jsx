import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavbarSearch() {
    return (
        <nav>
            <div className="mx-auto flex max-w-xl">
                <input type="text" placeholder="Cari Disini" className="focus:outline-none rounded-s-full px-4 py-2 w-full ms-10" />
                <button className="bg-white rounded-e-full px-4 py-2 mr-10">
                    <FontAwesomeIcon className="text-gray-400" icon={faMagnifyingGlass} />
                </button>
            </div>
        </nav>
    )
}