import NavbarBack from "../../components/navbar/NavbarBack";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import ButtonNext from "../../components/ButtonNext";

export default function Pembayaran({ nominal }) {
    const [showSections, setShowSections] = useState({
        virtualAccount: false,
        gopayShopeePay: false,
        qris: false,
    });
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

    function toggleShow(section) {
        setShowSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    }

    useEffect(() => {
        // Mulai interval untuk mengurangi waktu setiap detik
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer); // Hentikan timer jika waktu habis
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Bersihkan interval saat komponen unmount
        return () => clearInterval(timer);
    }, []);

    // Format waktu menjadi HH:MM:SS
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    return (
        <>
            <NavbarBack text={"Pembayaran"} />
            <main>
                <div className="mx-auto max-w-lg bg-white min-h-screen">
                    <div className="flex flex-col px-10 pt-10">
                        <div>
                            <h1 className="text-5xl text-[#FE9AA0] font-semibold">Rp{nominal}</h1>
                        </div>
                        <div className="flex mt-5 mb-6 justify-between text-lg">
                            <p className="text-gray-400">Order ID #IP-RB02344576</p>
                            <p className="text-[#FE9AA0]">Rincian</p>
                        </div>
                    </div>
                    <div className="bg-[#FE9AA0] flex justify-center p-3">
                        <p className="text-white font-[500] text-lg">Pilih dalam {formatTime(timeLeft)}</p>
                    </div>
                    <div className="px-10 py-5">
                        <h2 className="text-xl text-gray-700 font-[500]">Semua Metode Pembayaran</h2>
                        <div className="border-b-[1px] my-4 py-5">
                            <p className="text-gray-400">Virtual Account</p>
                            <div className="flex justify-between">
                                <div className="flex gap-3 mt-2">
                                    <img className="w-12 h-4" src="../../assets/icons/bca.png" alt="" />
                                    <img className="w-16 h-4" src="../../assets/icons/bri.png" alt="" />
                                    <img className="w-16 h-5" src="../../assets/icons/mandiri.png" alt="" />
                                    <img className="w-12 h-4" src="../../assets/icons/bni.png" alt="" />
                                </div>
                                <button onClick={() => toggleShow("virtualAccount")} className="pe-5">
                                    <FontAwesomeIcon
                                        className={`text-gray-400 transition-transform ${showSections.virtualAccount ? "rotate-180" : ""}`}
                                        size="xl"
                                        icon={faCaretDown}
                                    />
                                </button>
                            </div>
                            <div className={`overflow-hidden ${showSections.virtualAccount ? "" : "hidden"}`}>
                                <div>
                                    <div className="border-b-[1px] font-[500] text-gray-500 py-2 mt-5">
                                        <p>BCA Virtual Account</p>
                                    </div>
                                    <div className="border-b-[1px] font-[500] text-gray-500 py-2">
                                        <p>BRI Virtual Account</p>
                                    </div>
                                    <div className="border-b-[1px] font-[500] text-gray-500 py-2">
                                        <p>Mandiri Virtual Account</p>
                                    </div>
                                    <div className=" font-[500] text-gray-500 py-2">
                                        <p>BNI Virtual Account</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b-[1px] my-4 py-5">
                            <p className="text-gray-400">GoPay / ShopeePay</p>
                            <div className="flex justify-between">
                                <div className="flex gap-3 mt-2">
                                    <img className="w-16 h-4" src="../../assets/icons/gopay.png" alt="" />
                                    <img className="w-11 h-5" src="../../assets/icons/shopeepay.png" alt="" />
                                </div>
                                <button onClick={() => toggleShow("gopayShopeePay")} className="pe-5">
                                    <FontAwesomeIcon
                                        className={`text-gray-400 transition-transform ${showSections.gopayShopeePay ? "rotate-180" : ""}`}
                                        size="xl"
                                        icon={faCaretDown}
                                    />
                                </button>
                            </div>
                            <div className={`overflow-hidden ${showSections.gopayShopeePay ? "" : "hidden"}`}>
                                <div>
                                    <div className="border-b-[1px] font-[500] text-gray-500 py-2 mt-5">
                                        <p>Gopay</p>
                                    </div>
                                    <div className="font-[500] text-gray-500 py-2">
                                        <p>ShopeePay</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b-[1px] my-4 py-5">
                            <p className="text-gray-400">QRIS</p>
                            <div className="flex justify-between">
                                <div className="flex gap-3 mt-2">
                                    <img className="w-16 h-4" src="../../assets/icons/qris.png" alt="" />
                                </div>
                                <button onClick={() => toggleShow("qris")} className="pe-5">
                                    <FontAwesomeIcon
                                        className={`text-gray-400 transition-transform ${showSections.qris ? "rotate-180" : ""}`}
                                        size="xl"
                                        icon={faCaretDown}
                                    />
                                </button>
                            </div>
                            <div className={`overflow-hidden ${showSections.qris ? "" : "hidden"}`}>
                                <div>
                                    <div className=" font-[500] text-gray-500 py-2 mt-5">
                                        <p>Qris</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <p className="text-gray-400">Powered by</p>
                            <img className="h-32 w-32" src="../../assets/icons/mitrans.png" alt="" />
                        </div>

                        <ButtonNext text={"Konfirmasi"} to={"/posts/:Id/pembayaran-berhasil"} />

                    </div>
                </div>
            </main>
        </>
    )
}