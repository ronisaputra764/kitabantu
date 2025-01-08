import ButtonNext from "../components/ButtonNext";
import NavbarBack from "../components/navbar/NavbarBack";

export default function LupaKataSandi() {
    return (
        <>
            <NavbarBack text={"Lupa Kata Sandi"} />
            <main>
                <div className="max-w-lg bg-white min-h-screen mx-auto p-10 pb-0">
                    <p className="font-semibold text-xl text-gray-700">Masukan Nomor Ponsel atau Email Anda</p>
                    <input
                        className="w-full border-[2px] p-3 rounded-lg font-[500] text-lg mt-10 mb-[500px]"
                        placeholder="Nomor Ponsel atau Email"
                        type="text"
                    />
                    <ButtonNext text={"Konfirmasi"} />
                </div>
            </main>
        </>
    )
}