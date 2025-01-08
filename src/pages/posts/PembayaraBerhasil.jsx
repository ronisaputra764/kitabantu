import "animate.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function PembayaranBerhasil({ setNominal }) {
    useEffect(() => {
        setNominal("")
    }, [])

    return (
        <main>
            <div className="mx-auto max-w-lg bg-[#FE9AA0] min-h-screen flex pt-14 py-10 flex-col items-center">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-white rounded-full flex justify-center items-center">
                        <FontAwesomeIcon className="text-[#FE9AA0]" icon={faHeart} />
                    </div>
                    <p className="font-semibold text-white text-3xl">KitaBantu</p>
                </div>
                <p className="font-[500] text-white text-3xl mt-14 mb-10">Terimaksih</p>
                <img className="animate__animated animate__bounceIn px-10" src="../../assets/icons/checklist.png" alt="" />
                <p className="font-[500] text-white text-3xl px-20 my-10 text-center" >Donasi Kamu Sudah Kami Terima</p>
                <Link to={"/"} className="text-[#FE9AA0] bg-white text-lg font-[500] shadow-xl mb-20 py-2 rounded-xl px-28">Selesai</Link>
            </div>
        </main>
    )
}