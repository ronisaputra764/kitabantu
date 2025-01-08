import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

export default function ButtonConfirm({ text, icon, to, nominal, setError, errorMsg }) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (!nominal || parseInt(nominal) <= 0) {
            setError(errorMsg);
            return;
        }
        navigate(to); // Lanjutkan navigasi jika nominal valid
    };

    return (
        <>
            <div className="sticky bottom-0 pb-9">
                <button onClick={handleClick} className="mx-auto w-full">
                    <div className="flex justify-center items-center text-white bg-[#FE9AA0] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 gap-2">
                        {icon && <FontAwesomeIcon size="lg" icon={icon} />}
                        <p className="font-semibold">{text}</p>
                    </div>
                </button>
            </div>
        </>
    )
}