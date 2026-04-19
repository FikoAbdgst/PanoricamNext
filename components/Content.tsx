"use client"
import React, { useState } from "react"
import Link from "next/link"

// ✅ Type Category
interface CategoryType {
  name: string
  icon: string
}

// ✅ Type Frame
interface FrameType {
  id: number
  name: string
  price: number
  image_path: string | null
  used: number
  isFree: boolean
  category: CategoryType
}

// Mockup Data Top Frames
const mockTopFrames: FrameType[] = [
  {
    id: 1,
    name: "Wedding Classic",
    price: 25000,
    image_path: null,
    used: 120,
    isFree: false,
    category: { name: "Wedding", icon: "💍" },
  },
  {
    id: 2,
    name: "Basic Frame",
    price: 0,
    image_path: null,
    used: 80,
    isFree: true,
    category: { name: "Basic", icon: "⭐" },
  },
  {
    id: 3,
    name: "Birthday Fun",
    price: 15000,
    image_path: null,
    used: 45,
    isFree: false,
    category: { name: "Birthday", icon: "🎂" },
  },
]

export default function Content() {
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false)
  const [selectedFrame, setSelectedFrame] = useState<FrameType | null>(null)

  const openPreview = (frame: FrameType) => {
    setSelectedFrame(frame)
    setIsCameraModalOpen(true)
  }

  const closeModal = () => {
    setIsCameraModalOpen(false)
    setSelectedFrame(null)
  }

  return (
    <div className="py-16 bg-[#FEF3E2] content_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
            <span className="bg-clip-text text-transparent bg-[#BF3131]">
              Frame Unggulan
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-[#BF3131] rounded-full"></div>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Frame paling populer yang banyak digunakan untuk momen spesial Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {mockTopFrames.map((frame, index) => (
            <div
              key={frame.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group relative hover:-translate-y-1 transition-transform"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Badge Harga */}
              <div
                className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                  frame.isFree
                    ? "bg-gradient-to-r from-green-500 to-green-600"
                    : "bg-gradient-to-r from-amber-500 to-yellow-400"
                }`}
              >
                {frame.isFree
                  ? "GRATIS"
                  : `Rp ${frame.price.toLocaleString("id-ID")}`}
              </div>

              {/* Image */}
              <div className="relative h-60 bg-gradient-to-br from-gray-100 to-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                {frame.image_path ? (
                  <img
                    src={`/images/${frame.image_path}`}
                    alt={frame.name}
                    className="max-h-[90%] object-contain transition-transform group-hover:scale-105"
                  />
                ) : (
                  <span className="text-5xl opacity-50 group-hover:scale-110 transition-transform">
                    🖼️
                  </span>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <button
                    onClick={() => openPreview(frame)}
                    className="bg-white text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-[#BF3131] hover:text-white transition-colors"
                  >
                    Preview Frame
                  </button>
                </div>
              </div>

              {/* Detail */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#BF3131] transition-colors">
                    {frame.name}
                  </h3>
                  <div className="text-xs bg-red-50 text-gray-700 px-2 py-1 rounded-full">
                    {frame.category.icon} {frame.category.name}
                  </div>
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Digunakan {frame.used} kali
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/frame"
            className="inline-flex items-center px-6 py-3 bg-[#BF3131] text-white font-bold rounded-lg hover:bg-[#F16767] transition-colors shadow-lg"
          >
            Jelajahi Semua Frame →
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isCameraModalOpen && selectedFrame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-center mb-6">
              Preview: {selectedFrame.name}
            </h2>

            <div className="bg-gray-100 rounded-lg h-96 flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-300">
              <p className="mb-4 text-lg">
                Bagian ini memerlukan integrasi WebCam (MediaDevices API)
              </p>
              <p className="text-sm">
                Gunakan <code>react-webcam</code> untuk implementasi lebih mudah
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
