import { useParams } from "react-router-dom"
import NavbarShare from "../../components/navbar/NavbarShare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faUser, faGift } from "@fortawesome/free-solid-svg-icons";
import ButtonNext from "../../components/ButtonNext";

const posts = [
    {
        id: "1",
        image: "../assets/img/photo-detail-2.jpeg",
        image2: "../assets/img/photo-detail-1.jpeg"
    },
    {
        id: "2",
        image: "../assets/img/photo-detail-4.jpeg",
        image2: "../assets/img/photo-detail-3.jpeg"
    },
    {
        id: "3",
        image: "../assets/img/photo-detail-3.jpeg",
        image2: "../assets/img/photo-detail-1.jpeg"
    },
    {
        id: "4",
        image: "../assets/img/photo-detail-1.jpeg",
        image2: "../assets/img/photo-detail-3.jpeg"
    }
]

export default function DetailPosts() {
    const { Id } = useParams()
    const post = posts.find((p) => p.id === Id)

    if (!post) {
        return <p>User not found</p>;
    }

    return (
        <>
            <NavbarShare />
            <main>
                <div className="bg-white mx-auto max-w-lg min-h-screen">
                    <div className="px-10 pt-10">
                        <div className="flex flex-col justify-center">
                            <img className="rounded-2xl" src={post.image} alt="" />
                            <p className="text-gray-400 text-sm my-3">Yayasan Kita Bantu <FontAwesomeIcon className="text-blue-500" icon={faCheckCircle} /></p>
                            <h1 className="font-semibold text-2xl text-gray-700">Sedekah Subuh Bantu Nutrisi Santri dan Tahfidz</h1>
                            <div>
                            </div>
                            <div className="border-[1.5px] border-gray-200 rounded-xl p-4 my-6 shadow-lg">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-semibold text-gray-500 text-xl">Terkumpul</p>
                                        <p className="font-semibold text-[#FE9AA0] text-xl">Rp184.000.000</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-500 text-xl">Dari</p>
                                        <p className="font-semibold text-gray-400">Rp100.000.000.000</p>
                                    </div>
                                </div>

                                <div className="my-5">
                                    <div className="w-full h-2 bg-slate-200 rounded-full">
                                        <div className="w-2/3 h-2 bg-[#FE9AA0] rounded-full"></div>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <p className="mb-1 text-[#FE9AA0]"><FontAwesomeIcon className="me-1" size="xs" icon={faClock} />34 hari lagi</p>
                                </div>
                            </div>
                            <div className="w-full border-b-[1px] border-gray-200 justify-center flex-col flex">
                                <h2 className="font-semibold text-lg text-gray-700 my-3">Cerita Penggalangan Dana</h2>
                                <img className="rounded-2xl" src={post.image2} alt="" />
                                <p className=" mt-3 text-gray-400 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem perspiciatis illo voluptatem iste laborum corporis inventore nobis officia laboriosam quia, reprehenderit alias aliquid magnam nulla quibusdam eius, cumque debitis. Eaque corrupti in necessitatibus voluptatem porro, dicta voluptate magnam ducimus nemo cupiditate voluptates vero illo ullam placeat veritatis repellat ipsa!</p>
                                <div className="flex justify-center my-5">
                                    <a className="text-[#FE9AA0]" href="">Lihat Selengkapnya</a>
                                </div>
                            </div>

                            <div className="w-full border-b-[1px] border-gray-200 py-5">
                                <h2 className="font-semibold text-xl text-gray-700">Donatur</h2>

                                <div className="flex items-center gap-5 border-[1px] rounded-xl shadow-lg my-4 p-4">
                                    <div className="bg-[#FFE7E7] w-14 h-14 rounded-full flex justify-center items-center">
                                        <i className="fa-solid fa-user fa-2xl text-[#FE9AA0]"></i>
                                        <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faUser} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Arwan</p>
                                        <p className="text-gray-400">Berdonasi Sebesar <span className="text-[#FE9AA0] font-semibold text-lg">Rp100.000</span></p>
                                        <p className="text-gray-400 text-xs">7 menit yang lalu</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 border-[1px] rounded-xl shadow-lg my-4 p-4">
                                    <div className="bg-[#FFE7E7] w-14 h-14 rounded-full flex justify-center items-center">
                                        <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faUser} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Ilham</p>
                                        <p className="text-gray-400">Berdonasi Sebesar <span className="text-[#FE9AA0] font-semibold text-lg">Rp55.000</span></p>
                                        <p className="text-gray-400 text-xs">10 menit yang lalu</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 border-[1px] rounded-xl shadow-lg my-4 p-4">
                                    <div className="bg-[#FFE7E7] w-14 h-14 rounded-full flex justify-center items-center">
                                        <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faUser} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Hamba Allah</p>
                                        <p className="text-gray-400">Berdonasi Sebesar <span className="text-[#FE9AA0] font-semibold text-lg">Rp150.000</span></p>
                                        <p className="text-gray-400 text-xs">34 menit yang lalu</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 border-[1px] rounded-xl shadow-lg my-4 p-4">
                                    <div className="bg-[#FFE7E7] w-14 h-14 rounded-full flex justify-center items-center">
                                        <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faUser} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Raisa</p>
                                        <p className="text-gray-400">Berdonasi Sebesar <span className="text-[#FE9AA0] font-semibold text-lg">Rp25.000</span></p>
                                        <p className="text-gray-400 text-xs">57 menit yang lalu</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full  border-gray-200 py-5">
                                <h2 className="font-semibold text-xl text-gray-700">Doa Donatur</h2>

                                <div className="gap-5 border-[1px] rounded-xl shadow-lg my-4 p-4">
                                    <div className="flex justify-between items-center border-b-[1px] pb-3 mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-[#FFE7E7] w-14 h-14 rounded-full flex justify-center items-center">
                                                <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faUser} />
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-semibold">Rafly</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">10 menit yang lalu</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Ya Allah, jadikan amal ini sebagai bagian dari perwujudan kasih sayang-Mu di dunia.
                                            Semoga semua bantuan yang diberikan menjadi sumber kekuatan bagi mereka yang membutuhkan,
                                            serta memupuk rasa kemanusiaan yang lebih besar di hati kami semua. Kabulkanlah segala
                                            doa dan harapan dari mereka yang berbagi maupun menerima.
                                        </p>
                                    </div>
                                </div>

                                <div className="gap-5 border-[1px] rounded-xl shadow-lg my-4 p-4">
                                    <div className="flex justify-between items-center border-b-[1px] pb-3 mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-[#FFE7E7] w-14 h-14 rounded-full flex justify-center items-center">
                                                <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faUser} />
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-semibold">Mutia</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">45 menit yang lalu</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Semoga setiap langkah kebaikan ini menjadi berkah yang melimpah bagi semua pihak yang terlibat.
                                            Kepada yang memberi, semoga Tuhan membalas dengan rezeki yang berlipat, kesehatan, dan kebahagiaan.
                                            Kepada yang menerima, semoga ini menjadi jalan keluar dari kesulitan dan membuka pintu harapan baru
                                        </p>
                                    </div>
                                </div>

                                <div className="gap-5 border-[1px] rounded-xl shadow-lg my-4 p-4">
                                    <div className="flex justify-between items-center border-b-[1px] pb-3 mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-[#FFE7E7] w-14 h-14 rounded-full flex justify-center items-center">
                                                <FontAwesomeIcon className="text-[#FE9AA0]" size="2xl" icon={faUser} />
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-semibold">Ratu</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">2 jam yang lalu</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Ya Tuhan, berkahilah kegiatan ini agar menjadi inspirasi bagi banyak hati yang tergerak untuk
                                            membantu sesama. Semoga amal ini terus berlanjut dan membawa kesejahteraan bagi mereka yang
                                            membutuhkan. Limpahkan cinta dan rahmat-Mu kepada mereka yang mendukung tujuan mulia ini.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ButtonNext text={"Donasi Sekarang"} icon={faGift} to={"/posts/:Id/donasi"} />
                    </div>
                </div>
            </main>
        </>
    )
}