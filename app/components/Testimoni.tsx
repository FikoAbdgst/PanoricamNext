"use client"
import React, { useState, useEffect } from "react"

interface TestimoniType {
  id: number
  name: string
  message: string
  rating: number
  emoji?: string
}

// Dummy Data (di luar komponen)
const mockTestimonis: TestimoniType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    message:
      "PhotoBooth ini sangat keren! Hasil fotonya berkualitas tinggi dan framenya beragam.",
    rating: 5,
    emoji: "😍",
  },
  {
    id: 2,
    name: "Michael Chen",
    message: "Pengalaman yang luar biasa! Frame premium benar-benar worth it.",
    rating: 5,
    emoji: "🤩",
  },
  {
    id: 3,
    name: "Lisa Amanda",
    message: "Suka banget dengan hasilnya! Framenya lucu-lucu.",
    rating: 4,
    emoji: "😊",
  },
  {
    id: 4,
    name: "David Pratama",
    message: "Kualitas foto juga oke. Thanks PhotoBooth!",
    rating: 5,
    emoji: "👍",
  },
]

export default function Testimoni() {
  // ✅ Inisialisasi langsung (paling aman)
  const [testimonis] = useState<TestimoniType[]>(mockTestimonis)

  const [selectedTestimoni, setSelectedTestimoni] =
    useState<TestimoniType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle body scroll ketika modal terbuka
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  const openModal = (testimoni: TestimoniType) => {
    setSelectedTestimoni(testimoni)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTestimoni(null)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEF3E2] to-white py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Apa Kata Mereka?</h1>
      </div>

      {/* Grid Testimoni */}
      <div className="flex flex-wrap justify-center gap-6 px-6 max-w-6xl mx-auto">
        {testimonis.length > 0 ? (
          testimonis.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="w-80 p-6 bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-bold text-xl mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{item.message}</p>
              <div className="flex text-2xl">{renderStars(item.rating)}</div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading testimoni...</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedTestimoni && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-4xl text-gray-400 hover:text-gray-600 transition"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4 pr-10">
              {selectedTestimoni.name}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {selectedTestimoni.message}
            </p>

            <div className="mt-6 flex text-3xl">
              {renderStars(selectedTestimoni.rating)}
            </div>

            <button
              onClick={closeModal}
              className="mt-8 w-full py-3.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-2xl transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
