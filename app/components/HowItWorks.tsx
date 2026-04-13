"use client"
import React from "react"

export default function HowItWorks() {
  return (
    <div
      className="py-16 font-['Poppins'] content_section relative"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Cara Kerja
          </h2>
          <div
            className="mt-2 w-24 h-1 bg-[#BF3131] mx-auto rounded-full"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Tiga langkah mudah untuk membuat kenangan berharga
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting dotted line for desktop */}
          <div
            className="hidden md:block absolute top-32 left-0 right-0 h-1 border-t-4 border-dashed border-[#F16767] z-10"
            data-aos="fade-in"
            data-aos-delay="300"
          ></div>

          {/* Step 1 */}
          <div
            className="bg-white rounded-xl shadow-lg p-6 relative z-20 transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="w-16 h-16 bg-[#BF3131] rounded-full flex items-center justify-center mx-auto -mt-12 shadow-md border-4 border-white"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <div className="text-center mt-4">
              <h3
                className="text-xl font-bold text-gray-900"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Pilih Frame
              </h3>
              <div
                className="mt-2 w-12 h-1 bg-[#F16767] mx-auto rounded-full"
                data-aos="fade-up"
                data-aos-delay="350"
              ></div>
              <p
                className="mt-3 text-gray-600"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Pilih dari berbagai pilihan frame foto lucu dan menarik yang
                cocok dengan momen spesial Anda
              </p>
            </div>
            <div
              className="mt-6 flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="450"
            >
              <div className="w-32 h-32 bg-[#FEF3E2] rounded-lg border-2 border-[#BF3131] overflow-hidden relative p-2">
                <div className="absolute inset-0 bg-gray-200 bg-center bg-cover opacity-30"></div>
                <svg
                  className="w-16 h-16 mx-auto mt-6 text-[#BF3131]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="bg-white rounded-xl shadow-lg p-6 relative z-20 transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              className="w-16 h-16 bg-[#BF3131] rounded-full flex items-center justify-center mx-auto -mt-12 shadow-md border-4 border-white"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <div className="text-center mt-4">
              <h3
                className="text-xl font-bold text-gray-900"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Ambil Foto
              </h3>
              <div
                className="mt-2 w-12 h-1 bg-[#F16767] mx-auto rounded-full"
                data-aos="fade-up"
                data-aos-delay="450"
              ></div>
              <p
                className="mt-3 text-gray-600"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Tunjukkan ekspresi terbaik Anda! Gunakan timer atau klik
                langsung untuk mengambil foto
              </p>
            </div>
            <div
              className="mt-6 flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="550"
            >
              <div className="w-32 h-32 rounded-lg border-2 border-[#BF3131] overflow-hidden relative bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-[#BF3131]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-2 right-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="bg-white rounded-xl shadow-lg p-6 relative z-20 transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              className="w-16 h-16 bg-[#BF3131] rounded-full flex items-center justify-center mx-auto -mt-12 shadow-md border-4 border-white"
              data-aos="zoom-in"
              data-aos-delay="450"
            >
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <div className="text-center mt-4">
              <h3
                className="text-xl font-bold text-gray-900"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Bagikan
              </h3>
              <div
                className="mt-2 w-12 h-1 bg-[#F16767] mx-auto rounded-full"
                data-aos="fade-up"
                data-aos-delay="550"
              ></div>
              <p
                className="mt-3 text-gray-600"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Simpan foto atau bagikan secara langsung ke media sosial dengan
                teman dan keluarga
              </p>
            </div>
            <div
              className="mt-6 flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <div className="w-32 h-32 bg-white rounded-lg border-2 border-[#BF3131] p-3 relative">
                <div className="w-full h-full bg-gray-200 bg-center bg-cover rounded"></div>
                <div className="absolute -bottom-3 -right-3 flex space-x-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
