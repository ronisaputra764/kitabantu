import NavbarSearch from "../components/navbar/NavbarSearch"
import { faArrowDownWideShort, faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BottomNav from "../components/bottom-nav/BottomNav"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <NavbarSearch />
            <main className="mx-auto bg-gradient-to-r from-[#FFE7E7] to-[#FE9AA0] max-w-lg min-h-screen">
                <div className="grid grid-cols-2 ">
                    <div className="flex justify-center items-center ms-12 ">
                        <h1 className="text-2xl">Kita Bantu Sesama di Aplikasi <span className="font-bold">KitaBantu</span></h1>
                    </div>
                    <div className=" flex justify-end">
                        <img src="./assets/icons/image.png" width="500" alt="" />
                    </div>
                </div>
                <div className="w-full min-h-screen bg-white rounded-t-[50px] p-10 pb-0">
                    <Link to={"/kategori"} className="font-bold text-lg text-gray-600">Categories</Link>
                    <div className="my-6">
                        <ul className="flex gap-1 overflow-x-auto">
                            <li className="border-[1px] text-nowrap border-gray-200 px-3 py-2 rounded-full text-white bg-[#FE9AA0]">
                                <FontAwesomeIcon className="me-1" icon={faArrowDownWideShort} flip="horizontal" />All
                            </li>
                            <li className="border-[1px] text-nowrap border-gray-200 px-3 py-2 rounded-full text-gray-400">Kemanusian</li>
                            <li className="border-[1px] text-nowrap border-gray-200 px-3 py-2 rounded-full text-gray-400">Zakat</li>
                            <li className="border-[1px] text-nowrap border-gray-200 px-3 py-2 rounded-full text-gray-400">Rumah Ibadah</li>
                        </ul>
                    </div>
                    <Link to={"/posts/1"} className="flex border-b-[1px] border-b-gray-300 py-4 gap-4">
                        <div className="w-auto items-center flex">
                            <img className="rounded-3xl" src="./assets/img/gambar-2.jpeg" width="200" alt="" />
                        </div>
                        <div className="w-2/3">
                            <p className="mb-1 mt-2 text-xs text-gray-500">Yayasan Kita Bantu  <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                            <p className="mb-1 font-bold text-gray-700">Sedekah Subuh Untuk Nutrisi Satri dan Tahfidz</p>
                            <p className="mb-1 text-[#FE9AA0]"> <FontAwesomeIcon className="me-1" size="sm" icon={faClock} />34 hari lagi</p>
                            <div className="mb-2 w-full h-2 rounded-full bg-gray-200">
                                <div className="w-2/3 h-2 rounded-full bg-[#FE9AA0]"></div>
                            </div>
                            <p className="mb-1 text-xs text-gray-500">Terkumpul</p>
                            <p><span className="font-bold text-[#FE9AA0]">Rp184.000.000</span> <span className="text-xs text-gray-400">/ 100.000.000.000</span></p>
                        </div>
                    </Link>
                    <Link to={"/posts/2"} className="flex border-b-[1px] border-b-gray-300 py-4 gap-4">
                        <div className="w-auto items-center flex">
                            <img className="rounded-3xl" src="./assets/img/gambar-4.jpeg" width="200" alt="" />
                        </div>
                        <div className="w-2/3">
                            <p className="mb-1 mt-2 text-xs text-gray-500">Yayasan Kita Bantu  <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                            <p className="mb-1 font-bold text-gray-700">Sedekah Subuh Untuk Nutrisi Satri dan Tahfidz</p>
                            <p className="mb-1 text-[#FE9AA0]"> <FontAwesomeIcon className="me-1" size="sm" icon={faClock} />34 hari lagi</p>
                            <div className="mb-2 w-full h-2 rounded-full bg-gray-200">
                                <div className="w-2/3 h-2 rounded-full bg-[#FE9AA0]"></div>
                            </div>
                            <p className="mb-1 text-xs text-gray-500">Terkumpul</p>
                            <p><span className="font-bold text-[#FE9AA0]">Rp184.000.000</span> <span className="text-xs text-gray-400">/ 100.000.000.000</span></p>
                        </div>
                    </Link>
                    <Link to={"posts/3"} className="flex border-b-[1px] border-b-gray-300 py-4 gap-4">
                        <div className="w-auto items-center flex">
                            <img className="rounded-3xl" src="./assets/img/gambar-3.jpeg" width="200" alt="" />
                        </div>
                        <div className="w-2/3">
                            <p className="mb-1 mt-2 text-xs text-gray-500">Yayasan Kita Bantu  <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                            <p className="mb-1 font-bold text-gray-700">Sedekah Subuh Untuk Nutrisi Satri dan Tahfidz</p>
                            <p className="mb-1 text-[#FE9AA0]"> <FontAwesomeIcon className="me-1" size="sm" icon={faClock} />34 hari lagi</p>
                            <div className="mb-2 w-full h-2 rounded-full bg-gray-200">
                                <div className="w-2/3 h-2 rounded-full bg-[#FE9AA0]"></div>
                            </div>
                            <p className="mb-1 text-xs text-gray-500">Terkumpul</p>
                            <p><span className="font-bold text-[#FE9AA0]">Rp184.000.000</span> <span className="text-xs text-gray-400">/ 100.000.000.000</span></p>
                        </div>
                    </Link>
                    <Link to={"posts/4"} className="flex border-b-[1px] border-b-gray-300 py-4 gap-4">
                        <div className="w-auto items-center flex">
                            <img className="rounded-3xl" src="./assets/img/gambar-1.jpeg" width="200" alt="" />
                        </div>
                        <div className="w-2/3">
                            <p className="mb-1 mt-2 text-xs text-gray-500">Yayasan Kita Bantu  <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                            <p className="mb-1 font-bold text-gray-700">Sedekah Subuh Untuk Nutrisi Satri dan Tahfidz</p>
                            <p className="mb-1 text-[#FE9AA0]"> <FontAwesomeIcon className="me-1" size="sm" icon={faClock} />34 hari lagi</p>
                            <div className="mb-2 w-full h-2 rounded-full bg-gray-200">
                                <div className="w-2/3 h-2 rounded-full bg-[#FE9AA0]"></div>
                            </div>
                            <p className="mb-1 text-xs text-gray-500">Terkumpul</p>
                            <p><span className="font-bold text-[#FE9AA0]">Rp184.000.000</span> <span className="text-xs text-gray-400">/ 100.000.000.000</span></p>
                        </div>
                    </Link>
                    <BottomNav />
                </div>
            </main>

        </>
    )
}