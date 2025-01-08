import NavbarBack from "../../components/navbar/NavbarBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ButtonConfirm from "../../components/ButtonConfirm";
import { useState } from "react";

export default function Donasi({ nominal, onHandlePresetNominal, onHandleInputChange }) {
    const [error, setError] = useState("")
    const errorMsg = "Nominal harus diisi dengan angka yang valid!"

    return (
        <>
            <NavbarBack text={"Donasi"} />
            <main>
                <div className="mx-auto max-w-lg bg-white min-h-screen p-10 pb-0">
                    <h2 className="font-semibold text-xl text-gray-700">Berapa Donasi Yang Akan Kamu Berikan?</h2>
                    <div className="my-7">
                        <button onClick={() => onHandlePresetNominal("10000")} className="w-full border-[1px] rounded-xl p-3 my-4 flex items-center shadow-lg gap-6">
                            <div className="bg-[#FE9AA0] w-10 h-10 rounded-full flex justify-center items-center ms-2">
                                <FontAwesomeIcon className="text-white" size="lg" icon={faHeart} />
                            </div>
                            <p className="font-semibold">Rp10.000</p>
                        </button>
                        <button onClick={() => onHandlePresetNominal("25000")} className="w-full border-[1px] rounded-xl p-3 my-4 flex items-center shadow-lg gap-6">
                            <div className="bg-[#FE9AA0] w-10 h-10 rounded-full flex justify-center items-center ms-2">
                                <FontAwesomeIcon className="text-white" size="lg" icon={faHeart} />
                            </div>
                            <p className="font-semibold">Rp25.000</p>
                        </button>
                        <button onClick={() => onHandlePresetNominal("50000")} className="w-full border-[1px] rounded-xl p-3 my-4 flex items-center shadow-lg gap-6">
                            <div className="bg-[#FE9AA0] w-10 h-10 rounded-full flex justify-center items-center ms-2">
                                <FontAwesomeIcon className="text-white" size="lg" icon={faHeart} />
                            </div>
                            <p className="font-semibold">Rp50.000</p>
                        </button>
                        <button onClick={() => onHandlePresetNominal("100000")} className="w-full border-[1px] rounded-xl p-3 my-4 flex items-center shadow-lg gap-6">
                            <div className="bg-[#FE9AA0] w-10 h-10 rounded-full flex justify-center items-center ms-2">
                                <FontAwesomeIcon className="text-white" size="lg" icon={faHeart} />
                            </div>
                            <p className="font-semibold">Rp100.000</p>
                        </button>
                    </div>
                    <div className="flex justify-center flex-col items-center gap-5 mb-96">
                        {error !== "" ? <p className="text-red-300">{error}</p> : <p className="text-gray-400">Atau Masukan Jumlah Yang Diinginkan</p>}

                        <input
                            className="w-full bg-slate-100 rounded-lg p-4 text-center font-semibold text-xl no-spinner"
                            value={nominal}
                            onChange={onHandleInputChange}
                            type="number"
                        />
                    </div>
                    <ButtonConfirm
                        text={"Kirim Donasi"}
                        icon={faPaperPlane}
                        nominal={nominal}
                        setError={setError}
                        errorMsg={errorMsg}
                        to={"/posts/:Id/konfirmasi-donasi"} />
                </div>
            </main>
        </>
    )
}