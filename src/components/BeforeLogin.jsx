import BottomNav from "./bottom-nav/BottomNav"
import NavbarCenter from "./navbar/NavbarCenter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faCircleQuestion, faFileLines, faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function BeforeLogin() {
    return (
        <>
            <NavbarCenter text="Akun" />
            <main>
                <div className="mx-auto max-w-lg bg-[#FE9AA0] min-h-screen ">
                    <div className="text-center flex flex-col gap-5 px-12 py-10">
                        <p className="text-white font-[500] text-xl">Silahkan Masuk Dengan Akun Anda Untuk Membantu di KitaBantu</p>
                        <Link to={"/login"} className="text-[#FE9AA0] bg-white text-lg font-[500] shadow-lg py-2 rounded-full w-full ">Masuk Sekarang</Link>
                        <p className="text-white">Belum Punya Akun? <Link to="/daftar" className="font-semibold">Daftar</Link></p>
                    </div>
                    <div className="w-full rounded-t-[50px] bg-white px-10 pt-5">
                        <div>
                            <Link to={"/faq"} className="flex justify-between items-center border-b-[1px] p-4">
                                <p className="text-gray-600"><FontAwesomeIcon className="me-2 text-[#FE9AA0]" icon={faCircleQuestion} />Frequently Asked Question</p>
                                <FontAwesomeIcon className="text-gray-400" size="lg" icon={faAngleRight} />
                            </Link>
                            <Link to={"/syarat-ketentuan"} className="flex justify-between items-center border-b-[1px] p-4">
                                <p className="text-gray-600"><FontAwesomeIcon className="me-2 text-[#FE9AA0]" icon={faFileLines} />Syarat & Ketentuan</p>
                                <FontAwesomeIcon className="text-gray-400" size="lg" icon={faAngleRight} />
                            </Link>
                            <Link to={"/tentang-kitabantu"} className="flex justify-between items-center border-b-[1px] p-4">
                                <p className="text-gray-600"><FontAwesomeIcon className="me-2 text-[#FE9AA0]" icon={faCircleInfo} />Tentang KitaBantu   </p>
                                <FontAwesomeIcon className="text-gray-400" size="lg" icon={faAngleRight} />
                            </Link>
                        </div>
                        <div className="bg-gradient-to-r from-[#FFE7E7] to-[#FE9AA0] flex items-center rounded-3xl my-7">
                            <p className="font-[500] text-gray-600 text-2xl  ms-8">Kita Bantu Sesama di Aplikasi <span className="font-semibold">KitaBantu</span></p>
                            <img className="w-52" src="assets/icons/image.png" alt="" />
                        </div>
                        <p className="text-center text-gray-400 text-sm">KitaBantu v1.0</p>
                        <BottomNav />
                    </div>
                </div>
            </main>

        </>
    )
}