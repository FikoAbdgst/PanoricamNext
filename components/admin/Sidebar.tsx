"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter() // Tambahkan router untuk redirect

  // Mencegah scroll saat sidebar mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleSidebar = () => setIsOpen(!isOpen)

  // Fungsi untuk handle Logout
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      })
      const data = await res.json()

      if (data.success) {
        // Jika berhasil dihapus sesinya, lempar kembali ke halaman login
        router.push("/login")
      } else {
        alert("Gagal logout: " + data.message)
      }
    } catch (error) {
      alert("Terjadi kesalahan jaringan saat logout.")
    }
  }

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Kelola Kategori",
      path: "/admin/categories",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14-4l-3 3.5L13 6m6 5l-3-3.5L13 11"
          ></path>
        </svg>
      ),
    },
    {
      name: "Kelola Frame",
      path: "/admin/frames",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Kelola Testimoni",
      path: "/admin/testimoni",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Kelola Transaksi",
      path: "/admin/transactions",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* Toggle Button untuk Mobile */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 lg:hidden bg-gray-800 text-white p-2 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 pointer-events-none scale-75" : ""}`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Overlay untuk mobile */}
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 w-64 bg-gray-800 text-white flex flex-col justify-between h-screen z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="overflow-y-auto">
          {/* Header */}
          <div className="p-4 border-b border-gray-700 lg:border-b-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Panoricam Admin</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Selamat datang, Admin
                </p>
              </div>
              {/* Close button mobile */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6 flex flex-col space-y-2 px-4">
            {menuItems.map((item) => {
              // Logic simpel untuk active state
              const isActive =
                pathname === item.path ||
                (pathname?.startsWith(item.path) && item.path !== "/admin")

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center bg-red-700 py-3 px-4 rounded-lg text-white hover:bg-red-800 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}
