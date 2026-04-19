"use client"
import "./globals.css"
import "aos/dist/aos.css"
import { Poppins } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Cek apakah URL saat ini adalah /admin (dan sub-foldernya) atau /login
  const isAdminArea = pathname?.startsWith("/admin")
  const isLoginArea = pathname?.startsWith("/login")

  // Jika sedang di halaman admin atau login, sembunyikan Navbar & Footer User
  const hideUserNavigation = isAdminArea || isLoginArea

  return (
    <html lang="id">
      <body className={`${poppins.className} bg-[#FEF3E2] overflow-x-hidden`}>
        {/* Render Navbar jika BUKAN di area Admin/Login */}
        {!hideUserNavigation && <Navbar />}

        <main>{children}</main>

        {/* Render Footer jika BUKAN di area Admin/Login */}
        {!hideUserNavigation && <Footer />}
      </body>
    </html>
  )
}
