"use client"
import React, { useState, useEffect } from "react"

interface TestimoniType {
  id: number
  name: string
  message: string
  rating: number
  emoji?: string
  date: string
  frame?: {
    id: number
    name: string
  }
}

// Dummy Data sesuai struktur Laravel
const mockTestimonis: TestimoniType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    message:
      "PhotoBooth ini sangat keren! Hasil fotonya berkualitas tinggi dan framenya beragam. Sangat puas dengan pelayanannya! Pengalaman yang luar biasa dan pasti akan kembali lagi untuk acara berikutnya!",
    rating: 5,
    emoji: "😍",
    date: "14 April 2026",
    frame: { id: 1, name: "Wedding Classic" },
  },
  {
    id: 2,
    name: "Michael Chen",
    message:
      "Pengalaman yang luar biasa! Frame gratis sudah bagus, tapi frame premium benar-benar worth it. Recommended!",
    rating: 5,
    emoji: "🤩",
    date: "13 April 2026",
    frame: { id: 2, name: "Basic Frame" },
  },
  {
    id: 3,
    name: "Lisa Amanda",
    message:
      "Suka banget dengan hasilnya! Framenya lucu-lucu dan cocok untuk acara ulang tahun. Terima kasih!",
    rating: 4,
    emoji: "😊",
    date: "12 April 2026",
    frame: { id: 3, name: "Birthday Fun" },
  },
  {
    id: 4,
    name: "David Pratama",
    message:
      "Frame gratisnya sudah bagus banget! Kualitas foto juga oke. Thanks PhotoBooth!",
    rating: 5,
    emoji: "👍",
    date: "11 April 2026",
  },
  {
    id: 5,
    name: "Maria Santos",
    message:
      "Frame premium memang beda! Detail dan kualitasnya sangat memuaskan. Worth every penny! Saya sangat merekomendasikan untuk semua acara spesial Anda, hasilnya tidak akan mengecewakan!",
    rating: 5,
    emoji: "💖",
    date: "10 April 2026",
    frame: { id: 5, name: "Premium Gold" },
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
    setTimeout(() => setSelectedTestimoni(null), 300) // delay agar animasi closing mulus
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <i
        key={i}
        className={i < rating ? "fas fa-star" : "far fa-star text-gray-300"}
      ></i>
    ))
  }

  const marqueeItems = [...testimonis, ...testimonis]

  return (
    <>
      {/* Import FontAwesome untuk icon sesuai versi Laravel */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />

      <div className="hero-bg min-h-screen relative font-['Poppins']">
        {/* ================= STYLES PERSIS SEPERTI LARAVEL ================= */}
        <style>{`
          .hero-bg { background: linear-gradient(135deg, #FEF3E2 0%, #fff 100%); position: relative; }
          .floating-star { position: absolute; color: #BF3131; opacity: 0.2; animation: float 6s ease-in-out infinite; }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          .marquee-container { overflow: hidden; white-space: nowrap; position: relative; padding: 3rem 0; background: #FEF3E2; }
          .marquee-content { display: inline-flex; gap: 2rem; animation: marquee 80s linear infinite; }
          .marquee-content:hover { animation-play-state: paused; }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

          .testimonial-card {
            min-width: 380px; max-width: 380px; min-height: 320px; transition: all 0.4s ease;
            backdrop-filter: blur(15px); border: 3px solid #BF3131; position: relative; overflow: hidden;
            white-space: normal; display: flex; flex-direction: column; cursor: pointer;
          }
          .testimonial-card::before {
            content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(191, 49, 49, 0.1), transparent); transition: left 0.5s;
          }
          .testimonial-card:hover::before { left: 100%; }
          .testimonial-card:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 25px 50px rgba(191, 49, 49, 0.25); border-color: #F16767; }
          
          .card-gradient { background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%); }
          .profile-avatar { width: 60px; height: 60px; background: linear-gradient(135deg, #BF3131, #F16767); border: 3px solid white; box-shadow: 0 4px 12px rgba(191, 49, 49, 0.3); }
          .emoji-badge { background: linear-gradient(135deg, #BF3131, #F16767); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; border: 3px solid white; box-shadow: 0 4px 12px rgba(191, 49, 49, 0.3); }
          .message-text { line-height: 1.7; color: #4a5568; position: relative; word-wrap: break-word; overflow-wrap: break-word; white-space: normal; hyphens: auto; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; }
          .star-rating { color: #fbbf24; filter: drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3)); }
          
          .frame-info-badge { background: linear-gradient(135deg, #FEF3E2, #fff); width: 100%; height: fit-content; border: 2px solid #BF3131; border-radius: 25px; padding: 0.5rem 1rem; position: relative; overflow: hidden; transition: all 0.3s ease; display: inline-block; }
          .frame-info-badge::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(191, 49, 49, 0.1), transparent); transition: left 0.5s; }
          .frame-info-badge:hover { background: linear-gradient(135deg, #BF3131, #F16767); color: white; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(191, 49, 49, 0.3); border-color: #BF3131; }
          .frame-info-badge:hover .frame-icon, .frame-info-badge:hover .frame-text, .frame-info-badge:hover .frame-check { color: white; }

          /* Custom Modal Animasi */
          .modal-overlay { background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(8px); animation: fadeIn 0.3s ease; }
          .modal-box { background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%); border: 3px solid #BF3131; box-shadow: 0 25px 50px rgba(191, 49, 49, 0.25); animation: scaleUp 0.3s ease; }
          .modal-icon { width: 80px; height: 80px; background: linear-gradient(135deg, #BF3131, #F16767); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; animation: pulse 2s infinite; }
          
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scaleUp { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(191, 49, 49, 0.7); } 70% { box-shadow: 0 0 0 20px rgba(191, 49, 49, 0); } 100% { box-shadow: 0 0 0 0 rgba(191, 49, 49, 0); } }
        `}</style>

        {/* Header Section */}
        <div
          className="text-center bg-[#FEF3E2] py-20 relative"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden text-2xl">
            <i
              className="floating-star fas fa-star"
              style={{ top: "20%", left: "10%", animationDelay: "0s" }}
            ></i>
            <i
              className="floating-star fas fa-heart"
              style={{ top: "30%", right: "15%", animationDelay: "2s" }}
            ></i>
            <i
              className="floating-star fas fa-camera"
              style={{ bottom: "40%", left: "20%", animationDelay: "4s" }}
            ></i>
            <i
              className="floating-star fas fa-smile"
              style={{ top: "60%", right: "20%", animationDelay: "6s" }}
            ></i>
          </div>

          <h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight relative z-10"
            data-aos="fade-up"
          >
            Apa Kata Mereka?
          </h1>
          <p
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto px-6 leading-relaxed relative z-10"
            data-aos="fade-up"
          >
            Kepuasan kamu adalah tujuan utama kami. Lihat cerita seru dari
            pengguna yang sudah mencoba PhotoBooth ini dan punya pengalaman seru
            yang nggak terlupakan!
          </p>
          <div className="mt-8 relative z-10" data-aos="fade-up">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-[#BF3131]">
              <i className="fas fa-users text-[#BF3131]"></i>
              <span className="font-semibold text-gray-700">
                1000+ Pelanggan Puas
              </span>
              <i className="fas fa-heart text-red-500"></i>
            </div>
          </div>
        </div>

        {/* Marquee Container */}
        <div
          className="marquee-container relative bg-[#FEF3E2]"
          data-aos="fade-up"
        >
          <div className="marquee-content">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="testimonial-card card-gradient rounded-2xl py-7 px-10 shadow-xl mx-3"
                onClick={() => openModal(item)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="profile-avatar rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {item.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-medium">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="emoji-badge">{item.emoji}</div>
                </div>

                <div className="flex-grow mb-6">
                  <div className="relative">
                    <i className="fas fa-quote-left text-[#BF3131] text-2xl opacity-30 absolute -top-2 -left-1"></i>
                    <p className="message-text font-medium pl-6 pr-2 mt-4">
                      {item.message}
                    </p>
                    <i className="fas fa-quote-right text-[#BF3131] text-2xl opacity-30 absolute -bottom-2 -right-1"></i>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full px-4 py-2 border border-yellow-200 w-fit">
                      <div className="star-rating mr-3 flex space-x-1">
                        {renderStars(item.rating)}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        ({item.rating}/5)
                      </span>
                    </div>
                  </div>

                  {item.frame && (
                    <div
                      className="frame-info-badge"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <i className="fas fa-image frame-icon text-[#BF3131] transition-colors duration-300"></i>
                        <span className="text-sm font-semibold frame-text text-gray-700 transition-colors duration-300">
                          Frame: {item.frame.name}
                        </span>
                        <i className="fas fa-check-circle frame-check text-green-500 text-sm transition-colors duration-300"></i>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Section */}
        <div
          className="relative bg-[#FEF3E2] overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#BF3131] to-[#F16767] rounded-full opacity-5 animate-pulse"></div>
            <div
              className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-bl from-[#F16767] to-[#BF3131] rounded-full opacity-5 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#BF3131] rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#F16767] rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-[#BF3131] rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 text-center py-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-16">
                <div
                  className="inline-flex items-center justify-center mb-6"
                  data-aos="flip-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div
                    className="h-px bg-gradient-to-r from-transparent via-[#BF3131] to-transparent w-32"
                    data-aos="slide-right"
                    data-aos-delay="200"
                  ></div>
                  <div
                    className="mx-4 bg-white border-2 border-[#BF3131] rounded-full px-4 py-2"
                    data-aos="rotate-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <i className="fas fa-camera text-[#BF3131] text-lg"></i>
                  </div>
                  <div
                    className="h-px bg-gradient-to-l from-transparent via-[#BF3131] to-transparent w-32"
                    data-aos="slide-left"
                    data-aos-delay="400"
                  ></div>
                </div>
                <p
                  className="text-2xl font-semibold text-gray-700 mb-2"
                  data-aos="slide-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  Setiap detik adalah kenangan, setiap foto adalah cerita
                </p>
                <p
                  className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                  data-aos="slide-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  Photobooth terdepan yang menghadirkan teknologi canggih dengan
                  sentuhan kreativitas untuk menciptakan momen tak terlupakan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DETIL TESTIMONI SEPERTI LARAVEL */}
      {isModalOpen && selectedTestimoni && (
        <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay p-4">
          <div className="modal-box p-8 rounded-[20px] w-full max-w-[500px] relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-[#FEF3E2]">
              <h2 className="text-2xl font-bold text-gray-800">
                Testimoni Lengkap
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full flex items-center justify-center text-2xl text-[#BF3131] hover:bg-[#BF3131] hover:text-white transition-all duration-300 rotate-0 hover:rotate-90"
              >
                &times;
              </button>
            </div>

            <div className="text-center">
              <div className="modal-icon text-white text-3xl">
                <i className="fas fa-quote-left"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {selectedTestimoni.name}
              </h3>
              <p className="text-gray-600 mb-2 leading-relaxed">
                {selectedTestimoni.message}
              </p>

              <div className="flex justify-center items-center my-4">
                <div className="flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full px-4 py-2 border border-yellow-200 w-fit">
                  <div className="star-rating mr-3 flex space-x-1">
                    {renderStars(selectedTestimoni.rating)}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    ({selectedTestimoni.rating}/5)
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                {selectedTestimoni.date}
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={closeModal}
                className="flex-1 py-4 bg-transparent text-[#BF3131] border-2 border-[#BF3131] hover:bg-[#FEF3E2] hover:-translate-y-1 rounded-xl font-semibold uppercase tracking-wide transition-all duration-300"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
