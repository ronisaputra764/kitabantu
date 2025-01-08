import ButtonConfirm from "../../components/ButtonConfirm";
import ButtonNext from "../../components/ButtonNext";
import NavbarBack from "../../components/navbar/NavbarBack";

export default function KonfirmasiDonasi({ nominal }) {
    return (
        <>
            <NavbarBack text={"Konfirmasi Donasi"} />
            <main>
                <div className="mx-auto max-w-lg bg-white min-h-screen px-10 pt-8">
                    <div className="bg-[#FE9AA0] text-white py-5 px-10 flex flex-col gap-1 rounded-xl font-semibold">
                        <p className="text-lg">Donasi Sebesar</p>
                        <p className="text-4xl">Rp{nominal}</p>
                    </div>
                    <div className="flex flex-col my-4 gap-2">
                        <span className="text-gray-500 font-[500]">Name</span>
                        <input className="bg-slate-100 rounded-lg border-[1px] p-3" type="text" />
                        <div className="flex gap-2 my-2 items-center">
                            <input id="name" className="w-5 h-5" type="checkbox" />
                            <label htmlFor="name" className="text-gray-500 text-sm">Sembunyikan Anonim</label>
                        </div>
                    </div>
                    <div className="flex flex-col my-4 gap-2">
                        <span className="text-gray-500 font-[500]">Email</span>
                        <input className="bg-slate-100 rounded-lg border-[1px] p-3" type="text" />
                    </div>
                    <div className="flex flex-col my-4 gap-2">
                        <span className="text-gray-500 font-[500]">No Whatsapp</span>
                        <input className="bg-slate-100 rounded-lg border-[1px] p-3" type="text" />
                    </div>
                    <div className="flex flex-col my-4 gap-2">
                        <span className="text-gray-500 font-[500]">Doa</span>
                        <textarea className="bg-slate-100 rounded-lg border-[1px] p-3 resize-none" name="" id=""></textarea>
                    </div>
                    <div className="flex gap-2 my-8">
                        <div>
                            <input id="confirm" className="w-5 h-5" type="checkbox" />
                        </div>
                        <label className="text-gray-500 text-sm" htmlFor="confirm">By continuing the payment, you agree to our
                            <a className="underline text-[#FE9AA0]" href="">Terms and Condition</a> and
                            <a className="underline text-[#FE9AA0]" href="">Privacy Policy</a>
                        </label>
                    </div>
                    <ButtonNext text={"Konfirmasi"} to={"/posts/:Id/pembayaran"} />
                </div>
            </main>
        </>
    )
}