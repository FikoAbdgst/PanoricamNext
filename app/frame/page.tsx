"use client"
import React, { useState, useEffect } from "react"
import AOS from "aos"

// Dummy Data untuk halaman Frame (Nanti diganti dengan fetch API backend)
const mockAllFrames = [
  {
    id: 1,
    name: "Wedding Classic",
    price: 25000,
    isFree: false,
    category: { name: "Wedding", icon: "💍" },
  },
  {
    id: 2,
    name: "Basic Frame",
    price: 0,
    isFree: true,
    category: { name: "Basic", icon: "⭐" },
  },
  {
    id: 3,
    name: "Birthday Fun",
    price: 15000,
    isFree: false,
    category: { name: "Birthday", icon: "🎂" },
  },
  {
    id: 4,
    name: "Neon Vibes",
    price: 20000,
    isFree: false,
    category: { name: "Aesthetic", icon: "✨" },
  },
  {
    id: 5,
    name: "Vintage Polar",
    price: 0,
    isFree: true,
    category: { name: "Retro", icon: "📸" },
  },
]

export default function FramePage() {
  const [frames] = useState(mockAllFrames)
  const [search, setSearch] = useState("")

  useEffect(() => {
    AOS.init({ duration: 800, once: false })
  }, [])

  // Logika Filter Pencarian
  const filteredFrames = frames.filter(
    (frame) =>
      frame.name.toLowerCase().includes(search.toLowerCase()) ||
      frame.category.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="pt-32 pb-16 min-h-screen bg-[#FEF3E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pilih Frame Favoritmu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai macam frame menarik untuk mengabadikan momen
            spesialmu
          </p>
        </div>

        {/* Pencarian (Search Bar) */}
        <div
          className="max-w-xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Cari frame atau kategori..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-[#BF3131] shadow-md focus:outline-none focus:ring-4 focus:ring-red-200 transition-all text-gray-700"
            />
            <span className="absolute right-5 top-4 text-2xl">🔍</span>
          </div>
        </div>

        {/* Grid Frame */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFrames.length > 0 ? (
            filteredFrames.map((frame, index) => (
              <div
                key={frame.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                {/* Badge Harga */}
                <div
                  className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${frame.isFree ? "bg-green-500" : "bg-amber-500"}`}
                >
                  {frame.isFree
                    ? "GRATIS"
                    : `Rp ${frame.price.toLocaleString("id-ID")}`}
                </div>

                {/* Preview Image */}
                <div className="h-56 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-5xl opacity-30 group-hover:scale-110 transition-transform">
                    🖼️
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="bg-[#BF3131] text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors">
                      Pilih Frame
                    </button>
                  </div>
                </div>

                {/* Deskripsi */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {frame.name}
                    </h3>
                  </div>
                  <div className="text-sm bg-red-50 text-red-600 px-3 py-1 rounded-full w-fit font-medium">
                    {frame.category.icon} {frame.category.name}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              Frame "{search}" tidak ditemukan.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
