import NavbarCenter from "../components/navbar/NavbarCenter";
import BottomNav from "../components/bottom-nav/BottomNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faBell } from "@fortawesome/free-solid-svg-icons"
export default function Riwayat() {
    return (
        <>
            <NavbarCenter text="Riwayat" />
            <main>
                <div className="mx-auto max-w-lg bg-white min-h-screen px-10 ">
                    <div className="py-4">
                        <div className="flex items-center gap-6 border-b-[1px] py-3">
                            <div>
                                <FontAwesomeIcon size="2xl" className="text-[#FE9AA0]" icon={faBell} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs my-1">Yayasan Kita Bantu <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                                <h2 className="font-[500] text-gray-700">PAHALA JARIYAH: Donasi Rp1.000.000 untuk pembangunan masjid Al-Ikhlas</h2>
                                <p className="text-gray-400 text-xs my-1">Donasimu di 23 agustus 2024</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 border-b-[1px] py-3">
                            <div>
                                <FontAwesomeIcon size="2xl" className="text-[#FE9AA0]" icon={faBell} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs my-1">Yayasan Kita Bantu <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                                <h2 className="font-[500] text-gray-700">BANTUAN KESEHATAN: Donasi Rp250.000 untuk tunanetra di Jawa Timur</h2>
                                <p className="text-gray-400 text-xs my-1">Donasimu di 2 july 2024</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 border-b-[1px] py-3">
                            <div>
                                <FontAwesomeIcon size="2xl" className="text-[#FE9AA0]" icon={faBell} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs my-1">Yayasan Kita Bantu <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                                <h2 className="font-[500] text-gray-700">BENCANA ALAM: Donasi Rp500.000 untuk korban bencana Gempa bumi di Cianjur</h2>
                                <p className="text-gray-400 text-xs my-1">Donasimu di 21 maret 2024</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 border-b-[1px] py-3">
                            <div>
                                <FontAwesomeIcon size="2xl" className="text-[#FE9AA0]" icon={faBell} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs my-1">Yayasan Kita Bantu <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                                <h2 className="font-[500] text-gray-700">PAHALA JARIYAH: Wakaf 1000 Qur'an untuk anak-anak di Yayasan Kita Bantu</h2>
                                <p className="text-gray-400 text-xs my-1">Donasimu di 4 januari 2024</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 border-b-[1px] py-3">
                            <div>
                                <FontAwesomeIcon size="2xl" className="text-[#FE9AA0]" icon={faBell} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs my-1">Yayasan Kita Bantu <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                                <h2 className="font-[500] text-gray-700">PAHALA JARIYAH: Wakaf 2000 Qur'an untuk anak-anak Yatim</h2>
                                <p className="text-gray-400 text-xs my-1">Donasimu di 1 januari 2024</p>
                            </div>
                        </div>
                    </div>
                    <BottomNav />
                </div>
            </main>

        </>
    )
}