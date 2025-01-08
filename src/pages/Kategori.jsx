import NavbarBack from "../components/navbar/NavbarBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faSeedling,
    faPeopleCarryBox,
    faBridge,
    faMoneyBill,
    faDog,
    faMosque,
    faHeartPulse,
    faHandHoldingHeart,
    faVolcano
} from "@fortawesome/free-solid-svg-icons";

export default function Kategori() {
    return (
        <>
            <NavbarBack text={"Kategori"} />
            <main>
                <div className="mx-auto max-w-lg bg-white min-h-screen p-10">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faGraduationCap} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Bantuan Pendidikan</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faSeedling} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Bantuan Lingkungan</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faPeopleCarryBox} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Kegiatan Sosial</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faBridge} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Bantuan Infrastruktur</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faMoneyBill} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Bantuan Modal Usaha</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faDog} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Menolong Hewan</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faMosque} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Bantuan Rumah Ibadah</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faHeartPulse} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Bantuan Kesehatan</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faHandHoldingHeart} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Zakat</h2>
                        </div>
                        <div className="bg-slate-100 p-5 rounded-lg">
                            <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faVolcano} />
                            <h2 className="text-gray-600 font-semibold text-lg mt-3">Bencana Alam</h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}