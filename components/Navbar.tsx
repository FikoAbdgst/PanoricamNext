"use client" // Menandakan komponen berjalan di client-side
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Frame", path: "/frame" },
    { name: "About", path: "/about" },
  ]

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${isScrolled ? "fixed top-0 left-0 right-0 bg-[#FEF3E2] shadow-md h-20" : "absolute bg-transparent h-24"}`}
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex justify-between h-full">
          <div className="flex items-center justify-between w-full">
            <div
              className="flex-shrink-0 flex items-center"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-12 sm:h-16 md:h-[80px] w-auto mx-auto"
                />
              </Link>
            </div>
            <div
              className="flex items-center gap-2 sm:gap-5"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium relative group nav-link ${pathname === link.path ? "text-[#BF3131] font-semibold" : "text-gray-700 hover:text-[#BF3131]"}`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#BF3131] transform origin-left transition-transform duration-300 ease-in-out ${pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
