import { Link } from "react-router-dom";

export default function ButtonBottom({ buttonText, text, linkText, linkTo }) {
    return (
        <div className="sticky bottom-0 pb-9">
            <button className="mx-auto w-full mb-5">
                <div className="flex justify-center items-center text-white bg-[#FE9AA0] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 gap-2">
                    <p className="font-semibold">{buttonText}</p>
                </div>
            </button>
            <p className="text-gray-400 text-center">{text} <Link to={linkTo} className="text-[#FE9AA0]">{linkText}</Link></p>
        </div>
    )
}