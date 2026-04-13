import "./globals.css"
import "aos/dist/aos.css" // Import AOS global style
import { Poppins } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Photobooth App",
  description: "Abadikan momen spesial kamu",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-[#FEF3E2] overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
