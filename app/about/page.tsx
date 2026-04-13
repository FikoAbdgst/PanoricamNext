"use client"
import React, { useEffect } from "react"
import AOS from "aos"
import Link from "next/link"

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    })
  }, [])

  return (
    <div className="py-32 bg-[#FEF3E2] min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tentang <span className="text-[#BF3131]">Panoricam</span>
          </h2>
          <div
            className="w-24 h-1 bg-[#BF3131] mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Kami menciptakan momen-momen spesial dengan teknologi photobooth
            modern
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div
            className="w-full md:w-1/2 order-2 md:order-1"
            data-aos="fade-right"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Selamat Datang di Panoricam
            </h3>
            <p
              className="text-gray-600 mb-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Panoricam, photobooth kekinian yang siap bikin tiap momen jadi
              makin pecah! Mau selfie ramean, pose lucu, atau gaya aesthetic?
              Semua bisa banget di sini.
            </p>
            <p
              className="text-gray-600 mb-6"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              Cukup berdiri, pose, cekrek—langsung jadi kenangan digital. Karena
              tiap momen layak diabadikan!
            </p>
            <div className="mt-6" data-aos="fade-right" data-aos-delay="200">
              <a
                href="https://www.instagram.com/panoricam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#BF3131] hover:bg-[#F16767] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Hubungi Kami!
              </a>
            </div>
          </div>

          <div
            className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0"
            data-aos="fade-left"
          >
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-24 h-24 bg-[#BF3131] rounded-full opacity-20"
                data-aos="zoom-in"
                data-aos-delay="300"
              ></div>
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F16767] rounded-full opacity-20"
                data-aos="zoom-in"
                data-aos-delay="400"
              ></div>
              <img
                src="/logo.png"
                alt="Panoricam Booth"
                className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10 border-4 border-[#BF3131]"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400"
                }}
                data-aos="zoom-in-up"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
