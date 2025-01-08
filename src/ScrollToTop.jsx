import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Gulir ke atas setiap kali rute berubah
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
