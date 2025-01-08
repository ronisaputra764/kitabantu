import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home"
import Riwayat from "./pages/Riwayat";
import Akun from "./pages/Akun";
import Daftar from "./pages/Daftar";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import TentangKitaBantu from "./pages/TentangKitaBantu";
import LupaKataSandi from "./pages/LupaKataSandi";
import Kategori from "./pages/Kategori";
import DetailPosts from "./pages/posts/DetailPosts";
import Donasi from "./pages/posts/Donasi";
import KonfirmasiDonasi from "./pages/posts/KonfirmasiDonasi";
import ScrollToTop from "./ScrollToTop";
import Pembayaran from "./pages/posts/Pembayaran";
import PembayaranBerhasil from "./pages/posts/PembayaraBerhasil";

function App() {
  const [nominal, setNominal] = useState("")

  function handlePresetNominal(newNominal) {
    setNominal(newNominal)
  }

  const handleInputChange = (e) => {
    setNominal(e.target.value);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/akun" element={<Akun />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
          <Route path="/tentang-kitabantu" element={<TentangKitaBantu />} />
          <Route path="/lupa-kata-sandi" element={<LupaKataSandi />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/posts/:Id" element={<DetailPosts />} />
          <Route path="/posts/:Id/donasi" element={<Donasi
            nominal={nominal}
            onHandlePresetNominal={handlePresetNominal}
            onHandleInputChange={handleInputChange} />}
          />
          <Route path="/posts/:Id/konfirmasi-donasi" element={<KonfirmasiDonasi nominal={nominal} />} />
          <Route path="/posts/:Id/pembayaran" element={<Pembayaran nominal={nominal} />} />
          <Route path="/posts/:Id/pembayaran-berhasil" element={<PembayaranBerhasil setNominal={setNominal} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
