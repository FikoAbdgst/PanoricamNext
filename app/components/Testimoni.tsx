"use client"
import React, { useState, useEffect } from "react"

interface TestimoniType {
  id: number
  name: string
  message: string
  rating: number
  emoji?: string
}

// Dummy Data
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
    setTimeout(() => setSelectedTestimoni(null), 200) // delay agar animasi closing mulus
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

  // Menduplikasi data agar animasi marquee tidak terputus (seamless loop)
  const marqueeItems = [...testimonis, ...testimonis]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEF3E2] to-white py-12 sm:py-16 overflow-hidden">
      {/* Custom Keyframes untuk Animasi Marquee Responsif */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* 12px adalah kompensasi dari gap-6 (24px/2) */
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          /* Kecepatan scroll untuk Mobile */
          animation: scroll 15s linear infinite; 
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        /* Kecepatan scroll untuk Tablet & Desktop */
        @media (min-width: 640px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>

      <div className="text-center mb-10 sm:mb-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Apa Kata Mereka?
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Lihat cerita seru dari pengguna yang sudah mencoba PhotoBooth ini!
        </p>
      </div>

      {/* Marquee Testimoni Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Efek gradient fade di sisi kiri dan kanan */}
        <div className="absolute top-0 left-0 w-8 sm:w-16 h-full bg-gradient-to-r from-[#FEF3E2] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 sm:w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {testimonis.length > 0 ? (
          <div className="animate-scroll gap-6 px-4">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => openModal(item)}
                // Responsif width: 280px di Mobile, 320px (w-80) di Desktop
                className="w-[280px] sm:w-80 p-5 sm:p-6 bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-[#BF3131] transition-all duration-300 flex-shrink-0 flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 line-clamp-1 pr-2">
                    {item.name}
                  </h3>
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3 min-h-[60px] sm:min-h-[70px] text-sm sm:text-base flex-grow">
                  "{item.message}"
                </p>
                <div className="flex text-xl sm:text-2xl mt-auto">
                  {renderStars(item.rating)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 w-full text-sm sm:text-base">
            Loading testimoni...
          </p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedTestimoni && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-[90%] sm:max-w-md relative animate-[fadeIn_0.2s_ease-out] shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 sm:top-4 sm:right-5 text-3xl sm:text-4xl text-gray-400 hover:text-[#BF3131] transition"
            >
              &times;
            </button>

            <div className="flex items-center gap-3 mb-4 pr-8">
              <span className="text-2xl sm:text-3xl flex-shrink-0">
                {selectedTestimoni.emoji}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 line-clamp-1">
                {selectedTestimoni.name}
              </h2>
            </div>

            <div className="max-h-[50vh] overflow-y-auto custom-scrollbar">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#BF3131] pl-4 py-2 bg-gray-50 rounded-r-lg">
                "{selectedTestimoni.message}"
              </p>
            </div>

            <div className="mt-6 flex text-2xl sm:text-3xl justify-center bg-yellow-50 py-2 sm:py-3 rounded-xl border border-yellow-100">
              {renderStars(selectedTestimoni.rating)}
            </div>

            <button
              onClick={closeModal}
              className="mt-6 sm:mt-8 w-full py-3 sm:py-3.5 bg-[#BF3131] hover:bg-red-700 text-white font-semibold rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-red-500/30 text-sm sm:text-base"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
