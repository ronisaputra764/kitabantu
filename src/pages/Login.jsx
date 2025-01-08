import NavbarBack from "../components/navbar/NavbarBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ButtonBottom from "../components/ButtonBottom";
import { Link } from "react-router-dom";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)

    function togglePasswordVisibility() {
        setShowPassword((prevState) => !prevState)
    }

    return (
        <>
            <NavbarBack text="Login" />
            <main>
                <div className="max-w-lg bg-white min-h-screen mx-auto p-10 pb-0">
                    <p className="font-semibold text-xl text-gray-700">Silahkan Masukan Email dan Password Kamu disini</p>
                    <form className="flex flex-col gap-5 my-7">
                        <input
                            className="w-full border-[2px] p-3 rounded-lg text-lg font-[500]"
                            placeholder="Email"
                            type="text" />
                        <div className="relative w-full">
                            <input
                                className="w-full border-[2px] p-3 rounded-lg font-[500] text-lg"
                                placeholder="Password"
                                autoComplete="password"
                                type={showPassword ? "text" : "password"} />
                            <span className="toggle-password absolute translate-y-[-50%] top-[50%] right-4" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon
                                    className="text-gray-400"
                                    icon={showPassword ? faEyeSlash : faEye}
                                />
                            </span>
                        </div>
                    </form>
                    <div className="flex justify-end">
                        <Link to={"/lupa-kata-sandi"} className="text-[#FE9AA0]">Lupa Kata Sandi?</Link>
                    </div>
                    <div className="my-8 mb-72">
                        <p className="font-[500] text-xl text-gray-700">Atau Masuk Lebih Cepat</p>
                        <button className="border-[1px] w-full rounded-full my-4">
                            <div className="flex justify-center items-center p-2 gap-2">
                                <svg
                                    width="20px"
                                    viewBox="-0.5 0 48 48"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g>
                                </svg>
                                <p className="text-gray-700">Sign With Google</p>
                            </div>
                        </button>
                    </div>
                    <ButtonBottom
                        buttonText={"Masuk Sekarang"}
                        text={"Belum Punya Akun?"}
                        linkText={"Daftar Disini"} linkTo={"/daftar"} />
                </div>
            </main>
        </>
    )
}