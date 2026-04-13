"use client" // Wajib ditambahkan agar useEffect bisa berjalan di browser

import { useEffect } from "react"
import AOS from "aos"
import Content from "./components/Content"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Testimoni from "./components/Testimoni"

export default function Home() {
  // Inisialisasi AOS saat komponen pertama kali di-render (Client-side)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    })

    // Refresh AOS jika ada perubahan ukuran layar
    window.addEventListener("resize", () => AOS.refresh())
    return () => window.removeEventListener("resize", () => AOS.refresh())
  }, [])

  return (
    <>
      <Hero />
      <div id="content_section">
        <Content />
      </div>
      <HowItWorks />
      <Testimoni />
    </>
  )
}
