import NavItem from "./NavItem";
import { faReceipt, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";

export default function BottomNav() {
    const location = useLocation();

    return (
        <div className="mx-auto max-w-screen-sm bottom-0 sticky py-5">
            <div className="grid grid-cols-3 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 gap-2">
                <Link to="/">
                    <NavItem active={location.pathname === "/"} icon={faHouse} text="Home" />
                </Link>
                <Link to="/riwayat">
                    <NavItem active={location.pathname === "/riwayat"} icon={faReceipt} text="Riwayat" />
                </Link>
                <Link to="/akun">
                    <NavItem active={location.pathname === "/akun"} icon={faUser} text="Akun" />
                </Link>
            </div>
        </div>
    );
}
