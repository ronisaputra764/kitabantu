import NavbarBack from "../components/navbar/NavbarBack"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight"

export default function Faq() {
    return (
        <>
            <NavbarBack text={"Pusat Bantuan"} />
            <main>
                <div className="max-w-lg bg-white min-h-screen mx-auto p-10">
                    <div>
                        <p className="text-xl text-gray-700 font-semibold">Hi! ada yang bisa kami bantu?</p>
                    </div>
                    <div className="my-5">
                        <div className="border-b-[1px] flex justify-between pt-6 pb-3 items-center">
                            <p className="text-gray-500 max-w-80">Apa yang harus dilakukan ketika lupa kata sandi</p>
                            <FontAwesomeIcon className="text-gray-400 me-3" size="lg" icon={faAngleRight} />
                        </div>
                        <div className="border-b-[1px] flex justify-between pt-6 pb-3 items-center">
                            <p className="text-gray-500 max-w-80">Apakah donasi saya bisa di refund</p>
                            <FontAwesomeIcon className="text-gray-400 me-3" size="lg" icon={faAngleRight} />
                        </div>
                        <div className="border-b-[1px] flex justify-between pt-6 pb-3 items-center">
                            <p className="text-gray-500 max-w-80">Apakah saya wajib konfirmasi setelah transfer donasi</p>
                            <FontAwesomeIcon className="text-gray-400 me-3" size="lg" icon={faAngleRight} />
                        </div>
                        <div className="border-b-[1px] flex justify-between pt-6 pb-3 items-center">
                            <div>
                                <p className="mb-4 max-w-80 font-semibold">Apakah donasi saya tersalurkan 100%?</p>
                                <p className="text-gray-500">Ya donasi anda akan tersalurkan 100%</p>
                            </div>
                            <FontAwesomeIcon className="text-gray-400 me-3" size="lg" icon={faAngleRight} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}